import { fetchPokeAPI, fetchPokeInfo } from './fetchPokeAPI';

describe('fetchPokeAPI', () => {
    it('lista de pokemon con limite por default', async () => {
        const data = await fetchPokeAPI({});
        expect(data.results).toBeInstanceOf(Array);
        expect(data.limit).toBe(20);
    });

    it('lista de pokemon con límite especificado', async () => {
        const data = await fetchPokeAPI({ limit: 50 });
        expect(data.results).toBeInstanceOf(Array);
        expect(data.limit).toBe(50);
    });

    it('manejar errores en la petición', async () => {
        global.fetch = jest.fn(() =>
            Promise.reject(new Error('API is down'))
        ) as jest.Mock;

        const data = await fetchPokeAPI({});
        expect(data.results).toEqual([]);
        expect(data.error).toBeDefined();
    });
});

describe('fetchPokeInfo', () => {
    it('manejar errores de la petición a la API', async () => {
        global.fetch = jest.fn(() =>
            Promise.reject(new Error('API is down'))
        ) as jest.Mock;

        const data = await fetchPokeInfo('1');
        expect(data.name).toBe('');
        expect(data.image).toBe('');
        expect(data.abilities).toEqual([]);
        expect(data.types).toEqual([]);
        expect(data.height).toBe(0);
        expect(data.weight).toBe(0);
        expect(data.error).toBeDefined();
    });
});