import { Component, OnInit } from '@angular/core';
import { Icons } from '@pkmn/img';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../pokemon.model';
import { Sprites } from '@pkmn/img';

@Component({
  selector: 'app-berries',
  templateUrl: './berries.component.html',
  styleUrls: ['./berries.component.scss']
})
export class BerriesComponent implements OnInit {
  constructor(private pokemonService: PokemonService) {}

  allBerries: Array<string> = [];
  pokemonList: Array<Pokemon> = [];
  belueBerry: Array<Pokemon> = [];

  async ngOnInit(): Promise<void> {
    this.pokemonList = await this.pokemonService.retrievePokemonList() || [];
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

  checkPokemonHasBerry = (berry: string, pokemon: Pokemon) => {
    if (!berry || !pokemon || !pokemon.ingredient) return true;
    if (pokemon.ingredient.toLowerCase() === berry.toLowerCase()) {
      return true;
    }

    return false;
  }

  /**
   * returns a list of pokemon with a specified berry
   * @param berry string
   * @returns array
   */
  getPokemonByBerry = (berry: string, pokemon: Pokemon) => {
    if (!berry || !pokemon || !pokemon.ingredient) return '';
    if (pokemon.ingredient.toLowerCase() === berry.toLowerCase()) {
      const { url } = Sprites.getPokemon(pokemon.name, { gen: 'gen5' });
      return url;
    }

    return '';
  }
}
