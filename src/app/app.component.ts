import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  public cumpleanios = new Date(1996, 7, 10);
  public formatoCumpleanios = false;

  public toggle():string{
      let str  = this.formatoCumpleanios ? 'shortDate': 'fullDate' ;
      return str;
  }

  public toggleFormat(){
      this.formatoCumpleanios = !this.formatoCumpleanios ;
  }
}
