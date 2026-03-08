import { motion } from 'framer-motion'
import { useState } from 'react'
import type { Project } from '../../data/projects'
import { content } from '../../data/content'
import TelegramMockup from './TelegramMockup'
import StackCarousel from './StackCarousel'
import ImageLightbox from './ImageLightbox'
import { fadeUpVariants, staggerContainerVariants, staggerItemVariants } from '../../hooks/useScrollAnimation'
import { useInViewAnimation } from '../../hooks/useInViewAnimation'

interface Props {
  project: Project
  index: number
}

type Layout = 'left' | 'right'

export default function ProjectCard({ project, index }: Props) {
  const { ref, isInView, noTransition } = useInViewAnimation({ once: true, margin: '-15% 0px' })
  const layout: Layout = index % 2 === 0 ? 'left' : 'right'
  const carouselImages = project.screenshots ?? (project.screenshot ? [project.screenshot] : null)
  const hasVisual = Boolean(carouselImages || project.mockupType)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const gridCols = hasVisual
    ? layout === 'left'
      ? 'lg:grid-cols-[1fr_1.35fr]'
      : 'lg:grid-cols-[1.35fr_1fr]'
    : 'lg:grid-cols-1'
  const textOrder = layout === 'left' ? 'lg:order-1' : 'lg:order-2'
  const visualOrder = layout === 'left' ? 'lg:order-2' : 'lg:order-1'
  const textAlign = !hasVisual ? 'flex flex-col items-center text-center' : ''

  return (
    <div
      ref={ref}
      className="section-content-visibility relative flex items-center section-x section-y-project overflow-visible"
      style={{ backgroundColor: 'var(--bg)' }}
    >
      <div className={`relative z-10 content-width grid items-center gap-section ${gridCols}`}>
        <div className={`relative overflow-visible ${textOrder} ${textAlign}`}>
          <div
            className="absolute inset-0 flex items-center pointer-events-none select-none overflow-visible"
            style={{ justifyContent: layout === 'left' ? 'flex-start' : 'flex-end' }}
            aria-hidden
          >
            <span
              className="section-number"
              style={{
                color: 'var(--number-bg)',
                transform: layout === 'left' ? 'translateX(-20%)' : 'translateX(20%)',
              }}
            >
              {project.number}
            </span>
          </div>

          <div className="block-stack project-card-text">
            <motion.div
              className={`flex items-center gap-3 min-h-[30px] ${!hasVisual ? 'justify-center' : ''}`}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={noTransition ?? { duration: 0.5, delay: 0.1 }}
            >
              <span
                className="font-mono text-xs tracking-widest"
                style={{ color: 'var(--accent)' }}
              >
                {project.number}
              </span>
              <div className="w-12 h-px" style={{ background: 'var(--accent)', opacity: 0.5 }} />
              {project.inDevelopment && (
                <span className="badge">{content.projects.badgeInDevelopment}</span>
              )}
            </motion.div>

            <motion.h2
              className="font-display font-bold leading-tight text-[clamp(1.75rem,3.5vw,2.75rem)] lg:text-[2.5rem] xl:text-[2.75rem]"
              style={{ color: 'var(--text)' }}
              variants={fadeUpVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              custom={0.2}
              transition={noTransition}
            >
              {project.name}
            </motion.h2>

            <motion.p
              className={`font-body text-base md:text-lg leading-relaxed max-w-md ${!hasVisual ? 'mx-auto' : ''}`}
              style={{ color: 'var(--text-muted)' }}
              variants={fadeUpVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              custom={0.3}
              transition={noTransition}
            >
              {project.longDescription}
            </motion.p>

            <motion.div
              className={`flex flex-wrap gap-2 ${!hasVisual ? 'justify-center' : ''}`}
              variants={staggerContainerVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              transition={noTransition}
            >
              {project.tags.map((tag) => (
                <motion.span key={tag} className="tag" variants={staggerItemVariants} transition={noTransition}>
                  {tag}
                </motion.span>
              ))}
            </motion.div>

            <motion.div
              className={`flex gap-6 ${!hasVisual ? 'justify-center' : ''}`}
              variants={fadeUpVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              custom={0.5}
              transition={noTransition}
            >
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-accent font-mono text-sm"
                >
                  {content.projects.linkGithub}
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-accent font-mono text-sm"
                >
                  {content.projects.linkDemo}
                </a>
              )}
            </motion.div>
          </div>
        </div>

        {hasVisual && (
          <motion.div
            className={`flex justify-center min-w-0 w-full ${project.id === 'proxmox_dashboard' ? 'max-w-[414px] lg:max-w-[620px] xl:max-w-[700px]' : 'max-w-[414px] lg:max-w-[560px] xl:max-w-[640px]'} ${visualOrder} ${carouselImages && project.mockupType !== 'telegram' ? 'items-start' : 'items-center'}`}
            style={{
              paddingBlock: 'var(--block-gap)',
              ...(project.mockupType === 'telegram' || !carouselImages ? { minHeight: 400 } : {}),
            }}
            initial={{ opacity: 0, scale: 0.94 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={noTransition ?? { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
          >
            {project.mockupType === 'telegram' ? (
              <div className="w-full max-w-[260px] min-w-[200px] lg:max-w-[240px]">
                <TelegramMockup />
              </div>
            ) : carouselImages ? (
              <StackCarousel
                images={carouselImages}
                projectName={project.name}
                imageScales={project.imageScales}
                maxDesktopWidth={project.maxDesktopWidth}
                onImageClick={(i) => setLightboxIndex(i)}
              />
            ) : null}
          </motion.div>
        )}
      </div>

      <div className="absolute bottom-0 inset-x-0 section-x">
        <div className="content-width h-px" style={{ background: 'var(--text)', opacity: 0.08 }} />
      </div>

      {lightboxIndex !== null && carouselImages && (
        <ImageLightbox
          images={carouselImages}
          currentIndex={lightboxIndex}
          projectName={project.name}
          onClose={() => setLightboxIndex(null)}
          onNavigate={(i) => setLightboxIndex(i)}
        />
      )}
    </div>
  )
}
