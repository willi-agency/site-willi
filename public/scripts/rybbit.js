import rybbit from "@rybbit/js";

export async function initRybbit() {
  try {
    await rybbit.init({
      analyticsHost: "https://analytics.willi.agency/api",
      siteId: "db3613bd7287",
      debug: false, // opcional
    });

    console.log("✅ Rybbit iniciado com sucesso!");
  } catch (err) {
    console.error("❌ Erro ao iniciar o Rybbit:", err);
  }
}

initRybbit();
