import { Component } from '@angular/core';
import { IconTypes } from '../data-access';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  isMenuOpen = false;

  public get IconTypes() {
    return IconTypes;
  }

  toggleMenu() {
    const menuElement = document.getElementById("menu");
    if (!menuElement) return;

    this.isMenuOpen = !this.isMenuOpen;
    menuElement.classList.toggle('is-active');
  }
}
