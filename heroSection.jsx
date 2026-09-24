import styles from './heroSection.module.css'

function HeroSection() {
    return (
        <div className={styles.herosection} id="home">
            <div className={styles.portfolioBackground}>Portfolio</div>

            <div className={styles.content}>
                <div className={styles.heroImageContainer}>
                    <img src="/hero.png" alt="Henry Brandford" className={styles.heroImage} />
                </div>

                <div className={styles.textContent}>
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

            <div className={styles.skills}>
                <a href="https://react.dev" target="_blank" rel="noreferrer" className={styles.skillItem} aria-label="React documentation">
                    <img src="/react.png" alt="React" className={styles.skillIcon} />
                    <span>React</span>
                </a>
                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer" className={styles.skillItem} aria-label="JavaScript documentation">
                    <img src="/JS.png" alt="JavaScript" className={styles.skillIcon} />
                    <span>JavaScript</span>
                </a>
                <a href="https://www.typescriptlang.org/docs/" target="_blank" rel="noreferrer" className={styles.skillItem} aria-label="TypeScript documentation">
                    <img src="/typescript.png" alt="TypeScript" className={styles.skillIcon} />
                    <span>TypeScript</span>
                </a>
                <a href="https://docs.python.org/3/" target="_blank" rel="noreferrer" className={styles.skillItem} aria-label="Python documentation">
                    <img src="/python.png" alt="Python" className={styles.skillIcon} />
                    <span>Python</span>
                </a>
            </div>
        </div>
    );
}

export default HeroSection;