import { motion } from 'framer-motion'
import { profile } from '../../data/profile'
import { content } from '../../data/content'
import Section from '../layout/Section'
import { fadeUpVariants, fadeInVariants } from '../../hooks/useScrollAnimation'
import { useReducedMotion } from '../../hooks/useReducedMotion'

export default function Hero() {
  const reducedMotion = useReducedMotion()
  const noTransition = reducedMotion ? { duration: 0 } : undefined

  return (
    <Section
      variant="hero"
      backgroundNumber="00"
      innerClassName="max-w-4xl xl:max-w-5xl 2xl:max-w-6xl"
      bottomSlot={
        <motion.div
          className="absolute bottom-12 sm:bottom-8 left-0 right-0 section-x"
          variants={fadeInVariants}
          initial="hidden"
          animate="visible"
          custom={1}
          transition={noTransition}
        >
          <div className="content-width flex items-center justify-between">
            <div className="deco-line flex-1" />
            <span
              className="font-mono text-xs tracking-widest ml-6 whitespace-nowrap"
              style={{ color: 'var(--text-muted)' }}
            >
              {content.hero.scrollLabel}
            </span>
          </div>
        </motion.div>
      }
    >
      <>
        <motion.div
          className="deco-line"
          style={{ marginBottom: 'var(--block-gap)' }}
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1 }}
          transition={noTransition ?? { duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
        />

        <div className="block-stack hero-block">
          <motion.p
            className="hero-role font-mono text-sm tracking-widest uppercase"
            style={{ color: 'var(--accent)' }}
            variants={fadeInVariants}
            initial="hidden"
            animate="visible"
            custom={0.2}
            transition={noTransition}
          >
            {profile.role}
          </motion.p>

          <div className="overflow-visible min-w-0 max-w-full hero-title-wrap">
            <motion.h1
              className="hero-title font-display font-extrabold leading-none tracking-tight max-w-full"
              style={{
                fontSize: 'clamp(3rem, 8vw, 7.875rem)',
                color: 'var(--text)',
              }}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              custom={0.3}
              transition={noTransition}
            >
              {profile.role.split(' ').map((word) => (
                <span key={word} className="block whitespace-nowrap">{word}</span>
              ))}
            </motion.h1>
          </div>

          <div className="overflow-visible min-w-0 max-w-full hero-title-wrap">
            <motion.h1
              className="hero-title font-display font-extrabold leading-none tracking-tight max-w-full"
              style={{
                fontSize: 'clamp(3rem, 8vw, 7.875rem)',
                color: 'var(--accent)',
              }}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              custom={0.45}
              transition={noTransition}
            >
              <span className="block whitespace-nowrap">{profile.roleSecondary}</span>
            </motion.h1>
          </div>

          <motion.div
            className="flex items-center gap-4"
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            custom={0.55}
            transition={noTransition}
          >
            <span
              className="font-display font-bold text-xl md:text-2xl lg:text-3xl"
              style={{ color: 'var(--text)' }}
            >
              {profile.name}
            </span>
            <div className="flex-1 max-w-24 h-px" style={{ background: 'var(--text)', opacity: 0.3 }} />
          </motion.div>

          <motion.p
            className="text-base md:text-lg max-w-xl"
            style={{ color: 'var(--text-muted)' }}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            custom={0.65}
            transition={noTransition}
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            className="flex gap-8"
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            custom={0.75}
            transition={noTransition}
          >
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="link-accent font-mono text-sm lg:text-base tracking-wide"
            >
              {content.hero.linkGithub}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="link-accent font-mono text-sm lg:text-base tracking-wide"
            >
              {content.hero.linkLinkedin}
            </a>
          </motion.div>
        </div>
      </>
    </Section>
  )
}
