import styles from './Process.module.css'

const steps = [
  {
    num: '01',
    title: 'Descoberta',
    desc: 'Imersão no seu negócio, contexto de mercado e usuários. Entrevistas, análise de dados e benchmarking para construir uma base sólida.',
  },
  {
    num: '02',
    title: 'Diagnóstico',
    desc: 'Identificação de oportunidades e pontos críticos. Priorizamos com base em impacto e viabilidade para garantir esforço no que mais importa.',
  },
  {
    num: '03',
    title: 'Design & Prototipação',
    desc: 'Criamos e iteramos soluções em ciclos curtos. Protótipos de alta fidelidade testados com usuários reais antes de qualquer linha de código.',
  },
  {
    num: '04',
    title: 'Entrega & Suporte',
    desc: 'Documentação completa, handoff para o time de desenvolvimento e acompanhamento pós-lançamento para garantir que os resultados se concretizem.',
  },
]

export default function Process() {
  return (
    <section id="processo" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>Como trabalhamos</span>
          <h2 className={styles.title}>Um processo<br />testado e comprovado</h2>
          <p className={styles.desc}>
            Do primeiro alinhamento à entrega final, seguimos uma metodologia
            estruturada que garante previsibilidade e qualidade.
          </p>
        </div>

        <div className={styles.steps}>
          {steps.map((s, i) => (
            <div key={s.num} className={styles.step}>
              <div className={styles.stepLeft}>
                <div className={styles.dot}>
                  <span className={styles.dotNum}>{s.num}</span>
                </div>
                {i < steps.length - 1 && <div className={styles.line} />}
              </div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{s.title}</h3>
                <p className={styles.stepDesc}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
