import { Component } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.less']
})
export class MainContentComponent {

  num:number = 2;

  decrese(){
    if(this.num > 1){
    this.num == this.num--
    }
  }

  increse(){
    this.num == this.num++
  }
  
  
}
