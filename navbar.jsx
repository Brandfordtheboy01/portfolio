import styles from './navbar.module.css'
import { useState, useEffect } from 'react'
import ContactModal from './ContactModal'

function Navbar({ isVisible = true }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const [isContactOpen, setIsContactOpen] = useState(false)

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
    const closeMenu = () => setIsMenuOpen(false)

    const openContact = () => {
        setIsMenuOpen(false)
        setIsContactOpen(true)
    }

    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape' && isMenuOpen) closeMenu()
        }
        document.addEventListener('keydown', handleEscape)
        return () => document.removeEventListener('keydown', handleEscape)
    }, [isMenuOpen])

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10)
        handleScroll()
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    if (!isVisible) return null

    return (
        <>
            <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
                <div className={styles.logoContainer}>
                    <img src="/brandfordLogo.png" alt="Brandford Logo" className={styles.logo} />
                </div>

                <div className={styles.navlinks}>
                    <a href="#home" className={styles.navlink}>Home</a>
                    <a href="#about" className={styles.navlink}>About</a>
                    <a href="#gallery" className={styles.navlink}>Gallery</a>
                    <a href="#projects" className={styles.navlink}>Projects</a>
                </div>

                <button className={styles.ctaButton} onClick={openContact}>
                    Get in touch
                    <span className={styles.arrow}>→</span>
                </button>

                <button className={styles.hamburger} onClick={toggleMenu} aria-label="Toggle menu">
                    <span className={`${styles.hamburgerLine} ${isMenuOpen ? styles.open : ''}`}></span>
                    <span className={`${styles.hamburgerLine} ${isMenuOpen ? styles.open : ''}`}></span>
                    <span className={`${styles.hamburgerLine} ${isMenuOpen ? styles.open : ''}`}></span>
                </button>
            </nav>

            <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}>
                <div className={styles.mobileMenuBlur} onClick={closeMenu}></div>
                <div className={styles.mobileMenuContent}>
                    <a href="#home" className={styles.mobileNavLink} onClick={closeMenu}>Home</a>
                    <a href="#about" className={styles.mobileNavLink} onClick={closeMenu}>About</a>
                    <a href="#gallery" className={styles.mobileNavLink} onClick={closeMenu}>Gallery</a>
                    <a href="#projects" className={styles.mobileNavLink} onClick={closeMenu}>Projects</a>
                    <a href="#contact" className={styles.mobileNavLink} onClick={closeMenu}>Contact</a>
                    <button className={styles.mobileNavLink} onClick={openContact}>Get in touch</button>
                </div>
            </div>

            <ContactModal
                isOpen={isContactOpen}
                onClose={() => setIsContactOpen(false)}
            />
        </>
    )
}

export default Navbar