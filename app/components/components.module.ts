import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { AboutComponent } from './about/about.component';



@NgModule({
  declarations: [
    HomeComponent,
    ProyectosComponent,
    AboutComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
