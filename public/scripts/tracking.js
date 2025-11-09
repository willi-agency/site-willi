// /src/scripts/tracking.js
const TRACKING_KEY = "tracking_data";
const EXPIRATION_DAYS = 30;

// Gera ID único
function generateId() {
  return "trk_" + (crypto.randomUUID?.() || Math.random().toString(36).slice(2, 11) + Date.now());
}

// Normaliza o referrer
function normalizeReferrer() {
  const ref = document.referrer || "";
  if (!ref) return "direct";

  const lowerRef = ref.toLowerCase();
  if (lowerRef.includes("google.")) return "google_organic";
  if (lowerRef.includes("bing.")) return "bing_organic";
  if (lowerRef.includes("instagram.")) return "instagram_referral";
  if (lowerRef.includes("facebook.")) return "facebook_referral";
  if (lowerRef.includes("l.instagram.com") || lowerRef.includes("linktr.ee")) return "linktree_referral";

  try {
    return new URL(ref).hostname;
  } catch {
    return "direct";
  }
}

// Determina a fonte principal: UTM > Ads > Referrer
function normalizeSource(params) {
  if (params.get("gclid")) return "google_ads";
  if (params.get("fbclid")) return "facebook_ads";

  const utmSource = params.get("utm_source")?.toLowerCase();
  if (utmSource) return utmSource;

  return normalizeReferrer();
}

// Salva no localStorage
function saveTracking(data) {
  const expiresAt = data.expiresAt || new Date(Date.now() + EXPIRATION_DAYS * 24 * 60 * 60 * 1000).toISOString();
  localStorage.setItem(TRACKING_KEY, JSON.stringify({ ...data, expiresAt }));
  console.log("Tracking salvo:", { ...data, expiresAt });
}

// Recupera tracking válido
function getTracking() {
  const raw = localStorage.getItem(TRACKING_KEY);
  if (!raw) return null;

  try {
    const data = JSON.parse(raw);
    if (new Date(data.expiresAt) < new Date()) {
      localStorage.removeItem(TRACKING_KEY);
      return null;
    }
    return data;
  } catch {
    return null;
  }
}

// Comparação simples de objetos (ignora ordem de chaves)
function isEqual(a, b) {
  return JSON.stringify(Object.entries(a).sort()) === JSON.stringify(Object.entries(b).sort());
}

// Inicialização do tracking
function initTracking() {
  const params = new URLSearchParams(window.location.search);
  const existing = getTracking();

  // Tracking ID nunca muda
  const trackingId = existing?.trackingId || generateId();

  // Captura dinamicamente todas as UTM
  const utmData = {};
  for (const [key, value] of params.entries()) {
    if (key.startsWith("utm_")) {
      utmData[key] = value;
    }
  }

  const newData = {
    trackingId,
    ...utmData,
    gclid: params.get("gclid") || existing?.gclid || null,
    fbclid: params.get("fbclid") || existing?.fbclid || null,
    source: normalizeSource(params) || existing?.source || "direct",
    referrer: document.referrer || "direct",
    referrer_source: normalizeReferrer(),
    firstVisit: existing?.firstVisit || new Date().toISOString(),
    lastUpdated: new Date().toISOString(),
    expiresAt: existing?.expiresAt,
  };

  // Atualiza apenas se algum campo mudou (exceto trackingId)
  const { trackingId: _, expiresAt: __, ...restExisting } = existing || {};
  const { trackingId: ___, expiresAt: ____, ...restNew } = newData;

  if (!existing || !isEqual(restExisting, restNew)) {
    saveTracking(newData);
  }

  return newData;
}

// Inicializa automaticamente ao carregar
initTracking();
