export function PortfolioSection() {
  return (
    <section className="w-section">
      <div className="container fade-up">
        <div className="feature-row reverse">
          <div className="feature-text">
            <h2>Rebalancing that never waits for Monday.</h2>
            <p>
              The Portfolio Agent continuously monitors drift, executes
              rebalancing, and captures tax-loss harvesting opportunities across
              every account.
            </p>
            <ul className="feature-list">
              <li>Real-time drift detection across all accounts</li>
              <li>Automated tax-loss harvesting</li>
              <li>Model portfolio management</li>
              <li>Multi-custodian household management</li>
            </ul>
            <a className="btn btn-dark" href="#demo">
              Explore portfolios
            </a>
          </div>

          <div className="feature-visual">
            <div className="agent-flow">
              <div className="agent-step">
                <span className="step-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </span>
                <span className="step-label">Scanning 847 accounts for drift...</span>
                <span className="badge ok">&#10003; Done</span>
              </div>

              <div className="agent-step">
                <span className="step-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                    <line x1="12" y1="9" x2="12" y2="13" />
                    <line x1="12" y1="17" x2="12.01" y2="17" />
                  </svg>
                </span>
                <span className="step-label">12 accounts exceed 5% threshold</span>
                <span className="badge ok">&#10003; Flagged</span>
              </div>

              <div className="agent-step">
                <span className="step-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                  </svg>
                </span>
                <span className="step-label">Generating rebalance proposals...</span>
                <span className="badge ok">&#10003; 12 Ready</span>
              </div>

              <div className="agent-step">
                <span className="step-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="1" x2="12" y2="23" />
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </span>
                <span className="step-label">TLH opportunity: $34K unrealized losses</span>
                <span className="badge run">&#9679; Harvesting</span>
              </div>

              <div className="agent-step">
                <span className="step-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                  </svg>
                </span>
                <span className="step-label">Trade rationale documented for CCO</span>
                <span className="badge ok">&#10003; Filed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
