import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './Pages/home/home.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { AboutComponent } from './Pages/about/about.component';
import { AppBootstrapModule } from './app.component-bootstrap';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Theme1Component } from './Themes/theme1/theme1.component';
import { Theme2Component } from './Themes/theme2/theme2.component';
import { Footer1Component } from './Components/Footers/footer1/footer1.component';
import { Header1Component } from './Components/Headers/header1/header1.component';
import { Header2Component } from './Components/Headers/header2/header2.component';
import { Body1Component } from './Components/Bodies/body1/body1.component';
import { Body2Component } from './Components/Bodies/body2/body2.component';
import { Body3Component } from './Components/Bodies/body3/body3.component';
import { Body4Component } from './Components/Bodies/body4/body4.component';
import { Body4Service } from './Components/Bodies/body4//body4.service';


@NgModule({
 
  imports: [
    NgbModule.forRoot(),
    AppRoutingModule,
    AppBootstrapModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    PageNotFoundComponent,
    Theme1Component,
    Theme2Component,
    Body1Component,
    Footer1Component,
    Header1Component,
    Header2Component,
    Body2Component,
    Body3Component,
    Body4Component
  ],
  providers: [Body4Service],
  bootstrap: [AppComponent],
  entryComponents: [Body4Component]
})
export class AppModule { }
