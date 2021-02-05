import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {

  constructor() { }

  userForm= new FormGroup({
    username:new FormControl(),
    useremail:new FormControl(),
    password:new FormControl(),
    cpassword:new FormControl()
  });

onAdding()
{
  console.log(this.userForm.value);
}
}
