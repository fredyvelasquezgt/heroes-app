import { CustomBreadCrumbs } from '@/components/custom/CustomBreadCrumbs';
import { HeroStats } from '@/heroes/components/HeroStats';
import { CustomJumbotron } from '../../../components/custom/CustomJumbotron';
import { SearchControls } from './ui/SearchControls';

export const SearchPage = () => {
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
        </>
    )
}

export default SearchPage;