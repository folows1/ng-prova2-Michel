import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categoria } from './categoria';
import { Observable } from 'rxjs';
import { Musica } from './musica';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(private http: HttpClient) { }

  getCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>('https://music-api-2022.herokuapp.com/categories');
  }

  createCategoria(categoria: Categoria): Observable<Categoria> {
    return this.http.post<Categoria>('https://music-api-2022.herokuapp.com/categories', categoria)
  }

  getCategoriaById(id: number): Observable<Categoria> {
    return this.http.get<Categoria>(`https://music-api-2022.herokuapp.com/categories/${id}`)
  }

  createMusica(musica: Musica): Observable<Musica> {
    return this.http.post<Musica>('https://music-api-2022.herokuapp.com/musics', musica)
  }
}
