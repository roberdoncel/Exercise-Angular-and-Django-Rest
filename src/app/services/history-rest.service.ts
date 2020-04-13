import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HistoryRestService {

  constructor(private httpClient: HttpClient) {

   }

   insert_history_record(hist_elem: string){

        let data={"url": hist_elem};
        let json_txt = JSON.stringify(data);
       
        return this.httpClient.post("http://localhost:8000/api/", json_txt);
      
   }

   get_history_records(): any{
     let results= this.httpClient.get("http://localhost:8000/api/");
     
     return results;
   }
}
