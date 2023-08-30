import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  public image! : string;
  public imate1! : string;

  constructor() { }

  ngOnInit(): void {
    this.image = `assets/images/login-img-sm.jpg`
  }

}
