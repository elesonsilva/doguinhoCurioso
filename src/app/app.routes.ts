import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { RacasComponent } from './components/pages/racas/racas.component';

export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'racas', component:RacasComponent}
];
