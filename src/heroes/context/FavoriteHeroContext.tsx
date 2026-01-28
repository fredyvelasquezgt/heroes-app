import { createContext, PropsWithChildren, useEffect, useState } from 'react';
import type { Hero } from '../types/hero.interface';

interface FavoriteHeroContext {

    //state
    favorites: Hero[];
    favoriteCount: number;

    //methods
    isFavorite: (hero: Hero) => boolean;
    toggleFavorite: (hero: Hero) => void;
}

const getFavoritesFromLocalStorage = (): Hero[] => {
    const favorites = localStorage.getItem('favorites');
    return favorites ? JSON.parse(favorites) : [];
}


export const FavoriteHeroContext = createContext({} as FavoriteHeroContext);




export const FavoriteHeroProvider = ({ children }: PropsWithChildren) => {

    const [favorites, setFavorites] = useState<Hero[]>(getFavoritesFromLocalStorage())

    const toggleFavorite = (hero: Hero) => {
        const heroExists = favorites.find(h => h.id === hero.id);

        if (heroExists) {
            const newFavorites = favorites.filter((h) => h.id !== hero.id)
            setFavorites(newFavorites)
            return
        }

        setFavorites([...favorites, hero])
    }

    const isFavorite = (hero: Hero) => {
        return favorites.some((h) => h.id === hero.id)
    }

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites])


    return (
        <FavoriteHeroContext
            value={{
                favoriteCount: favorites.length,
                favorites: favorites,
                //methods
                isFavorite: isFavorite,
                toggleFavorite: toggleFavorite
            }}
        >
            {children}
        </FavoriteHeroContext>
    )
}
