import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment as env } from 'src/environments/environment';
import { APIResponse,Movie } from './model';
import {Observable } from 'rxjs';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class MovieService{

  constructor(private http:HttpClient) { }

  getMovieList(val:any):Observable<APIResponse<Movie>>{
    return this.http.get<APIResponse<Movie>>(`${env.BASE_URL}&page=${val}`)
  }

  getMoviedetails(id:any):Observable<APIResponse<Movie>>{
    return this.http.get<APIResponse<Movie>>(`${env.MAIN_URL}/${id}`)
  }
    //return this.http.get<APIResponse<Movie>>(`${env.BASE_URL}&query=${val}`)
  }


