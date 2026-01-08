import { useState } from 'react';
import { useQuery } from "@tanstack/react-query";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { CustomJumbotron } from "@/components/custom/CustomJumbotron"
import { HeroStats } from "@/heroes/components/HeroStats"
import { HeroGrid } from "@/heroes/components/HeroGrid"
import { CustomPagination } from "@/components/custom/CustomPagination"
import { CustomBreadCrumbs } from "@/components/custom/CustomBreadCrumbs"
import { getHeroesByPageAction } from '../../actions/get-heroes-by-page.action';
import { useSearchParams } from 'react-router';

export const HomePage = () => {


    const [searchParams, setSearchParams] = useSearchParams()l




    const [activeTab, setActiveTab] = useState<
        'all' | 'favorites' | 'heroes' | 'villains'
    >('all')

    const { data: heroesResponse } = useQuery({
        queryKey: ['heroes'],
        queryFn: () => getHeroesByPageAction(),
        staleTime: 1000 * 60 * 5,
    })


    // useEffect(() => {
    //     getHeroesByPage().then()
    // }, [])

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
                <Tabs value={activeTab} className="mb-8">
                    <TabsList className="grid w-full grid-cols-4">
                        <TabsTrigger value="all" onClick={() => setActiveTab('all')}>All Characters (16)</TabsTrigger>
                        <TabsTrigger value="favorites"
                            onClick={() => setActiveTab('favorites')}
                            className="flex items-center gap-2">
                            Favorites (3)
                        </TabsTrigger>
                        <TabsTrigger value="heroes" onClick={() => setActiveTab('heroes')} >Heroes (12)</TabsTrigger>
                        <TabsTrigger value="villains" onClick={() => setActiveTab('villains')} >Villains (2)</TabsTrigger>
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
                        <HeroGrid heroes={[]} />

                    </TabsContent>
                    <TabsContent value="villains">
                        <h1>Villains</h1>
                        <HeroGrid heroes={[]} />

                    </TabsContent>
                </Tabs>

                {/* Pagination */}
                <CustomPagination totalPages={8} />

            </>
        </>
    )
}