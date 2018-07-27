import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Body3Component } from '../../Components/Bodies/body3/body3.component'
import { Body } from '../../Components/Bodies/body';
import { ViewChild } from '@angular/core/src/metadata/di';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

// Important!! import list of bodies acceptable for about component
// Add a catch at the router for acceptable urls

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public href: string = '';
  public pageid: string = '';
  public pagename: string = '';
  public IsIdTrue: boolean = false;
  public IsNameTrue: boolean = false;
  public IsAllTrue: boolean = false;
  constructor(private router: Router) { }
  public arr = this.router.url.split('/');

 

  ngOnInit() {
    this.href = this.router.url;
    //replace hard coded with list entries from server/list
    //ID/NAME are redundant here for bug catching
    this.pageid = this.arr[this.arr.length - 1]
    this.pagename = this.arr[this.arr.length - 2]
    this.IsIdTrue = this.pageid == '3';
    this.IsNameTrue = this.pagename == 'about';
    this.IsAllTrue = ((this.arr[this.arr.length - 1] == '3') && (this.arr[this.arr.length - 2] == 'about'));
    document.createElement('body4-component');
    console.log(this.pageid);
    console.log(this.pagename)
    console.log(this.IsIdTrue);
    console.log(this.IsNameTrue);
    console.log(this.IsAllTrue);
  }

}
