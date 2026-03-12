export function Hero() {
  return (
    <section className="hero" id="main-content">
      <div className="hero-inner fade-up">
        <h1>Your practice, fully autonomous.</h1>
        <p>
          AI agents that handle compliance, portfolios, reporting, and growth
          &mdash; so you can spend every hour where it matters: with your
          clients.
        </p>
        <div className="hero-cta">
          <a href="#demo" className="btn btn-white">
            Request a Demo
          </a>
          <a
            href="#agents"
            className="btn"
            style={{
              background: 'transparent',
              color: 'rgba(255,255,255,0.8)',
              border: '1.5px solid rgba(255,255,255,0.3)',
            }}
          >
            See the agents
          </a>
        </div>
      </div>
    </section>
  )
}
