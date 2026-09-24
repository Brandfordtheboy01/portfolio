import styles from './gallerySection.module.css'
import AccordionGallery from './AccordionGallery'
import './AccordionGallery.css'

function GallerySection() {
    const galleryItems = [
        { 
            image: '/amali.jpeg', 
            label: 'Amalitech Office', 
            subtext: 'My first day at the office',
            link: undefined,
            alt: 'Henry on his first day at Amalitech'
        },
        { 
            image: '/intern.jpeg', 
            label: 'First Day at Amalitech', 
            subtext: 'The office environment',
            link: undefined,
            alt: 'The Amalitech office environment'
        },
        { 
            image: '/active.jpeg', 
            label: 'Me at Work', 
            subtext: 'Working on projects',
            link: undefined,
            alt: 'Henry working at his desk'
        }
    ]

    return (
        <div className={styles.gallerysection} id="gallery">
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>My Journey at Amalitech</h2>
                    <p className={styles.subtitle}>A glimpse into my internship experience</p>
                </div>
                
                <div className={styles.galleryContainer}>
                    <AccordionGallery
                        items={galleryItems}
                        defaultIndex={0}
                        expandRatio={0.5}
                        trigger="click"
                        height={450}
                        showLabels={true}
                        grayscale={true}
                    />
                </div>
            </div>
        </div>
    );
}

export default GallerySection