import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsMovieComponent } from './details-movie.component';
import { DetailsMovieRoutingModule } from './details-movie-routing.module';



@NgModule({
  declarations: [DetailsMovieComponent],
  imports: [
    CommonModule,
    DetailsMovieRoutingModule
  ],
  exports: [DetailsMovieComponent]

})
export class DetailsMovieModule { }
