import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {Observable,throwError as observableThrowError } from "rxjs";

@Injectable()
export class HttpHeaderInterceptor implements HttpInterceptor{
    constructor(){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        req=req.clone({
            setHeaders:{
                //'x-rapidapi-key':'1c24da714bmsh6b137a7ee5834eep17c5d5jsn62340332d292',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0N2MzOGExMDczM2I0Mjk3MWM1MjQ0ZGIxZTI2ZWU3NiIsInN1YiI6IjYyYjViMGIzOWFlNjEzMDU4NTZjZjk4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.v4Z-trjJGyhmmEzrL6HxSxFY-UqDQ1ASGGz0op6u_vE',
                //'x-rapidapi-host':'movies-app1.p.rapidapi.com'
                'Content-Type': 'application/json;charset=utf-8'
            },
            setParams:{
                key:'e40e743af2c94b0c916a8aa618fb4473'
            }
        });
        return next.handle(req)
    }
}




