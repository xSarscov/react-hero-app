import { types } from "../../../src/auth";

describe('Pruebas con los types', () => {

    test('debe de regresar los types correspondientes', () => {
        expect(types).toEqual({
            login: '[Auth] Login',
            logout: '[Auth] Logout',
        })
    }); 

});