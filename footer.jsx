import { useState } from 'react'
import styles from './footer.module.css'
import ContactModal from './ContactModal'

function Footer() {
    const [isContactOpen, setIsContactOpen] = useState(false)

    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.socialLinks}>
                    <a href="https://github.com/Brandfordtheboy01" target="_blank" rel="noopener noreferrer" className={styles.link}>github</a>
                    <a href="https://www.linkedin.com/in/henry-brandford-arthur-junior-3a86053aa" target="_blank" rel="noopener noreferrer" className={styles.link}>linkedin</a>
                    <button type="button" className={styles.linkButton} onClick={() => setIsContactOpen(true)}>
                        email
                    </button>
                </div>
                <div className={styles.copyright}>
                    <p>2026 Henry Brandford-Arthur</p>
                    <p>Designed & built by Henry Brandford-Arthur · Ghana</p>
                </div>
            </footer>

            <ContactModal
                isOpen={isContactOpen}
                onClose={() => setIsContactOpen(false)}
            />
        </>
    );
}

export default Footer