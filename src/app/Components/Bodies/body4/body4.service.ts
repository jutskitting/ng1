import { ApplicationRef, ComponentFactoryResolver, Injectable, Injector } from '@angular/core';
import { NgElement, WithProperties } from '@angular/elements';
import { Body4Component } from './body4.component';


@Injectable()
export class Body4Service {
  constructor(private injector: Injector,
    private applicationRef: ApplicationRef,
    private componentFactoryResolver: ComponentFactoryResolver) { }

  // Previous dynamic-loading method required you to set up infrastructure
  // before adding the popup to the DOM.
  showAsComponent(message: string) {
    // Create element
    const body4 = document.createElement('body4-component');

    // Create the component and wire it up with the element
    const factory = this.componentFactoryResolver.resolveComponentFactory(Body4Component);
    const body4ComponentRef = factory.create(this.injector, [], body4);

    // Attach to the view so that the change detector knows to run
    this.applicationRef.attachView(body4ComponentRef.hostView);

    // Listen to the close event
    body4ComponentRef.instance.closed.subscribe(() => {
      document.body.removeChild(body4);
      this.applicationRef.detachView(body4ComponentRef.hostView);
    });

    // Set the message
    body4ComponentRef.instance.message = message;

    // Add to the DOM
    document.body.appendChild(body4);
  }

  // This uses the new custom-element method to add the popup to the DOM.
  showAsElement(message: string) {
    // Create element
    const body4El: NgElement & WithProperties<Body4Component> = document.createElement('body4-element') as any;

    // Listen to the close event
    body4El.addEventListener('closed', () => document.body.removeChild(body4El));

    // Set the message
    body4El.message = message;

    // Add to the DOM
    document.body.appendChild(body4El);
  }
}
