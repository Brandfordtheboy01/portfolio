import styles from './heroSection.module.css'
import { useState, useEffect, useRef } from 'react'
import { fadeIn, staggerFadeIn, scaleIn, textReveal, hoverScale } from './src/utils/animations'

function HeroSection() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const heroRef = useRef(null)
    const textRef = useRef(null)
    const skillsRef = useRef(null)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const closeMenu = () => {
        setIsMenuOpen(false)
    }

    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape' && isMenuOpen) {
                closeMenu()
            }
        }

        document.addEventListener('keydown', handleEscape)
        return () => document.removeEventListener('keydown', handleEscape)
    }, [isMenuOpen])

    // GSAP animations
    useEffect(() => {
        // Animate hero section
        if (heroRef.current) {
            fadeIn(heroRef.current, { duration: 1.2 })
        }

        // Animate text content
        if (textRef.current) {
            const textElements = textRef.current.querySelectorAll('p, h1')
            staggerFadeIn(textElements, { duration: 0.8, stagger: 0.15 })
        }

        // Animate skills
        if (skillsRef.current) {
            const skillItems = skillsRef.current.querySelectorAll('.skillItem')
            staggerFadeIn(skillItems, { duration: 0.6, stagger: 0.1, delay: 0.5 })
        }

        // Add hover effects to buttons
        const ctaButton = document.querySelector(`.${styles.ctaButton}`)
        if (ctaButton) {
            hoverScale(ctaButton)
        }

        // Add hover effects to skill items
        const skillItems = document.querySelectorAll('.skillItem')
        skillItems.forEach(item => {
            hoverScale(item)
        })

        // Animate mobile menu links when menu opens
        if (isMenuOpen) {
            const menuLinks = document.querySelectorAll(`.${styles.mobileNavLink}`)
            staggerFadeIn(menuLinks, { duration: 0.4, stagger: 0.1 })
        }

    }, [isMenuOpen])

    return (
        <div className={styles.herosection} id="home">
            <nav className={styles.navbar}>
                <div className={styles.navlinks}>
                    <a href="#home" className={styles.navlink}>Home</a>
                    <a href="#about" className={styles.navlink}>About</a>
                    <a href="#projects" className={styles.navlink}>Projects</a>
                </div>
                <a href="mailto:hbrandart@gmail.com" className={styles.ctaButton}>
                    Get in touch
                    <span className={styles.arrow}>→</span>
                </a>
                <button className={styles.hamburger} onClick={toggleMenu} aria-label="Toggle menu">
                    <span className={`${styles.hamburgerLine} ${isMenuOpen ? styles.open : ''}`}></span>
                    <span className={`${styles.hamburgerLine} ${isMenuOpen ? styles.open : ''}`}></span>
                    <span className={`${styles.hamburgerLine} ${isMenuOpen ? styles.open : ''}`}></span>
                </button>
            </nav>

            {/* Mobile Menu */}
            <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}>
                <div className={styles.mobileMenuBlur} onClick={closeMenu}></div>
                <div className={styles.mobileMenuContent}>
                    <a href="#home" className={styles.mobileNavLink} onClick={closeMenu}>Home</a>
                    <a href="#about" className={styles.mobileNavLink} onClick={closeMenu}>About</a>
                    <a href="#skills" className={styles.mobileNavLink} onClick={closeMenu}>Skills</a>
                    <a href="#experience" className={styles.mobileNavLink} onClick={closeMenu}>Experience</a>
                    <a href="#projects" className={styles.mobileNavLink} onClick={closeMenu}>Projects</a>
                    <a href="#education" className={styles.mobileNavLink} onClick={closeMenu}>Education</a>
                    <a href="#contact" className={styles.mobileNavLink} onClick={closeMenu}>Contact</a>
                    <div className={styles.mobileSocialLinks}>
                        <a href="https://github.com/Brandfordtheboy01" target="_blank" rel="noopener noreferrer" className={styles.mobileSocialLink}>GitHub</a>
                        <a href="https://www.linkedin.com/in/henry-brandford-arthur-junior-3a86053aa" target="_blank" rel="noopener noreferrer" className={styles.mobileSocialLink}>LinkedIn</a>
                        <a href="mailto:hbrandart@gmail.com" className={styles.mobileSocialLink}>Email</a>
                    </div>
                </div>
            </div>

            <div className={styles.portfolioBackground}>Portfolio</div>

            <div className={styles.content} ref={heroRef}>
                <div className={styles.heroImageContainer}>
                    <img src="/hero.png" alt="Henry Brandford" className={styles.heroImage} />
                </div>

                <div className={styles.textContent} ref={textRef}>
                    <p className={styles.greeting}>Hello, I'm</p>
                    <h1 className={styles.name}>
                        <span className={styles.firstName}>Henry</span>
                        <span className={styles.lastName}>Brandford</span>
                    </h1>
                    <p className={styles.title}>Aspiring Frontend & Backend Developer</p>
                    <p className={styles.description}>
                        I'm a computer science student passionate about creating beautiful, 
                        functional web applications and exploring modern web technologies.
                    </p>
                </div>
            </div>

            <div className={styles.skills} ref={skillsRef}>
                <div className={styles.skillItem}>
                    <img src="/react.png" alt="React" className={styles.skillIcon} />
                    <span>React</span>
                </div>
                <div className={styles.skillItem}>
                    <img src="/JS.png" alt="JavaScript" className={styles.skillIcon} />
                    <span>JavaScript</span>
                </div>
                <div className={styles.skillItem}>
                    <img src="/typescript.png" alt="TypeScript" className={styles.skillIcon} />
                    <span>TypeScript</span>
                </div>
                <div className={styles.skillItem}>
                    <img src="/python.png" alt="Python" className={styles.skillIcon} />
                    <span>Python</span>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;