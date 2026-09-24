import { useEffect, useRef } from 'react'
import styles from './finalSheet.module.css'

function FinalSheet({ onVisibleChange }) {
    const sectionRef = useRef(null)

    useEffect(() => {
        const section = sectionRef.current
        if (!section || !onVisibleChange) return

        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0]
                onVisibleChange(entry.isIntersecting)
            },
            {
                threshold: 0.6,
            }
        )

        observer.observe(section)

        return () => observer.disconnect()
    }, [onVisibleChange])

    return (
        <section ref={sectionRef} className={styles.finalSheet} aria-label="Final brand sheet">
            <div className={styles.logoContainer}>
                <img src="/preloaderLogo.png" alt="Brandford logo" className={styles.logo} />
            </div>
            <div className={styles.brandford}>Brandford</div>
        </section>
    )
}

export default FinalSheet
