import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()
export class PostProviders{
    
    myParams:any;
    baseUrl:string = "http://localhost/thelko_api/v1/";

    constructor(private http: Http) {

    }

    postData(body, file){
        let type = "application/json; charset=UTF-8";
        let origin = "Access-Control-Allow-Origin:*";
        let methods = "DELETE, POST, GET, OPTIONS";
        let header = "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With";
        
        let headers = new Headers();
            /*{"Access-Control-Allow-Origin": origin,
            "Content-Type": type
              });*/
              
            /*headers.append('Access-Control-Allow-Origin', '*');
            headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
            headers.append('Accept','application/json');
            headers.append('content-type','application/json; charset=UTF-8');*/
 
        let options = new RequestOptions({headers:headers});

        return this.http.post(this.baseUrl + file, JSON.stringify(body)).pipe(map(res => res.json()));
    }

}