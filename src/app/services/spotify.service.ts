import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private http: HttpClient) {
    console.log('servicio listo spotify');
  }

  getUrl(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQAC_vTjoYOGUGNNHENUFXvuGJj5WLdgEuGT2lEzMC0vIGlK1oWsnZpxxFDPHenACnMvL9-4UZTe_X40XTGxLO4AyofVoTxfFbChhBLm4Ls6FeVHFzNROpTLCtOYbjHlERBXEkQG_vwCydSnGIiMqNY9q2vAPIs',
    });

    return this.http.get(url, { headers });
  }

  getNewReleases() {
    return this.getUrl('browse/new-releases').pipe(
      map((data: any) => {
        return data.albums.items;
      })
    );
  }

  getBusqueda(termino: string) {

    return this.getUrl(`search?q=${termino}&type=artist&limit=20`)
      .pipe(map((data: any) => data.artists.items));
  }
}
