import React from 'react'
import { HeroesList } from '../heroes/HeroesList'

export const MarvelScreen = () => {
    return (
        <>
            <h1>Marvel Screen</h1>
            <HeroesList
                publisher="Marvel Comics"
            />
        </>
    )
}
