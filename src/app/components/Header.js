import Link from 'next/link';
import styles from '@/app/styles/navbar.module.css'
import Image from 'next/image'

const Header = () => {
    return (
       <header className={styles.main_header}>
        <div className={styles.navbar_brand}>

        </div>
        <Link href="/">
            <Image src='/logo.png'width={150} height={30}/>
        </Link>
       </header>
    )
}

export default Header
