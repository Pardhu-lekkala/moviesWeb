import { Component, OnInit } from '@angular/core';
import { Movie } from '../model';
import { MovieService } from '../movie-service.service';
import { APIResponse } from '../model';
import { Router } from '@angular/router';
import axios from 'axios';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  public movies!: Array<Movie>;
  public selectedIndex: any;

changeColor(i:any){
    this.selectedIndex = i;
  }
  movieList: any 
  pages=['1','2','3','4','5','6']
  pageVal=1
  posterBaseUrl='https://image.tmdb.org/t/p/w500'

  constructor( private movieServices: MovieService,
               private router:Router,
               private SpinnerService: NgxSpinnerService
              ) { }

  ngOnInit(): void {
    this.SpinnerService.show();
    this.getMovieList(this.pageVal)
  }

  getPageVal(val:any){
    this.pageVal=val
    this.getMovieList(this.pageVal)
    console.log(this.pageVal,"page")
  }

  getMovieList(val:any){
    this.movieServices
      .getMovieList(val)
      .subscribe((movieList:APIResponse<Movie>)=>{
        this.movies=movieList.results
        console.log(movieList,"movies data from api")
        setTimeout(() => {
          this.SpinnerService.hide(); 
        }, 1000) 
      })
  }

  inputEvent(e:any){
     let val=e.target.value
     if(val.length!==0){
      axios
          .get(`https://api.themoviedb.org/3/search/movie?api_key=47c38a10733b42971c5244db1e26ee76&query=${val}`,{
            headers: {
              'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0N2MzOGExMDczM2I0Mjk3MWM1MjQ0ZGIxZTI2ZWU3NiIsInN1YiI6IjYyYjViMGIzOWFlNjEzMDU4NTZjZjk4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.v4Z-trjJGyhmmEzrL6HxSxFY-UqDQ1ASGGz0op6u_vE',
              'Content-Type': 'application/json;charset=utf-8'
            }
          })
          .then((response)=>{
            this.movies=response.data.results
            console.log(response,"axios data");
          });
     }else{
      this.getMovieList(this.pageVal)
     }
   }

  openMovieDetails(id:string):void{
    this.router.navigate(['details',id])
  }

}
