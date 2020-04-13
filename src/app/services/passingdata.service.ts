import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PassingdataService {

  private myMessage = new Subject<string>();

  constructor() { }

  getMessage(): Observable<string>{
    return this.myMessage.asObservable();
  }

  updateMessage(message: string){
    this.myMessage.next(message);
  }
  
}
