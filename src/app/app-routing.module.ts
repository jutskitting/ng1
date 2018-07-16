import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Home1Component } from './Pages/home1/home1.component';
import { About1Component } from './Pages/about1/about1.component';
import { Contact1Component } from './Pages/contact1/contact1.component';
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { Theme1Component } from './Themes/theme1/theme1.component';

const routes: Routes = [

  {
    path: 'theme/:id',
    children: [
      {
        path: 'home/:id',
        component: Home1Component,
      },
      {
        path: 'about/:id',
        component: About1Component,
      },
      {
        path: 'contact/:id',
        component: Contact1Component,
      }
    ],
    component: Theme1Component,
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
