import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostCreateComponent } from './post/post-create/post-create.component';
import { PostListComponent } from './post/post-list/post-list.component';

//forms Modules
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


//import angular material components
import { MatCard, MatCardModule } from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import { TemplateDriveFormComponent } from './Forms/template-drive-form/template-drive-form.component';
import { ReactiveFormComponent } from './Forms/reactive-form/reactive-form.component';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';


@NgModule({
  declarations: [
    AppComponent,
    PostCreateComponent,
    PostListComponent,
    TemplateDriveFormComponent,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatExpansionModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
