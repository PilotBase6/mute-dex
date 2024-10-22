import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchButton from './searchButton';
import { useRouter } from 'next/navigation';

jest.mock('next/navigation', () => ({
    useRouter: jest.fn(),
}));

describe('SearchButton', () => {
    let replaceMock: jest.Mock;

    beforeEach(() => {
        replaceMock = jest.fn();
        (useRouter as jest.Mock).mockReturnValue({
            replace: replaceMock,
        });
    });

    it('mostrar y ocultar la searchBar', () => {
        render(<SearchButton />);
        const button = screen.getByRole('button', { name: /toggle search/i });
        fireEvent.click(button);
        expect(screen.getByLabelText('search-bar')).toHaveClass("w-64 h-12");
        fireEvent.click(button);
        expect(screen.getByLabelText('search-bar')).toHaveClass("w-14 h-14");
    });

    it('actualizar la URL al buscar un pokemon', () => {
        render(<SearchButton />);
        const input = screen.getByPlaceholderText('Search');
        fireEvent.change(input, { target: { value: 'Pikachu' } });
        expect(replaceMock).toHaveBeenCalledWith('/?search=Pikachu');
    });

    it('rotar el botón al hacer click', () => {
        render(<SearchButton />);
        const button = screen.getByRole('button', { name: /toggle search/i });
        fireEvent.click(button);
        expect(button).toHaveStyle('transform: rotate(40deg)');
        fireEvent.click(button);
        expect(button).toHaveStyle('transform: rotate(0deg)');
    });

    it('cambiar el color del botón al hacer click', () => {
        render(<SearchButton />);
        const button = screen.getByRole('button', { name: /toggle search/i });
        fireEvent.click(button);
        expect(button).toHaveClass('border-blue-700');
        fireEvent.click(button);
        expect(button).toHaveClass('border-red-700');
    });

    it('cambiar el color del ícono al hacer clic', () => {
        render(<SearchButton />);
        const button = screen.getByRole('button', { name: /toggle search/i });
        const svg = button.querySelector('svg');
        fireEvent.click(button);
        expect(svg).toHaveClass('fill-[rgb(29,78,216)]');
        fireEvent.click(button);
        expect(svg).toHaveClass('fill-[rgb(185,28,28)]');
    });
});