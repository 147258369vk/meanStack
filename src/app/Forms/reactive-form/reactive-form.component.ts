import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../_helpers/must-match.validator';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit{

  registerForm!:FormGroup
  submitted= false;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit()
  {
    this.registerForm=this.formBuilder.group({
      title:['',Validators.required],
      name:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]],
      cpassword:['',Validators.required],
      terms:[false,Validators.required]
    },
    {
      validator:MustMatch('password','cpassword')
    })
  }

  //get the easier access for the forms conrols
  get f(){
    return this.registerForm.controls;
  }

  onSubmit()
  {
    this.submitted=true;

    if(this.registerForm.invalid)
    {
      return;
    }

    alert("Success !!! \n\n " +JSON.stringify(this.registerForm.value));

  }

  onReset()
  {
    this.submitted=false;
    this.registerForm.reset();
  }

}
