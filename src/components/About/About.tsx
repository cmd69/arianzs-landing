import { motion } from 'framer-motion'
import { content } from '../../data/content'
import Section from '../layout/Section'
import { staggerContainerVariants, staggerItemVariants, fadeUpVariants } from '../../hooks/useScrollAnimation'
import { useInViewAnimation } from '../../hooks/useInViewAnimation'

export default function About() {
  const { ref, isInView, noTransition } = useInViewAnimation({ once: true, margin: '-10% 0px' })

  return (
    <Section
      id="about"
      decoLine
      innerClassName="max-w-2xl xl:max-w-3xl"
    >
      <div ref={ref} className="block-stack">
        <motion.p
          className="font-mono text-xs tracking-widest uppercase"
          style={{ color: 'var(--accent)' }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={noTransition ?? { duration: 0.5, delay: 0.15 }}
        >
          {content.about.sectionLabel}
        </motion.p>

        <motion.h2
          className="font-display font-semibold"
          style={{
            fontSize: 'clamp(1.1rem, 2vw, 1.6rem)',
            color: 'var(--text-muted)',
            letterSpacing: '0.02em',
          }}
          variants={fadeUpVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          custom={0.2}
          transition={noTransition}
        >
          {content.about.heading}
        </motion.h2>

        <div className="block-stack about-lines-stack">
          {content.about.lines.map((line, i) => (
            <motion.p
              key={i}
              className="font-body text-sm md:text-lg leading-relaxed"
              style={{ color: 'var(--text-muted)' }}
              variants={fadeUpVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              custom={0.3 + i * 0.1}
              transition={noTransition}
            >
              {line}
            </motion.p>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={noTransition ?? { duration: 0.4, delay: 0.5 }}
          className="block-stack"
        >
          <div className="flex items-center gap-4">
            <span
              className="font-mono text-xs tracking-widest uppercase"
              style={{ color: 'var(--text-muted)' }}
            >
              {content.about.skillsLabel}
            </span>
            <div className="flex-1 h-px" style={{ background: 'var(--text)', opacity: 0.12 }} />
          </div>

          <motion.div
            className="flex flex-wrap gap-2"
            variants={staggerContainerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            transition={noTransition}
          >
            {content.about.skills.map((skill) => (
              <motion.span
                key={skill}
                className="tag"
                variants={staggerItemVariants}
                style={{ cursor: 'default' }}
                transition={noTransition}
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </Section>
  )
}
