import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { signUp } from 'src/app/store/actions/auth.actions';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(private readonly store: Store<any>) { }

  ngOnInit(): void {
  }

  onUserFormEvent(e: FormGroup) {
    this.store.dispatch(signUp(e.value))
  }

}
