import React from 'react';

export const PricingGrid: React.FC = () => {
  return (
    <section className="w-section alt" id="pricing">
      <div className="sh fade-up">
        <h2>Simple, transparent pricing.</h2>
        <p>No per-seat charges. No hidden fees. Cancel anytime.</p>
      </div>

      <div className="pricing-grid fade-up">
        {/* Card 1 — Starter */}
        <div className="price-card">
          <div className="plan-name">Starter</div>
          <div className="plan-price">$499<span>/mo</span></div>
          <div className="plan-desc">Solo advisors under $100M AUM</div>
          <ul>
            <li>2 AI Agents</li>
            <li>Up to 200 accounts</li>
            <li>1 custodian integration</li>
            <li>Monthly compliance scans</li>
            <li>Email support</li>
          </ul>
          <a className="price-cta outline" href="#demo">Start Free Trial</a>
        </div>

        {/* Card 2 — Professional (featured) */}
        <div className="price-card featured">
          <div className="plan-name">Professional</div>
          <div className="plan-price">$1,299<span>/mo</span></div>
          <div className="plan-desc">Growing firms, $100M–$500M</div>
          <ul>
            <li>All 4 AI Agents</li>
            <li>Unlimited accounts</li>
            <li>Multi-custodian support</li>
            <li>Daily compliance monitoring</li>
            <li>Tax-loss harvesting</li>
            <li>Priority support</li>
          </ul>
          <a className="price-cta fill" href="#demo">Start Free Trial</a>
        </div>

        {/* Card 3 — Enterprise */}
        <div className="price-card">
          <div className="plan-name">Enterprise</div>
          <div className="plan-price">Custom</div>
          <div className="plan-desc">$500M+ AUM</div>
          <ul>
            <li>Everything in Pro</li>
            <li>Custom agent training</li>
            <li>API access</li>
            <li>SSO / SAML</li>
            <li>Dedicated manager</li>
            <li>99.9% SLA</li>
          </ul>
          <a className="price-cta outline" href="mailto:enterprise@bracciacap.com">Contact Sales</a>
        </div>
      </div>
    </section>
  );
};
