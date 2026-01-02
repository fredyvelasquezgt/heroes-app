import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardContent } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Heart, Eye, Zap, Brain, Gauge, Shield } from 'lucide-react'
import { HeroGridCard } from './HeroGridCard'

export const HeroGrid = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {/* Hero Card 1 - Superman */}
            <HeroGridCard />

        </div>

    )
}
