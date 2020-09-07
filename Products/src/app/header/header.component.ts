import { Component, OnInit, Input } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  @Input() cartItems = 0;
  toggle = false;
  searchString: string = '';
  ngOnInit() {
  }

  openNav() {
    $('#mySidenav').css('width', '250px');
  }

  closeNav() {
    $('#mySidenav').css('width', '0px');
  }
}
