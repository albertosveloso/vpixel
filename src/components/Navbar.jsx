import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const links = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Cases', href: '#cases' },
  { label: 'Processo', href: '#processo' },
  { label: 'Depoimentos', href: '#depoimentos' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLink = (href) => {
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <nav className={styles.nav}>
        <a className={styles.logo} href="#hero" onClick={() => handleLink('#hero')}>
          <span className={styles.logoMark}>V</span>
          <span className={styles.logoText}>Pixel</span>
        </a>

        <ul className={`${styles.links} ${open ? styles.open : ''}`}>
          {links.map(l => (
            <li key={l.href}>
              <button className={styles.link} onClick={() => handleLink(l.href)}>
                {l.label}
              </button>
            </li>
          ))}
          <li>
            <a
              className={styles.cta}
              href="https://wa.me/5517992066308"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fale Conosco
            </a>
          </li>
        </ul>

        <button
          className={`${styles.burger} ${open ? styles.burgerOpen : ''}`}
          onClick={() => setOpen(o => !o)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </nav>
    </header>
  )
}
