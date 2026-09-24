import styles from './educationSection.module.css'
import gctuLogo from './src/assets/gctu.png'
import useScrollAnimation from './src/hooks/useScrollAnimation'

function Education () {
    const ref = useScrollAnimation()

    return(
        <div ref={ref} className={`${styles.educationSection} reveal`} id="education">
            <div className={styles.leftColumn}>
                <img src={gctuLogo} alt="GCTU Logo" className={styles.logo} />
                <p className={styles.date}>2024 - Present</p>
                <h3 className={styles.schoolName}>Ghana Communication Technology University</h3>
                <p className={styles.degree}>BSc. Computer Science Level 300</p>
            </div>
            <div className={styles.rightColumn}>
                <h2 className={styles.heading}>Education</h2>
                <p className={styles.description}>
                    I'm currently studying Computer Science at Ghana Communication Technology University, 
                    where I'm building a strong foundation in software development, algorithms, and 
                    system design.
                </p>
                <p className={styles.description}>
                    My coursework includes data structures, web development, and database management, 
                    preparing me for a career in software engineering.
                </p>
            </div>
        </div>
    );
}

export default Education