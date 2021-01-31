import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css'],
})
export class ArtistaComponent implements OnInit {
  artista: any = {};
  loading: boolean;
  topTracks: any[] = [];

  constructor(private router: ActivatedRoute, private spotify: SpotifyService) {
    this.loading = true;
    this.router.params.subscribe((param) => {
      this.obtenerArtista(param['id']);
      this.obtenerTopTracks(param['id']);
    });
  }

  obtenerArtista(id: string) {
    this.loading = true;
    this.spotify.getArtista(id).subscribe((artist) => {
      this.artista = artist;
      this.loading = false;
    });
  }

  obtenerTopTracks(id: string) {
    this.loading = true;
    this.spotify.getTopTracks(id).subscribe((dattopTracks) => {
      this.loading = false;
      this.topTracks = dattopTracks;
      console.log(this.topTracks);
      
    });
  }

  ngOnInit(): void {}
}
