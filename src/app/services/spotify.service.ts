import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private http: HttpClient) {
  }

  getUrl(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    const tokens =
      'BQBJij3gPwUEbbGhVHqDA0EkiM8ZlITfJFIfIoLBwnELT4bKnMVkdkzNiY6Pw9urepP6nLfrkJrSNQPN0MyGZWT69r3QtXr7k-RezuQt5z_bF8NJLs8zCPfluO5CjVAkitcUJsEtaHMb4LPQdA55rm8bOqJOEmg';
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
}
