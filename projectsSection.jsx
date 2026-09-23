import styles from './projectsSection.module.css'

function Projects() {
    return (
        <div className={styles.projectssection}>
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
                                A business management and invoicing platform designed to help small businesses 
                                create invoices, manage clients and products, track sales and expenses, and keep 
                                their business organized in one place.
                            </p>
                            <button className={styles.checkItOutButton}>
                                Check it out
                                <span className={styles.arrow}>→</span>
                            </button>
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
                                I tried to build my own Multi-Commerce Platform with Nextjs, Supabase, Prisma for ORM. 
                                Features include product management, shopping cart, user authentication, and payment integration.
                            </p>
                            <button className={styles.checkItOutButton}>
                                Check it out
                                <span className={styles.arrow}>→</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects