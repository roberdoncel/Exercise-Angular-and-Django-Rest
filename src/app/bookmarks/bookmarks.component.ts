import { Component, OnInit } from '@angular/core';
import {AddtobookmarksService} from "../services/addtobookmarks.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css']
})
export class BookmarksComponent implements OnInit {
  
  subscription: Subscription;
  url_youtube: string;
  list_bookmarks: string[]=[];
  bookmarkslength: number = 0;


  constructor(private addtobookmarksService: AddtobookmarksService) {

      let bookmarks = JSON.parse(localStorage.getItem("bookmarks")); 
      
      //load stored bookmarks in local storage
      if(bookmarks != null){
        this.bookmarkslength = Object.keys(bookmarks).length;
        bookmarks.forEach(element => {
          this.list_bookmarks.push(element);
        });
      }
      //get new bookmark when add to bookmark button is clicked.
      this.subscription = this.addtobookmarksService.getBookmark().subscribe(
        bookmark =>{
          this.url_youtube = bookmark;
          this.list_bookmarks.push(bookmark);
          this.bookmarkslength = Object.keys(this.list_bookmarks).length;

          let bookmarks = JSON.parse(localStorage.getItem("bookmarks"));  
          if(bookmarks == null){
            localStorage.setItem("bookmarks", JSON.stringify(this.list_bookmarks));
          }else{
            bookmarks.push(bookmark);
            localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
          }
        }
      );
   }
   
  ngOnInit(): void {
  }

  ngOnDestroy(): void{
    this.subscription.unsubscribe();
  }

}
