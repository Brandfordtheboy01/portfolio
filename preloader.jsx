import styles from './preloader.module.css'
import { useState, useEffect } from 'react'

function Preloader() {
    const [isVisible, setIsVisible] = useState(true)
    const [isFading, setIsFading] = useState(false)

    useEffect(() => {
        const fadeTimer = setTimeout(() => {
            setIsFading(true)
        }, 2000)

        const removeTimer = setTimeout(() => {
            setIsVisible(false)
        }, 2800)

        return () => {
            clearTimeout(fadeTimer)
            clearTimeout(removeTimer)
        }
    }, [])

    if (!isVisible) return null

    return (
        <div className={`${styles.preloader} ${isFading ? styles.fadeOut : ''}`}>
            <div className={styles.logoContainer}>
                <img src="/preloaderLogo.png" alt="Loading..." className={styles.logo} />
            </div>
        </div>
    )
}

export default Preloader