import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { AboutComponent } from './components/about/about.component';


const routes: Routes = [
  {path:'proyectos', component:ProyectosComponent},
  {path:'about', component:AboutComponent},
  {path:'home', component:HomeComponent, loadChildren:() => import('../app/components/components.module').then(m => m.ComponentsModule)},
  {path:'', redirectTo: 'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
