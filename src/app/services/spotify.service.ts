import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private http: HttpClient) {}

  getUrl(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    const tokens =
      'BQBJ7b3yDADs8423F2xx7S0XTmhgNk0l7yvz35ujsDq5kFOuUzCXnKyn8o2OwNMwNucoj8PTU2CQPALs0cASgS72_DFudGHqA8FkEP2Snba669VPW54poFllN1oCnx1r-bC8hefayIzROEX3MsXTugi47p97QHk';
    const headers = new HttpHeaders({
      Authorization: `Bearer ${tokens}`,
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
    return this.getUrl(`search?q=${termino}&type=artist&limit=20`).pipe(
      map((data: any) => data.artists.items)
    );
  }

  getArtista(id: string) {
    return this.getUrl(`artists/${id}`);
  }

  getTopTracks(id: string) {
    return this.getUrl(`artists/${id}/top-tracks?market=es`).pipe(map((data:any)=>data.tracks))
  }
}
