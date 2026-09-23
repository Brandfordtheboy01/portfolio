import styles from './heroSection.module.css'

function HeroSection() {
    return (
        <div className={styles.herosection}>
            <nav className={styles.navbar}>
                <div className={styles.navlinks}>
                    <a href="#" className={styles.navlink}>Home</a>
                    <a href="#" className={styles.navlink}>About</a>
                    <a href="#" className={styles.navlink}>Projects</a>
                </div>
                <button className={styles.ctaButton}>
                    Get in touch
                    <span className={styles.arrow}>→</span>
                </button>
            </nav>

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