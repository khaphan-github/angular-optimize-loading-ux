import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {

  imagesURL: string = '';
  username: string = '';
  desc: string = '';
  content: string = '';

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.imagesURL = "https://static.vecteezy.com/packs/media/vectors/term-bg-1-3d6355ab.jpg",
        this.username = "Kha Phan",
        this.desc = "Bài viết được đăng vào 1 ngày trước",
        this.content = "This was a minimal demonstration of what we can do with structural directives are below We can enhance our directive also to support an error state."
    }, 3000);
  }
}
