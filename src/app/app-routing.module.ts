import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { CategoriasComponent } from './categorias/categorias.component';

const routes: Routes = [
    {
        path: 'categoria/:id',
        component: CategoriaComponent,
    },
    {
        path: '',
        component: CategoriasComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }