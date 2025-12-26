import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'
import './Hero.css'

const Hero = () => {
  const socialLinks = [
    { icon: FaGithub, href: '#', label: 'GitHub' },
    { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
    { icon: FaTwitter, href: '#', label: 'Twitter' },
    { icon: FaEnvelope, href: '#contact', label: 'Email' },
  ]

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-meta">
          <span className="meta-text">VOL. 01</span>
          <span className="meta-divider">|</span>
          <span className="meta-text">2024</span>
        </div>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="title-main">FRONTEND</span>
          <span className="title-accent">DEVELOPER</span>
        </motion.h1>

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <div className="hero-text">
            <p className="hero-description">
              Building digital experiences with clean code and thoughtful design.
              Specializing in React, TypeScript, and modern web technologies.
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">3+</span>
                <span className="stat-label">Years</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">20+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">10+</span>
                <span className="stat-label">Technologies</span>
              </div>
            </div>
          </div>

          <div className="hero-actions">
            <a href="#projects" className="btn-primary">
              View Projects →
            </a>
            <a href="#contact" className="btn-secondary">
              Get in Touch
            </a>
          </div>
        </motion.div>

        <div className="hero-social">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              className="social-link"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 + index * 0.1 }}
            >
              {link.label}
            </motion.a>
          ))}
        </div>
      </div>

      <div className="hero-decoration">
        <div className="decoration-line"></div>
      </div>
    </section>
  )
}

export default Hero
