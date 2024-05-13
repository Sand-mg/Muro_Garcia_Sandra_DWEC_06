import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable()
export class mealPlanService {
    
    public url: string = "";
    public apikey: string = "027a3f72d8a140a29aa7a0ab99e0e979";
    
    

    constructor(public _http : HttpClient) {
        
        //this.url = `https://api.spoonacular.com/users/connect?apiKey=${this.apikey}`;
    }
    //Identificar usuario (CREATE)
    conectarUsuario(usuario : any) : Observable<any> {
        return this._http.post<any>(`https://api.spoonacular.com/users/connect?apiKey=${this.apikey}`, usuario);
    }

    //Obtener plantillas de comidas (READ)
    obtenerMealPlan(nombreUsuario: string, hash: string) : Observable<any> {
        return this._http.get<any>(`https://api.spoonacular.com/mealplanner/generate?timeFrame=day&${nombreUsuario}&hash=${hash}&apiKey=${this.apikey}`);
    }

    //Añadir al plan de comida (UPDATE)
    anadirComida(nombreUsuario: string, hash: string, item : any) : Observable<any> {
        return this._http.post<any>(`https://api.spoonacular.com/mealplanner/${nombreUsuario}/items?hash=${hash}&apiKey=${this.apikey}`, item);
        }

    //borrar item (DELETE)
    borrarItem(nombreUsuario: string, hash: string, id: number): Observable<any> {
        return this._http.delete<any>(`https://api.spoonacular.com/mealplanner/${nombreUsuario}/templates/${id}?hash=${hash}&apiKey=${this.apikey}`);
        }

}
