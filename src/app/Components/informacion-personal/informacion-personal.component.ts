import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-informacion-personal',
  templateUrl: './informacion-personal.component.html',
  styleUrls: ['./informacion-personal.component.css']
})
export class InformacionPersonalComponent implements OnInit {
  Profesion:string;
  DateBriday:string;
  Locale:string;
  Cellphone:string;
  Cargo:string;
  Email:string;
  constructor() {
    this.Profesion='INGENIERO DE SISTEMAS';
    this.DateBriday='03 / 07 / 2001';
    this.Locale='Lorica / Córdoba / Colombia'
    this.Cellphone= '+57 3245644212'
    this.Cargo= 'DESARROLLADOR DE SOFTWARE'
    this.Email='jonnierteranmorales@gmail.com'
   }

  ngOnInit(): void {
  }

  DescargarPDF(){
    Swal.fire({
      title: 'Redirección',
      text: "Sera redireccionado a un enlace en google drive donde podra visualizar la hoja de vida de Jonnier, y si gusta podra descargarla en su dispositivo",
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Continuar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
          const link = document.createElement("a");
          //link.download = "archivo.pdf";
          link.href = "https://drive.google.com/file/d/1ACmOLjZpgmhrrdcZsidGQToK_09ZdCZX/view?usp=sharing";
          link.target="_blank"
          link.click();
        
      }
    })
    
  }

  

}
