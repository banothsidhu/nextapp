import Link from 'next/link';
import styles from '@/app/styles/navbar.module.css';
import Image from 'next/image';
import Nav from './Nav';
const Header = () => {
    return (
       <header className={styles.main_header}>
        <div className={styles.navbar_brand}>
        <Link href="/" >
            <Image src='/netflix-logo-png-2562.png' alt='This is Logo' width={150} height={45} style={{marginTop:"10px"}} />
        </Link>
        </div>
        <Nav></Nav>
       </header>
    )
}

export default Header;
