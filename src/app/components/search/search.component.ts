import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  buscador: any[] = [];
  loading: boolean;

  constructor(private busqueda: SpotifyService) {}

  ngOnInit(): void {}

  buscar(termino: string) {
    this.loading = true;
    this.busqueda.getBusqueda(termino).subscribe((data: any) => {
      this.buscador = data;
      this.loading = false;
    });
  }
}
