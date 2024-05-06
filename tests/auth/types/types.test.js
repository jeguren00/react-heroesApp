import { types } from "../../../src/auth/types/types";

describe("pruebas de types", () => {
  test("debe de regrsar los types", () => {
    expect(types).toEqual({
      login: "[Auth] Login",
      logout: "[Auth] Logout",
    });
  });
});
