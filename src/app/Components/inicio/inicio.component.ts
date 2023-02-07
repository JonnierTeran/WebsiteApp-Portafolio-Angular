import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  name:string;
  rol:string;
  rol2:string;
 
  constructor(){
    this.name='Jonnier Andres Teran Morales';
    this.rol='Ingeniero De Sistemas'
    this.rol2='Desarrollador frontend'
  }


  ngOnInit(): void {} 

  

}
