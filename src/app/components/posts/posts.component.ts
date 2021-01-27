import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/Post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
posts:Post[];
chosenOne:Post;
  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
    this
      .httpClient
      .get<Post[]>('https://jsonplaceholder.typicode.com/posts')
      .subscribe(value=>this.posts=value);
  }
  getBubblePost(post:Post):void{
    this.chosenOne=post;
  }

}
