import { Component, OnInit } from '@angular/core';
import { PassingdataService} from '../services/passingdata.service';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  url_youtube: string = '';

  constructor( private passingdata: PassingdataService) {
    
   }

  ngOnInit(): void {
  }

  load_url(){    
    if(this.url_youtube !=""){
      this.passingdata.updateMessage(this.url_youtube);
    }
  }

}
