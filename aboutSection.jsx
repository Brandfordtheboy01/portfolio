import styles from './aboutSection.module.css'
import { useScrollAnimation } from './src/hooks/useScrollAnimation'

function About() {
    const sectionRef = useScrollAnimation()

    return (
        <div className={styles.aboutsection} id="about" ref={sectionRef}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.leftColumn}>
                        <div className={styles.section} data-animation="slideInLeft">
                            <h3 className={styles.sectionTitle}>Education</h3>
                            <p className={styles.sectionContent}>
                                I'm Henry Brandford, a computer science student passionate about creating beautiful, 
                                functional web applications. Currently pursuing my degree with focus on software development 
                                and modern web technologies.
                            </p>
                        </div>
                        
                        <div className={styles.section} data-animation="slideInLeft">
                            <h3 className={styles.sectionTitle}>Career</h3>
                            <p className={styles.sectionContent}>
                                I'm currently an intern gaining hands-on experience in frontend and backend development. 
                                Working on real-world projects and collaborating with experienced developers to enhance 
                                my technical skills and industry knowledge.
                            </p>
                        </div>
                    </div>
                    
                    <div className={styles.rightColumn}>
                        <div className={styles.section} data-animation="slideInRight">
                            <h3 className={styles.sectionTitle}>What I do the Most</h3>
                            <p className={styles.sectionContent}>
                                When I'm not coding, you can find me exploring new technologies, contributing to open-source 
                                projects, or reading about the latest developments in the tech industry. I love learning 
                                and growing as a developer.
                            </p>
                        </div>
                        
                        <div className={styles.section} data-animation="slideInRight">
                            <h3 className={styles.sectionTitle}>What I do the Most</h3>
                            <p className={styles.sectionContent}>
                                I enjoy building personal projects, solving coding challenges, and sharing knowledge with 
                                the developer community. Continuous learning and improvement are at the core of my 
                                professional journey.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;