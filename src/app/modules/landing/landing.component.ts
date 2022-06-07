import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { logOut } from 'src/app/store/actions/auth.actions';
import { getIsAuthenticated, getUser } from 'src/app/store/selectors/auth.selectors';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  readonly user$ = this.store.pipe(select(getUser));

  readonly isAuthenticated$ = this.store.pipe(select(getIsAuthenticated));

  constructor(private readonly store: Store<any>) { }

  ngOnInit(): void {
  }

  logOut(): void {
    this.store.dispatch(logOut());
  }

}
