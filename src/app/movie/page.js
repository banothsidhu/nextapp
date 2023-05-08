import React from 'react'
import Link from 'next/link'
export const metadata = {
    title: "Movie",
}

const Movie = () => {
 
    const url = env.process.API_URL
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': env.process.RAPID_KEY,
            'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
          }
    };

    return (


        <div>
            Iam From Movie Page
            <Link href={'/movie/asdf'}>
                Go To
            </Link>
        </div>

    )
}

export default Movie
