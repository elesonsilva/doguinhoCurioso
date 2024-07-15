import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { RacasComponent } from './components/pages/racas/racas.component';
import { SelectTipoComponent } from './components/pages/select-tipo/select-tipo.component';
import { CatsComponent } from './components/pages/cats/cats.component';
import { DogdetalhesComponent } from './components/pages/dogdetalhes/dogdetalhes.component';
import { CatsdetalheComponent } from './components/pages/catsdetalhe/catsdetalhe.component';
import { CarregadorComponent } from './components/carregador/carregador.component';
import { CarregadorCatComponent } from './components/carregador-cat/carregador-cat.component';
import { ModalComponent } from './components/modal/modal.component';
import { SobreComponent } from './components/pages/sobre/sobre.component';


export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'select', component:SelectTipoComponent},
    {path:'select/dogs', component:RacasComponent},
    {path:'select/cats', component:CatsComponent},
    {path:'dogs/:id', component:DogdetalhesComponent},
    {path:'cats/:id', component:CatsdetalheComponent},
    {path:'carregador', component:CarregadorComponent},
    {path:'carregadorCat', component:CarregadorCatComponent},
    {path:'modal', component:ModalComponent},
    {path:'sobre', component:SobreComponent}  
];
