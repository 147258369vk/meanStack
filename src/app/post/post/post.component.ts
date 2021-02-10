import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  savedPost:any=[];

  onPostCreate(post:any)
  {
    this.savedPost.push(post);
  }
}
