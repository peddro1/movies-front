import { Component, OnInit, ViewChild } from '@angular/core';
import { MovieFromApi } from 'src/app/models/MovieFromApi.model';
import { MovieService } from 'src/app/services/movie.service';
import { SwiperComponent } from 'swiper/angular';
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper";

SwiperCore.use([Autoplay, Pagination, Navigation]);

@Component({
  selector: 'app-release-movies',
  templateUrl: './release-movies.component.html',
  styleUrls: ['./release-movies.component.scss']
})
export class ReleaseMoviesComponent implements OnInit {

  @ViewChild("swiperRef", { static: false }) sliderRef?: SwiperComponent;

  public name: String | undefined;
  
  public listMovies: Array<MovieFromApi> = [];

  constructor(
    private movieService: MovieService
  ) { }

  ngOnInit(): void {
    this.movieService.findReleaseMovies().subscribe(movies =>{
      this.listMovies = movies.results;
    })  
  }

  returnSrc(path: string| undefined): string | undefined{
    if(path != null){
      return 'https://image.tmdb.org/t/p/w200' + path ;
    } 
    return
  }

}
