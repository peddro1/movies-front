import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Evaluation } from '../models/Evaluation';
import { Movie } from '../models/Movie';

@Injectable({
  providedIn: 'root'
})
export class MovieDbService {

  private apiDb = environment.apiUrl

  constructor( private http: HttpClient) {

  }

  saveEvaluation( evaluation: Evaluation){
    return this.http.post(this.apiDb + "/evaluation/save", evaluation );
  }

  saveMovie(movie: Movie){
    let rest = this.http.post(this.apiDb + "/movie/save" , movie)
    return rest; 
  }

  findEvaluations(idMovie: number | undefined | null){
    return this.http.get<Array<any>>(this.apiDb + "/evaluation/findEvaluationsByMovie?idMovie=" + idMovie);
  }

  findMovieByIdApi(id: number | undefined){
    return this.http.get<Array<any>>(this.apiDb + "/movie/findByIdApi?id=" + id);
  }
}
