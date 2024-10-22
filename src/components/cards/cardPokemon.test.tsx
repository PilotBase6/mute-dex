import { render, screen } from '@testing-library/react';
import CardPokemon from './cardPokemon';

describe('CardPokemon', () => {
    const mockProps = {
        name: 'Pikachu',
        image: 'https://example.com/pikachu.png',
        linkInfo: 'https://example.com/pikachu',
    };

    it('renderizar CardPokemon', () => {
        render(<CardPokemon {...mockProps} />);
        expect(screen.getByText('Pikachu')).toBeInTheDocument();
    });

    it('mostrar imagen correcta', () => {
        render(<CardPokemon {...mockProps} />);
        const imgElement = screen.getByAltText('Pikachu');
        expect(imgElement).toBeInTheDocument();
        expect(imgElement).toHaveAttribute('src', mockProps.image);
    });

    it('test link', () => {
        render(<CardPokemon {...mockProps} />);
        const linkElement = screen.getByRole('link');
        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveAttribute('href', mockProps.linkInfo);
    });

    it('estilos hover cardPokemon', () => {
        render(<CardPokemon {...mockProps} />);
        const imgElement = screen.getByAltText('Pikachu');
        expect(imgElement).toHaveClass('group-hover:scale-[120%]');
    });

    it('Nombre en mayuscula', () => {
        render(<CardPokemon {...mockProps} />);
        const nameElement = screen.getByText('Pikachu');
        expect(nameElement).toHaveClass('uppercase');
    });
});