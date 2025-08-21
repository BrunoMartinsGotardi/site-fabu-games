import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TriologiaASeitaComponent } from './triologia-a-seita/triologia-a-seita.component';
import path from 'path';
import { SobreComponent } from './sobre/sobre.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'triologia-a-seita',
        component: TriologiaASeitaComponent
    },
    {
        path: 'sobre',
        component: SobreComponent
    }

];
