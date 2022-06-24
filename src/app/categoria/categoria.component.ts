import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from '../categoria';
import { CategoriasService } from '../categorias.service';
import { Musica } from '../musica';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  categoria: Categoria = {} as Categoria;
  novaMusica: Musica = {} as Musica;

  constructor(private router: Router, private route: ActivatedRoute,
    private service: CategoriasService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = parseInt(params['id'], 10)
      console.log(id);
      this.service.getCategoriaById(id).subscribe(item => {
        this.categoria = item
      }
      )
    })
  }

  adicionarMusica(form: NgForm) {
    this.novaMusica.category_id = this.categoria.id
    this.service.createMusica(this.novaMusica).subscribe(item => {
      this.categoria.musics?.push(item)
      form.resetForm()
      this.novaMusica = {} as Musica
    })
  }
}
