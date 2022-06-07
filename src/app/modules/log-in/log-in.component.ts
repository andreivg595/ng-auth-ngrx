import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { logIn } from 'src/app/store/actions/auth.actions';
import { getUser } from 'src/app/store/selectors/auth.selectors';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  constructor(private readonly store: Store<any>) { }

  ngOnInit(): void {
  }

  onUserFormEvent(e: FormGroup) {
    this.store.dispatch(logIn(e.value))
  }
}
