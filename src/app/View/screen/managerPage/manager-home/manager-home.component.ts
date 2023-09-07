import { Component } from '@angular/core';

@Component({
  selector: 'app-manager-home',
  templateUrl: './manager-home.component.html',
  styleUrls: ['./manager-home.component.css'],
})
export class ManagerHomeComponent {
  manager:String = "Manager";
  sideBarOpen: boolean = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
}
