
import heroStyles from '@/app/styles/herosection.module.css';
import styles from '@/app/styles/common.module.css'
import { poppins } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
const Herosection = ({title,imageURL, imageHeight, imageWidth,data}) => {
    return (
        <main className={heroStyles.main_section}>
            <div className={styles.container}>
                <div className={styles.grid_two_section}>
                    <div className={heroStyles.hero_content}>
                        <h1>{title}</h1>
                        <p>{data}
                        </p>
                        <Link href="/movie">
                            <button >Explore Movies</button>
                        </Link>
                    </div>
                    <div className={heroStyles.hero_image} >
                        <Image src={imageURL} width={imageWidth} height={imageHeight} draggable="false" alt='HeroImage'></Image>
                    </div>
                </div>
            </div>
        </main>
    )
}
//
export default Herosection
