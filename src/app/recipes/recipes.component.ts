import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../pokemon.model';
import { Sprites } from '@pkmn/img';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent {
  allIngredients: Array<string> = [];
  pokemonList: Array<Pokemon> = [];
  belueBerry: Array<Pokemon> = [];
  isOpen = false;
  expandedIndex = 0;

  constructor(private pokemonService: PokemonService) {}

  async ngOnInit(): Promise<void> {
    this.pokemonList = await this.pokemonService.retrievePokemonList() || [];
    const allIngredients = this.pokemonService.retrieveIngredientsList();
    this.allIngredients = allIngredients;
  }

  /**
   * retrieves a sprite for a given item
   * @param item string
   * @returns string
   */
  getSprite = (item: string) => {
    return item ? `../../assets/icons/${item}.png` : '';
  }

  /**
   * check if pokemon has specified ingredient
   * @param ingredient string
   * @param pokemon Pokemon
   * @returns boolean
   */
  checkPokemonHasIngredient = (ingredient: string, pokemon: Pokemon) => {
    if (!ingredient || !pokemon || !pokemon.ingredients || (pokemon.ingredients && pokemon.ingredients.length === 0)) return false;
    if (pokemon.ingredients.indexOf(ingredient) > -1) {
      return true;
    }

    return false;
  }

  /**
   * returns a list of pokemon with a specified ingredient
   * @param ingredient string
   * @returns array
   */
  getPokemonByIngredient = (ingredient: string, pokemon: Pokemon) => {
    if (!ingredient || !pokemon || !pokemon.ingredients || (pokemon.ingredients && pokemon.ingredients.length === 0)) return '';
    if (pokemon.ingredients.indexOf(ingredient) > -1) {
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

  /**
   * gets the name of the ingredient for display purposes
   * @param ingredient string
   * @returns string
   */
  getIngredientName = (ingredient: string) => {
    if (!ingredient) return '';

    let name = '';
    switch (ingredient) {
      case 'beansausage':
        name = 'Bean Sausage';
        break;
      case 'fancyapple':
        name = 'Fancy Apple';
        break;
      case 'fancyegg':
        name = 'Fancy Egg';
        break;
      case 'fieryherb':
        name = 'Fiery Herb';
        break;
      case 'greengrasssoybeans':
        name = 'Greengrass\nSoybeans';
        break;
      case 'honey':
        name = 'Honey';
        break;
      case 'largeleek':
        name = 'Large Leek';
        break;
      case 'moomoomilk':
        name = 'Moomoo Milk';
        break;
      case 'pureoil':
        name = 'Pure Oil';
        break;
      case 'slowpoketail':
        name = 'Slowpoke Tail';
        break;
      case 'snoozytomato':
        name = 'Snoozy Tomato';
        break;
      case 'softpotato':
        name = 'Soft Potato';
        break;
      case 'soothingcacao':
        name = 'Soothing Cacao';
        break;
      case 'tastymushroom':
        name = 'Tasty Mushroom';
        break;
      case 'warmingginger':
        name = 'Warming Ginger';
        break;
      default:
        name = '';
    }

    return name;
  }
}

