import styles from './Footer.module.css'

const links = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Cases', href: '#cases' },
  { label: 'Processo', href: '#processo' },
  { label: 'Depoimentos', href: '#depoimentos' },
]

export default function Footer() {
  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <a className={styles.logo} href="#hero" onClick={() => scrollTo('#hero')}>
              <span className={styles.logoMark}>V</span>
              <span className={styles.logoText}>Pixel</span>
            </a>
            <p className={styles.tagline}>
              Consultoria em design de produto,<br />
              experiência do usuário e análise de negócio.
            </p>
            <a
              href="https://wa.me/5517992066308"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsapp}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.524 5.847L.057 23.998l6.304-1.654A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.796 9.796 0 01-5.007-1.373l-.359-.214-3.732.979.996-3.637-.234-.374A9.796 9.796 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
              </svg>
              (17) 99206-6308
            </a>
          </div>

          <nav className={styles.nav}>
            <span className={styles.navTitle}>Navegação</span>
            <ul className={styles.navList}>
              {links.map(l => (
                <li key={l.href}>
                  <button className={styles.navLink} onClick={() => scrollTo(l.href)}>
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.contact}>
            <span className={styles.navTitle}>Contato</span>
            <a
              href="https://wa.me/5517992066308"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactLink}
            >
              WhatsApp
            </a>
            <a href="mailto:contato@vpixel.com.br" className={styles.contactLink}>
              contato@vpixel.com.br
            </a>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.legal}>
            <p>ALBERTO STEPHANIO VELOSO CONSULTORIA EM TECNOLOGIA DA INFORMACAO LTDA</p>
            <p>CNPJ: 44.777.992/0001-33</p>
          </div>
          <p className={styles.copy}>
            © {new Date().getFullYear()} VPixel Soluções. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
