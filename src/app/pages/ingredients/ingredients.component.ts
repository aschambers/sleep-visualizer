import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../models/pokemon.model';
import { Sprites } from '@pkmn/img';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss']
})
export class IngredientsComponent implements OnInit {
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
    return item ? `../../assets/images/${item}.png` : '';
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
      case 'fancyapple':
        name = 'Fancy Apple';
        break;
      case 'moomoomilk':
        name = 'Moomoo Milk';
        break;
      case 'greengrasssoybeans':
        name = 'Greengrass\nSoybeans';
        break;
      case 'honey':
        name = 'Honey';
        break;
      case 'beansausage':
        name = 'Bean Sausage';
        break;
      case 'warmingginger':
        name = 'Warming Ginger';
        break;
      case 'snoozytomato':
        name = 'Snoozy Tomato';
        break;
      case 'fancyegg':
        name = 'Fancy Egg';
        break;
      case 'pureoil':
        name = 'Pure Oil';
        break;
      case 'softpotato':
        name = 'Soft Potato';
        break;
      case 'fieryherb':
        name = 'Fiery Herb';
        break;
      case 'greengrasscorn':
        name = 'Greengrass Corn';
        break;
      case 'soothingcacao':
        name = 'Soothing Cacao';
        break;
      case 'tastymushroom':
        name = 'Tasty Mushroom';
        break;
      case 'largeleek':
        name = 'Large Leek';
        break;
      case 'slowpoketail':
        name = 'Slowpoke Tail';
        break;
      default:
        name = '';
    }

    return name;
  }

  getIngredientBasePower = (ingredient: string) => {
    if (!ingredient) return '';

    let basePower = 0;
    switch (ingredient) {
      case 'fancyapple':
        basePower = 90;
        break;
      case 'moomoomilk':
        basePower = 98;
        break;
      case 'greengrasssoybeans':
        basePower = 100;
        break;
      case 'honey':
        basePower = 101;
        break;
      case 'beansausage':
        basePower = 103;
        break;
      case 'warmingginger':
        basePower = 109;
        break;
      case 'snoozytomato':
        basePower = 110;
        break;
      case 'fancyegg':
        basePower = 115;
        break;
      case 'pureoil':
        basePower = 121;
        break;
      case 'softpotato':
        basePower = 124;
        break;
      case 'fieryherb':
        basePower = 130;
        break;
      case 'greengrasscorn':
        basePower = 140;
        break;
      case 'soothingcacao':
        basePower = 151;
        break;
      case 'tastymushroom':
        basePower = 167;
        break;
      case 'largeleek':
        basePower = 185;
        break;
      case 'slowpoketail':
        basePower = 342;
        break;
      default:
        basePower = 0;
    }

    return basePower;
  }
}
