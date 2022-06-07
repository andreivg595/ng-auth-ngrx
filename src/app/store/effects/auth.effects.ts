import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { logIn, logInFailure, logInSuccess } from "../actions/auth.actions";
import { catchError, map, of, switchMap } from "rxjs";

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
}