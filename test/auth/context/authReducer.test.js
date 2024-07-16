import { types } from "../../../src/auth";
import { authReducer } from "../../../src/auth/context";

describe('Pruebas en al authReducer', () => {

    // test('Debe retornar el estado por defecto', () => {
    //     const state =  authReducer({ logged: false }, {});
    //     expect(state).toEqual({ logged: false });
    // });

    // test('Debe de llamar al login, autenticar y establecer el usuario', () => {
       
    //     const action = { 
    //         type: types.login,
    //         payload: {
    //             id:'123',
    //             name: 'Ernesto'
    //         }
    //     };

    //     const state =  authReducer({ logged: false }, action);

    //     expect( state ).toEqual({ 
    //         logged: true,
    //         user: action.payload
    //     })


    // });

    // test('Debe de borrar el usuario y establecer el logged en false', () => {
    //     const oldState = {
    //         logged: true,
    //         user: {
    //             id:'123',
    //             name: 'Ernesto'
    //         }
    //     }

    //     const action = {
    //         type: types.logout
    //     };

    //     const state = authReducer(oldState, action);

    //     expect( state ).toEqual({
    //         logged: false
    //     });

    // });

});