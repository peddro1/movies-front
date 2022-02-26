import { Component, OnInit, ViewChild } from '@angular/core';
import { Genre } from 'src/app/models/Genre.model';
import { MovieFromApi } from 'src/app/models/MovieFromApi.model';
import { MovieService } from 'src/app/services/movie.service';
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper";
import { SwiperComponent } from 'swiper/angular';

SwiperCore.use([Autoplay, Pagination, Navigation]);

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss']
})
export class GenresComponent implements OnInit {

  @ViewChild("swiperRef", { static: false }) sliderRef?: SwiperComponent;

  public genres: Array<Genre> | undefined

  public listMovies: Array<MovieFromApi> = [];

  public genrerNameChoose: String | undefined;

  constructor(
    private movieService: MovieService
  ) { }

  ngOnInit(): void {
    this.movieService.findListGenres().subscribe(genres => {
      this.genres = genres.genres;
    });
  }

  getMoviesByGenre(genre: Genre){
    this.genrerNameChoose = genre.name;
    this.movieService.findListMoviesByGenre(genre?.id != undefined ? genre?.id: 0).subscribe( movies =>{
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
