import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'al-dropdown-item',
  templateUrl: './dropdown-item.component.html',
  styleUrls: ['./dropdown-item.component.scss']
})
export class DropdownItemComponent implements OnInit {

  iconClass: string = "fa fa-users text-aqua";
  url: string = "#";
  userImgUrl: string ="dist/img/user2-160x160.jpg";

  constructor() { }

  ngOnInit() {
  }

}
