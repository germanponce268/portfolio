import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public image!: string;

  constructor() { }

  ngOnInit(): void {
    this.image = '../assets/images/icono2-small.jpg'
  }

}
