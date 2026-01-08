import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardContent } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Heart, Eye, Zap, Brain, Gauge, Shield } from 'lucide-react'
import { HeroGridCard } from './HeroGridCard'
import { Hero } from '../types/hero.interface';
import { HeroesResponse } from '../types/get-heroes-response';

interface Props {
    heroes: Hero[]
}

export const HeroGrid = ({ heroes }: Props) => {


    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {heroes.map(hero => (
                <HeroGridCard
                    id={hero.id}
                    hero={hero}
                />
            ))
            }
        </div>
    )
}


