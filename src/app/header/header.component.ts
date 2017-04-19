import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'al-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  toggleClick($event) {
    let body = document.getElementsByTagName('body')[0];
    if (body.classList.contains("sidebar-collapse")) {
      body.classList.remove("sidebar-collapse");   //remove the class
    } else {
      body.classList.add("sidebar-collapse");   //add the class
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
