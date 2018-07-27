import { Component, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { Body4Component } from './Components/Bodies/body4/body4.component';
import { Body4Service } from './Components/Bodies/body4//body4.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(injector: Injector, public popup: Body4Service) {
    // Convert `PopupComponent` to a custom element.
    const Body4Element = createCustomElement(Body4Component, { injector });
    // Register the custom element with the browser.
    customElements.define('body4-element', Body4Element);
  }
}
