import { useContext } from "react";
import { authReducer } from "../../../src/auth/context/authReducer";
import { types } from "../../../src/auth/types/types";
import { AuthContext } from "../../../src/auth/context/AuthContext";

describe("pruebas en auth reducer", () => {
  const initialState = {
    logged: false,
  };

  test("retornar estado por defecto", () => {
    const newState = authReducer(initialState, {});
    expect(newState).toBe(initialState);
  });

  test("llamar al login y establecer user", () => {
    const user = {
      id: "ABC",
      name: "jorditest",
    };
    const action = {
      type: types.login,
      payload: user,
    };
    const newState = authReducer(initialState, action);

    expect(newState.logged).toBeTruthy();
    expect(newState.user).toStrictEqual(user);
  });

  test("llamar el logout y borrar user y logged en false", () => {
    const state = {
        logged: true,
        user: { id: '123', name: 'Juan' }
    }

    const action = {
        type: types.logout
    }

    const newState = authReducer( state, action );
    expect( newState ).toEqual({ logged: false })

  });
});
