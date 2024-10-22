import { render, screen, fireEvent } from "@testing-library/react";
import PokemonPagination from "./pokemonPagination";
import "@testing-library/jest-dom";
import { useRouter, useSearchParams } from "next/navigation";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
  useSearchParams: jest.fn(),
}));

describe("PokemonPagination", () => {
  const replaceMock = jest.fn();

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({ replace: replaceMock });
    (useSearchParams as jest.Mock).mockReturnValue({
      get: jest.fn((key) => {
        if (key === "limit") return "20";
        return null;
      }),
    });
  });

  it("renderizar botón de carga", () => {
    render(<PokemonPagination />);
    expect(screen.getByText("Cargar más")).toBeInTheDocument();
  });

  it("cargar pokemones cuando se presiona el botón", () => {
    render(<PokemonPagination />);

    fireEvent.click(screen.getByText("Cargar más"));

    expect(replaceMock).toHaveBeenCalledWith("/?limit=40");
  });

  it("Deshabilitar botón cuando llega al limite", () => {
    (useSearchParams as jest.Mock).mockReturnValue({
      get: jest.fn(() => "1025"),
    });

    render(<PokemonPagination />);

    const button = screen.getByText("Cargar más");
    expect(button).toBeDisabled();
  });
});
