import { Routes } from '@angular/router';
import { LoginComponent } from './Pages/Admin/login/login.component';
import { LayoutComponent } from './Pages/Admin/layout/layout.component';
import { ProductsComponent } from './Pages/Admin/products/products.component';

export const routes: Routes = [
    {
        path:"",
        redirectTo:"login",
        pathMatch:"full"
    },
    {
        path:"login",
        component:LoginComponent
    },
    {
        path:"",
        component:LayoutComponent,
        children:[
            {
                path:"products",
                component:ProductsComponent
            }
        ]
    }
];
