export function AgentPillars() {
  return (
    <section className="w-section" id="agents">
      <div style={{ borderRadius: '24px 24px 0 0', paddingTop: '5rem' }}>
        <header className="sh fade-up">
          <h2>Four agents that never stop working.</h2>
          <p>
            Each agent operates autonomously, learns your firm's playbook, and
            executes around the clock.
          </p>
        </header>

        <div className="pillars-grid fade-up">
          <div className="pillar">
            <h3>Prioritize Compliance</h3>
            <p>
              Start each morning with a compliance digest. The agent scans
              regulatory updates, your ADV filings, and policy gaps to surface
              what truly matters.
            </p>
          </div>

          <div className="pillar">
            <h3>Manage Every Portfolio</h3>
            <p>
              Watches drift across every account, triggers rebalancing within
              your IPS guardrails, and harvests tax losses — all documented for
              audit.
            </p>
          </div>

          <div className="pillar">
            <h3>Report Proactively</h3>
            <p>
              Generates personalized quarterly reports, performance summaries,
              and billing reconciliations — branded to your firm, delivered on
              schedule.
            </p>
          </div>

          <div className="pillar">
            <h3>Grow Your Practice</h3>
            <p>
              Identifies prospects, drafts personalized outreach, nurtures
              leads, and books discovery calls — while your advisors focus on
              clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
