import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {

  buscador:any[] =[];

  constructor(private busqueda: SpotifyService) {}

  ngOnInit(): void {}

  buscar(termino: string) {
    this.busqueda.getBusqueda(termino).subscribe((data:any) => {
      console.log(data);
      this.buscador = data;
    });
  }
}
