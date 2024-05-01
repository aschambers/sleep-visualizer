import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../models/pokemon.model';
import { Sprites } from '@pkmn/img';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  allSkills: Array<string> = [];
  pokemonList: Array<Pokemon> = [];
  belueBerry: Array<Pokemon> = [];
  isOpen = false;
  expandedIndex = 0;

  constructor(private pokemonService: PokemonService) {}

  async ngOnInit(): Promise<void> {
    this.pokemonList = await this.pokemonService.retrievePokemonList() || [];
    const allSkills = this.pokemonService.retrieveSkillsList();
    this.allSkills = allSkills;
    this.toggle(0);
  }

  /**
   * check if pokemon has specified skill
   * @param skill string
   * @param pokemon Pokemon
   * @returns boolean
   */
  checkPokemonHasSkill = (skill: string, pokemon: Pokemon) => {
    if (!skill || !pokemon || !pokemon.mainSkill) return false;
    if (pokemon.mainSkill.toLowerCase() === skill.toLowerCase()) {
      return true;
    }

    return false;
  }

  /**
   * returns a list of pokemon with a specified skill
   * @param skill string
   * @returns array
   */
  getPokemonBySkill = (skill: string, pokemon: Pokemon) => {
    if (!skill || !pokemon || !pokemon.mainSkill) return '';
    if (pokemon.mainSkill.toLowerCase() === skill.toLowerCase()) {
      const { url } = Sprites.getPokemon(pokemon.name, { gen: 'gen5' });
      return url;
    }

    return '';
  }

  /**
   * toggles the accordian for the menu item clicked
   * @param index number
   */
  toggle = (index: number) => {
    if (this.expandedIndex !== index && this.isOpen) {
      this.isOpen = false;
    }
    this.expandedIndex = index;
    this.isOpen = !this.isOpen;
  }
}
