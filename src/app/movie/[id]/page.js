import React from 'react'
import styles from '@/app/styles/common.module.css'
import Image from 'next/image'
export const metadata = {
    title:'Movie Data'
  }
const page = async ({ params }) => {
    const id = params.id

    const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': process.env.RAPID_KEY,
            'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
        }
    }
    const res = await fetch(url, options)
    const data = await res.json()
    const main_data = data[0].details

    const creatorsList = main_data.creators.map((creators, index) => {
        return (
            <li key={index}>{creators.name}</li>
        )
    })

    const genreList = main_data.genres.map((genre, index) => {
        return (
            <li key={index}>{genre.name}</li>
        )
    })

    const maturityRating = main_data.maturity.rating ? main_data.maturity.rating.value : ''

    return (
        <div className={styles.container}>
            <h2 className={styles.movie_title}>Netflix \ <span >{main_data.type}</span></h2>
            <div className={styles.card_section}>
                <div>
                    <Image src={main_data.backgroundImage.url} alt={main_data.title} width={600} height={300} />
                </div>
                <div>
                    <h1 style={{ color: 'white', fontSize: '2.5rem', marginBottom: '1rem' }}>{main_data.title}</h1>
                    <p style={{ color: 'gray', fontSize: '1.5rem', lineHeight: '1.5' }}>
                        {main_data.synopsis}
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', margin: '2rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', marginTop: '1rem' }}>
                            <span style={{ color: 'gray', fontWeight: 'bold', marginRight: '1rem' }}>Maturity Rating:</span>
                            <span style={{ color: 'red', fontWeight: 'bold' }}>{maturityRating}</span>
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', margin: '2rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', marginTop: '1rem' }}>
                            <span style={{ color: 'gray', fontWeight: 'bold', marginRight: '1rem' }}>Creators:</span>
                            <span style={{ color: 'red', fontWeight: 'bold' }}>{creatorsList}</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default page
