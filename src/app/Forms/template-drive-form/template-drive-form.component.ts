import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-template-drive-form',
  templateUrl: './template-drive-form.component.html',
  styleUrls: ['./template-drive-form.component.css']
})
export class TemplateDriveFormComponent {

  constructor() { }

  users={
    username:'',
    email:'',
    password:'',
    cpassword:''
  }

  getValues(f:NgForm)
  {
    console.log(f.value)
  }

}
