import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[al-dropdown]',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  toggleIcon: string = "fa-bell-o";
  toggleLabelClass: string = "label-warning";
  count: number = 20;

  constructor() { }

  ngOnInit() {
  }

}
