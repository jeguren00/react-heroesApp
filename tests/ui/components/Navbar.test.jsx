import { fireEvent, render, screen } from "@testing-library/react";
import { Navbar } from "../../../src/ui/components/Navbar";
import { AuthContext } from "../../../src/auth/context/AuthContext";
import { MemoryRouter, useNavigate } from "react-router-dom";

const mockedUseNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: () => mockedUseNavigate,
}));

describe("pruebas en el navbar", () => {
    beforeEach(() => jest.clearAllMocks());
    const context = {
        logged: true,
        user: {
            id: 123,
            name: "nojordi",
        },
        logout: jest.fn(),
    };
    test("debe de mostrar el nombre del usuario", () => {
        render(
            <AuthContext.Provider value={context}>
                <MemoryRouter initialEntries={["/"]}>
                    <Navbar></Navbar>
                </MemoryRouter>
            </AuthContext.Provider>
        );
        expect(screen.getByText("nojordi")).toBeTruthy();
    });
    test("debe de llamar el logout y navigate cuando se hace click en el boton", () => {
        const logout = jest.fn();
        render(
            <AuthContext.Provider value={context}>
                <MemoryRouter initialEntries={["/"]}>
                    <Navbar logout={logout}></Navbar>
                </MemoryRouter>
            </AuthContext.Provider>
        );
        const LogoutButton = screen.getByRole("button", { name: "Logout" });
        fireEvent.click(LogoutButton);
        expect(context.logout).toHaveBeenCalled();
        expect(mockedUseNavigate).toHaveBeenCalled();
    });
});
