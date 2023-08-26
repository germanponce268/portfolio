import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  public image!: string;
  public currentTime!: Date;
  constructor() { }

  ngOnInit(): void {
    this.image = 'assets/images/image-bg.png'
    this.currentTime = new Date();
  }




  salute():string{
    const currentHour = this.currentTime.getHours();
    if (currentHour >= 6 && currentHour<= 12){
      return `buen dia`;
    }else if(currentHour > 12 && currentHour <= 18){
      return `buenas tardes`;
    }else if(currentHour > 18 || currentHour <= 6){
      return `buenas noches`;
    }else{
      return `default`;
    }
   }
}
