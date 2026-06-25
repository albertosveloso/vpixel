import { useState } from 'react'
import styles from './Testimonials.module.css'

const testimonials = [
  {
    quote: 'A VPixel transformou completamente a forma como nossos usuários interagem com o sistema. O processo foi estruturado, transparente e os resultados superaram nossas expectativas.',
    name: 'Mariana Costa',
    role: 'CEO, MedTrack',
    initials: 'MC',
    color: '#8B5CF6',
  },
  {
    quote: 'Contratamos para uma auditoria de UX e acabamos redesenhando todo o produto. A visão estratégica da equipe foi fundamental para captarmos nossa rodada de investimento.',
    name: 'Rafael Mendes',
    role: 'CTO, FinCore',
    initials: 'RM',
    color: '#06B6D4',
  },
  {
    quote: 'O projeto de e-commerce foi uma virada de chave. Em 3 meses já tínhamos recuperado o investimento com o aumento nas conversões. Trabalho de altíssima qualidade.',
    name: 'Juliana Alves',
    role: 'Diretora de Marketing, NovaBela',
    initials: 'JA',
    color: '#10B981',
  },
  {
    quote: 'O levantamento de requisitos foi extremamente preciso. Eles entenderam nossa operação melhor do que a gente mesmo. O portal unificou anos de sistemas fragmentados.',
    name: 'Carlos Ribeiro',
    role: 'Diretor de Operações, LogiHub',
    initials: 'CR',
    color: '#F59E0B',
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)

  return (
    <section id="depoimentos" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>Depoimentos</span>
          <h2 className={styles.title}>O que dizem<br />nossos clientes</h2>
        </div>

        <div className={styles.carousel}>
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`${styles.card} ${active === i ? styles.cardActive : ''}`}
              onClick={() => setActive(i)}
            >
              <div className={styles.quoteIcon}>"</div>
              <p className={styles.quote}>{t.quote}</p>
              <div className={styles.author}>
                <div className={styles.avatar} style={{ '--c': t.color }}>
                  {t.initials}
                </div>
                <div>
                  <div className={styles.name}>{t.name}</div>
                  <div className={styles.role}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.dots}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${active === i ? styles.dotActive : ''}`}
              onClick={() => setActive(i)}
              aria-label={`Depoimento ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
