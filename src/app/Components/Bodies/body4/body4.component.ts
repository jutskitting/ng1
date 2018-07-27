import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Body } from '../body';

@Component({
  selector: 'app-body4',
  templateUrl: './body4.component.html',
  host: {
    '[@state]': 'state',
  },
  animations: [
    trigger('state', [
      state('opened', style({ transform: 'translateY(0%)' })),
      state('void, closed', style({ transform: 'translateY(100%)', opacity: 0 })),
      transition('* => *', animate('100ms ease-in')),
    ])
  ],
  styleUrls: ['./body4.component.css']
})

export class Body4Component implements OnInit {

  private state: 'opened' | 'closed' = 'closed';

  @Input()
  set message(message: string) {
    this._message = message;
    this.state = 'opened';
  }
  get message(): string { return this._message; }
  _message: string;

  @Output()

  closed = new EventEmitter();



  public body: Body = {
    BodyId: 4,
    BodyName: 'about'
  };
  
  constructor() { }
  
  ngOnInit() {
  }


}
