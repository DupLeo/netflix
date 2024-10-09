import { Component, OnDestroy, OnInit, effect, inject } from '@angular/core';
import { Movie } from '../../service/model/movie.model';
import { TmdbService } from '../../service/tmdb.service';

@Component({
  selector: 'app-more-infos',
  standalone: true,
  imports: [],
  templateUrl: './more-infos.component.html',
  styleUrl: './more-infos.component.scss'
})
export class MoreInfosComponent implements OnInit, OnDestroy{
  public movieId = -1;

  tmdbService = inject(TmdbService);

  movie: Movie | undefined;

  constructor() {
    effect(() => {
      this.movie = this.tmdbService.movieById().value;
    });
  }

  ngOnInit(): void {
    this.getMovieById();
  }

  getMovieById(): void {
    this.tmdbService.getMovieById(this.movieId);
  }

  ngOnDestroy(): void {
    this.tmdbService.clearGetMovieById();
  }

}
