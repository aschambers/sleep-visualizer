import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor() { }

  allBerries: Array<string> = ['Belue', 'Bluk', 'Cheri', 'Chesto', 'Durin', 'Figy',
                              'Grepa', 'Leppa', 'Lum', 'Mago', 'Oran', 'Pamtre',
                              'Pecha', 'Persim', 'Rawst', 'Sitrus', 'Wiki', 'Yache'];
  belueBerry: Array<string> = ['Magnemite', 'Magneton', 'Magnezone', 'Steelix'];
  blukBerry: Array<string> = ['Gastly', 'Haunter', 'Gengar', 'Shuppet', 'Banette'];
  cheriBerry: Array<string> = ['Mankey', 'Primeape', 'Riolu', 'Lucario'];
  chestoBerry: Array<string> = ['Ekans', 'Arbok', 'Gulpin', 'Swalot'];
  durinBerry: Array<string> = ['Bulbasaur', ''];
  pokemonStringList: Array<string> = ['Bulbasaur', 'Ivysaur', 'Venusaur', 'Charmander', 'Charmeleon', 'Charizard',
  'Squirtle', 'Wartortle', 'Blastoise', 'Caterpie', 'Metapod', 'Butterfree', 'Rattata',
  'Raticate', 'Ekans', 'Arbok', 'Pichu', 'Pikachu', 'Raichu', 'Cleffa', 'Clefairy',
  'Clefable', 'Igglybuff', 'Jigglypuff', 'Wigglytuff', 'Diglett', 'Dugtrio', 'Meowth',
  'Persian', 'Psyduck', 'Golduck', 'Mankey', 'Primeape', 'Growlithe', 'Arcanine',
  'Bellsprout', 'Weepinbell', 'Victreebel', 'Geodude', 'Graveler', 'Golem', 'Slowpoke',
  'Slowbro', 'Slowking', 'Magnemite', 'Magneton', 'Magnezone', 'Doduo', 'Dodrio',
  'Gastly', 'Haunter', 'Gengar', 'Onix', 'Steelix', 'Cubone', 'Marowak', 'Kangaskhan',
  'Mime Jr.', 'Mr. Mime', 'Pinsir', 'Ditto', 'Eevee', 'Vaporeon', 'Jolteon', 'Flareon',
  'Espeon', 'Umbreon', 'Leafeon', 'Glaceon', 'Sylveon', 'Chikorita', 'Bayleef',
  'Meganium', 'Cyndaquil', 'Quilava', 'Typhlosion', 'Totodile', 'Croconaw', 'Feraligatr',
  'Togepi', 'Togetic', 'Togekiss', 'Mareep', 'Flaaffy', 'Ampharos', 'Bonsley', 'Sudowoodo',
  'Wynaut', 'Wobbuffet', 'Heracross', 'Houndour', 'Houndoom', 'Larvitar', 'Pupitar',
  'Tyranitar', 'Slakoth', 'Vigoroth', 'Slaking', 'Sableye', 'Gulpin', 'Swalot', 'Swablu',
  'Altaria', 'Shuppet', 'Banette', 'Absol', 'Spheal', 'Sealeo', 'Walrein', 'Riolu',
  'Lucario', 'Croagunk', 'Toxicroak'];
  pokemonList: Array<Pokemon> = [
    {
      name: 'Bulbasaur',
      ingredient: 'Durin',
      mainSkill: 'Ingredient Magnet S',
      specialty: 'Ingredients'
    },
    {
      name: 'Ivysaur',
      ingredient: 'Durin',
      mainSkill: 'Ingredient Magnet S',
      specialty: 'Ingredients'
    },
    {
      name: 'Venusaur',
      ingredient: 'Durin',
      mainSkill: 'Ingredient Magnet S',
      specialty: 'Ingredients'
    },
    {
      name: 'Charmander',
      ingredient: 'Leppa',
      mainSkill: 'Ingredient Magnet S',
      specialty: 'Ingredients'
    },
    {
      name: 'Charmeleon',
      ingredient: 'Leppa',
      mainSkill: 'Ingredient Magnet S',
      specialty: 'Ingredients'
    },
    {
      name: 'Charizard',
      ingredient: 'Leppa',
      mainSkill: 'Ingredient Magnet S',
      specialty: 'Ingredients'
    },
    {
      name: 'Squirtle',
      ingredient: 'Oran',
      mainSkill: 'Ingredient Magnet S',
      specialty: 'Ingredients'
    },
    {
      name: 'Wartortle',
      ingredient: 'Oran',
      mainSkill: 'Ingredient Magnet S',
      specialty: 'Ingredients'
    },
    {
      name: 'Blastoise',
      ingredient: 'Oran',
      mainSkill: 'Ingredient Magnet S',
      specialty: 'Ingredients'
    },
    {
      name: 'Caterpie',
      ingredient: 'Lum',
      mainSkill: 'Ingredient Magnet S',
      specialty: 'Berries'
    },
    {
      name: 'Metapod',
      ingredient: 'Lum',
      mainSkill: 'Ingredient Magnet S',
      specialty: 'Berries'
    },
    {
      name: 'Butterfree',
      ingredient: 'Lum',
      mainSkill: 'Ingredient Magnet S',
      specialty: 'Berries'
    },
    {
      name: 'Rattata',
      ingredient: 'Persim',
      mainSkill: 'Charge Energy S',
      specialty: 'Berries'
    },
    {
      name: 'Raticate',
      ingredient: 'Persim',
      mainSkill: 'Charge Energy S',
      specialty: 'Berries'
    },
    {
      name: 'Ekans',
      ingredient: 'Chesto',
      mainSkill: 'Charge Energy S',
      specialty: 'Berries'
    },
    {
      name: 'Arbok',
      ingredient: 'Chesto',
      mainSkill: 'Charge Energy S',
      specialty: 'Berries'
    },
    {
      name: 'Pichu',
      ingredient: 'Grepa',
      mainSkill: 'Charge Strength S',
      specialty: 'Berries'
    },
    {
      name: 'Pikachu',
      ingredient: 'Grepa',
      mainSkill: 'Charge Strength S',
      specialty: 'Berries'
    },
    {
      name: 'Raichu',
      ingredient: 'Grepa',
      mainSkill: 'Charge Strength S',
      specialty: 'Berries'
    },
    {
      name: 'Cleffa',
      ingredient: 'Pecha',
      mainSkill: 'Metronome',
      specialty: 'Berries'
    },
    {
      name: 'Clefairy',
      ingredient: 'Pecha',
      mainSkill: 'Metronome',
      specialty: 'Berries'
    },{
      name: 'Clefable',
      ingredient: 'Pecha',
      mainSkill: 'Metronome',
      specialty: 'Berries'
    },
    {
      name: 'Igglybuff',
      ingredient: 'Pecha',
      mainSkill: 'Energy for Everyone S',
      specialty: 'Skills'
    },
    {
      name: 'Jigglypuff',
      ingredient: 'Pecha',
      mainSkill: 'Energy for Everyone S',
      specialty: 'Skills'
    },{
      name: 'Wigglytuff',
      ingredient: 'Pecha',
      mainSkill: 'Energy for Everyone S',
      specialty: 'Skills'
    },
    {
      name: 'Diglett',
      ingredient: 'Figy',
      mainSkill: 'Charge Strength S',
      specialty: 'Ingredients'
    },
    {
      name: 'Dugtrio',
      ingredient: 'Figy',
      mainSkill: 'Charge Strength S',
      specialty: 'Ingredients'
    },
    {
      name: 'Meowth',
      ingredient: 'Persim',
      mainSkill: 'Dream Shard Magnet S',
      specialty: 'Skills'
    },
    {
      name: 'Persian',
      ingredient: 'Persim',
      mainSkill: 'Dream Shard Magnet S',
      specialty: 'Skills'
    },
    {
      name: 'Psyduck',
      ingredient: 'Oran',
      mainSkill: 'Charge Strength S - Var',
      specialty: 'Skills'
    },
    {
      name: 'Golduck',
      ingredient: 'Oran',
      mainSkill: 'Charge Strength S - Var',
      specialty: 'Skills'
    },
    {
      name: 'Mankey',
      ingredient: 'Cheri',
      mainSkill: 'Charge Strength S - Var',
      specialty: 'Berries'
    },
    {
      name: 'Primeape',
      ingredient: 'Cheri',
      mainSkill: 'Charge Strength S - Var',
      specialty: 'Berries'
    },
    {
      name: 'Growlithe',
      ingredient: 'Leppa',
      mainSkill: 'Extra Helpful S',
      specialty: 'Skills'
    },
    {
      name: 'Arcanine',
      ingredient: 'Leppa',
      mainSkill: 'Extra Helpful S',
      specialty: 'Skills'
    },
    {
      name: 'Bellsprout',
      ingredient: 'Durin',
      mainSkill: 'Charge Energy S',
      specialty: 'Ingredients'
    },
    {
      name: 'Weepinbell',
      ingredient: 'Durin',
      mainSkill: 'Charge Energy S',
      specialty: 'Ingredients'
    },
    {
      name: 'Victreebel',
      ingredient: 'Durin',
      mainSkill: 'Charge Energy S',
      specialty: 'Ingredients'
    },
    {
      name: 'Geodude',
      ingredient: 'Sitrus',
      mainSkill: 'Charge Strength S - Var',
      specialty: 'Ingredients'
    },
    {
      name: 'Graveler',
      ingredient: 'Sitrus',
      mainSkill: 'Charge Strength S - Var',
      specialty: 'Ingredients'
    },
    {
      name: 'Golem',
      ingredient: 'Sitrus',
      mainSkill: 'Charge Strength S - Var',
      specialty: 'Ingredients'
    },
    {
      name: 'Slowpoke',
      ingredient: 'Oran',
      mainSkill: 'Energizing Cheer S',
      specialty: 'Skills'
    },
    {
      name: 'Slowbro',
      ingredient: 'Oran',
      mainSkill: 'Energizing Cheer S',
      specialty: 'Skills'
    },
    {
      name: 'Slowking',
      ingredient: 'Oran',
      mainSkill: 'Energizing Cheer S',
      specialty: 'Skills'
    },
    {
      name: 'Magnemite',
      ingredient: 'Belue',
      mainSkill: 'Cooking Power-Up S',
      specialty: 'Skills'
    },
    {
      name: 'Magneton',
      ingredient: 'Belue',
      mainSkill: 'Cooking Power-Up S',
      specialty: 'Skills'
    },
    {
      name: 'Magnezone',
      ingredient: 'Belue',
      mainSkill: 'Cooking Power-Up S',
      specialty: 'Skills'
    },
    {
      name: 'Doduo',
      ingredient: 'Pamtre',
      mainSkill: 'Ingredient Magnet S',
      specialty: 'Berries'
    },
    {
      name: 'Dodrio',
      ingredient: 'Pamtre',
      mainSkill: 'Ingredient Magnet S',
      specialty: 'Berries'
    },
    {
      name: 'Gastly',
      ingredient: 'Bluk',
      mainSkill: 'Charge Strength S',
      specialty: 'Ingredients'
    },
    {
      name: 'Haunter',
      ingredient: 'Bluk',
      mainSkill: 'Charge Strength S',
      specialty: 'Ingredients'
    },
    {
      name: 'Gengar',
      ingredient: 'Bluk',
      mainSkill: 'Charge Strength S',
      specialty: 'Ingredients'
    },
    {
      name: 'Onix',
      ingredient: 'Sitrus',
      mainSkill: 'Ingredient Magnet S',
      specialty: 'Berries'
    },
    {
      name: 'Steelix',
      ingredient: 'Belue',
      mainSkill: 'Ingredient Magnet S',
      specialty: 'Berries'
    },
    {
      name: 'Cubone',
      ingredient: 'Figy',
      mainSkill: 'Charge Energy S',
      specialty: 'Berries'
    },
    {
      name: 'Marowak',
      ingredient: 'Figy',
      mainSkill: 'Charge Energy S',
      specialty: 'Berries'
    },
    {
      name: 'Kangaskhan',
      ingredient: 'Persim',
      mainSkill: 'Ingredient Magnet S',
      specialty: 'Ingredients'
    },
    {
      name: 'Mime Jr.',
      ingredient: 'Mago',
      mainSkill: 'Charge Strength S',
      specialty: 'Ingredients'
    },
    {
      name: 'Mr. Mime',
      ingredient: 'Mago',
      mainSkill: 'Charge Strength S',
      specialty: 'Ingredients'
    },
    {
      name: 'Pinsir',
      ingredient: 'Lum',
      mainSkill: 'Charge Strength S',
      specialty: 'Ingredients'
    },
    {
      name: 'Ditto',
      ingredient: 'Persim',
      mainSkill: 'Charge Strength S',
      specialty: 'Ingredients'
    },
    {
      name: 'Eevee',
      ingredient: 'Persim',
      mainSkill: 'Ingredient Magnet S',
      specialty: 'Skills'
    },
    {
      name: 'Vaporeon',
      ingredient: 'Oran',
      mainSkill: 'Ingredient Magnet S',
      specialty: 'Skills'
    },
    {
      name: 'Jolteon',
      ingredient: 'Grepa',
      mainSkill: 'Extra Helpful S',
      specialty: 'Skills'
    },
    {
      name: 'Flareon',
      ingredient: 'Leppa',
      mainSkill: 'Cooking Power-Up S',
      specialty: 'Skills'
    },
    {
      name: 'Espeon',
      ingredient: 'Mago',
      mainSkill: 'Charge Strength M',
      specialty: 'Skills'
    },
    {
      name: 'Umbreon',
      ingredient: 'Wiki',
      mainSkill: 'Charge Energy S',
      specialty: 'Skills'
    },
    {
      name: 'Leafeon',
      ingredient: 'Durin',
      mainSkill: 'Energizing Cheer S',
      specialty: 'Skills'
    },
    {
      name: 'Glaceon',
      ingredient: 'Rawst',
      mainSkill: 'Cooking Power-Up S',
      specialty: 'Skills'
    },
    {
      name: 'Sylveon',
      ingredient: 'Pecha',
      mainSkill: 'Energy for Everyone S',
      specialty: 'Skills'
    },
    {
      name: 'Chikorita',
      ingredient: 'Durin',
      mainSkill: 'Charge Strength S - Var',
      specialty: 'Berries'
    },
    {
      name: 'Bayleef',
      ingredient: 'Durin',
      mainSkill: 'Charge Strength S - Var',
      specialty: 'Berries'
    },
    {
      name: 'Meganium',
      ingredient: 'Durin',
      mainSkill: 'Charge Strength S - Var',
      specialty: 'Berries'
    },
    {
      name: 'Cyndaquil',
      ingredient: 'Leppa',
      mainSkill: 'Charge Strength S - Var',
      specialty: 'Berries'
    },
    {
      name: 'Quilava',
      ingredient: 'Leppa',
      mainSkill: 'Charge Strength S - Var',
      specialty: 'Berries'
    },
    {
      name: 'Typhlosion',
      ingredient: 'Leppa',
      mainSkill: 'Charge Strength S - Var',
      specialty: 'Berries'
    },
    {
      name: 'Totodile',
      ingredient: 'Oran',
      mainSkill: 'Charge Strength S - Var',
      specialty: 'Berries'
    },
    {
      name: 'Croconaw',
      ingredient: 'Oran',
      mainSkill: 'Charge Strength S - Var',
      specialty: 'Berries'
    },
    {
      name: 'Feraligatr',
      ingredient: 'Oran',
      mainSkill: 'Charge Strength S - Var',
      specialty: 'Berries'
    },
    {
      name: 'Togepi',
      ingredient: 'Pecha',
      mainSkill: 'Metronome',
      specialty: 'Skills'
    },
    {
      name: 'Togetic',
      ingredient: 'Pecha',
      mainSkill: 'Metronome',
      specialty: 'Skills'
    },
    {
      name: 'Togekiss',
      ingredient: 'Pecha',
      mainSkill: 'Metronome',
      specialty: 'Skills'
    },
    {
      name: 'Mareep',
      ingredient: 'Grepa',
      mainSkill: 'Charge Strength M',
      specialty: 'Skills'
    },
    {
      name: 'Flaaffy',
      ingredient: 'Grepa',
      mainSkill: 'Charge Strength M',
      specialty: 'Skills'
    },
    {
      name: 'Ampharos',
      ingredient: 'Grepa',
      mainSkill: 'Charge Strength M',
      specialty: 'Skills'
    },
    {
      name: 'Bonsly',
      ingredient: 'Sitrus',
      mainSkill: 'Charge Strength M',
      specialty: 'Skills'
    },
    {
      name: 'Sudowoodo',
      ingredient: 'Sitrus',
      mainSkill: 'Charge Strength M',
      specialty: 'Skills'
    },
    {
      name: 'Wynaut',
      ingredient: 'Mago',
      mainSkill: 'Energizing Cheer S',
      specialty: 'Skills'
    },
    {
      name: 'Wobbuffet',
      ingredient: 'Mago',
      mainSkill: 'Energizing Cheer S',
      specialty: 'Skills'
    },
    {
      name: 'Heracross',
      ingredient: 'Lum',
      mainSkill: 'Ingredient Magnet S',
      specialty: 'Skills'
    },
    {
      name: 'Houndour',
      ingredient: 'Wiki',
      mainSkill: 'Charge Strength S',
      specialty: 'Ingredients'
    },
    {
      name: 'Houndoom',
      ingredient: 'Wiki',
      mainSkill: 'Charge Strength S',
      specialty: 'Berries'
    },
    {
      name: 'Larvitar',
      ingredient: 'Sitrus',
      mainSkill: 'Charge Energy S',
      specialty: 'Berries'
    },
    {
      name: 'Pupitar',
      ingredient: 'Sitrus',
      mainSkill: 'Charge Energy S',
      specialty: 'Ingredients'
    },
    {
      name: 'Tyranitar',
      ingredient: 'Wiki',
      mainSkill: 'Charge Energy S',
      specialty: 'Ingredients'
    },
    {
      name: 'Slakoth',
      ingredient: 'Persim',
      mainSkill: 'Ingredient Magnet S',
      specialty: 'Berries'
    },
    {
      name: 'Vigoroth',
      ingredient: 'Persim',
      mainSkill: 'Ingredient Magnet S',
      specialty: 'Berries'
    },
    {
      name: 'Slaking',
      ingredient: 'Persim',
      mainSkill: 'Ingredient Magnet S',
      specialty: 'Berries'
    },
    {
      name: 'Sableye',
      ingredient: 'Wiki',
      mainSkill: 'Dream Shard Magnet S - Var	',
      specialty: 'Skills'
    },
    {
      name: 'Gulpin',
      ingredient: 'Chesto',
      mainSkill: 'Dream Shard Magnet S - Var	',
      specialty: 'Skills'
    },
    {
      name: 'Swalot',
      ingredient: 'Chesto',
      mainSkill: 'Dream Shard Magnet S - Var	',
      specialty: 'Skills'
    },
    {
      name: 'Swablu',
      ingredient: 'Pamtre',
      mainSkill: 'Charge Energy S',
      specialty: 'Berries'
    },
    {
      name: 'Altaria',
      ingredient: 'Yache',
      mainSkill: 'Charge Energy S',
      specialty: 'Berries'
    },
    {
      name: 'Shuppet',
      ingredient: 'Bluk',
      mainSkill: 'Charge Strength S',
      specialty: 'Berries'
    },
    {
      name: 'Banette',
      ingredient: 'Bluk',
      mainSkill: 'Charge Strength S',
      specialty: 'Berries'
    },
    {
      name: 'Absol',
      ingredient: 'Wiki',
      mainSkill: 'Charge Strength S',
      specialty: 'Ingredients'
    },
    {
      name: 'Spheal',
      ingredient: 'Rawst',
      mainSkill: 'Ingredient Magnet S',
      specialty: 'Berries'
    },
    {
      name: 'Sealeo',
      ingredient: 'Rawst',
      mainSkill: 'Ingredient Magnet S',
      specialty: 'Berries'
    },
    {
      name: 'Walrein',
      ingredient: 'Rawst',
      mainSkill: 'Ingredient Magnet S',
      specialty: 'Berries'
    },
    {
      name: 'Riolu',
      ingredient: 'Cheri',
      mainSkill: 'Dream Shard Magnet S',
      specialty: 'Skills'
    },
    {
      name: 'Lucario',
      ingredient: 'Cheri',
      mainSkill: 'Dream Shard Magnet S',
      specialty: 'Skills'
    },
    {
      name: 'Croagunk',
      ingredient: 'Chesto',
      mainSkill: 'Charge Strength S',
      specialty: 'Ingredients'
    },
    {
      name: 'Toxicroak',
      ingredient: 'Chesto',
      mainSkill: 'Charge Strength S',
      specialty: 'Ingredients'
    }
  ];

  /**
   * retrieve the list of pokemon
   * @returns list of pokemon
   */
  retrievePokemonList = () => {
    return this.pokemonList;
  }

  retrieveBerryList = () => {
    return this.allBerries;
  }
}
