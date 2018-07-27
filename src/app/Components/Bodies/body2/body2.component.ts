import { Component, OnInit } from '@angular/core';
import { Body } from '../body';
@Component({
  selector: 'app-body2',
  templateUrl: './body2.component.html',
  styleUrls: ['./body2.component.css']
})
export class Body2Component implements OnInit {

 public body: Body = {
    BodyId: 2,
    BodyName: 'contact'
  };

  constructor() { }

  ngOnInit() {
  }

}
