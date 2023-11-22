import { Component, OnInit } from '@angular/core';
import { Icons } from '@pkmn/img';

@Component({
  selector: 'app-berries',
  templateUrl: './berries.component.html',
  styleUrls: ['./berries.component.scss']
})
export class BerriesComponent implements OnInit {
  allBerries: Array<string> = ['Belue', 'Bluk', 'Cheri', 'Chesto', 'Durin', 'Figy',
                              'Grepa', 'Leppa', 'Lum', 'Mago', 'Oran', 'Pamtre',
                              'Pecha', 'Persim', 'Rawst', 'Sitrus', 'Wiki', 'Yache'];
  berryList: Array<any> = [];

  ngOnInit(): void {
    for (let i = 0; i < this.allBerries.length; i++) {
      this.getSprite(this.allBerries[i]);
    }
  }
  /**
   * retrieves a sprite for a given item
   * @param item string
   * @returns string
   */
  getSprite = (item: string) => {
    const style = Icons.getItem(`${item} berry`).style;
    
    return style;
  }
}
