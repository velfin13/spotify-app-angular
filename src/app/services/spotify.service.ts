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
      'BQB0tJ53v3XDuFFgf6f4HpMJgFEbc_i84KrNfvYizqkRGHI99oK2qcaJEJDxyurVliFOW8_voQncqZWc7pGlwhwLTbFtXXjCXpdS2vtTlxEz1loGFgb4h9QbOK9G4bk9Y6pyHoV2aCExP7hL3sLOs6AasLgKG1A';
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
