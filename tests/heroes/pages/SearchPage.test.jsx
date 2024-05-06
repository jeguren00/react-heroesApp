import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { SearchPage } from "../../../src/heroes/pages/SearchPage";

const mockedUseNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: () => mockedUseNavigate,
}));

describe("pruebas en search page", () => {
    beforeEach(() => jest.clearAllMocks());
    test("debe de mostrarse correctamente con los valores por defecto", () => {
        const { container } = render(
            <MemoryRouter>
                <SearchPage />
            </MemoryRouter>
        );
        expect(container).toMatchSnapshot();
    });

    test("debe de a batman y el input con el valor del querystring", () => {
        render(
            <MemoryRouter initialEntries={["/search?q=batman"]}>
                <SearchPage />
            </MemoryRouter>
        );
        const input = screen.getByRole("textbox");
        expect(input.value).toBe("batman");
        const img = screen.getByRole("img");
        expect(img.src).toContain("/assets/heroes/dc-batman.jpg");

        const searchDiv = screen.getByLabelText("searchdiv");
        expect(searchDiv.style).toContain("display", "none");
    });
    test("debe de monstrar un error si no se encuentra el heroe batman123", () => {
        render(
            <MemoryRouter initialEntries={["/search?q=batman123"]}>
                <SearchPage />
            </MemoryRouter>
        );
        const errorDiv = screen.getByLabelText("notfounddiv");
        expect(errorDiv.style).not.toContain("display", "none");
        expect(screen.getByText("batman123")).toBeTruthy();

    });
    test("debe de llamar el navigate a la pantalla nueva", () => {
        render(
            <MemoryRouter initialEntries={["/search"]}>
                <SearchPage />
            </MemoryRouter>
        );
        const input = screen.getByRole('textbox');
        input.onchange = jest.fn();
        const form = screen.getByLabelText('form');
        form.onsubmit = jest.fn();
        fireEvent.change(input, {target: {value: 'superman'}});
        expect(input.value).toBe('superman');
        expect(input.onchange).toHaveBeenCalled();
        fireEvent.submit(form);
        expect(form.onsubmit).toHaveBeenCalled();

        expect(mockedUseNavigate).toHaveBeenCalledWith("?q=superman");
    });

});
