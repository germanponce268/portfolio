import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public image! : string;

  constructor() { }

  ngOnInit(): void {
    this.image = '../assets/images/icono-gp.jpg'
  }

}
