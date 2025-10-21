import { render, screen } from "@testing-library/react";
import Header from "../components/Header";

describe("Header component", () => {
  test("debe mostrar el logo de Rimac", () => {
    render(<Header />);
    const logo = screen.getByAltText(/rimac logo/i); 
    expect(logo).toBeInTheDocument();
  });
});
