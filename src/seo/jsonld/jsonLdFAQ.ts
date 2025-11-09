// src/data/jsonld.ts
import { faq } from "../../content/faq";

// Definindo o JSON-LD para FAQ
export const jsonLdFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": Object.values(faq).map(item => ({
    "@type": "Question",
    "name": item.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": item.description
    }
  }))
};
