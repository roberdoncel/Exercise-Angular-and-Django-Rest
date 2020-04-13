import { Component, OnInit } from '@angular/core';
import {PassingdataService} from "../services/passingdata.service"; //this service bring us the youtube url
import {AddtobookmarksService} from "../services/addtobookmarks.service";
import { Subscription } from 'rxjs';
import { analyzeAndValidateNgModules } from '@angular/compiler';


@Component({
  selector: 'app-video-view',
  templateUrl: './video-view.component.html',
  styleUrls: ['./video-view.component.css']
})
export class VideoViewComponent implements OnInit {

  subscription: Subscription;
  youtube_url: string;
  youtube_url_embebed: string;
  param_video: string;
  is_video: boolean = false;

  constructor(private passingdata: PassingdataService, private addtobookmark: AddtobookmarksService) {
    this.subscription = this.passingdata.getMessage().subscribe(
      urlreceived =>{ //recogemos los datos del componente emisor en my message.
          this.youtube_url = urlreceived;
          this.param_video = this.get_video_parameter(urlreceived);
          
          if(this.param_video !=""){
            this.is_video = true;
            //we build the embeded url.
            this.youtube_url_embebed = "https://www.youtube.com/embed/"+ this.param_video;
          }         
      }
    );
  }

  add_video_to_bookmarks(): void{
    
    if(this.youtube_url != ""){
      this.addtobookmark.updateBookmark(this.youtube_url);
    }
  }

  show_bookmarks_list(){
    let display = window.getComputedStyle(document.querySelector('#bookmarks')).display;
    if(display !="none"){
      document.getElementById("bookmarks").style.display ="none";
    }else{
      document.getElementById("bookmarks").style.display ="block";
    }
  }

  get_video_parameter(url): string{
    let param ="";
    let i_param = url.indexOf("?v=");

    if(i_param != -1){
      i_param +=3;
      let param_tmp = url.substr(i_param);

      //get the end of the param
      let f_param = param_tmp.indexOf("&");

      if(f_param != -1){
        param = param_tmp.substr(0, f_param);
        return param;
      }else{
        return param_tmp;
      }
    }

    i_param = url.indexOf("&v=");
    if(i_param != -1){
      i_param +=3;
      let param_tmp = url.substr(i_param);

      //get the end of the param
      let f_param = param_tmp.indexOf("&");

      if(f_param != -1){
        param = param_tmp.substr(0, f_param);
        return param;
      }else{
        return param_tmp;
      }
    }

    return param
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void{
    this.subscription.unsubscribe();
  }

}
