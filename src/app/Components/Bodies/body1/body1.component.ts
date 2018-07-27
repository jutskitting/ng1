import { Component, OnInit } from '@angular/core';
import { Body } from '../body';
@Component({
  selector: 'app-body1',
  templateUrl: './body1.component.html',
  styleUrls: ['./body1.component.css']
})
export class Body1Component implements OnInit {

  public body: Body = {
    BodyId: 1,
    BodyName: 'home'
  };

  constructor() { }

  ngOnInit() {
  }

}
