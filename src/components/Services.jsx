import styles from './Services.module.css'

const services = [
  {
    num: '01',
    title: 'Design de Produto',
    desc: 'Criamos produtos digitais do zero: do conceito à tela. Ideação, wireframes, protótipos e design system que escalam com o seu negócio.',
    tags: ['UI Design', 'Protótipo', 'Design System'],
  },
  {
    num: '02',
    title: 'Experiência do Usuário',
    desc: 'Pesquisa com usuários, mapeamento de jornada e testes de usabilidade para garantir que seu produto seja intuitivo e gere engajamento.',
    tags: ['Pesquisa UX', 'Jornada', 'Testes'],
  },
  {
    num: '03',
    title: 'Análise de Negócio',
    desc: 'Levantamento de requisitos, modelagem de processos e análise estratégica para alinhar tecnologia com os objetivos do seu negócio.',
    tags: ['Requisitos', 'Processos', 'Estratégia'],
  },
  {
    num: '04',
    title: 'Consultoria em Usabilidade',
    desc: 'Avaliação heurística, revisão de interfaces existentes e recomendações práticas para melhorar a experiência dos seus usuários hoje.',
    tags: ['Heurística', 'Auditoria', 'Revisão'],
  },
]

export default function Services() {
  return (
    <section id="servicos" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>O que fazemos</span>
          <h2 className={styles.title}>Serviços que<br />geram resultado</h2>
          <p className={styles.desc}>
            Uma consultoria especializada que conecta design estratégico
            com os objetivos reais do seu negócio.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map(s => (
            <div key={s.num} className={styles.card}>
              <span className={styles.num}>{s.num}</span>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardDesc}>{s.desc}</p>
              <div className={styles.tags}>
                {s.tags.map(t => (
                  <span key={t} className={styles.tag}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
