import { AuthService } from './../../services/auth.service';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})



export class NavbarComponent {

  @Output() menuClick = new EventEmitter<void>();

  constructor(
    private authService: AuthService
  ) {}

  logout(): void {
    this.authService.logout();
  }


 abrirMenu(): void {
  this.menuClick.emit();
 }

}