import {EventEmitter, Input } from '@angular/core';
import { Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/Post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
 @Input()
  post:Post;
 @Output()
 bubbleUpPost=new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  getPost(post:Post):void{
    this.bubbleUpPost.emit(post);
  }

}
