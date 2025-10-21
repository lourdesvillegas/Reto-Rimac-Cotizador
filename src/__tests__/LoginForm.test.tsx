import { describe, test, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import LoginForm from "../components/LoginForm";

// Mock global de fetch (se redefine en cada test)
global.fetch = vi.fn();

// Mock de react-router-dom
const mockNavigate = vi.fn();

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual<typeof import("react-router-dom")>("react-router-dom");
  return {
    ...actual,
    useNavigate: () => mockNavigate, // mock persistente y editable
  };
});

describe("LoginForm component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test("debe mostrar error si los campos no son numéricos", async () => {
    render(
      <MemoryRouter>
        <LoginForm />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByPlaceholderText(/nro\. de documento/i), {
      target: { value: "ABC123" },
    });
    fireEvent.change(screen.getByPlaceholderText(/celular/i), {
      target: { value: "999XYZ" },
    });

    const checkboxes = screen.getAllByRole("checkbox");
    checkboxes.forEach((checkbox) => fireEvent.click(checkbox));

    fireEvent.click(screen.getByRole("button", { name: /cotiza aquí/i }));

    await waitFor(() => {
      expect(screen.getByText(/los campos deben contener solo números/i)).toBeInTheDocument();
    });
  });

  test("debe mostrar error si el DNI o celular son incorrectos", async () => {
    (global.fetch as any).mockResolvedValueOnce({
      json: async () => ({ name: "Rocío" }),
    });

    render(
      <MemoryRouter>
        <LoginForm />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByPlaceholderText(/nro\. de documento/i), {
      target: { value: "11111111" },
    });
    fireEvent.change(screen.getByPlaceholderText(/celular/i), {
      target: { value: "999999999" },
    });

    const checkboxes = screen.getAllByRole("checkbox");
    checkboxes.forEach((checkbox) => fireEvent.click(checkbox));

    fireEvent.click(screen.getByRole("button", { name: /cotiza aquí/i }));

    await waitFor(() => {
      expect(screen.getByText(/dni o número de celular incorrecto/i)).toBeInTheDocument();
    });
  });

  test("debe navegar si los datos son correctos", async () => {
    (global.fetch as any).mockResolvedValueOnce({
      json: async () => ({ name: "Rocío" }),
    });

    render(
      <MemoryRouter>
        <LoginForm />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByPlaceholderText(/nro\. de documento/i), {
      target: { value: "30216147" },
    });
    fireEvent.change(screen.getByPlaceholderText(/celular/i), {
      target: { value: "5130216147" },
    });

    const checkboxes = screen.getAllByRole("checkbox");
    checkboxes.forEach((checkbox) => fireEvent.click(checkbox));

    fireEvent.click(screen.getByRole("button", { name: /cotiza aquí/i }));

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith("/cotizacion");
    });
  });
});
