import { Component, OnInit } from '@angular/core';
import {mealPlanService} from '../services/mealPlan.service';
import { datosUsuario } from '../models/datosUsuario';

@Component({
  selector: 'app-meal-plan',
  templateUrl: './meal-plan.component.html',
  styleUrl: './meal-plan.component.css',
  providers: [mealPlanService]
})

export class MealPlanComponent implements OnInit {
//variables usuario
public usuarioIdentificado : boolean = false;
public nombreUsuario : string = "";
public hash : string = "";
public spoonacularPassword : string = "";
public datosUsuario : datosUsuario;

//variables de comidas
public comidas: any[] = [];
//public id : number = 0;

constructor( private _mealPlanServicio : mealPlanService) {
  this.datosUsuario = new datosUsuario ('','','','');
}
ngOnInit(): void {
 // this.conectarUsuario();
}

onSubmit(): void {
  console.log(this.datosUsuario);
  this.conectarUsuario();
  this.usuarioIdentificado = true;
}

conectarUsuario() : void{
  //usuario spoon
 /* let usuario : any = {
    "username" : "Sandra",
    "firstName" : "Sandra",
    "lastName" : "Muro",
    "email" : "smuro@birt.eus",
  };*/

  this._mealPlanServicio.conectarUsuario(this.datosUsuario).subscribe({
    next : data =>{
      console.log(data);
      this.nombreUsuario = data.username;
      this.hash = data.hash;
      this.spoonacularPassword = data.spoonacularPassword;
      console.log(this.nombreUsuario + this.hash + this.spoonacularPassword)
    },
    error : error => {
      console.log(error);
    }
  });
}

obtenerMealPlan() :void{
  this._mealPlanServicio.obtenerMealPlan(this.nombreUsuario, this.hash).subscribe({
    next: data => {
      console.log(data);
      this.comidas = data.meals;
    },
    error: error => {
      console.log(error);
    }
  });
}

anadirComida() :void{
  let item : any = {
      "date": 1589500800,
      "slot": 1,
      "position": 0,
      "type": "RECIPE",
      "value": {
          "id": 296213,
          "servings": 2,
          "title": "Spinach Salad with Roasted Vegetables and Spiced Chickpea",
          "imageType": "jpg",
      }
  }
  this._mealPlanServicio.anadirComida(this.nombreUsuario, this.hash, item).subscribe({
    next: data => {
      console.log(data);
      window.alert(data.status);
      
    },
    error: error => {
      console.log(error);
    }
  });
}

eliminarComida(id: number): void {
  this._mealPlanServicio.borrarItem(this.nombreUsuario, this.hash, id).subscribe({
      next: data => {
          console.log(data);
          window.alert(data.status);
          this.obtenerMealPlan();

      },
      error: error => {
          console.log(error);
      }
  });
}

  cerrarSesion() : void {
    this.usuarioIdentificado = false;
  }


}
