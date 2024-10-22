import { render, screen, fireEvent } from "@testing-library/react";
import LoadButton from "./loadButton";

import "@testing-library/jest-dom";
import "jest-environment-jsdom";

describe("LoadButton", () => {
  const loadMoreMock = jest.fn();

  beforeEach(() => {
    loadMoreMock.mockClear();
  });

  it("renderizar children", () => {
    render(<LoadButton loadMore={loadMoreMock}>Cargar más</LoadButton>);
    expect(screen.getByText("Cargar más")).toBeInTheDocument();
  });

  it("click cargar más", () => {
    render(<LoadButton loadMore={loadMoreMock}>Cargar más</LoadButton>);
    fireEvent.click(screen.getByText("Cargar más"));
    expect(loadMoreMock).toHaveBeenCalledTimes(1);
  });

  it("deshabilitar botón", () => {
    render(
      <LoadButton loadMore={loadMoreMock} disabled={true}>
        Cargar más
      </LoadButton>
    );
    const button = screen.getByText("Cargar más");
    expect(button).toBeDisabled();
  });

  it("habilitar botón", () => {
    render(
      <LoadButton loadMore={loadMoreMock} disabled={false}>
        Cargar más
      </LoadButton>
    );
    const button = screen.getByText("Cargar más");
    expect(button).not.toBeDisabled();
  });

  it("Efecto de grises cuando se deshabilita el botón", () => {
    render(
      <LoadButton loadMore={loadMoreMock} disabled={true}>
        Cargar más
      </LoadButton>
    );
    const button = screen.getByText("Cargar más");
    expect(button).toHaveClass("bg-gray-400");
  });

  it("estilos bg waves cuando el botón esta habilitado", () => {
    render(
      <LoadButton loadMore={loadMoreMock} disabled={false}>
        Cargar más
      </LoadButton>
    );
    const button = screen.getByText("Cargar más");
    expect(button).toHaveClass("animate-waves");
  });
});
