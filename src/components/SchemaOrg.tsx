import React from 'react';

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "BracciaCap AI",
  "legalName": "Braccia Capital LLC",
  "url": "https://bracciacap.com",
  "description": "Autonomous AI agents purpose-built for Registered Investment Advisors — handling compliance, portfolio management, client reporting, and practice growth.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "115 Broadway, Suite 1100",
    "addressLocality": "New York",
    "addressRegion": "NY",
    "postalCode": "10006",
    "addressCountry": "US"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "ai@bracciacap.com",
    "contactType": "sales"
  }
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "BracciaCap AI",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "description": "AI-powered autonomous agents for RIA compliance, portfolio management, reporting, and growth.",
  "offers": [
    {
      "@type": "Offer",
      "name": "Starter",
      "price": "499",
      "priceCurrency": "USD",
      "description": "Solo advisors under $100M AUM — 2 AI Agents, up to 200 accounts"
    },
    {
      "@type": "Offer",
      "name": "Professional",
      "price": "1299",
      "priceCurrency": "USD",
      "description": "Growing firms $100M–$500M — All 4 AI Agents, unlimited accounts"
    }
  ],
  "provider": {
    "@type": "Organization",
    "name": "Braccia Capital LLC"
  }
};

const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How is this different from other RIA tools?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most tools assist — they summarize or surface info. Our agents are autonomous operators that execute: generating compliance docs, rebalancing portfolios, delivering reports, booking calls."
      }
    },
    {
      "@type": "Question",
      "name": "Is my client data safe?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AES-256 at rest, TLS 1.3 in transit, SOC 2 Type II certified. US-only data residency. Zero-knowledge architecture. Full audit trail for SEC exams."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need to switch custodians?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. We integrate with Schwab, Fidelity, Altruist, Wealthbox, Redtail, Salesforce, and 30+ tools. No rip-and-replace."
      }
    },
    {
      "@type": "Question",
      "name": "Can agents trade without my approval?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You're always in control. Agents generate proposals you approve with one click. For full automation, enable it within your IPS guardrails."
      }
    },
    {
      "@type": "Question",
      "name": "How long does setup take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most firms are live within 2 weeks. Day 1: connect accounts. Days 2-5: configure your playbook. Days 5-14: supervised mode. Then fully autonomous."
      }
    },
    {
      "@type": "Question",
      "name": "Is there a free trial?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "30 days, full access, no credit card. Dedicated onboarding specialist included."
      }
    }
  ]
};

export const SchemaOrg: React.FC = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
      />
    </>
  );
};
