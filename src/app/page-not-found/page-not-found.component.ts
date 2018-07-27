import { Component, OnInit } from '@angular/core';
import { Theme } from '../Themes/theme'
import { THEMES } from '../ThemesList/themeslist'

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css'],

})

export class PageNotFoundComponent implements OnInit {

  themes = THEMES;

  constructor() { }

  ngOnInit() {
  }

}
