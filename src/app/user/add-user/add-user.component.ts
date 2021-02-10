import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { User } from '../shared/user.model';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  Users!: User[];

  private subscription!:Subscription;
  constructor(
    private userService:UserService
  ) { }

  ngOnInit(){
    this.Users=this.userService.showUser();


    //receiving all the values from the subscriptions

    this.subscription=this.userService.userChange.subscribe((user:User[])=>{this.Users=user})

    console.log(this.subscription);




  }

  onAddUser(f:NgForm)
  {
    const newUserDetail = new User(f.value.uname,f.value.email,f.value.contact,f.value.designation);
    this.userService.addUser(newUserDetail);
    console.log(newUserDetail);
    alert("Data Added succesfully")

  }
}