import { CustomBreadCrumbs } from '@/components/custom/CustomBreadCrumbs';
import { HeroStats } from '@/heroes/components/HeroStats';
import { CustomJumbotron } from '../../../components/custom/CustomJumbotron';
import { SearchControls } from './ui/SearchControls';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router';
import { searchHeroesActions } from '../../actions/search-heroes.action';
import { HeroGrid } from '@/heroes/components/HeroGrid';

export const SearchPage = () => {

    const [searchParams] = useSearchParams();
    const name = searchParams.get('name') ?? undefined;
    const strength = searchParams.get('strength') ?? undefined;

    const { data: heroes = [] } = useQuery({
        queryKey: ['search', { name, strength }],
        queryFn: () => searchHeroesActions({ name, strength }),
        staleTime: 1000 * 60 * 5,
    })
    return (
        <>
            <CustomJumbotron title="Busqueda de SuperHeroes"
                description="Descubre, explora y administra super heroes y villanos " />

            <CustomBreadCrumbs currentPage='Buscador de heroes'
                breadcrumbs={
                    [{ label: 'Home1', to: '/' },
                    { label: 'Home2', to: '/' },
                    { label: 'Home3', to: '/' }]
                }

            />

            <HeroStats />

            <SearchControls />

            <HeroGrid heroes={heroes} />
        </>
    )
}

export default SearchPage;