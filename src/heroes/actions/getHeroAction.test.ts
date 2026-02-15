import { describe, test, expect } from 'vitest';
import { getHeroAction } from './get-hero.action';


describe('getHeroAction', () => {
    test('Should fetch hero data and return with complete image URL', async () => {
        const result = await getHeroAction('clark-kent');
        const resultImageUrl = result.image;

        expect(result.image).toContain('http')
        expect(result).toStrictEqual({

            id: expect.any(String),
            name: 'Clark Kent',
            slug: 'clark-kent',
            alias: 'Superman',
            powers: [
                'Súper fuerza',
                'Vuelo',
                'Visión de calor',
                'Visión de rayos X',
                'Invulnerabilidad',
                'Súper velocidad'
            ],
            description: 'El Último Hijo de Krypton, protector de la Tierra y símbolo de esperanza para toda la humanidad.',
            strength: 10,
            intelligence: 8,
            speed: 9,
            durability: 10,
            team: 'Liga de la Justicia',
            image: 'http://localhost:3001/images/1.jpeg',
            firstAppearance: '1938',
            status: 'Active',
            category: 'Hero',
            universe: 'DC'

        })
    })

    test('Should throw an error if hero is not found', async () => {
        const idSlug = 'batman-2';
        const result = await getHeroAction(idSlug).catch(error => {
            expect(error).toBeDefined()
            expect(error.message).toContain('404')
        })

        expect(result).toBeUndefined()

    })
})