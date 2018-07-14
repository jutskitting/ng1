import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component';
import { Home1Component } from './Pages/home1/home1.component';
import { Contact1Component } from './Pages/contact1/contact1.component';
import { About1Component } from './Pages/about1/about1.component';
import { AppBootstrapModule } from './app.component-bootstrap';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Theme1Component } from './Themes/theme1/theme1.component';
import { Body1Component } from './Components/Bodies/body1/body1.component';
import { Footer1Component } from './Components/Footers/footer1/footer1.component';
import { Header1Component } from './Components/Headers/header1/header1.component';
import { Body2Component } from './Components/Bodies/body2/body2.component';
import { Body3Component } from './Components/Bodies/body3/body3.component';


@NgModule({
  declarations: [
    AppComponent,
    Home1Component,
    Contact1Component,
    About1Component,
    PageNotFoundComponent,
    Theme1Component,
    Body1Component,
    Footer1Component,
    Header1Component,
    Body2Component,
    Body3Component
  ],
  imports: [
    NgbModule.forRoot(), BrowserModule, AppRoutingModule, AppBootstrapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
