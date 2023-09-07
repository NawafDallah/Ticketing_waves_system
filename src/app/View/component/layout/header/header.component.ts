import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from 'src/app/controller/service/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();

  constructor(private autService: AuthService) {}

  ngOnInit() {}

  logOut() {
    this.autService.logout();
  }

  toggleSideBar() {
    this.toggleSideBarForMe.emit();
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 300);
  }
}
