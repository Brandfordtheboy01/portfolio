import { useState } from 'react'
import styles from './contactSection.module.css'
import ContactModal from './ContactModal'

function Contact(){
    const [isContactOpen, setIsContactOpen] = useState(false)

    return(
        <>
            <div className={styles.contactSection} id="contact">
                <div className={styles.leftColumn}>
                    <h2 className={styles.letsConnect}>Let's Connect</h2>
                    <h1 className={styles.headline}>
                        Got Something in Mind? Let's Build It.
                    </h1>
                </div>
                <div className={styles.rightColumn}>
                    <div className={styles.contentRow}>
                        <p className={styles.description}>
                            I'm always open to meeting new people, learning from 
                            others, and exploring opportunities to grow as a developer.
                        </p>
                        <button type="button" className={styles.button} onClick={() => setIsContactOpen(true)}>
                            <span>Get in touch</span>
                            <span className={styles.arrowIcon}>→</span>
                        </button>
                    </div>
                </div>
            </div>

            <ContactModal
                isOpen={isContactOpen}
                onClose={() => setIsContactOpen(false)}
            />
        </>
    );
}

export default Contact