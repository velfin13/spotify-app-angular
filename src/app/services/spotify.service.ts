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
      'BQD2rXsFx1SncJWW3TZg-1s_NJYrde-3qg5aC-jJjWSJn05awuahywWxYnNfwUEAfTs11tttGcz-NEi_pOjocvQEUPXFz81u261yQBZSluI7wi5YwjEK0E1TC8sn68XKeRRiwlnPPsvgNVifS2BtDiK-6Y7ME8U';
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
