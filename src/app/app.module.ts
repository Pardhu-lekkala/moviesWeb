import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http'
import { HttpHeaderInterceptor } from './interceptors/http-headers-interceptors';
import { HttpErrorsInterceptor } from './interceptors/http-errors-interceptors';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSpinnerModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:HttpHeaderInterceptor,
      multi:true
    },
    {
      provide:HTTP_INTERCEPTORS,
      useClass:HttpErrorsInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
