import styles from './projectsSection.module.css'
import { useState } from 'react'
import useScrollAnimation from './src/hooks/useScrollAnimation'

function Projects() {
    const ref = useScrollAnimation()
    const [expandedCards, setExpandedCards] = useState({})

    const toggleReadMore = (cardId) => {
        setExpandedCards(prev => ({
            ...prev,
            [cardId]: !prev[cardId]
        }))
    }

    return (
        <div ref={ref} className={`${styles.projectssection} reveal`} id="projects">
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Things i've Built</h2>
                    <p className={styles.subtitle}>Realistically here are the things i have built</p>
                </div>
                
                <div className={styles.projectsGrid}>
                    <div className={styles.projectCard}>
                        <img 
                            src="/bestinvoice.png" 
                            alt="BestInvoice App" 
                            className={styles.projectImage}
                        />
                        <div className={styles.projectContent}>
                            <h3 className={styles.projectTitle}>Bestinvoice App</h3>
                            <p className={styles.projectDescription}>
                                {expandedCards.bestinvoice 
                                    ? "A business management and invoicing platform designed to help small businesses create invoices, manage clients and products, track sales and expenses, and keep their business organized in one place. This was primarily a hobby project where I experimented with AI-assisted coding to explore how artificial intelligence could enhance the development process and improve productivity."
                                    : "A business management and invoicing platform designed to help small businesses create invoices, manage clients and products, track sales and expenses, and keep their business organized in one place."}
                            </p>
                            <button 
                                className={styles.readMoreButton}
                                onClick={() => toggleReadMore('bestinvoice')}
                            >
                                {expandedCards.bestinvoice ? 'Read less' : 'Read more'}
                            </button>
                            <a href="https://bestinvoiceapp.netlify.app/" target="_blank" rel="noopener noreferrer" className={styles.checkItOutButton}>
                                Check it out
                                <span className={styles.arrow}>→</span>
                            </a>
                        </div>
                    </div>
                    
                    <div className={styles.projectCard}>
                        <img 
                            src="/myecommerce.png" 
                            alt="An Ecommerce Platform" 
                            className={styles.projectImage}
                        />
                        <div className={styles.projectContent}>
                            <h3 className={styles.projectTitle}>An Ecommerce Platform</h3>
                            <p className={styles.projectDescription}>
                                {expandedCards.ecommerce 
                                    ? "I built this multi-commerce platform focusing primarily on frontend development, using Next.js for the user interface and modern React patterns. The project features a clean, responsive design with product browsing, shopping cart functionality, and user authentication. While I explored backend integration with Supabase and Prisma ORM, my main emphasis was on creating an intuitive and visually appealing shopping experience."
                                    : "I built this multi-commerce platform focusing primarily on frontend development, using Next.js for the user interface and modern React patterns. The project features a clean, responsive design with product browsing, shopping cart functionality, and user authentication."}
                            </p>
                            <button 
                                className={styles.readMoreButton}
                                onClick={() => toggleReadMore('ecommerce')}
                            >
                                {expandedCards.ecommerce ? 'Read less' : 'Read more'}
                            </button>
                            <a href="https://my-ecommerce-eight-rust.vercel.app/" target="_blank" rel="noopener noreferrer" className={styles.checkItOutButton}>
                                Check it out
                                <span className={styles.arrow}>→</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects