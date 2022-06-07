import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { signUp } from 'src/app/store/actions/auth.actions';
import { getErrorMessage } from 'src/app/store/selectors/auth.selectors';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  readonly errorMessage$ = this.store.pipe(select(getErrorMessage));
  
  constructor(private readonly store: Store<any>) { }

  ngOnInit(): void {
  }

  onUserFormEvent(e: FormGroup) {
    this.store.dispatch(signUp(e.value))
  }

}
