import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";

import { AuthContext } from "../../src/auth/context/AuthContext";
import { PublicRouter } from "../../src/router/PublicRouter";

describe("pruebas public route", () => {
  test("debe de mostrar el children si no esta autenticado", () => {
    const context = { logged: false };
    render(
      <AuthContext.Provider value={context}>
        <PublicRouter>
          <h1>Ruta publica</h1>
        </PublicRouter>
      </AuthContext.Provider>
    );
    expect(screen.getByText("Ruta publica")).toBeTruthy();
  });
  test("debe de navegar si esta autenticado", () => {
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

  });
});
