import styles from "./skillsSection.module.css"
import useScrollAnimation from './src/hooks/useScrollAnimation'

function Skills() {
    const ref = useScrollAnimation()

    return (
        <div ref={ref} className={`${styles.skillssection} reveal`} id="skills">
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>Skills</h2>
                
                <div className={styles.skillsGrid}>
                    <a href="https://react.dev" target="_blank" rel="noreferrer" className={styles.skillCard} aria-label="React documentation">
                        <img src="/react.png" alt="React" className={styles.skillIcon} />
                        <h3 className={styles.skillName}>React</h3>
                        <p className={styles.description}>
                            I use React to build modern, responsive user interfaces with component-based architecture.
                        </p>
                    </a>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer" className={styles.skillCard} aria-label="JavaScript documentation">
                        <img src="/JS.png" alt="JavaScript" className={styles.skillIcon} />
                        <h3 className={styles.skillName}>JavaScript</h3>
                        <p className={styles.description}>
                            I use JavaScript to build interactive web applications and enhance user experience.
                        </p>
                    </a>
                    <a href="https://www.typescriptlang.org/docs/" target="_blank" rel="noreferrer" className={styles.skillCard} aria-label="TypeScript documentation">
                        <img src="/typescript.png" alt="TypeScript" className={styles.skillIcon} />
                        <h3 className={styles.skillName}>TypeScript</h3>
                        <p className={styles.description}>
                            I use TypeScript to write type-safe code and improve code quality and maintainability.
                        </p>
                    </a>
                    <a href="https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs" target="_blank" rel="noreferrer" className={styles.skillCard} aria-label="Backend development documentation">
                        <img src="/backend.png" alt="Backend Development" className={styles.skillIcon} />
                        <h3 className={styles.skillName}>Backend Development</h3>
                        <p className={styles.description}>
                            I'm currently focused on backend development, creating robust APIs and database systems.
                        </p>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Skills