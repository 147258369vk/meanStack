import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {

  constructor() { }

//  posts=[
//    {title:'First Post',message:'This is my first post'},
//    {title:'Second Post',message:'This is my second post'},
//    {title:'third Post',message:'This is my third post'},
//    {title:'fourth post',message:'This is  my fourth post'}
// ]
@Input() posts:any=[];
}
