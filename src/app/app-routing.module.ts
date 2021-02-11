import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormComponent } from './Forms/reactive-form/reactive-form.component';
import { TemplateDriveFormComponent } from './Forms/template-drive-form/template-drive-form.component';
import { PostComponent } from './post/post/post.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';

const routes: Routes = [
  {
    path:'templateform',
    component:TemplateDriveFormComponent
  },
  {
    path:'reactiveform',
    component:ReactiveFormComponent
  },
  {
    path:'post',
    component:PostComponent
  },
  {
    path:'add-user',
    component:AddUserComponent
  },
  {
    path:'edit-user',
    component:EditUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
