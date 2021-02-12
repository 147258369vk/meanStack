import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ReactiveFormComponent } from './Forms/reactive-form/reactive-form.component';
import { TemplateDriveFormComponent } from './Forms/template-drive-form/template-drive-form.component';
import { AuthGuard } from './guards/auth.guard';
import { RoleGaurdService } from './guards/role-gaurd.service';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
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
    component:PostComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'add-user',
    component:AddUserComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'edit-user',
    component:EditUserComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'logout',
    component:LogoutComponent
  },
  {
    path:'admin',
    component:AdminComponent,
    // data:{role:'admin'},
    canActivate:[AuthGuard,RoleGaurdService]
  },
  {
    path:'404',
    component:PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
