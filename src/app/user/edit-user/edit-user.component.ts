import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router} from '@angular/router';
import { User } from '../shared/user.model';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  constructor(
    private activatedRoute:ActivatedRoute,
    private userService:UserService,
    private route:Router
    ) { }


    @ViewChild('updateform', { static: false })
  newForm!: NgForm;

    index!: number;

  editUser!: User;

  ngOnInit(){
    this.activatedRoute.queryParams.subscribe(params=>{
      this.index=params['id'];
    })
    console.log(this.index);


    this.editUser = this.userService.SelectedUser(this.index);
    console.log(this.editUser);

    setTimeout(()=>{
      this.newForm.form.patchValue({
        uname:this.editUser.uname,
        email:this.editUser.email,
        contact:this.editUser.contact,
        designation:this.editUser.designation
      });
    }, )


  }



  onUpdateUser(form:NgForm)
  {
    const UpdateUser=new User(form.value.uname,form.value.email,form.value.contact,form.value.designation)
    this.userService.UpdateUser(this.index,UpdateUser);
    alert("Record is Updated");
    this.route.navigateByUrl('/add-user');

  }



}
