import { useMemo } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { CustomJumbotron } from "@/components/custom/CustomJumbotron"
import { HeroStats } from "@/heroes/components/HeroStats"
import { HeroGrid } from "@/heroes/components/HeroGrid"
import { CustomPagination } from "@/components/custom/CustomPagination"
import { CustomBreadCrumbs } from "@/components/custom/CustomBreadCrumbs"
import { useSearchParams } from 'react-router';
import { useHeroSummary } from '../../hooks/useHeroSummary';
import { usePaginatedHero } from '../../hooks/usePaginatedHero';

export const HomePage = () => {


    const [searchParams, setSearchParams] = useSearchParams();
    const page = searchParams.get('page') ?? '1';
    const limit = searchParams.get('limit') ?? '6'
    const category = searchParams.get('category') ?? 'aa';



    const activeTab = searchParams.get('tab') ?? 'all';
    const selectedTab = useMemo(() => {
        const validTabs = ['all', 'favorites', 'heroes', 'villains'];
        return validTabs.includes(activeTab) ? activeTab : 'all';
    }, [activeTab])

    const { data: heroesResponse } = usePaginatedHero(+page, +limit, category)
    const { data: summary } = useHeroSummary()

    return (
        <>
            <>
                {/* Header */}
                <CustomJumbotron title="Universo de SuperHeroes"
                    description="Descubre, explora y administra super heroes y villanos " />

                <CustomBreadCrumbs currentPage="Super Heroes" />

                {/* Stats Dashboard */}
                <HeroStats />
                {/* Controls */}

                {/* Advanced Filters */}

                {/* Tabs */}
                <Tabs value={selectedTab} className="mb-8">
                    <TabsList className="grid w-full grid-cols-4">
                        <TabsTrigger value="all" onClick={() => setSearchParams((prev) => {
                            prev.set('tab', 'all')
                            prev.set('category', 'all')
                            prev.set('page', '1')

                            return prev;
                        })}>All Characters ({summary?.totalHeroes})</TabsTrigger>
                        <TabsTrigger value="favorites"
                            onClick={() => setSearchParams((prev) => {
                                prev.set('tab', 'favorites')
                                return prev;
                            })}
                            className="flex items-center gap-2">
                            Favorites (3)
                        </TabsTrigger>
                        <TabsTrigger value="heroes" onClick={() => setSearchParams((prev) => {
                            prev.set('tab', 'heroes')
                            prev.set('category', 'hero')
                            prev.set('page', '1')

                            return prev;
                        })} >Heroes ({summary?.villainCount})</TabsTrigger>
                        <TabsTrigger value="villains" onClick={() => setSearchParams((prev) => {
                            prev.set('tab', 'villains')
                            prev.set('category', 'villain')
                            prev.set('page', '1')


                            return prev;
                        })} >Villains (2)</TabsTrigger>
                    </TabsList>

                    <TabsContent value="all">
                        <HeroGrid heroes={heroesResponse?.heroes ?? []} />
                    </TabsContent>
                    <TabsContent value="favorites">
                        <h1>Favorites</h1>
                        <HeroGrid heroes={[]} />

                    </TabsContent>
                    <TabsContent value="heroes">
                        <h1>Heroes</h1>
                        <HeroGrid heroes={heroesResponse?.heroes ?? []} />

                    </TabsContent>
                    <TabsContent value="villains">
                        <h1>Villains</h1>
                        <HeroGrid heroes={heroesResponse?.heroes ?? []} />

                    </TabsContent>
                </Tabs>

                {/* Pagination */}
                <CustomPagination totalPages={heroesResponse?.pages ?? 1} />

            </>
        </>
    )
}