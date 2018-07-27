import { Component, OnInit } from '@angular/core';
import { Theme } from '../theme'
@Component({
  selector: 'app-theme2',
  templateUrl: './theme2.component.html',
  styleUrls: ['./theme2.component.css']
})
export class Theme2Component implements OnInit {

  theme: Theme = {
    id: 2,
    name: 'theme'
  };

  constructor() { }

  ngOnInit() {
  }

}
