import React from 'react';

const inputStyle: React.CSSProperties = {
  background: 'rgba(255,255,255,0.12)',
  border: '1px solid rgba(255,255,255,0.2)',
  color: '#fff',
};

const labelStyle: React.CSSProperties = {
  color: 'rgba(255,255,255,0.7)',
};

export const ContactForm: React.FC = () => {
  return (
    <section className="cta-final fade-up" id="demo">
      <h2>See BracciaCap AI in action.</h2>
      <p>30-day free trial. No credit card required. Dedicated onboarding included.</p>

      <form
        name="demo-request"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        action="/success"
      >
        <input type="hidden" name="form-name" value="demo-request" />
        <input type="hidden" name="bot-field" />

        {/* Row 1 */}
        <div className="form-row">
          <div className="form-group">
            <label style={labelStyle}>Full Name</label>
            <input type="text" name="full-name" required style={inputStyle} />
          </div>
          <div className="form-group">
            <label style={labelStyle}>Work Email</label>
            <input type="email" name="work-email" required style={inputStyle} />
          </div>
        </div>

        {/* Row 2 */}
        <div className="form-row">
          <div className="form-group">
            <label style={labelStyle}>Firm Name</label>
            <input type="text" name="firm-name" required style={inputStyle} />
          </div>
          <div className="form-group">
            <label style={labelStyle}>AUM Range</label>
            <select name="aum-range" style={inputStyle}>
              <option value="">Select...</option>
              <option value="Under $50M">Under $50M</option>
              <option value="$50M–$100M">$50M–$100M</option>
              <option value="$100M–$250M">$100M–$250M</option>
              <option value="$250M–$500M">$250M–$500M</option>
              <option value="$500M–$1B">$500M–$1B</option>
              <option value="$1B+">$1B+</option>
            </select>
          </div>
        </div>

        {/* Full width — Primary Custodian */}
        <div className="form-group">
          <label style={labelStyle}>Primary Custodian</label>
          <select name="primary-custodian" style={inputStyle}>
            <option value="">Select...</option>
            <option value="Schwab">Schwab</option>
            <option value="Fidelity">Fidelity</option>
            <option value="Altruist">Altruist</option>
            <option value="Pershing">Pershing</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Full width — Anything else */}
        <div className="form-group">
          <label style={labelStyle}>Anything else?</label>
          <textarea name="message" rows={3} style={inputStyle} />
        </div>

        {/* Submit */}
        <button type="submit" className="btn btn-white" style={{ width: '100%' }}>
          Book a Demo
        </button>

        <small style={{ display: 'block', marginTop: '1rem', opacity: 0.7 }}>
          We'll reach out within one business day. No spam, ever.
        </small>
      </form>
    </section>
  );
};
