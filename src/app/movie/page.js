import React from 'react'
import Link from 'next/link'
export const metadata = {
    title: "Movie",
}
const page = () => {
    return (


        <div>
            Iam From Movie Page
            <Link href={'/movie/asdf'}>
                Go To
            </Link>
        </div>

    )
}

export default page
