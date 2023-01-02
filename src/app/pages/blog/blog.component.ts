import { Component, OnInit } from '@angular/core';
import { blogItem } from "../../shared/types";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
})
export class BlogComponent implements OnInit {
  public blogs: blogItem[] = [];

  constructor() { }

  ngOnInit(): void {
    fetch("../../assets/dataBlogs.json")
      .then(Response => Response.json())
      .then(array => this.blogs = array.data)
  }

  data() {
    console.log(this.blogs);

  }

}
