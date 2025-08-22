import { Routes } from '@angular/router';
import { Login } from './componentes/login/login';
import path from 'path';
import { Home } from './componentes/home/home';
import { authGuard } from './auth-guard';

export const routes: Routes = [
    {path: "home", title: "Home", canActivate: [authGuard],
         loadComponent: () => 
         import ('./componentes/home/home').then((m)=> m.Home)
    },
    {path: "login",title: "Login", component: Login},
    {path: "**", title:"Redirect", component: Login}
];