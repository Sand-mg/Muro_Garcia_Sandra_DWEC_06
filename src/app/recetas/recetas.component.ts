import { Component, OnInit } from '@angular/core';
import { recetasService } from '../services/recetas.service';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrl: './recetas.component.css',
  providers: [recetasService]
})
export class RecetasComponent implements OnInit{
  //variables si hay
  public nombreReceta : string = "";
  public vegetariano : boolean = false;
  public fotoReceta : any;
  public tiempoReceta : string = "";
  public intruccionesReceta : string = "";


  constructor( private _recetasServicio : recetasService) {

  }
  ngOnInit(): void {
      this.recetaRandom();
  }

  recetaRandom() : void {
    this._recetasServicio.recetaRandom().subscribe({
      next : data =>{
        console.log(data);
        this.nombreReceta = data.recipes[0].title;
        this.fotoReceta = data.recipes[0].image;
        this.tiempoReceta = data.recipes[0].readyInMinutes;
        this.intruccionesReceta = data.recipes[0].summary;
        this.vegetariano = data.recipes[0].vegetarian;

      },
      error : error => {
        console.log(error);
      }
    })
  }

  cambiarReceta() : void {
    this.recetaRandom();
  }

}
