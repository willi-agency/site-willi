import { config } from "../../config/site";
export const jsonLdServices = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Consultoria em SEO",
    "provider": {
      "@type": "Organization",
      "name": config.company.name,
      "url": config.company.url,
      "logo": config.company.logo,
    },
    "areaServed": "Global",
    "description": "Serviços especializados em SEO para melhorar a visibilidade e classificação do seu site nos motores de busca.",
    "url": `${config.company.url}/consultoria-seo`,
  }
];
