import { Component, OnInit ,EventEmitter,Output} from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit{

  constructor(private authservice:AuthService) { }


  ngOnInit(){
    console.log(this.authservice.getUser());
  }

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
