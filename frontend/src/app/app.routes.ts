import { Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

export const routes: Routes = [
    {
        path: '',
        component: CategoryComponent,
        title: 'Home Page'
    },
    {
        path: 'list/:id',
        component: ShoppingListComponent,
        title: 'Shopping List'
    }
];
