import { motion } from 'framer-motion'
import { projects } from '../../data/projects'
import { content } from '../../data/content'
import ProjectCard from './ProjectCard'
import { useInViewAnimation } from '../../hooks/useInViewAnimation'

export default function ProjectsSection() {
  const { ref: titleRef, isInView, noTransition } = useInViewAnimation({ once: true, margin: '-10% 0px' })

  return (
    <section id="projects">
      <div
        ref={titleRef}
        className="section-x section-y relative"
        style={{ backgroundColor: 'var(--bg)' }}
      >
        <div className="content-width">
          <motion.div
            className="deco-line"
            style={{ marginBottom: 'calc(2 * var(--block-gap))' }}
            initial={{ scaleX: 0, originX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={noTransition ?? { duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          />
          <div className="block-stack">
            <motion.p
              className="font-mono text-xs tracking-widest uppercase"
              style={{ color: 'var(--accent)' }}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={noTransition ?? { duration: 0.5, delay: 0.2 }}
            >
              {content.projects.sectionLabel}
            </motion.p>
            <motion.h2
              className="font-display font-semibold"
              style={{
                fontSize: 'clamp(1.1rem, 2vw, 1.6rem)',
                color: 'var(--text-muted)',
                letterSpacing: '0.02em',
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={noTransition ?? { duration: 0.6, ease: 'easeOut', delay: 0.3 }}
            >
              {content.projects.heading}
            </motion.h2>
            <motion.p
              className="font-body text-base md:text-lg leading-relaxed max-w-2xl"
              style={{ color: 'var(--text-muted)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={noTransition ?? { duration: 0.5, ease: 'easeOut', delay: 0.4 }}
            >
              {content.projects.intro}
            </motion.p>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}
