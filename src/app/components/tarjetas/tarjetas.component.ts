import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css'],
})
export class TarjetasComponent implements OnInit {
  @Input() items: any[] = [];

  constructor(private router:Router) {}

  verArtista(artista:any){
    let artistaId;
    if (artista.type==="album") {
      artistaId = artista.artists[0].id;
    }else if (artista.type==="artist") {
      artistaId=artista.id;
    }

    this.router.navigate(['/artist',artistaId])
    
    
  }

  ngOnInit(): void {}
}
