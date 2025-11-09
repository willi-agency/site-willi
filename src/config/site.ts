// src/data/config.ts
export const API_URL = "https://back-dev.qualitysmi.com.br/api";
export const API_KEY = "QSMI-exsIcubmkpKyVPcRrYlOH7zdSDQg5YDXhXfzRXkM32R8wot_VUIj5TaKfq44_74L";

export const config = {
  company: {
    name: "Willi.agency",
    url: "https://willi.agency",
    logo: "https://willi.agency/images/logo.png",
    title: "Willi.agency — Growth, Automação e Desenvolvimento de Alta Performance",
    description:
      "A Willi.agency combina automação avançada, growth marketing e desenvolvimento de alta performance para escalar seus resultados. Reduza custos, maximize lucros e aumente conversões.",

    contact: {
      phones: {
        whatsapp: {
          label: "(11) 94626-6230",
          url: "https://wa.me/5511946266230",
          share:
            "https://api.whatsapp.com/send?&text=Olá%2C%20gostaria%20de%20saber%20como%20a%20Willi.agency%20pode%20me%20ajudar%20a%20crescer.",
        },
      },
      email: {
        label: "contato@willi.agency",
        url: "mailto:contato@willi.agency",
        share:
          "mailto:?subject=Veja%20isso!&body=Descobri%20a%20Willi.agency%20—%20Growth%20e%20Automação%20Inteligente:%20https://willi.agency",
      },
      contactType: "customer service",
      availableLanguage: ["Portuguese"],
    },

    address: {
      street: "Av. Paulista, 1374",
      neighborhood: "Bela Vista",
      city: "São Paulo",
      region: "SP",
      postalCode: "01310-100",
      country: "BR",
      url: "https://maps.google.com/?q=Av.+Paulista,+1374,+São+Paulo",
    },

    areaServed: {
      name: "Brazil",
    },

    social: {
      facebook: {
        url: "https://facebook.com/willi.agency",
        share:
          "https://www.facebook.com/sharer/sharer.php?u=https://willi.agency",
        label: "Facebook",
      },
      instagram: {
        url: "https://instagram.com/willi.agency",
        label: "Instagram",
      },
      linkedin: "https://www.linkedin.com/company/willi-agency/",
      twitter: {
        url: "https://twitter.com/willi_agency",
        share: "https://twitter.com/intent/tweet?url=https://willi.agency",
        label: "Twitter",
      },
      youtube: "https://www.youtube.com/@williagency",
    },
  },

  meta: {
    author: "Willi.agency",
    copyright: "© 2025 Willi.agency",
    robots: "noindex, nofollow",
    canonical: "https://willi.agency",
    keywords:
      "growth marketing, automação, desenvolvimento web, SEO, performance, AI, agência digital, geração de leads",
    geo: {
      region: "BR-SP",
      placename: "São Paulo",
      position: "-23.5505;-46.6333",
    },
    social: {
      type: "website",
      image: "https://willi.agency/images/cover.jpg",
      title: "Willi.agency — Growth, Automação e Desenvolvimento de Alta Performance",
      description:
        "Reduza custos operacionais, maximize lucros e aumente conversões com a Willi.agency. Especialistas em Growth, Automação e SEO.",
    },
  },
};

