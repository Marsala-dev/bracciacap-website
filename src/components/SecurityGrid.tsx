export function SecurityGrid() {
  return (
    <section className="w-section" id="security">
      <div className="container">
        <div className="sh fade-up">
          <h2>Built for fiduciary standards.</h2>
          <p>Enterprise-grade security. Your clients trust you with their life savings — we built with that in mind.</p>
        </div>
        <div className="security-grid fade-up">
          <div className="security-card">
            <div className="ico">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1b2a4a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M9 12l2 2 4-4" stroke="#01bc48" />
              </svg>
            </div>
            <h4>SOC 2 Type II</h4>
            <p>Annual audits with continuous control monitoring.</p>
          </div>
          <div className="security-card">
            <div className="ico">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1b2a4a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" />
                <path d="M7 11V7a5 5 0 0110 0v4" />
                <circle cx="12" cy="16" r="1" fill="#01bc48" />
              </svg>
            </div>
            <h4>End-to-End Encryption</h4>
            <p>AES-256 at rest, TLS 1.3 in transit. Zero-knowledge.</p>
          </div>
          <div className="security-card">
            <div className="ico">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1b2a4a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4" />
                <polyline points="10 17 15 12 10 7" />
                <line x1="15" y1="12" x2="3" y2="12" stroke="#01bc48" />
              </svg>
            </div>
            <h4>SSO & MFA</h4>
            <p>SAML/OIDC single sign-on with mandatory MFA.</p>
          </div>
          <div className="security-card">
            <div className="ico">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1b2a4a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="9" y1="13" x2="15" y2="13" stroke="#01bc48" />
                <line x1="9" y1="17" x2="13" y2="17" stroke="#01bc48" />
              </svg>
            </div>
            <h4>Full Audit Trail</h4>
            <p>Every agent action logged and exportable for SEC exams.</p>
          </div>
          <div className="security-card">
            <div className="ico">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1b2a4a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 21h18M5 21V7l7-4 7 4v14" />
                <path d="M9 21v-4h6v4" stroke="#01bc48" />
                <line x1="9" y1="10" x2="9" y2="10.01" />
                <line x1="15" y1="10" x2="15" y2="10.01" />
                <line x1="9" y1="14" x2="9" y2="14.01" />
                <line x1="15" y1="14" x2="15" y2="14.01" />
              </svg>
            </div>
            <h4>SEC & FINRA Aligned</h4>
            <p>Meets Rule 206(4)-7 and FINRA cybersecurity guidelines.</p>
          </div>
          <div className="security-card">
            <div className="ico">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1b2a4a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
                <path d="M6 10h4M14 8h4M10 13h4" stroke="#01bc48" strokeWidth="2" />
              </svg>
            </div>
            <h4>US Data Residency</h4>
            <p>US-based AWS only. GDPR and CCPA compliant.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
