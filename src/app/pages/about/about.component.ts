import { Component, OnInit } from '@angular/core';
import { Autor } from '/Users/María/Desktop/CODENOTCH/RETOS/ANGULAR 1/my-app/src/app/models/autor';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public miAutor: Autor

  constructor() {
    this.miAutor = {
      nombre: "Maria",
      apellido: "Aguiar",
      edad: 25,
      estudios: "Psicología"

    }
   }

   mostrar() {
    console.log(this.miAutor.nombre);
   }

  ngOnInit(): void {
  }

}
