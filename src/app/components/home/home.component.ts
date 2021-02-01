import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  nuevasCanciones: any[] = [];
  loading: boolean = true;
  error = false;
  mensajeError: string;

  constructor(private spotify: SpotifyService) {
    this.spotify.getNewReleases().subscribe(
      (data: any) => {
        this.nuevasCanciones = data;
        this.loading = false;
      },
      (errorResponse) => {
        this.mensajeError = errorResponse.error.error.message;
        this.error = errorResponse;
        this.loading = false;
      }
    );
  }

  ngOnInit(): void {}
}
