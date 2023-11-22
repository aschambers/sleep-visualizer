import { Component, OnInit } from '@angular/core';
import { Sprites, Icons } from '@pkmn/img';

@Component({
  selector: 'app-berries',
  templateUrl: './berries.component.html',
  styleUrls: ['./berries.component.scss']
})
export class BerriesComponent implements OnInit {

  ngOnInit(): void {
    this.getSprite('belue');
    this.getSprite('bluk');
    this.getSprite('cheri');
    this.getSprite('chesto');
    this.getSprite('durin');
    this.getSprite('figy');
    this.getSprite('grepa');
    this.getSprite('leppa');
    this.getSprite('lum');
    this.getSprite('mago');
    this.getSprite('oran');
    this.getSprite('pamtre');
    this.getSprite('pecha');
    this.getSprite('persim');
    this.getSprite('rawst');
    this.getSprite('sitrus');
    this.getSprite('wiki');
    this.getSprite('yache');
  }
  /**
   * retrieves a sprite for a given item
   * @param item string
   * @returns string
   */
  getSprite = (item: string) => {
    const icon = document.getElementById(`${item}berry`);
    const style = Icons.getItem(`${item} berry`).style;
    if (icon) {
      icon.setAttribute('style', style);
    }
    return icon;
  }
}
