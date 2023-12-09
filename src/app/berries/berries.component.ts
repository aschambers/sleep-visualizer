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
  allBerries: Array<string> = [];
  pokemonList: Array<Pokemon> = [];
  belueBerry: Array<Pokemon> = [];
  isOpen = false;
  expandedIndex = 0;

  constructor(private pokemonService: PokemonService) {}

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
    if (!berry || !pokemon || !pokemon.berry) return true;
    if (pokemon.berry.toLowerCase() === berry.toLowerCase()) {
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
    if (!berry || !pokemon || !pokemon.berry) return '';
    if (pokemon.berry.toLowerCase() === berry.toLowerCase()) {
      const { url } = Sprites.getPokemon(pokemon.name, { gen: 'gen5' });
      return url;
    }

    return '';
  }

  /**
   * toggles the accordian for the menu item clicked
   * @param i number
   */
  toggle = (i: number) => {
    if (this.expandedIndex !== i && this.isOpen) {
      this.isOpen = false;
    }
    this.expandedIndex = i;
    this.isOpen = !this.isOpen;
  }
}
