import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormComponent } from './Forms/reactive-form/reactive-form.component';
import { TemplateDriveFormComponent } from './Forms/template-drive-form/template-drive-form.component';
import { PostComponent } from './post/post/post.component';
import { AddUserComponent } from './user/add-user/add-user.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
