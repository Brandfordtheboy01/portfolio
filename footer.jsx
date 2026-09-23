import styles from './footer.module.css'

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.brandford}>Brandford</div>
            <div className={styles.socialLinks}>
                <a href="https://github.com/Brandfordtheboy01" target="_blank" rel="noopener noreferrer" className={styles.link}>github</a>
                <a href="https://www.linkedin.com/in/henry-brandford-arthur-junior-3a86053aa" target="_blank" rel="noopener noreferrer" className={styles.link}>linkedin</a>
                <a href="mailto:hbrandart@gmail.com" className={styles.link}>email</a>
            </div>
            <div className={styles.copyright}>
                <p>2026 Henry Brandford-Arthur</p>
                <p>Designed & built by Henry Brandford-Arthur · Ghana</p>
            </div>
        </footer>
    );
}

export default Footer