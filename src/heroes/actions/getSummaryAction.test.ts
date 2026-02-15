import { describe, test, expect } from 'vitest';
import { getSummaryAction } from './get-summary.action';


describe('getSummaryAction', () => {
    test('should fetch summary and return complete info', async () => {

        const summary = await getSummaryAction();
        expect(summary).toStrictEqual({
            totalHeroes: expect.any(Number),
            strongestHero: expect.objectContaining({
                id: expect.any(String),
                name: expect.any(String),
                slug: expect.any(String),
                alias: expect.any(String),
                powers: expect.any(Array),
                description: 'El Último Hijo de Krypton, protector de la Tierra y símbolo de esperanza para toda la humanidad.',
                strength: 10,
                intelligence: 8,
                speed: 9,
                durability: 10,
                team: expect.any(String),
                image: '1.jpeg',
                firstAppearance: expect.any(String),
                status: expect.any(String),
                category: expect.any(String),
                universe: expect.any(String)
            }),
            smartestHero: {
                id: '2',
                name: 'Bruce Wayne',
                slug: 'bruce-wayne',
                alias: 'Batman',
                powers: [
                    'Artes marciales',
                    'Habilidades de detective',
                    'Tecnología avanzada',
                    'Sigilo',
                    'Genio táctico'
                ],
                description: 'El Caballero Oscuro de Ciudad Gótica, que utiliza el miedo como arma contra el crimen y la corrupción.',
                strength: 6,
                intelligence: 10,
                speed: 6,
                durability: 7,
                team: 'Liga de la Justicia',
                image: '2.jpeg',
                firstAppearance: '1939',
                status: 'Active',
                category: 'Hero',
                universe: 'DC'
            },
            heroCount: 18,
            villainCount: 7
        })



    })
})