import styles from './contactSection.module.css'

function Contact(){
    return(
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
                    <a href="mailto:hbrandart@gmail.com" className={styles.button}>
                        <span>Get in touch</span>
                        <span className={styles.arrowIcon}>→</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Contact