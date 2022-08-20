import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { APIResponse,Movie} from '../model';
import { MovieService } from '../movie-service.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  
  movieId!: any;
  movieDetails:any;
  routeSub: Subscription = new Subscription;
  movieSub: Subscription = new Subscription;
  
  constructor(
    private activatedRoute:ActivatedRoute,
    private movieService:MovieService,
    private SpinnerService: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.routeSub=this.activatedRoute.params.subscribe((params:Params)=>{
      this.movieId=params['id'];
      this.SpinnerService.show();
      this.getMoviedetail(this.movieId);
      // this.getData()
    })
  }

  getMoviedetail(id:any):void{
    this.movieSub=this.movieService
    .getMoviedetails(id)
    .subscribe((movieResp:APIResponse<Movie>)=>{
      this.movieDetails=movieResp
      console.log(movieResp,"respose details")
      console.log(this.movieDetails,"movie details")
      setTimeout(() => {
        this.SpinnerService.hide(); 
      }, 1000) 
    })
  }

}
