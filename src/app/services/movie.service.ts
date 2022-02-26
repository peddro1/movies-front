import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MovieFromApi } from '../models/MovieFromApi.model';
import { ResponseGeneral } from '../models/ResponseGeneralApi.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private apiMovie = environment.apiMovieGeneral;

  private apiKey = environment.apiKey;

  constructor(
    private http: HttpClient
  ) { }

  findMovieByIdFromApi(id: number){
    return this.http.get<MovieFromApi>(this.apiMovie + '/movie/' + id + this.apiKey + '&language=pt-BR');
  }

  private findVideosInfoFromMovie(id: number){
    return this.http.get<ResponseGeneral>(this.apiMovie + '/movie/' + id + "/videos" + this.apiKey);
  }

  returnLinkVideo(id: number){
    this.findVideosInfoFromMovie(id).subscribe(videoInfo => {
      return 'https://www.youtube.com/watch?v=' + videoInfo?.results[0]?.key
    });
  }

  findListGenres(){
    return this.http.get<any>(this.apiMovie + "/genre/movie/list" + this.apiKey + '&language=pt-BR');
  }

  findListMoviesByGenre(idGenre: number){
    return this.http.get<any>(this.apiMovie + '/discover/movie' + this.apiKey + "&with_genres=" + idGenre + "&sort_by=vote_average.desc&vote_count.gte=10&language=pt-BR")
  }

}
