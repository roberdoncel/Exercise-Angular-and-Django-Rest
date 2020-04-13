import { Pipe, PipeTransform, SecurityContext } from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Pipe({
  name: 'safeurl'
})
export class SafeurlPipe implements PipeTransform {

  constructor(private domSanitizer: DomSanitizer){

  }

  transform(value: string): unknown {

    let valor: any = this.domSanitizer.bypassSecurityTrustResourceUrl(value);
    return valor;
    //return this.domSanitizer.sanitize(SecurityContext.URL, value);
  
  }

}
