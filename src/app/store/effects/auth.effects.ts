import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from "rxjs";
import { 
    logIn, 
    logInFailure, 
    logInSuccess, 
    signUp, 
    signUpFailure, 
    signUpSuccess
} from "../actions/auth.actions";

@Injectable()
export class AuthEffects {

  constructor(
    private readonly actions$: Actions,
    private authService: AuthService,
    private router: Router,
  ) {}

    readonly logIn$ = createEffect(() =>
        this.actions$.pipe(
            ofType(logIn),
            switchMap(({ email, password }) =>
                this.authService.logIn(email, password).pipe(
                    map((user) => logInSuccess({email: email, token: user.token})),
                    /* map((user) => {
                        console.log(user)
                        return logInSuccess({email: email, token: user.token});
                    }), */
                    catchError((error) => {
                        // console.log(error)
                        return of(logInFailure({ error }));
                    })
                )
            )
        )
    );

    readonly signUp$ = createEffect(() =>
        this.actions$.pipe(
            ofType(signUp),
            switchMap(({ email, password }) =>
                this.authService.signUp(email, password).pipe(
                    map((user) => signUpSuccess({email: email, token: user.token!})),
                    catchError((error) => {
                        return of(signUpFailure({ error }));
                    })
                )
            )
        )
    );

    readonly authSuccess$ = createEffect(() =>
        this.actions$.pipe(
            ofType(logInSuccess, signUpSuccess),
            tap((user) => {
                localStorage.setItem('token', user.token);
                this.router.navigateByUrl('/');
            })
        ),
        { dispatch: false }
    );
}