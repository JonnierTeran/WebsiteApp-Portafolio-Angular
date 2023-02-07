import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 name:string;
 rol:string;
 rol2:string;

 constructor(){
   this.name='Jonnier Andres Teran Morales';
   this.rol='Ingeniero De Sistemas'
   this.rol2='Desarrollador frontend'
 }
}
