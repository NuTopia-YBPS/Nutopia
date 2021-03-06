import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { toSlug } from '../functions'

//stylesheets
import styles from '../styles/components/HomeGallery.module.scss'
//data
import HomeGalleryImages from '../data/HomeGalleryImages'

const HomeGallery = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const length  = HomeGalleryImages.length

    const nextSlide = () => {
        setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1)
    }

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1)
    }
    
    return (<div className={styles.gallery}>
        <div onClick={prevSlide} className={styles.prev}></div>
        <div onClick={nextSlide} className={styles.next}></div>
        {HomeGalleryImages.map((image, index) => {
            return (
                <div key={index} className={styles.slide_container}>
                    <div className={styles.vignette}></div>
                    <div className={index === currentSlide ? `${styles.image_container} ${styles.active}` : `${styles.image_container}`}>
                        {index === currentSlide && (
                            <div className={styles.image}>
                                <Image
                                    key={index}
                                    src={image.src}
                                    alt={image.alt}
                                    placeholder={"blur"}
                                    layout={"responsive"}
                                />
                            </div>
                        )}
                    </div>
                    {index === currentSlide && (<>
                        <h2 id={toSlug(image.title)} className={styles.image_title}>{image.title}</h2>
                        <div className={styles.description} key={`${index}_text`}>
                            <h2 id={toSlug(`article ${image.title}`)}>{image.title}</h2>
                            <p>{image.description}</p>
                        </div>
                        <Link href="/"><a className={styles.read_more_button} role="link" aria-label={`Mini Gallery ${image.title} Read More Linked Button`}>Read More</a></Link>
                    </>)}
                </div>
            )
        })}
    </div>)
}

export default HomeGallery