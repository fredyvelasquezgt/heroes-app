import React from 'react'
import { useParams } from 'react-router'

export const HeroPage = () => {

    const { idSlug = '' } = useParams()

    return (
        <div>
            <h1>Hero Page</h1>
        </div>
    )
}
