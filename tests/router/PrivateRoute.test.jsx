import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";

import { AuthContext } from "../../src/auth/context/AuthContext";
import { PrivateRouter } from "../../src/router/PrivateRouter";

describe("pruebas private route", () => {
  test("debe de mostrar el children si esta autenticado", () => {
    Storage.prototype.setItem = jest.fn();
    const context = { logged: true, user: { id: 123, name: "nojordi" } };
    render(
      <AuthContext.Provider value={context}>
        <MemoryRouter initialEntries={["/marvel"]}>
            <PrivateRouter>
                <h1>Ruta privada</h1>
            </PrivateRouter>
        </MemoryRouter>
      </AuthContext.Provider>
    );
    expect(screen.getByText("Ruta privada")).toBeTruthy();
    expect(localStorage.setItem).toHaveBeenCalled();
  });
  /* test("debe de navegar si esta autenticado", () => {
    const context = { logged: true, user: { id: 123, name: "nojordi" } };
    render(
      <AuthContext.Provider value={context}>
        <MemoryRouter initialEntries={["/login"]}>
          <Routes>
            <Route
              path={"login"}
              element={
                <PublicRouter>
                  <h1>Ruta publica</h1>
                </PublicRouter>
              }
            />
            <Route path={"marvel"} element={<h1>Pagina marvel</h1>} />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    );
    expect(screen.getByText("Pagina marvel")).toBeTruthy();

  }); */
});
