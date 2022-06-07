import { createReducer, on } from "@ngrx/store";
import { User } from "src/app/models/user";
import { logInFailure, logInSuccess, logOut, signUpFailure, signUpSuccess } from "../actions/auth.actions";

export interface AuthState {
    isAuthenticated: boolean; // is a user authenticated?
    user: User | null; // if authenticated, there should be a user object
    errorMessage: string | null; // error message
}

const initialState: AuthState = {
    isAuthenticated: false,
    user: null,
    errorMessage: null
};

export const authReducer = createReducer(
    initialState,
    on(logInSuccess, signUpSuccess, (state, { email, token }) => ({
        ...state,
        isAuthenticated: true,
        user: {
            email: email,
            token: token
        },
        errorMessage: null
    })),
    on(logInFailure, (state, { error }) => ({
        ...state,
        isAuthenticated: false,
        user: initialState.user,
        errorMessage: 'Incorrect email and/or password'
        // errorMessage: error.message
    })),
    on(signUpFailure, (state, { error }) => ({
        ...state,
        isAuthenticated: false,
        user: initialState.user,
        errorMessage: 'That email is already in use.'
        // errorMessage: error.message
    })),
    on(logOut, () => initialState),
);