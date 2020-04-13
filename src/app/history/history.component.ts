import { Component, OnInit } from '@angular/core';
import {PassingdataService} from "../services/passingdata.service";
import {HistoryRestService} from "../services/history-rest.service";

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  subscription: Subscription;
  url_video: string; //youtube url not embebed
  url_history: string[]=[];
  historylength: number;

  constructor(private passingdata: PassingdataService, private historyRest: HistoryRestService) {
    //get stored history from database
    this.load_history_fromDB();    

    //get the url stored in service from search-bar
    this.subscription = this.passingdata.getMessage().subscribe(
      urlreceived =>{
        this.url_video = urlreceived;
        this.url_history.push(urlreceived);

        //we save the url into database
        this.save_history_inDB(urlreceived);          
      }
    );
  }

  save_history_inDB(url: string){
    this.historyRest.insert_history_record(url).subscribe(
      result =>{
        console.log(result);
      },
      error =>{console.log(error)}
    );
  }

  load_history_fromDB(): void{
    //we get this as a observable
    this.subscription = this.historyRest.get_history_records().subscribe(
      hist_stored =>{
        let historyJSON_DB = hist_stored;
        //console.log(historyJSON_DB);
        if(historyJSON_DB.result==1){
          historyJSON_DB.data.forEach(element => {
            this.url_history.push(element.url);
            localStorage.setItem("history", JSON.stringify(this.url_history));
          });

        }
      }
    );
    
  }

  load_video_again(elem: string){
    this.passingdata.updateMessage(elem); //update the url of service, so video-view as well
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void{
    this.subscription.unsubscribe();
  }
}
