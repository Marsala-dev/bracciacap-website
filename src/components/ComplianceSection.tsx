export function ComplianceSection() {
  return (
    <section className="w-section alt">
      <div className="container fade-up">
        <div className="feature-row">
          <div className="feature-text">
            <h2>Make compliance your competitive edge.</h2>
            <p>
              The Compliance Agent monitors regulatory changes, reviews your
              filings, and keeps your firm audit-ready — automatically.
            </p>
            <ul className="feature-list">
              <li>Scan SEC and state regulatory updates daily</li>
              <li>Flag ADV inconsistencies in real time</li>
              <li>Generate audit-ready documentation on demand</li>
              <li>Pre-screen marketing materials</li>
              <li>Track certifications and CE requirements</li>
            </ul>
            <a className="btn btn-dark" href="#demo">
              See it in action
            </a>
          </div>

          <div className="feature-visual">
            <div className="mock-window">
              <div className="mock-bar">
                <span className="dot red" />
                <span className="dot yellow" />
                <span className="dot green" />
                <span className="mock-title">Compliance Dashboard</span>
              </div>
              <div className="mock-body">
                <div className="mock-row">
                  <span>SEC Rule 206(4)-7</span>
                  <span className="badge ok">&#10003; Compliant</span>
                </div>
                <div className="mock-row">
                  <span>ADV Part 2A</span>
                  <span className="badge ok">Updated Today</span>
                </div>
                <div className="mock-row">
                  <span>Custody Rule Audit</span>
                  <span className="badge warn">Review Mar 28</span>
                </div>
                <div className="mock-row">
                  <span>Marketing Materials</span>
                  <span className="badge ok">3 Cleared</span>
                </div>
                <div className="mock-row">
                  <span>Best Execution</span>
                  <span className="badge info">Agent Running...</span>
                </div>
                <div className="mock-row">
                  <span>Code of Ethics</span>
                  <span className="badge ok">12/12 Current</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
