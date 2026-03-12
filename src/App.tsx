import { Nav } from './components/Nav'
import { SkyBackground } from './components/SkyBackground'
import { Hero } from './components/Hero'
import { AgentPillars } from './components/AgentPillars'
import { ComplianceSection } from './components/ComplianceSection'
import { PortfolioSection } from './components/PortfolioSection'
import { MetricsBar } from './components/MetricsBar'
import { SecurityGrid } from './components/SecurityGrid'
import { Integrations } from './components/Integrations'
import { Testimonial } from './components/Testimonial'
import { PricingGrid } from './components/PricingGrid'
import { FAQ } from './components/FAQ'
import { ContactForm } from './components/ContactForm'
import { Footer } from './components/Footer'
import { SchemaOrg } from './components/SchemaOrg'
import { useFadeUp } from './hooks/useFadeUp'

export default function App() {
  useFadeUp()

  return (
    <>
      <SchemaOrg />
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SkyBackground />
      <Nav />
      <Hero />
      <div className="knockout">
        <div className="knockout-inner">
          <AgentPillars />
          <ComplianceSection />
          <PortfolioSection />
          <MetricsBar />
          <SecurityGrid />
          <Integrations />
          <Testimonial />
          <PricingGrid />
          <FAQ />
        </div>
      </div>
      <ContactForm />
      <Footer />
    </>
  )
}
