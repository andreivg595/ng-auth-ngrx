import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "../reducers/auth.reducers";

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const getUser = createSelector(selectAuthState, (state) => state.user);

export const getErrorMessage = createSelector(selectAuthState, (state) => state.errorMessage);

export const getIsAuthenticated  = createSelector(selectAuthState, (state) => state.isAuthenticated);