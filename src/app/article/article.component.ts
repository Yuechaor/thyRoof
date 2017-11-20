import { Component, OnInit,Input } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  host:{
    class:"row"
  }

})
export class ArticleComponent implements OnInit {
  @Input() article: Article;
  // votes:number;
  // title:string;
  // link:string;

  // constructor() {
  //   this.article =
  //     new Article('atesting 3',"www.google.com",10)
    // this.title = "angular 4";
    // this.link = "www.google.com.au";
    // this.votes = 3;
  // }
  voteUp():boolean {
    this.article.voteUp();
    return false;
  }
  voteDown(): boolean {
    this.article.voteDown();
    return false;
  }
  ngOnInit() {
  }

}
