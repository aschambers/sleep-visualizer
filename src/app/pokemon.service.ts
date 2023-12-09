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
  allIngredients: Array<string> = ['beansausage', 'fancyapple', 'fancyegg',
                                  'fieryherb', 'greengrasssoybeans', 'honey',
                                  'largeleek', 'moomoomilk', 'pureoil', 'slowpoketail',
                                  'snoozytomato', 'softpotato', 'soothingcacao',
                                  'tastymushroom', 'warmingginger'];
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
      berry: 'Durin',
      ingredients: ['honey', 'snoozytomato', 'softpotato'],
      mainSkill: 'Ingredient Magnet S',
      specialty: 'Ingredients'
    },
    {
      name: 'Ivysaur',
      berry: 'Durin',
      ingredients: ['honey', 'snoozytomato', 'softpotato'],
      mainSkill: 'Ingredient Magnet S',
      specialty: 'Ingredients'
    },
    {
      name: 'Venusaur',
      berry: 'Durin',
      ingredients: ['honey', 'snoozytomato', 'softpotato'],
      mainSkill: 'Ingredient Magnet S',
      specialty: 'Ingredients'
    },
    {
      name: 'Charmander',
      berry: 'Leppa',
      ingredients: ['beansausage', 'warmingginger', 'fieryherb'],
      mainSkill: 'Ingredient Magnet S',
      specialty: 'Ingredients'
    },
    {
      name: 'Charmeleon',
      berry: 'Leppa',
      ingredients: ['beansausage', 'warmingginger', 'fieryherb'],
      mainSkill: 'Ingredient Magnet S',
      specialty: 'Ingredients'
    },
    {
      name: 'Charizard',
      berry: 'Leppa',
      ingredients: ['beansausage', 'warmingginger', 'fieryherb'],
      mainSkill: 'Ingredient Magnet S',
      specialty: 'Ingredients'
    },
    {
      name: 'Squirtle',
      berry: 'Oran',
      ingredients: ['moomoomilk', 'soothingcacao', 'beansausage'],
      mainSkill: 'Ingredient Magnet S',
      specialty: 'Ingredients'
    },
    {
      name: 'Wartortle',
      berry: 'Oran',
      ingredients: ['moomoomilk', 'soothingcacao', 'beansausage'],
      mainSkill: 'Ingredient Magnet S',
      specialty: 'Ingredients'
    },
    {
      name: 'Blastoise',
      berry: 'Oran',
      ingredients: ['moomoomilk', 'soothingcacao', 'beansausage'],
      mainSkill: 'Ingredient Magnet S',
      specialty: 'Ingredients'
    },
    {
      name: 'Caterpie',
      berry: 'Lum',
      ingredients: ['honey', 'snoozytomato', 'greengrasssoybeans'],
      mainSkill: 'Ingredient Magnet S',
      specialty: 'Berries'
    },
    {
      name: 'Metapod',
      berry: 'Lum',
      ingredients: ['honey', 'snoozytomato', 'greengrasssoybeans'],
      mainSkill: 'Ingredient Magnet S',
      specialty: 'Berries'
    },
    {
      name: 'Butterfree',
      berry: 'Lum',
      ingredients: ['honey', 'snoozytomato', 'greengrasssoybeans'],
      mainSkill: 'Ingredient Magnet S',
      specialty: 'Berries'
    },
    {
      name: 'Rattata',
      berry: 'Persim',
      ingredients: ['fancyapple', 'snoozytomato', 'greengrasssoybeans'],
      mainSkill: 'Charge Energy S',
      specialty: 'Berries'
    },
    {
      name: 'Raticate',
      berry: 'Persim',
      ingredients: ['fancyapple', 'snoozytomato', 'greengrasssoybeans'],
      mainSkill: 'Charge Energy S',
      specialty: 'Berries'
    },
    {
      name: 'Ekans',
      berry: 'Chesto',
      ingredients: ['beansausage', 'fancyegg', 'fieryherb'],
      mainSkill: 'Charge Energy S',
      specialty: 'Berries'
    },
    {
      name: 'Arbok',
      berry: 'Chesto',
      ingredients: ['beansausage', 'fancyegg', 'fieryherb'],
      mainSkill: 'Charge Energy S',
      specialty: 'Berries'
    },
    {
      name: 'Pichu',
      berry: 'Grepa',
      ingredients: ['fancyapple', 'warmingginger', 'fancyegg'],
      mainSkill: 'Charge Strength S',
      specialty: 'Berries'
    },
    {
      name: 'Pikachu',
      berry: 'Grepa',
      ingredients: ['fancyapple', 'warmingginger', 'fancyegg'],
      mainSkill: 'Charge Strength S',
      specialty: 'Berries'
    },
    {
      name: 'Raichu',
      berry: 'Grepa',
      ingredients: ['fancyapple', 'warmingginger', 'fancyegg'],
      mainSkill: 'Charge Strength S',
      specialty: 'Berries'
    },
    {
      name: 'Cleffa',
      berry: 'Pecha',
      ingredients: ['fancyapple', 'honey', 'greegrasssoybeans'],
      mainSkill: 'Metronome',
      specialty: 'Berries'
    },
    {
      name: 'Clefairy',
      berry: 'Pecha',
      ingredients: ['fancyapple', 'honey', 'greegrasssoybeans'],
      mainSkill: 'Metronome',
      specialty: 'Berries'
    },{
      name: 'Clefable',
      berry: 'Pecha',
      ingredients: ['fancyapple', 'honey', 'greegrasssoybeans'],
      mainSkill: 'Metronome',
      specialty: 'Berries'
    },
    {
      name: 'Igglybuff',
      berry: 'Pecha',
      ingredients: ['honey', 'pureoil', 'soothingcacao'],
      mainSkill: 'Energy for Everyone S',
      specialty: 'Skills'
    },
    {
      name: 'Jigglypuff',
      berry: 'Pecha',
      ingredients: ['honey', 'pureoil', 'soothingcacao'],
      mainSkill: 'Energy for Everyone S',
      specialty: 'Skills'
    },{
      name: 'Wigglytuff',
      berry: 'Pecha',
      ingredients: ['honey', 'pureoil', 'soothingcacao'],
      mainSkill: 'Energy for Everyone S',
      specialty: 'Skills'
    },
    {
      name: 'Diglett',
      berry: 'Figy',
      ingredients: ['snoozytomato', 'largeleek', 'greengrasssoybeans'],
      mainSkill: 'Charge Strength S',
      specialty: 'Ingredients'
    },
    {
      name: 'Dugtrio',
      berry: 'Figy',
      ingredients: ['snoozytomato', 'largeleek', 'greengrasssoybeans'],
      mainSkill: 'Charge Strength S',
      specialty: 'Ingredients'
    },
    {
      name: 'Meowth',
      berry: 'Persim',
      ingredients: ['moomoomilk', 'beansausage'],
      mainSkill: 'Dream Shard Magnet S',
      specialty: 'Skills'
    },
    {
      name: 'Persian',
      berry: 'Persim',
      ingredients: ['moomoomilk', 'beansausage'],
      mainSkill: 'Dream Shard Magnet S',
      specialty: 'Skills'
    },
    {
      name: 'Psyduck',
      berry: 'Oran',
      ingredients: ['soothingcacao', 'fancyapple', 'beansausage'],
      mainSkill: 'Charge Strength S - Var',
      specialty: 'Skills'
    },
    {
      name: 'Golduck',
      berry: 'Oran',
      ingredients: ['soothingcacao', 'fancyapple', 'beansausage'],
      mainSkill: 'Charge Strength S - Var',
      specialty: 'Skills'
    },
    {
      name: 'Mankey',
      berry: 'Cheri',
      ingredients: ['beansausage', 'tastymushrooms', 'honey'],
      mainSkill: 'Charge Strength S - Var',
      specialty: 'Berries'
    },
    {
      name: 'Primeape',
      berry: 'Cheri',
      ingredients: ['beansausage', 'tastymushrooms', 'honey'],
      mainSkill: 'Charge Strength S - Var',
      specialty: 'Berries'
    },
    {
      name: 'Growlithe',
      berry: 'Leppa',
      ingredients: ['fieryherb', 'beansausage', 'moomoomilk'],
      mainSkill: 'Extra Helpful S',
      specialty: 'Skills'
    },
    {
      name: 'Arcanine',
      berry: 'Leppa',
      ingredients: ['fieryherb', 'beansausage', 'moomoomilk'],
      mainSkill: 'Extra Helpful S',
      specialty: 'Skills'
    },
    {
      name: 'Bellsprout',
      berry: 'Durin',
      ingredients: ['snoozytomato', 'softpotato', 'largeleek'],
      mainSkill: 'Charge Energy S',
      specialty: 'Ingredients'
    },
    {
      name: 'Weepinbell',
      berry: 'Durin',
      ingredients: ['snoozytomato', 'softpotato', 'largeleek'],
      mainSkill: 'Charge Energy S',
      specialty: 'Ingredients'
    },
    {
      name: 'Victreebel',
      berry: 'Durin',
      ingredients: ['snoozytomato', 'softpotato', 'largeleek'],
      mainSkill: 'Charge Energy S',
      specialty: 'Ingredients'
    },
    {
      name: 'Geodude',
      berry: 'Sitrus',
      ingredients: ['greengrasssoybeans', 'softpotato', 'tastymushrooms'],
      mainSkill: 'Charge Strength S - Var',
      specialty: 'Ingredients'
    },
    {
      name: 'Graveler',
      berry: 'Sitrus',
      ingredients: ['greengrasssoybeans', 'softpotato', 'tastymushrooms'],
      mainSkill: 'Charge Strength S - Var',
      specialty: 'Ingredients'
    },
    {
      name: 'Golem',
      berry: 'Sitrus',
      ingredients: ['greengrasssoybeans', 'softpotato', 'tastymushrooms'],
      mainSkill: 'Charge Strength S - Var',
      specialty: 'Ingredients'
    },
    {
      name: 'Slowpoke',
      berry: 'Oran',
      ingredients: ['soothingcacao', 'slowpoketail', 'snoozytomato'],
      mainSkill: 'Energizing Cheer S',
      specialty: 'Skills'
    },
    {
      name: 'Slowbro',
      berry: 'Oran',
      ingredients: ['soothingcacao', 'slowpoketail', 'snoozytomato'],
      mainSkill: 'Energizing Cheer S',
      specialty: 'Skills'
    },
    {
      name: 'Slowking',
      berry: 'Oran',
      ingredients: ['soothingcacao', 'slowpoketail', 'snoozytomato'],
      mainSkill: 'Energizing Cheer S',
      specialty: 'Skills'
    },
    {
      name: 'Magnemite',
      berry: 'Belue',
      ingredients: ['pureoil', 'fieryherb'],
      mainSkill: 'Cooking Power-Up S',
      specialty: 'Skills'
    },
    {
      name: 'Magneton',
      berry: 'Belue',
      ingredients: ['pureoil', 'fieryherb'],
      mainSkill: 'Cooking Power-Up S',
      specialty: 'Skills'
    },
    {
      name: 'Magnezone',
      berry: 'Belue',
      ingredients: ['pureoil', 'fieryherb'],
      mainSkill: 'Cooking Power-Up S',
      specialty: 'Skills'
    },
    {
      name: 'Doduo',
      berry: 'Pamtre',
      ingredients: ['greengrasssoybeans', 'soothingcacao', 'beansausage'],
      mainSkill: 'Ingredient Magnet S',
      specialty: 'Berries'
    },
    {
      name: 'Dodrio',
      berry: 'Pamtre',
      ingredients: ['greengrasssoybeans', 'soothingcacao', 'beansausage'],
      mainSkill: 'Ingredient Magnet S',
      specialty: 'Berries'
    },
    {
      name: 'Gastly',
      berry: 'Bluk',
      ingredients: ['fieryherb', 'tastymushrooms', 'pureoil'],
      mainSkill: 'Charge Strength S',
      specialty: 'Ingredients'
    },
    {
      name: 'Haunter',
      berry: 'Bluk',
      ingredients: ['fieryherb', 'tastymushrooms', 'pureoil'],
      mainSkill: 'Charge Strength S',
      specialty: 'Ingredients'
    },
    {
      name: 'Gengar',
      berry: 'Bluk',
      ingredients: ['fieryherb', 'tastymushrooms', 'pureoil'],
      mainSkill: 'Charge Strength S',
      specialty: 'Ingredients'
    },
    {
      name: 'Onix',
      berry: 'Sitrus',
      ingredients: ['snoozytomato', 'beansausage', 'softpotato'],
      mainSkill: 'Ingredient Magnet S',
      specialty: 'Berries'
    },
    {
      name: 'Steelix',
      berry: 'Belue',
      ingredients: ['snoozytomato', 'beansausage', 'softpotato'],
      mainSkill: 'Ingredient Magnet S',
      specialty: 'Berries'
    },
    {
      name: 'Cubone',
      berry: 'Figy',
      ingredients: ['warmingginger', 'soothingcacao'],
      mainSkill: 'Charge Energy S',
      specialty: 'Berries'
    },
    {
      name: 'Marowak',
      berry: 'Figy',
      ingredients: ['warmingginger', 'soothingcacao'],
      mainSkill: 'Charge Energy S',
      specialty: 'Berries'
    },
    {
      name: 'Kangaskhan',
      berry: 'Persim',
      ingredients: ['warmingginger', 'softpotato', 'greengrasssoybeans'],
      mainSkill: 'Ingredient Magnet S',
      specialty: 'Ingredients'
    },
    {
      name: 'Mime Jr.',
      berry: 'Mago',
      ingredients: ['snoozytomato', 'softpotato', 'largeleek'],
      mainSkill: 'Charge Strength S',
      specialty: 'Ingredients'
    },
    {
      name: 'Mr. Mime',
      berry: 'Mago',
      ingredients: ['snoozytomato', 'softpotato', 'largeleek'],
      mainSkill: 'Charge Strength S',
      specialty: 'Ingredients'
    },
    {
      name: 'Pinsir',
      berry: 'Lum',
      ingredients: ['honey', 'fancyapple', 'beansausage'],
      mainSkill: 'Charge Strength S',
      specialty: 'Ingredients'
    },
    {
      name: 'Ditto',
      berry: 'Persim',
      ingredients: ['pureoil', 'largeleek', 'slowpoketail'],
      mainSkill: 'Charge Strength S',
      specialty: 'Ingredients'
    },
    {
      name: 'Eevee',
      berry: 'Persim',
      ingredients: ['moomoomilk', 'soothingcacao', 'beansausage'],
      mainSkill: 'Ingredient Magnet S',
      specialty: 'Skills'
    },
    {
      name: 'Vaporeon',
      berry: 'Oran',
      ingredients: ['moomoomilk', 'soothingcacao', 'beansausage'],
      mainSkill: 'Ingredient Magnet S',
      specialty: 'Skills'
    },
    {
      name: 'Jolteon',
      berry: 'Grepa',
      ingredients: ['moomoomilk', 'soothingcacao', 'beansausage'],
      mainSkill: 'Extra Helpful S',
      specialty: 'Skills'
    },
    {
      name: 'Flareon',
      berry: 'Leppa',
      ingredients: ['moomoomilk', 'soothingcacao', 'beansausage'],
      mainSkill: 'Cooking Power-Up S',
      specialty: 'Skills'
    },
    {
      name: 'Espeon',
      berry: 'Mago',
      ingredients: ['moomoomilk', 'soothingcacao', 'beansausage'],
      mainSkill: 'Charge Strength M',
      specialty: 'Skills'
    },
    {
      name: 'Umbreon',
      berry: 'Wiki',
      ingredients: ['moomoomilk', 'soothingcacao', 'beansausage'],
      mainSkill: 'Charge Energy S',
      specialty: 'Skills'
    },
    {
      name: 'Leafeon',
      berry: 'Durin',
      ingredients: ['moomoomilk', 'soothingcacao', 'beansausage'],
      mainSkill: 'Energizing Cheer S',
      specialty: 'Skills'
    },
    {
      name: 'Glaceon',
      berry: 'Rawst',
      ingredients: ['moomoomilk', 'soothingcacao', 'beansausage'],
      mainSkill: 'Cooking Power-Up S',
      specialty: 'Skills'
    },
    {
      name: 'Sylveon',
      berry: 'Pecha',
      ingredients: ['moomoomilk', 'soothingcacao', 'beansausage'],
      mainSkill: 'Energy for Everyone S',
      specialty: 'Skills'
    },
    {
      name: 'Chikorita',
      berry: 'Durin',
      ingredients: ['soothingcacao', 'honey', 'largeleek'],
      mainSkill: 'Charge Strength S - Var',
      specialty: 'Berries'
    },
    {
      name: 'Bayleef',
      berry: 'Durin',
      ingredients: ['soothingcacao', 'honey', 'largeleek'],
      mainSkill: 'Charge Strength S - Var',
      specialty: 'Berries'
    },
    {
      name: 'Meganium',
      berry: 'Durin',
      ingredients: ['soothingcacao', 'honey', 'largeleek'],
      mainSkill: 'Charge Strength S - Var',
      specialty: 'Berries'
    },
    {
      name: 'Cyndaquil',
      berry: 'Leppa',
      ingredients: ['warmingginger', 'fieryherb', 'pureoil'],
      mainSkill: 'Charge Strength S - Var',
      specialty: 'Berries'
    },
    {
      name: 'Quilava',
      berry: 'Leppa',
      ingredients: ['warmingginger', 'fieryherb', 'pureoil'],
      mainSkill: 'Charge Strength S - Var',
      specialty: 'Berries'
    },
    {
      name: 'Typhlosion',
      berry: 'Leppa',
      ingredients: ['warmingginger', 'fieryherb', 'pureoil'],
      mainSkill: 'Charge Strength S - Var',
      specialty: 'Berries'
    },
    {
      name: 'Totodile',
      berry: 'Oran',
      ingredients: ['beansausage', 'pureoil'],
      mainSkill: 'Charge Strength S - Var',
      specialty: 'Berries'
    },
    {
      name: 'Croconaw',
      berry: 'Oran',
      ingredients: ['beansausage', 'pureoil'],
      mainSkill: 'Charge Strength S - Var',
      specialty: 'Berries'
    },
    {
      name: 'Feraligatr',
      berry: 'Oran',
      ingredients: ['beansausage', 'pureoil'],
      mainSkill: 'Charge Strength S - Var',
      specialty: 'Berries'
    },
    {
      name: 'Togepi',
      berry: 'Pecha',
      ingredients: ['fancyegg', 'warmingginger', 'soothingcacao'],
      mainSkill: 'Metronome',
      specialty: 'Skills'
    },
    {
      name: 'Togetic',
      berry: 'Pecha',
      ingredients: ['fancyegg', 'warmingginger', 'soothingcacao'],
      mainSkill: 'Metronome',
      specialty: 'Skills'
    },
    {
      name: 'Togekiss',
      berry: 'Pecha',
      ingredients: ['fancyegg', 'warmingginger', 'soothingcacao'],
      mainSkill: 'Metronome',
      specialty: 'Skills'
    },
    {
      name: 'Mareep',
      berry: 'Grepa',
      ingredients: ['fieryherb', 'fancyegg'],
      mainSkill: 'Charge Strength M',
      specialty: 'Skills'
    },
    {
      name: 'Flaaffy',
      berry: 'Grepa',
      ingredients: ['fieryherb', 'fancyegg'],
      mainSkill: 'Charge Strength M',
      specialty: 'Skills'
    },
    {
      name: 'Ampharos',
      berry: 'Grepa',
      ingredients: ['fieryherb', 'fancyegg'],
      mainSkill: 'Charge Strength M',
      specialty: 'Skills'
    },
    {
      name: 'Bonsly',
      berry: 'Sitrus',
      ingredients: ['snoozytomato', 'greengrasssoybeans', 'tastymushrooms'],
      mainSkill: 'Charge Strength M',
      specialty: 'Skills'
    },
    {
      name: 'Sudowoodo',
      berry: 'Sitrus',
      ingredients: ['snoozytomato', 'greengrasssoybeans', 'tastymushrooms'],
      mainSkill: 'Charge Strength M',
      specialty: 'Skills'
    },
    {
      name: 'Wynaut',
      berry: 'Mago',
      ingredients: ['fancyapple', 'tastymushrooms', 'pureoil'],
      mainSkill: 'Energizing Cheer S',
      specialty: 'Skills'
    },
    {
      name: 'Wobbuffet',
      berry: 'Mago',
      ingredients: ['fancyapple', 'tastymushrooms', 'pureoil'],
      mainSkill: 'Energizing Cheer S',
      specialty: 'Skills'
    },
    {
      name: 'Heracross',
      berry: 'Lum',
      ingredients: ['honey', 'tastymushrooms', 'beansausage'],
      mainSkill: 'Ingredient Magnet S',
      specialty: 'Skills'
    },
    {
      name: 'Houndour',
      berry: 'Wiki',
      ingredients: ['fieryherb', 'warmingginger', 'largeleek'],
      mainSkill: 'Charge Strength S',
      specialty: 'Ingredients'
    },
    {
      name: 'Houndoom',
      berry: 'Wiki',
      ingredients: ['fieryherb', 'warmingginger', 'largeleek'],
      mainSkill: 'Charge Strength S',
      specialty: 'Berries'
    },
    {
      name: 'Larvitar',
      berry: 'Sitrus',
      ingredients: ['warmingginger', 'greengrasssoybeans', 'beansausage'],
      mainSkill: 'Charge Energy S',
      specialty: 'Berries'
    },
    {
      name: 'Pupitar',
      berry: 'Sitrus',
      ingredients: ['warmingginger', 'greengrasssoybeans', 'beansausage'],
      mainSkill: 'Charge Energy S',
      specialty: 'Ingredients'
    },
    {
      name: 'Tyranitar',
      berry: 'Wiki',
      ingredients: ['warmingginger', 'greengrasssoybeans', 'beansausage'],
      mainSkill: 'Charge Energy S',
      specialty: 'Ingredients'
    },
    {
      name: 'Slakoth',
      berry: 'Persim',
      ingredients: ['snoozytomato', 'honey', 'fancyapple'],
      mainSkill: 'Ingredient Magnet S',
      specialty: 'Berries'
    },
    {
      name: 'Vigoroth',
      berry: 'Persim',
      ingredients: ['snoozytomato', 'honey', 'fancyapple'],
      mainSkill: 'Ingredient Magnet S',
      specialty: 'Berries'
    },
    {
      name: 'Slaking',
      berry: 'Persim',
      ingredients: ['snoozytomato', 'honey', 'fancyapple'],
      mainSkill: 'Ingredient Magnet S',
      specialty: 'Berries'
    },
    {
      name: 'Sableye',
      berry: 'Wiki',
      ingredients: ['pureoil', 'tastymushrooms'],
      mainSkill: 'Dream Shard Magnet S - Var	',
      specialty: 'Skills'
    },
    {
      name: 'Gulpin',
      berry: 'Chesto',
      ingredients: ['greengrasssoybeans', 'tastymushrooms'],
      mainSkill: 'Dream Shard Magnet S - Var	',
      specialty: 'Skills'
    },
    {
      name: 'Swalot',
      berry: 'Chesto',
      ingredients: ['greengrasssoybeans', 'tastymushrooms'],
      mainSkill: 'Dream Shard Magnet S - Var	',
      specialty: 'Skills'
    },
    {
      name: 'Swablu',
      berry: 'Pamtre',
      ingredients: ['fancyegg', 'greengrasssoybeans', 'fancyapple'],
      mainSkill: 'Charge Energy S',
      specialty: 'Berries'
    },
    {
      name: 'Altaria',
      berry: 'Yache',
      ingredients: ['fancyegg', 'greengrasssoybeans', 'fancyapple'],
      mainSkill: 'Charge Energy S',
      specialty: 'Berries'
    },
    {
      name: 'Shuppet',
      berry: 'Bluk',
      ingredients: ['pureoil', 'warmingginger', 'tastymushroom'],
      mainSkill: 'Charge Strength S',
      specialty: 'Berries'
    },
    {
      name: 'Banette',
      berry: 'Bluk',
      ingredients: ['pureoil', 'warmingginger', 'tastymushroom'],
      mainSkill: 'Charge Strength S',
      specialty: 'Berries'
    },
    {
      name: 'Absol',
      berry: 'Wiki',
      ingredients: ['soothingcacao', 'fancyapple', 'tastymushroom'],
      mainSkill: 'Charge Strength S',
      specialty: 'Ingredients'
    },
    {
      name: 'Spheal',
      berry: 'Rawst',
      ingredients: ['pureoil', 'beansausage', 'warmingginger'],
      mainSkill: 'Ingredient Magnet S',
      specialty: 'Berries'
    },
    {
      name: 'Sealeo',
      berry: 'Rawst',
      ingredients: ['pureoil', 'beansausage', 'warmingginger'],
      mainSkill: 'Ingredient Magnet S',
      specialty: 'Berries'
    },
    {
      name: 'Walrein',
      berry: 'Rawst',
      ingredients: ['pureoil', 'beansausage', 'warmingginger'],
      mainSkill: 'Ingredient Magnet S',
      specialty: 'Berries'
    },
    {
      name: 'Riolu',
      berry: 'Cheri',
      ingredients: ['pureoil', 'softpotato', 'fancyegg'],
      mainSkill: 'Dream Shard Magnet S',
      specialty: 'Skills'
    },
    {
      name: 'Lucario',
      berry: 'Cheri',
      ingredients: ['pureoil', 'softpotato', 'fancyegg'],
      mainSkill: 'Dream Shard Magnet S',
      specialty: 'Skills'
    },
    {
      name: 'Croagunk',
      berry: 'Chesto',
      ingredients: ['pureoil', 'beansausage'],
      mainSkill: 'Charge Strength S',
      specialty: 'Ingredients'
    },
    {
      name: 'Toxicroak',
      berry: 'Chesto',
      ingredients: ['pureoil', 'beansausage'],
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

  retrieveIngredientsList = () => {
    return this.allIngredients;
  }
}
