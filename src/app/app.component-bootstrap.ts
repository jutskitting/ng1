import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertModule } from 'ngx-bootstrap';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@NgModule({
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    AlertModule.forRoot(),
    CarouselModule.forRoot()
  ],
  providers: [
    {     provide: CarouselModule, useValue: { interval: 500, noPause: true, showIndicators: true } 
  }
    ],
  exports: [BsDropdownModule, TooltipModule, ModalModule, AlertModule, CarouselModule]
})
export class AppBootstrapModule { }
