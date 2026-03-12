import { useState, useCallback } from 'react'
import { useScrolledNav } from '../hooks/useScrolledNav'

export function Nav() {
  const [open, setOpen] = useState(false)
  const scrolled = useScrolledNav()

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      const href = e.currentTarget.getAttribute('href')
      if (href?.startsWith('#')) {
        e.preventDefault()
        const target = document.querySelector(href)
        target?.scrollIntoView({ behavior: 'smooth' })
        setOpen(false)
      }
    },
    [],
  )

  return (
    <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
      <div className="nav-inner">
        <a href="/" className="logo">
          BracciaCap <span>AI</span>
        </a>
        <ul className={`nav-links${open ? ' open' : ''}`} id="navLinks">
          <li>
            <a href="#agents" onClick={handleNavClick}>
              Agents
            </a>
          </li>
          <li>
            <a href="#security" onClick={handleNavClick}>
              Security
            </a>
          </li>
          <li>
            <a href="#pricing" onClick={handleNavClick}>
              Pricing
            </a>
          </li>
          <li>
            <a href="mailto:ai@bracciacap.com">Log in</a>
          </li>
          <li>
            <a href="#demo" className="btn-nav" onClick={handleNavClick}>
              Try BracciaCap
            </a>
          </li>
        </ul>
        <button
          className="mobile-toggle"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  )
}
