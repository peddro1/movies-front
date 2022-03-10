import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Evaluation } from 'src/app/models/Evaluation';
import { Movie } from 'src/app/models/Movie';
import { MovieFromApi } from 'src/app/models/MovieFromApi.model';
import { MovieDbService } from 'src/app/services/movie-db.service';
import { MovieService } from 'src/app/services/movie.service';


let cont = 0; 

@Component({
  selector: 'app-details-movie',
  templateUrl: './details-movie.component.html',
  styleUrls: ['./details-movie.component.scss']
})
export class DetailsMovieComponent implements OnInit {

  public comment: String | undefined

  public evaluations: Array<Evaluation> = []

  //@ViewChild("comment",  {static: true}) comment: ElementRef | undefined;

  foundMovie: Movie | undefined

  public movie: MovieFromApi | undefined

  public linkTrailer: String = '';

  constructor(private movieService: MovieService,
    private activeRoute: ActivatedRoute,
    private serviceDB: MovieDbService
    ) { }

  ngOnInit(): void {
    let id = Number(this.activeRoute.snapshot.paramMap.get('id'));
    this.movieService.findMovieByIdFromApi(id).subscribe(movie => {
      movie.release_date = movie.release_date?.split("-")[0]
      movie.genre = movie.genres?  movie.genres[0]: undefined 
      this.movie = movie;
    })
    //var foundMovie: Movie
    this.serviceDB.findMovieByIdApi(id).subscribe(mov =>{
      this.foundMovie = mov[0]
      this.serviceDB.findEvaluations(mov[0].id).subscribe(evaluations =>{
        this.evaluations = evaluations
      })
    });
    
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

  submitEvaluation(){
    
    let resp: Movie = {
      id: this.foundMovie != undefined? this.foundMovie.id : null,
      description: this.movie?.overview,
      title: this.movie?.title,
      idAPI: this.movie?.id
    }
    let eva: Evaluation = {
      id: null,
      score: 10,
      comment: this.comment,
      movie: resp
    }
    this.serviceDB.saveEvaluation(eva).subscribe(eva => {
      this.ngOnInit();
    });
    
  }
}
