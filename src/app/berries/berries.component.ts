import { Component, OnInit } from '@angular/core';
import { Icons } from '@pkmn/img';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../pokemon.model';

@Component({
  selector: 'app-berries',
  templateUrl: './berries.component.html',
  styleUrls: ['./berries.component.scss']
})
export class BerriesComponent implements OnInit {
  constructor(private pokemonService: PokemonService) {}

  allBerries: Array<string> = [];
  belueBerry: Array<Pokemon> = [];

  ngOnInit(): void {
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

  /**
   * returns a list of pokemon with a specified berry
   * @param berry string
   * @returns array
   */
  sortPokemonByBerry = (berry: string) => {
    const pokemonList = this.pokemonService.retrievePokemonList() || [];
    const pokemonWithBerry = pokemonList.filter(pokemon => pokemon.ingredient.toLowerCase() === berry);
    return pokemonWithBerry;
  }
}
