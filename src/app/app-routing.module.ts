import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaComponent } from './lista/lista.component';
import { HomeComponent } from './home/home.component';
import {BuscarComponent} from './buscar/buscar.component';

const routes: Routes = [
  {path: '', redirectTo:'/home', pathMatch: 'full' },
  { path:'lista', component:ListaComponent },
  {path:'home', component:HomeComponent},
  {path: 'buscar', component:BuscarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
