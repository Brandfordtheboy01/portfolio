import styles from "./skillsSection.module.css"

function Skills() {
    return (
        <div className={styles.skillssection}>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>Skills</h2>
                
                <div className={styles.skillsGrid}>
                    <div className={styles.skillCard}>
                        <img src="/react.png" alt="React" className={styles.skillIcon} />
                        <h3 className={styles.skillName}>React</h3>
                        <p className={styles.description}>
                            I use React to build modern, responsive user interfaces with component-based architecture.
                        </p>
                    </div>
                    <div className={styles.skillCard}>
                        <img src="/JS.png" alt="JavaScript" className={styles.skillIcon} />
                        <h3 className={styles.skillName}>JavaScript</h3>
                        <p className={styles.description}>
                            I use JavaScript to build interactive web applications and enhance user experience.
                        </p>
                    </div>
                    <div className={styles.skillCard}>
                        <img src="/typescript.png" alt="TypeScript" className={styles.skillIcon} />
                        <h3 className={styles.skillName}>TypeScript</h3>
                        <p className={styles.description}>
                            I use TypeScript to write type-safe code and improve code quality and maintainability.
                        </p>
                    </div>
                    <div className={styles.skillCard}>
                        <img src="/backend.png" alt="Backend Development" className={styles.skillIcon} />
                        <h3 className={styles.skillName}>Backend Development</h3>
                        <p className={styles.description}>
                            I'm currently focused on backend development, creating robust APIs and database systems.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills