import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable()
export class recetasService {
    
    public url: string = "";
    public apikey: string = "027a3f72d8a140a29aa7a0ab99e0e979";
    

    constructor(public _http : HttpClient) {
        
        this.url = `https://api.spoonacular.com/recipes/random?apiKey=${this.apikey}&number=1`;
    }
    //Receta random (sin identificar) (READ)
    recetaRandom() : Observable<any> {
        return this._http.get(this.url);


    }
}