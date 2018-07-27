import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { AboutComponent } from './Pages/about/about.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { Theme1Component } from './Themes/theme1/theme1.component';
import { Theme2Component } from './Themes/theme2/theme2.component';

const routes: Routes = [
  {
    path: 'theme1',
    children: [
      {
        path: 'home/:id',
        component: HomeComponent,
      },
      {
        path: 'about/:id',
        component: AboutComponent,
      },
      {
        path: 'contact/:id',
        component: ContactComponent,
      },
    ],
    component: Theme1Component,
  },
  {
    path: 'theme2',
    children: [
      {
        path: 'home/:id',
        component: HomeComponent,
      },
      {
        path: 'about/:id',
        component: AboutComponent,
      },
      {
        path: 'contact/:id',
        component: ContactComponent,
      },
    ],
    component: Theme2Component,
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
