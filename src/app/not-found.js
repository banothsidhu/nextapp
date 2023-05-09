import React from 'react'
import styles from '@/app/styles/common.module.css'
import Link from 'next/link';
import Image from 'next/image';
const NotFound = () => {
  return (
    <section className={styles.container}>
      <div className={styles.error_page} >
        <Image src='/404.svg' alt='404 Image' width={500} height={500}/>
        <Link href='/'>
          <button>Home</button>
        </Link>

      </div>
    </section>
  );
}

export default NotFound
