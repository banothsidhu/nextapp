import React from 'react'
import Link from 'next/link'
import MovieCard from '../components/MovieCard'
import styles from '@/app/styles/common.module.css'
export const metadata = {
    title: "Movie",
}

const Movie = async () => {

    const url = process.env.API_URL
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': process.env.RAPID_KEY,
            'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
        }
    };
    const res = await fetch(url, options)
    const data = await res.json()
    const main_data = data.titles;
    console.log(data);
    return (
        <>
            <section className={styles.movieSection}>
                <div className={styles.container}>
                    <h1>Movies and Series</h1>
                    {
                        main_data.map((curlElem) => {
                            return <MovieCard key={curlElem.jawSummary.id} {...curlElem} />
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default Movie
