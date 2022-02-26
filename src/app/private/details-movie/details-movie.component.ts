import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieFromApi } from 'src/app/models/MovieFromApi.model';
import { MovieService } from 'src/app/services/movie.service';


let cont = 0; 

@Component({
  selector: 'app-details-movie',
  templateUrl: './details-movie.component.html',
  styleUrls: ['./details-movie.component.scss']
})
export class DetailsMovieComponent implements OnInit {



  public movie: MovieFromApi | undefined

  public linkTrailer: String = '';

  constructor(private movieService: MovieService,
    private activeRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    let id = Number(this.activeRoute.snapshot.paramMap.get('id'));
    this.movieService.findMovieByIdFromApi(id).subscribe(movie => {
      movie.release_date = movie.release_date?.split("-")[0]
      movie.genre = movie.genres?  movie.genres[0]: undefined 
      this.movie = movie;
    })
    
  }

  returnSrc(path: string| undefined): string | undefined{
    if(path != null){
      return 'https://image.tmdb.org/t/p/w300' + path ;
    } 
    return
  }

  returnSrcBackDrop(path: string | undefined){
    if(path != null){
      return 'https://image.tmdb.org/t/p/original/' + path ;
    } 
    return
  }
}
