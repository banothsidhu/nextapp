import Image from 'next/image'
import styles from '@/app/styles/common.module.css'
import Link from 'next/link'
const MovieCard = (curlElem) => {
    const { id, type, title, synopsis } = curlElem.jawSummary

    return (
        <>
            <div className={styles.card}>
                <div className={styles.card_image}>
                    <Image src={curlElem.jawSummary.backgroundImage.url} alt='Image' width={100} height={100}></Image>
                </div>
                <div className={styles.card_data}>
                    <h2>{title}</h2>
                    <p>{synopsis}</p>
                    <Link href={`/movie/${id}`}>Read More</Link>
                </div>
            </div></>
    )
}

export default MovieCard
