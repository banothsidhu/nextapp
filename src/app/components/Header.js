import React from 'react'
import styles from '@/app/styles/navbar.module.css'
import { headers } from 'next/dist/client/components/headers'
const Header = () => {
    return (
       <header className={styles.main_header}>
        <div className={styles.navbar_brand}>

        </div>
        <Link href="/">
            
        </Link>
       </header>
    )
}

export default Header
