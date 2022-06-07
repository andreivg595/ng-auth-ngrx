import { createAction, props } from '@ngrx/store';

export const logIn = createAction(
    '[Login] Log In',
    props<{ readonly email: string; readonly password: string }>()
);

export const logInSuccess = createAction(
    '[Auth API] Log In Success',
    // props<{ readonly user: User }>()
    props<{ readonly email: string; readonly token: string }>()
);

export const logInFailure = createAction(
    '[Auth API] Log In Failure',
    props<{ readonly error: any }>()
);

export const signUp = createAction(
    '[Signup] Sign Up',
    props<{ readonly email: string; readonly password: string }>()
);

export const signUpSuccess = createAction(
    '[Auth API] Sign Up Success',
    props<{ readonly email: string; readonly token: string }>()
);

export const signUpFailure = createAction(
    '[Auth API] Sign Up Failure',
    props<{ readonly error: any }>()
);

export const logOut = createAction('[Logout] Log Out');