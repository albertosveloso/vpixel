import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.glow} />
      <div className={styles.container}>
        <div className={styles.badge}>Consultoria · Design · Estratégia</div>
        <h1 className={styles.heading}>
          Design que<br />
          <span className={styles.accent}>transforma</span><br />
          negócios.
        </h1>
        <p className={styles.sub}>
          Ajudamos empresas a criar produtos digitais com propósito —
          unindo design de produto, UX e análise de negócio para gerar
          resultados reais.
        </p>
        <div className={styles.actions}>
          <a
            href="https://wa.me/5517992066308"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.primary}
          >
            Iniciar Projeto
          </a>
          <button
            className={styles.secondary}
            onClick={() => document.querySelector('#cases')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Ver Cases
          </button>
        </div>
        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statNum}>50+</span>
            <span className={styles.statLabel}>Projetos entregues</span>
          </div>
          <div className={styles.divider} />
          <div className={styles.stat}>
            <span className={styles.statNum}>8+</span>
            <span className={styles.statLabel}>Anos de experiência</span>
          </div>
          <div className={styles.divider} />
          <div className={styles.stat}>
            <span className={styles.statNum}>98%</span>
            <span className={styles.statLabel}>Satisfação dos clientes</span>
          </div>
        </div>
      </div>
    </section>
  )
}
