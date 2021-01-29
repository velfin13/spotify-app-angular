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
      'BQAc24qqWgVijir3CiW5rh-IdSNhc42iDXlRZDjkrv-SRB3nExwYpJpBOygxZFH8GYfjezfG0VO5Sy_szwWFi12iYSgyce_fDlyKzqF-tqlxQpGlewYLUbgbkBpQxlyEgdzKdW7S-0WPEMRYPpOyw1vXSsThM44';
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
