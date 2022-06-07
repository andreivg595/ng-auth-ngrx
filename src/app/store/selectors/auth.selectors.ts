import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "../reducers/auth.reducers";

export const selectAuth = createFeatureSelector<AuthState>('auth');

export const getUser = createSelector(selectAuth, (state) => state.user);