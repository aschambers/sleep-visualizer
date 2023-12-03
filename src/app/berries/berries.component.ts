import { Component, OnInit } from '@angular/core';
import { Icons } from '@pkmn/img';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-berries',
  templateUrl: './berries.component.html',
  styleUrls: ['./berries.component.scss']
})
export class BerriesComponent implements OnInit {
  constructor(private pokemonService: PokemonService) {}

  allBerries: Array<string> = [];

  ngOnInit(): void {
    const pokemonList = this.pokemonService.retrievePokemonList();
    console.log(pokemonList);

    const allBerries = this.pokemonService.retrieveBerryList();
    this.allBerries = allBerries;
    for (let i = 0; i < allBerries.length; i++) {
      this.getSprite(allBerries[i]);
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
