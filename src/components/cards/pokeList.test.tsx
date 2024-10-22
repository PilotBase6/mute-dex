import React from 'react';
import { render, screen } from '@testing-library/react';
import PokeList from './pokeList';
import { PokeListProps } from '@/interfaces/pokeList';

const mockData: PokeListProps = {
    data: {
        results: [
            { id: 1, name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
            { id: 2, name: 'ivysaur', url: 'https://pokeapi.co/api/v2/pokemon/2/' },
            { id: 3, name: 'venusaur', url: 'https://pokeapi.co/api/v2/pokemon/3/' },
        ],
    },
};

describe('PokeList', () => {
    it('renderizar la lista de Pokémon', () => {
        render(<PokeList data={mockData.data} />);
        expect(screen.getByText('bulbasaur')).toBeInTheDocument();
        expect(screen.getByText('ivysaur')).toBeInTheDocument();
        expect(screen.getByText('venusaur')).toBeInTheDocument();
    });

    it('renderizar las imágenes de los Pokémon', () => {
        render(<PokeList data={mockData.data} />);
        const images = screen.getAllByRole('img');
        expect(images).toHaveLength(3);
        expect(images[0]).toHaveAttribute('src', expect.stringContaining('1.png'));
        expect(images[1]).toHaveAttribute('src', expect.stringContaining('2.png'));
        expect(images[2]).toHaveAttribute('src', expect.stringContaining('3.png'));
    });

    it('renderizar los enlaces correctos para cada Pokémon', () => {
        render(<PokeList data={mockData.data} />);
        const links = screen.getAllByRole('link');
        expect(links).toHaveLength(3);
        expect(links[0]).toHaveAttribute('href', '/pokemon/1');
        expect(links[1]).toHaveAttribute('href', '/pokemon/2');
        expect(links[2]).toHaveAttribute('href', '/pokemon/3');
    });

    it('renderizar el componente CardPokemon para cada Pokémon', () => {
        render(<PokeList data={mockData.data} />);
        const cards = screen.getAllByRole('listitem');
        expect(cards).toHaveLength(3);
    });
});