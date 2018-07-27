import { Component, OnInit } from '@angular/core';
import { Body } from '../body';

@Component({
  selector: 'app-body3',
  templateUrl: './body3.component.html',
  styleUrls: ['./body3.component.css']
})
export class Body3Component implements OnInit {

  public body: Body = {
    BodyId: 3,
    BodyName: 'about'
  };


  constructor() { }

  ngOnInit() {
  }

}
