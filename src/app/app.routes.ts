import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home-page/home-page.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: '',
        children: [
            {
                path: 'home',
                component: HomeComponent,
                loadChildren: () => import('./pages/home/home-page/home-page.module').then(m => m.HomeModule)
            },
        ]
    },
];