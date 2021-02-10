import { Component, OnInit ,EventEmitter,Output} from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {

  constructor() { }

  usertitle='';
  usermessage='';

  @Output() newPost=new EventEmitter();

  onAddMessage()
  {
    const post={title:this.usertitle,message:this.usermessage};
    // console.dir(post);
    this.newPost.emit(post);
  }

}
