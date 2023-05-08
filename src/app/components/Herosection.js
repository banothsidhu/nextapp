
import heroStyles from '@/app/styles/herosection.module.css';
import styles from '@/app/styles/common.module.css'
import { poppins } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
const Herosection = () => {
    return (
        <main className={heroStyles.main_section}>
            <div className={styles.container}>
                <div className={styles.grid_two_section}>
                    <div className={heroStyles.hero_content}>
                        <h1>Netflix Clone</h1>
                        <p>From award-winning dramas to blockbuster action movies, we've got you covered. Browse our selection of the latest and greatest movies, and find your new favorite today.
                        </p>
                        <Link href="/movie">
                            <button >Explore Movies</button>
                        </Link>
                    </div>
                    <div className={heroStyles.hero_image}>
                        <Image src={'/hero.svg'} width={650} height={650}></Image>
                    </div>
                </div>
            </div>
        </main>
    )
}
//
export default Herosection
