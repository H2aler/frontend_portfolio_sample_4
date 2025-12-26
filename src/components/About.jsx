import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import './About.css'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="about" className="about" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="about-content"
        >
          <div className="about-header">
            <span className="section-number">01</span>
            <h2 className="section-title">About</h2>
          </div>

          <div className="about-grid">
            <div className="about-text">
              <p className="about-description">
                React와 TypeScript를 주로 사용하는 프론트엔드 개발자입니다.
                사용자 경험을 중시하며, 깔끔한 코드와 직관적인 인터페이스를 만드는 것을 좋아합니다.
              </p>
              <p className="about-description">
                새로운 기술을 배우는 것을 즐기며, 코드 리뷰와 리팩토링을 통해
                지속적으로 개선해 나가고 있습니다.
              </p>
            </div>

            <div className="about-tech">
              <h3 className="tech-title">Tech Stack</h3>
              <div className="tech-list">
                <span className="tech-item">React</span>
                <span className="tech-item">TypeScript</span>
                <span className="tech-item">Next.js</span>
                <span className="tech-item">Tailwind CSS</span>
                <span className="tech-item">Node.js</span>
                <span className="tech-item">Git</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
