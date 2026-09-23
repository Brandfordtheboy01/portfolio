import styles from "./experienceSection.module.css"

function Experience() {
    return (
        <div className={styles.experiencesection}>
            <div className={styles.container}>
                <div className={styles.leftSide}>
                    <h2 className={styles.experience}>Experience</h2>
                    <p className={styles.description}>
                        I'm currently an intern at AmaliTech, where I'm working on backend development projects.
                        My role involves designing and implementing RESTful APIs, optimizing database queries,
                        and collaborating with the development team to deliver high-quality software solutions.
                        I'm gaining valuable experience in modern backend technologies and best practices.
                    </p>
                </div>
                <div className={styles.rightSide}>
                    <img 
                        src="/amalitechlogo.png" 
                        alt="AmaliTech" 
                        className={styles.companyLogo}
                    />
                    <p className={styles.date}>Sep 2026 - Present</p>
                </div>
            </div>
        </div>
    )
}

export default Experience