import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { SwiperComponent } from "swiper/angular";

import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper";
import { MovieService } from 'src/app/services/movie.service';
import { MovieFromApi } from 'src/app/models/MovieFromApi.model';

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  @ViewChild("swiperRef", { static: false }) sliderRef?: SwiperComponent;

  idMovies = [540734, 550, 446159 , 603, 475557, 634649, 646385, 414906, 496243];

  movies: Array<MovieFromApi> = [];

  constructor(private movieService: MovieService  ) {
  }

  ngOnInit(): void {
    let mov: MovieFromApi[] = [];
    this.idMovies.forEach(id =>{
      this.movieService.findMovieByIdFromApi(id).subscribe(movie => {
        movie.genre = movie.genres?  movie.genres[0]: undefined 
        mov.push(movie);
      })
    });  
    this.movies = mov;
  }

  returnSrc(backdrop_path: string| undefined): string | undefined{
    if(backdrop_path != null){
      return 'url(https://image.tmdb.org/t/p/original/' + backdrop_path + ')';
    } 
    return
  }

}
