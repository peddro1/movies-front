import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MovieFromApi } from 'src/app/models/MovieFromApi.model';
import { MovieService } from 'src/app/services/movie.service';
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper";
import { SwiperComponent } from 'swiper/angular';

SwiperCore.use([Autoplay, Pagination, Navigation]);

@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.scss']
})
export class PopularMoviesComponent implements OnInit {

  @ViewChild("swiperRef", { static: false }) sliderRef?: SwiperComponent;

  public moviesPopular: Array<MovieFromApi> = [];

  constructor(private movieService: MovieService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.movieService.findMoviesPopular().subscribe(movies =>{
      this.moviesPopular = movies.results
    })
  }

  returnSrc(path: string| undefined): string | undefined{
    if(path != null){
      return 'https://image.tmdb.org/t/p/w200' + path ;
    } 
    return
  }

  gotoDetails(id: number | undefined){
    this.router.navigate(["/details/", id]);
  }
}
