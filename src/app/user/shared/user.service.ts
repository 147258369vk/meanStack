import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  userChange = new Subject<User[]>();

  private newUser:User[]=[
    new User('jatin','jatin@gmail.com','9874563210','developer')

  ]

  // newUser : any =[];

  constructor() { }

  //add new user

  addUser(users:User)
  {
    this.newUser.push(users);
    this.userChange.next(this.newUser.slice());
  }

  showUser()
  {
    return this.newUser.slice();
  }

  //delete selected user
  DeleteUser(index:number)
  {
    this.newUser.splice(index,1);
    this.userChange.next(this.newUser.slice());

  }

  //display selected record
  SelectedUser(index:number)
  {
    return this.newUser[index];
  }

    //Update selected User

    UpdateUser(index:number,updatevalues:User)
    {
      this.newUser[index]=updatevalues;
      this.userChange.next(this.newUser.slice());
    }
}
