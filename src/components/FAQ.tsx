import React, { useState } from 'react';

const faqData = [
  {
    q: 'How is this different from other RIA tools?',
    a: 'Most tools assist — they summarize or surface info. Our agents are autonomous operators that execute: generating compliance docs, rebalancing portfolios, delivering reports, booking calls.',
  },
  {
    q: 'Is my client data safe?',
    a: 'AES-256 at rest, TLS 1.3 in transit, SOC 2 Type II certified. US-only data residency. Zero-knowledge architecture. Full audit trail for SEC exams.',
  },
  {
    q: 'Do I need to switch custodians?',
    a: 'No. We integrate with Schwab, Fidelity, Altruist, Wealthbox, Redtail, Salesforce, and 30+ tools. No rip-and-replace.',
  },
  {
    q: 'Can agents trade without my approval?',
    a: "You're always in control. Agents generate proposals you approve with one click. For full automation, enable it within your IPS guardrails.",
  },
  {
    q: 'How long does setup take?',
    a: 'Most firms are live within 2 weeks. Day 1: connect accounts. Days 2-5: configure your playbook. Days 5-14: supervised mode. Then fully autonomous.',
  },
  {
    q: 'Is there a free trial?',
    a: '30 days, full access, no credit card. Dedicated onboarding specialist included.',
  },
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-section" id="faq">
      <div className="sh">
        <h2>Frequently asked questions</h2>
      </div>

      <div className="faq-list" role="list">
        {faqData.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <div
              className="faq-item"
              key={i}
              role="listitem"
              aria-expanded={isOpen}
            >
              <button
                className="faq-q"
                onClick={() => toggle(i)}
                aria-expanded={isOpen}
              >
                {item.q}
              </button>
              <div className="faq-a" role="region">
                {item.a}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
