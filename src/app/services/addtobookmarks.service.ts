import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddtobookmarksService {

  private Bookmark = new Subject<string>();
  
  constructor() { }

  getBookmark(): Observable<string>{
    return this.Bookmark.asObservable();
  }

  updateBookmark(bookmark: string){
    this.Bookmark.next(bookmark);
  }
}
