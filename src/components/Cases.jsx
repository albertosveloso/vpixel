import { useState } from 'react'
import styles from './Cases.module.css'

const cases = [
  {
    num: '01',
    tag: 'App Mobile · Saúde',
    title: 'MedTrack — Gestão de Consultas',
    desc: 'Redesign completo do aplicativo de agendamento médico de uma clínica particular. Mapeamos a jornada de 300+ pacientes, identificamos 14 pontos de atrito e entregamos uma nova interface que reduziu o tempo médio de agendamento de 8 minutos para 90 segundos.',
    results: [
      { value: '−81%', label: 'Tempo de agendamento' },
      { value: '+67%', label: 'Taxa de conversão' },
      { value: '4.8★', label: 'Avaliação na loja' },
    ],
    color: '#8B5CF6',
  },
  {
    num: '02',
    tag: 'SaaS · Finanças',
    title: 'FinCore — Painel Financeiro',
    desc: 'Análise de negócio e design de produto para uma startup fintech em fase de crescimento. Estruturamos os requisitos do MVP, priorizamos funcionalidades com base em dados e desenvolvemos um design system robusto que acelerou o desenvolvimento em 40%.',
    results: [
      { value: '−40%', label: 'Tempo de dev' },
      { value: '+120%', label: 'Usuários ativos' },
      { value: 'R$2M', label: 'Captação pós-entrega' },
    ],
    color: '#06B6D4',
  },
  {
    num: '03',
    tag: 'E-commerce · Varejo',
    title: 'NovaBela — Experiência de Compra',
    desc: 'Auditoria de usabilidade e reestruturação do funil de compras de um e-commerce de cosméticos. Identificamos barreiras de conversão invisíveis e implementamos melhorias no checkout que aumentaram a taxa de finalização de compra de forma significativa.',
    results: [
      { value: '+38%', label: 'Conversão checkout' },
      { value: '−52%', label: 'Taxa de abandono' },
      { value: '+R$850k', label: 'Receita adicional/ano' },
    ],
    color: '#10B981',
  },
  {
    num: '04',
    tag: 'Portal Corporativo · Logística',
    title: 'LogiHub — Portal de Operações',
    desc: 'Consultoria de UX e análise de negócio para digitalizar operações de uma transportadora regional. Levantamos requisitos com 6 áreas distintas, mapeamos 23 processos e entregamos um portal que unificou sistemas legados em uma única interface.',
    results: [
      { value: '−65%', label: 'Erros operacionais' },
      { value: '+3h', label: 'Economizadas/dia por op.' },
      { value: '23', label: 'Processos integrados' },
    ],
    color: '#F59E0B',
  },
]

export default function Cases() {
  const [active, setActive] = useState(0)
  const c = cases[active]

  return (
    <section id="cases" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>Cases de sucesso</span>
          <h2 className={styles.title}>Resultados que<br />falam por si</h2>
        </div>

        <div className={styles.layout}>
          <nav className={styles.tabs}>
            {cases.map((item, i) => (
              <button
                key={item.num}
                className={`${styles.tab} ${active === i ? styles.tabActive : ''}`}
                onClick={() => setActive(i)}
                style={{ '--c': item.color }}
              >
                <span className={styles.tabNum}>{item.num}</span>
                <span className={styles.tabTitle}>{item.title}</span>
                <span className={styles.tabTag}>{item.tag}</span>
              </button>
            ))}
          </nav>

          <div className={styles.detail} key={active} style={{ '--c': c.color }}>
            <div className={styles.detailHeader}>
              <span className={styles.detailTag}>{c.tag}</span>
              <h3 className={styles.detailTitle}>{c.title}</h3>
            </div>
            <p className={styles.detailDesc}>{c.desc}</p>
            <div className={styles.results}>
              {c.results.map(r => (
                <div key={r.label} className={styles.result}>
                  <span className={styles.resultVal}>{r.value}</span>
                  <span className={styles.resultLabel}>{r.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
