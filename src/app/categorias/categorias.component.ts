import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Categoria } from '../categoria';
import { CategoriasService } from '../categorias.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  novaCategoria: Categoria = {} as Categoria;
  categorias: Categoria[] = [];

  constructor(private service: CategoriasService) {
  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.service.getCategorias().subscribe(items => {
      this.categorias = items
    },
      error => {
        console.log(error)
      },
      () => {
        this.categorias.forEach(categoria => {
          this.service.getCategoriaById(categoria.id).subscribe(item => {
            categoria.numberOfMusics = item.musics?.length;
          }
          )
        });
      }
    )
  }

  adicionarCategoria(form: NgForm) {
    console.log(this.novaCategoria);
    this.service.createCategoria(this.novaCategoria).subscribe(item => {
      form.resetForm()
      this.novaCategoria = {} as Categoria
      this.loadData()
    })
  }

}
