import { Component, OnInit } from '@angular/core';
import {blogItem} from "../../shared/types";

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
})
export class BlogItemComponent implements OnInit {
  public obj: blogItem = {
      id: 4,
      description: 'description',
      content: 'content',
      date: '1.1.1000',
      title: 'title',
      imageSrc: 'assets/images/dreamy-young-woman-sunglasses-looking-front_197531-16739.webp',
  };
  constructor() { }

  ngOnInit(): void {
    this.obj.id = history.state.id;
    this.obj.content = history.state.content;
    this.obj.description = history.state.description;
    this.obj.title = history.state.title;
    this.obj.imageSrc = history.state.imageSrc;
  }
}
