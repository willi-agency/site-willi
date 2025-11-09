// src/data/config.ts
export const API_URL = "https://back-dev.qualitysmi.com.br/api";
export const API_KEY = "QSMI-exsIcubmkpKyVPcRrYlOH7zdSDQg5YDXhXfzRXkM32R8wot_VUIj5TaKfq44_74L";

export const config = {
  company: {
    name: "Quality SMI",
    url: "https://qualitysmi.com.br",
    logo: "https://qualitysmi.com.br/images/logo.png",
    title: "Sistema de Marketing para Internet - Quality SMI",
    description: "Criatividade, tecnologia e estratégia para transformar negócios. Descubra a Quality SMI, agência de SEO, Ads e social media com foco em performance.",

    contact: {
      phones: {
        fixo: {
          label: "(11) 5052-3371",
          url: "tel:551150523371",
        },
        whatsapp: {
          label: "(11) 5052-3371",
          url: "https://wa.me/551150523371",
          share: "https://api.whatsapp.com/send?&text=Olá%2C%20gostaria%20de%20saber%20mais%20informações.",
        },
      },
      email: {
        label: "info@5mais.com.br",
        url: "mailto:info@5mais.com.br",
        share: "mailto:?subject=Veja%20isso!&body=Achei%20que%20você%20gostaria%20dessa%20página:%20https://", // trocar o final da url
      },
      contactType: "customer service",
      availableLanguage: ["Portuguese", "English"],
    },

    address: {
      street: "R. Santo Antônio Nº1189",
      neighborhood: "Vila Galvão",
      city: "Guarulhos",
      region: "SP",
      postalCode: "07071-000",
      country: "BR",
      url: "",
    },

    areaServed: {
      name: "Brazil"
    },

    social: {
      facebook: {
        url: "https://facebook.com/5maisengenharia",
        share: "https://www.facebook.com/sharer/sharer.php?u=https://5mais.com.br",
        label: "Facebook",
      },
      instagram: {
        url: "https://instagram.com/5maisengenharia",
        label: "Instagram",
      },
      linkedin: "https://www.linkedin.com/company/5mais-engenharia/?viewAsMember=true",
      twitter: {
        url: "",
        share: "https://twitter.com/intent/tweet?url=https://",
        label: "Twitter",
      },
      youtube: "https://www.youtube.com/channel/UCYODxAvV3QlJu0rrJg1m1MQ",
    },
  },

  meta: {
    author: "Quality SMI",
    copyright: "© 2025 Quality SMI",
    robots: "index, follow",
    canonical: "https://willi.agency",
    keywords: "tecnologia, inovação, automação, AI",
    geo: {
      region: "BR-SP",
      placename: "São Paulo",
      position: "-23.5505;-46.6333",
    },
    social: {
      type: "website",
      image: "/images/image.jpg",
      title: "Título para Redes Sociais",
      description: "Descrição otimizada para Facebook e LinkedIn.",
    },
  }
};
