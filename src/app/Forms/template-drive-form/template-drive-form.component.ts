import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-template-drive-form',
  templateUrl: './template-drive-form.component.html',
  styleUrls: ['./template-drive-form.component.css']
})
export class TemplateDriveFormComponent {

  constructor() { }

 users:any=[];

  getValues(f:NgForm)
  {
   alert("Success \n\n " + JSON.stringify(f.value));
  }

}
