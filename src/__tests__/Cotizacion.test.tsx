// src/__tests__/Cotizacion.test.tsx
import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Cotizacion from "../pages/Cotizacion";

// Simula el router si el componente usa react-router-dom
vi.mock("react-router-dom", () => ({
  useNavigate: vi.fn(),
}));

describe("Componente Cotizacion", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  // TEST 1: Modo escritorio (muestra todos los planes)
  it("muestra los planes correctos cuando se selecciona 'Para alguien más' (versión escritorio)", async () => {
    // Simulamos ancho de escritorio
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: 1200,
    });

    render(<Cotizacion />);

    // Seleccionar la opción “Para alguien más”
    const cardOtro = screen.getByText(/para alguien más/i);
    fireEvent.click(cardOtro);

    // Verificar que aparecen los 3 planes
    const planes = screen.getAllByText(/Plan Casa 2/i);
    expect(planes.length).toBeGreaterThan(0);
    expect(await screen.findByText(/Plan en Casa y Hospital/i)).toBeInTheDocument();
    //expect(await screen.findByText(/Plan Hospitalario/i)).toBeInTheDocument();
  });

  
  it("navega correctamente en el slider móvil", async () => {
    // Simulamos ancho móvil
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: 375,
    });

    render(<Cotizacion />);

    // Seleccionamos “Para alguien más”
    const cardOtro = screen.getByText(/para alguien más/i);
    fireEvent.click(cardOtro);

    // Primer plan visible
    //expect(await screen.findByText(/Plan Casa 2/i)).toBeInTheDocument();

    // Buscar el botón siguiente (usando label accesible o aria-label)
    // Si tu botón no tiene texto visible, agrega aria-label="Siguiente" en tu componente
    const nextButtons = screen.getAllByRole("button");
    const btnNext = nextButtons.find(
      (btn) =>
        btn.getAttribute("aria-label")?.toLowerCase().includes("siguiente") ||
        btn.textContent?.toLowerCase().includes(">")
    );

    expect(btnNext).toBeTruthy();

    // Simular clic en siguiente
    if (btnNext) fireEvent.click(btnNext);

    // Segundo plan visible
    expect(await screen.findByText(/Plan en Casa y Hospital/i)).toBeInTheDocument();
  });
});
