import { Routes } from '@angular/router';
import { PesquisaNfseComponent } from './pages/pesquisa-nfse/pesquisa-nfse.component';
import { PesquisaCreditoComponent } from './pages/pesquisa-credito/pesquisa-credito.component';

export const routes: Routes = [
    {
        component: PesquisaNfseComponent,
        title: 'Pesquisa NFSE',
        path: ''

    },
    {
        component: PesquisaCreditoComponent,
        title: 'Pesquisa Crédito',
        path: 'credito'

    }
];
