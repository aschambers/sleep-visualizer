import { Component, OnInit } from '@angular/core';
import { Icons } from '@pkmn/img';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  ngOnInit(): void {
    this.getSprite('Grepa Berry', 'berries');
    this.getSprite('Leek', 'ingredients');
    this.getSprite('tr08', 'skills');
    this.getSprite('twistedspoon', 'recipes');
  }

  /**
   * retrieves an icon to show in the menu
   * @param icon string
   * @returns string
   */
  getSprite = (icon: string, element: string) => {
    const span = document.getElementById(element);
    const style = Icons.getItem(icon).style;
    if (span) {
      span.setAttribute('style', style);
    }
  }
}
