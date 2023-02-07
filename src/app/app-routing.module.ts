import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformacionPersonalComponent } from './Components/informacion-personal/informacion-personal.component';

const routes: Routes = [
  {path:"Sobremi" , component: InformacionPersonalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
