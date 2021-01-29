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
    const tokens =
      'BQBJtmDiLTNU6_tEUddXvC2yYpWk9JrONyDnZFNQcyjYyWyvTxXVkTK7QU7bRFCVXsL57RBpQFE0dSlJGBg0m0Dpieg_DPdOs5f6fBeKClvYdRce9tj9yOOlhLF_7Z0jxqbU8eLspFojfW44GMX8z5D66QTZRDQ';
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
