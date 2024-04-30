import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  constructor() { }

  allBerries: Array<string> = ['Belue', 'Bluk', 'Cheri', 'Chesto', 'Durin', 'Figy',
                              'Grepa', 'Leppa', 'Lum', 'Mago', 'Oran', 'Pamtre',
                              'Pecha', 'Persim', 'Rawst', 'Sitrus', 'Wiki', 'Yache'];
  allIngredients: Array<string> = ['fancyapple', 'moomoomilk', 'greengrasssoybeans',
                                  'honey', 'beansausage', 'warmingginger', 'snoozytomato',
                                  'fancyegg', 'pureoil', 'softpotato', 'fieryherb',
                                  'greengrasscorn', 'soothingcacao', 'tastymushroom',
                                  'largeleek', 'slowpoketail'];
  allSkills: Array<string> = ['Charge Strength S', 'Charge Strength M', 'Dream Shard Magnet S - Var',
                              'Energizing Cheer S', 'Charge Energy S', 'Dream Shard Magnet S',
                              'Charge Energy S', 'Energy for Everyone S', 'Extra Helpful S',
                              'Ingredient Magnet S', 'Cooking Power-Up S', 'Metronome',
                              'Tasty Chance S', 'Helper Boost'];
  pokemonStringList: Array<string> = ['Bulbasaur', 'Ivysaur', 'Venusaur', 'Charmander', 'Charmeleon', 'Charizard',
  'Squirtle', 'Wartortle', 'Blastoise', 'Caterpie', 'Metapod', 'Butterfree', 'Rattata', 'Raticate', 'Ekans', 'Arbok',
  'Pikachu', 'Raichu', 'Clefairy', 'Clefable', 'Jigglypuff', 'Wigglytuff', 'Diglett', 'Dugtrio',
  'Meowth', 'Persian', 'Psyduck', 'Golduck', 'Mankey', 'Primeape', 'Growlithe', 'Arcanine', 'Bellsprout', 'Weepinbell',
  'Victreebel', 'Geodude', 'Graveler', 'Golem', 'Slowpoke', 'Slowbro', 'Slowking', 'Magnemite', 'Magneton', 'Doduo',
  'Dodrio', 'Gastly', 'Haunter', 'Gengar', 'Onix', 'Steelix', 'Cubone', 'Marowak', 'Kangaskhan', 'Mr. Mime', 'Pinsir',
  'Ditto', 'Eevee', 'Vaporeon', 'Jolteon', 'Flareon', 'Dratini', 'Dragonair', 'Dragonite', 'Espeon', 'Umbreon', 'Chikorita',
  'Bayleef', 'Meganium', 'Cyndaquil', 'Quilava', 'Typhlosion', 'Totodile', 'Croconaw', 'Feraligatr', 'Pichu', 'Cleffa',
  'Igglybuff',  'Togepi', 'Togetic', 'Mareep', 'Flaaffy', 'Ampharos', 'Bonsley', 'Sudowoodo', 'Wynaut', 'Wobbuffet',
  'Steelix', 'Heracross', 'Houndour', 'Houndoom', 'Raikou', 'Larvitar', 'Pupitar', 'Tyranitar', 'Ralts', 'Kirlia',
  'Gardevoir', 'Slakoth', 'Vigoroth', 'Slaking', 'Sableye', 'Gulpin', 'Swalot', 'Swablu', 'Altaria', 'Shuppet', 'Banette',
  'Absol', 'Wynaut', 'Spheal', 'Sealeo', 'Walrein', 'Bonsly', 'Mime Jr.', 'Riolu', 'Lucario', 'Croagunk', 'Toxicroak',
  'Snover', 'Abomasnow', 'Magnezone', 'Togekiss', 'Leafeon', 'Glaceon', 'Gallade', 'Sylveon', 'Dedenne', 'Stufful', 'Bewear',
  'Comfey'];
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
      name: 'Clefairy',
      berry: 'Pecha',
      ingredients: ['fancyapple', 'honey', 'greegrasssoybeans'],
      mainSkill: 'Metronome',
      specialty: 'Berries'
    },
    {
      name: 'Clefable',
      berry: 'Pecha',
      ingredients: ['fancyapple', 'honey', 'greegrasssoybeans'],
      mainSkill: 'Metronome',
      specialty: 'Berries'
    },
    // {
    //   name: 'Vulpix',
    //   berry: 'Leppa',
    //   ingredients: [],
    //   mainSkill: 'Energizing Cheer S',
    //   specialty: 'Berries'
    // },
    // {
    //   name: 'Ninetales',
    //   berry: 'Leppa',
    //   ingredients: [],
    //   mainSkill: 'Energizing Cheer S',
    //   specialty: 'Berries'
    // },
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
      name: 'Dratini',
      berry: 'Yache',
      ingredients: ['fieryherb', 'greengrasscorn', 'pureoil'],
      mainSkill: 'Charge Energy S',
      specialty: 'Ingredients'
    },
    {
      name: 'Dragonair',
      berry: 'Yache',
      ingredients: ['fieryherb', 'greengrasscorn', 'pureoil'],
      mainSkill: 'Charge Energy S',
      specialty: 'Ingredients'
    },
    {
      name: 'Dragonite',
      berry: 'Yache',
      ingredients: ['fieryherb', 'greengrasscorn', 'pureoil'],
      mainSkill: 'Charge Energy S',
      specialty: 'Ingredients'
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
      name: 'Pichu',
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
      name: 'Igglybuff',
      berry: 'Pecha',
      ingredients: ['honey', 'pureoil', 'soothingcacao'],
      mainSkill: 'Energy for Everyone S',
      specialty: 'Skills'
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
      name: 'Sudowoodo',
      berry: 'Sitrus',
      ingredients: ['snoozytomato', 'greengrasssoybeans', 'tastymushrooms'],
      mainSkill: 'Charge Strength M',
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
      name: 'Wobbuffet',
      berry: 'Mago',
      ingredients: ['fancyapple', 'tastymushrooms', 'pureoil'],
      mainSkill: 'Energizing Cheer S',
      specialty: 'Skills'
    },
    {
      name: 'Steelix',
      berry: 'Belue',
      ingredients: ['snoozytomato', 'beansausage', 'softpotato'],
      mainSkill: 'Ingredient Magnet S',
      specialty: 'Berries'
    },
    {
      name: 'Heracross',
      berry: 'Lum',
      ingredients: ['honey', 'tastymushrooms', 'beansausage'],
      mainSkill: 'Ingredient Magnet S',
      specialty: 'Skills'
    },
    {
      name: 'Delibird',
      berry: 'Pamtre',
      ingredients: ['fancyegg', 'fancyapple', 'soothingcacao'],
      mainSkill: 'Ingredient Magnet S',
      specialty: 'Ingredients'
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
      name: 'Raikou',
      berry: 'Grepa',
      ingredients: ['beansausage', 'fieryherb', 'largeleek'],
      mainSkill: 'Helper Boost',
      specialty: 'Skills'
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
      name: 'Ralts',
      berry: 'Mago',
      ingredients: ['fancyapple', 'greengrasscorn', 'largeleek'],
      mainSkill: 'Energy for Everyone S',
      specialty: 'Skills'
    },
    {
      name: 'Kirlia',
      berry: 'Mago',
      ingredients: ['fancyapple', 'greengrasscorn', 'largeleek'],
      mainSkill: 'Energy for Everyone S',
      specialty: 'Skills'
    },
    {
      name: 'Gardevoir',
      berry: 'Mago',
      ingredients: ['fancyapple', 'greengrasscorn', 'largeleek'],
      mainSkill: 'Energy for Everyone S',
      specialty: 'Skills'
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
      mainSkill: 'Dream Shard Magnet S - Var',
      specialty: 'Skills'
    },
    {
      name: 'Gulpin',
      berry: 'Chesto',
      ingredients: ['greengrasssoybeans', 'tastymushrooms'],
      mainSkill: 'Dream Shard Magnet S - Var',
      specialty: 'Skills'
    },
    {
      name: 'Swalot',
      berry: 'Chesto',
      ingredients: ['greengrasssoybeans', 'tastymushrooms'],
      mainSkill: 'Dream Shard Magnet S - Var',
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
      name: 'Wynaut',
      berry: 'Mago',
      ingredients: ['fancyapple', 'tastymushrooms', 'pureoil'],
      mainSkill: 'Energizing Cheer S',
      specialty: 'Skills'
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
      name: 'Bonsly',
      berry: 'Sitrus',
      ingredients: ['snoozytomato', 'greengrasssoybeans', 'tastymushrooms'],
      mainSkill: 'Charge Strength M',
      specialty: 'Skills'
    },
    {
      name: 'Mime Jr.',
      berry: 'Mago',
      ingredients: ['snoozytomato', 'softpotato', 'largeleek'],
      mainSkill: 'Charge Strength S',
      specialty: 'Ingredients'
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
    },
    {
      name: 'Magnezone',
      berry: 'Belue',
      ingredients: ['pureoil', 'fieryherb'],
      mainSkill: 'Cooking Power-Up S',
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
      name: 'Gallade',
      berry: 'Cherry',
      ingredients: ['fancyapple', 'greengrasscorn', 'largeleek'],
      mainSkill: 'Extra Helpful S',
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
      name: 'Dedenne',
      berry: 'Grepa',
      ingredients: ['fancyapple', 'soothingcacao', 'greengrasscorn'],
      mainSkill: 'Tasty Chance S',
      specialty: 'Skills'
    },
    {
      name: 'Stufful',
      berry: 'Cheri',
      ingredients: ['greengrasscorn', 'beansausage', 'fancyegg'],
      mainSkill: 'Charge Strength S',
      specialty: 'Ingredients'
    },
    {
      name: 'Bewear',
      berry: 'Cheri',
      ingredients: ['greengrasscorn', 'beansausage', 'fancyegg'],
      mainSkill: 'Charge Strength S',
      specialty: 'Ingredients'
    },
    {
      name: 'Comfey',
      berry: 'Pecha',
      ingredients: ['greengrasscorn', 'warmingginger', 'soothingcacao'],
      mainSkill: 'Energizing Cheer S',
      specialty: 'Ingredients'
    }
  ];
  recipesList = [
    {
      id: 1,
      name: 'Mixed Curry',
      basePower: 0,
      image: '/assets/images/MixedCurry.png',
      ingredients: {}
    },
    {
      id: 2,
      name: 'Fancy Apple Curry',
      basePower: 668,
      image: '/assets/images/FancyAppleCurry.png',
      ingredients: {
        fancyApple: 7
      }
    },
    {
      id: 3,
      name: 'Grilled Tail Curry',
      basePower: 7483,
      image: '/assets/images/GrilledTailCurry.png',
      ingredients: {
        slowpokeTail: 8,
        fieryHerb: 25
      }
    },
    {
      id: 4,
      name: '"Solar Power" Tomato Curry',
      basePower: 1943,
      image: '/assets/images/SolarPowerTomatoCurry.png',
      ingredients: {
        snoozyTomato: 10,
        fieryHerb: 5
      }
    },
    {
      id: 5,
      name: '"Dream Eater" Butter Curry',
      basePower: 9010,
      image: '/assets/images/DreamEaterButterCurry.png',
      ingredients: {
        softPotato: 18,
        snoozyTomato: 15,
        soothingCacao: 12,
        moomoomilk: 10
      }
    },
    {
      id: 6,
      name: 'Spicy Leek Curry',
      basePower: 5900,
      image: '/assets/images/SpicyLeekCurry.png',
      ingredients: {
        largeLeek: 14,
        warmingGinger: 10,
        fieryHerb: 8
      }
    },
    {
      id: 7,
      name: '"Spore" Mushroom Curry',
      basePower: 4041,
      image: '/assets/images/SporeMushroomCurry.png',
      ingredients: {
        tastyMushroom: 14,
        softPotato: 9
      }
    },
    {
      id: 8,
      name: '"Egg Bomb" Curry',
      basePower: 4523,
      image: '/assets/images/EggBombCurry.png',
      ingredients: {
        honey: 12,
        fancyApple: 11,
        fancyEgg: 8,
        softPotato: 4
      }
    },
    {
      id: 9,
      name: 'Hearty Cheeseburger Curry',
      basePower: 1785,
      image: '/assets/images/HeartyCheeseburgerCurry.png',
      ingredients: {
        moomooMilk: 8,
        beanSausage: 8
      }
    },
    {
      id: 10,
      name: 'Soft Potato Chowder',
      basePower: 3089,
      image: '/assets/images/SoftPotatoChowder.png',
      ingredients: {
        moomooMilk: 10,
        softPotato: 8,
        tastyMushroom: 4
      }
    },
    {
      id: 11,
      name: 'Simple Chowder',
      basePower: 727,
      image: '/assets/images/SimpleChowder.png',
      ingredients: {
        moomooMilk: 7
      }
    },
    {
      id: 12,
      name: 'Beanburger Curry',
      basePower: 764,
      image: '/assets/images/BeanburgerCurry.png',
      ingredients: {
        beanSausage: 7
      }
    },
    {
      id: 13,
      name: 'Mild Honey Curry',
      basePower: 749,
      image: '/assets/images/MildHoneyCurry.png',
      ingredients: {
        honey: 7
      }
    },
    {
      id: 14,
      name: 'Ninja Curry',
      basePower: 6159,
      image: '/assets/images/NinjaCurry.png',
      ingredients: {
        greengrassSoybeans: 15,
        beanSausage: 9,
        largeLeek: 9,
        tastyMushroom: 5
      }
    },
    {
      id: 15,
      name: '"Drought" Katsu Curry',
      basePower: 1815,
      image: '/assets/images/DroughtKatsuCurry.png',
      ingredients: {
        beanSausage: 10,
        pureOil: 5
      }
    },
    {
      id: 16,
      name: 'Melty Omelette Curry',
      basePower: 2009,
      image: '/assets/images/MeltyOmeletteCurry.png',
      ingredients: {
        fancyEgg: 10,
        snoozyTomato: 6
      }
    },
    {
      id: 17,
      name: '"Bulk Up" Bean Curry',
      basePower: 3274,
      image: '/assets/images/BulkUpBeanCurry.png',
      ingredients: {
        greengrassSoybeans: 12,
        beanSausage: 6,
        fieryHerb: 4,
        fancyEgg: 4
      }
    },
    {
      id: 18,
      name: '"Limber" Corn Stew',
      basePower: 4670,
      image: '/assets/images/LimberCornStew.png',
      ingredients: {
        greengrassCorn: 14,
        moomooMilk: 8,
        softPotato: 8
      }
    },
    {
      id: 19,
      name: '"Inferno" Corn Keema Curry',
      basePower: 13690,
      image: '/assets/images/InfernoCornKeemaCurry.png',
      ingredients: {
        fieryHerb: 27,
        beanSausage: 24,
        greengrassCorn: 14,
        warmingGinger: 12
      }
    },
    {
      id: 20,
      name: 'Mixed Salad',
      basePower: 0,
      image: '/assets/images/MixedSalad.png',
      ingredients: {}
    },
    {
      id: 21,
      name: 'Slowpoke Tail Pepper Salad',
      basePower: 8169,
      image: '/assets/images/SlowpokeTailPepperSalad.png',
      ingredients: {
        slowpokeTail: 10,
        fieryHerb: 10,
        pureOil: 15
      }
    },
    {
      id: 22,
      name: '"Spore" Mushroom Salad',
      basePower: 5859,
      image: '/assets/images/SporeMushroomSalad.png',
      ingredients: {
        tastyMushroom: 17,
        snoozyTomato: 8,
        pureOil: 8
      }
    },
    {
      id: 23,
      name: '"Snow Cloak" Caesar Salad',
      basePower: 1774,
      image: '/assets/images/SnowCloakCaesarSalad.png',
      ingredients: {
        moomooMilk: 10,
        beanSausage: 6
      }
    },
    {
      id: 24,
      name: '"Gluttony" Potato Salad',
      basePower: 5040,
      image: '/assets/images/GluttonyPotatoSalad.png',
      ingredients: {
        softPotato: 14,
        fancyEgg: 9,
        beanSausage: 7,
        fancyApple: 6
      }
    },
    {
      id: 25,
      name: '"Water Veil" Tofu Salad',
      basePower: 1843,
      image: '/assets/images/WaterVeilTofuSalad.png',
      ingredients: {
        greengrassSoybeans: 10,
        snoozyTomato: 6
      }
    },
    {
      id: 26,
      name: '"Superpower" Extreme Salad',
      basePower: 2958,
      image: '/assets/images/SuperpowerExtremeSalad.png',
      ingredients: {
        beanSausage: 9,
        warmingGinger: 6,
        fancyEgg: 5,
        softPotato: 3
      }
    },
    {
      id: 27,
      name: 'Bean Ham Salad',
      basePower: 873,
      image: '/assets/images/BeanHamSalad.png',
      ingredients: {
        beanSausage: 8
      }
    },
    {
      id: 28,
      name: 'Snoozy Tomato Salad',
      basePower: 933,
      image: '/assets/images/SnoozyTomatoSalad.png',
      ingredients: {
        snoozyTomato: 8
      }
    },
    {
      id: 29,
      name: 'Moomoo Caprese Salad',
      basePower: 2856,
      image: '/assets/images/MoomooCapreseSalad.png',
      ingredients: {
        moomooMilk: 12,
        snoozyTomato: 6,
        pureOil: 5
      }
    },
    {
      id: 30,
      name: '"Contrary" Chocolate Meat Salad',
      basePower: 3558,
      image: '/assets/images/ContraryChocolateMeatSalad.png',
      ingredients: {
        soothingCacao: 14,
        beanSausage: 9
      }
    },
    {
      id: 31,
      name: '"Overheat" Ginger Salad',
      basePower: 5225,
      image: '/assets/images/OverheatGingerSalad.png',
      ingredients: {
        fieryHerb: 17,
        warmingGinger: 10,
        snoozyTomato: 8
      }
    },
    {
      id: 32,
      name: 'Fancy Apple Salad',
      basePower: 763,
      image: '/assets/images/FancyAppleSalad.png',
      ingredients: {
        fancyApple: 8
      }
    },
    {
      id: 33,
      name: '"Immunity" Leek Salad',
      basePower: 2658,
      image: '/assets/images/ImmunityLeekSalad.png',
      ingredients: {
        largeLeek: 10,
        warmingGinger: 5
      }
    },
    {
      id: 34,
      name: '"Dazzling" Apple Cheese Salad',
      basePower: 2578,
      image: '/assets/images/DazzlingAppleCheeseSalad.png',
      ingredients: {
        fancyApple: 15,
        moomooMilk: 5,
        pureOil: 3
      }
    },
    {
      id: 35,
      name: 'Ninja Salad',
      basePower: 10095,
      image: '/assets/images/NinjaSalad.png',
      ingredients: {
        largeLeek: 15,
        greengrassSoybeans: 15,
        tastyMushroom: 12,
        warmingGinger: 11
      }
    },
    {
      id: 36,
      name: '"Heat Wave" Tofu Salad',
      basePower: 1976,
      image: '/assets/images/HeatWaveTofuSalad.png',
      ingredients: {
        greengrassSoybeans: 10,
        fieryHerb: 6
      }
    },
    {
      id: 37,
      name: 'Greengrass Salad',
      basePower: 11393,
      image: '/assets/images/GreengrassSalad.png',
      ingredients: {
        pureOil: 22,
        greengrassCorn: 17,
        snoozyTomato: 14,
        softPotato: 9
      }
    },
    {
      id: 38,
      name: '"Calm Mind" Fruit Salad',
      basePower: 7675,
      image: '/assets/images/CalmMindFruitSalad.png',
      ingredients: {
        fancyApple: 21,
        honey: 16,
        greengrassCorn: 12
      }
    },
    {
      id: 39,
      name: '"Fury Attack" Corn Salad Salad',
      basePower: 2785,
      image: '/assets/images/FuryAttackCornSalad.png',
      ingredients: {
        greengrasscorn: 9,
        pureOil: 3
      }
    },
    {
      id: 40,
      name: 'Mixed Juice',
      basePower: 0,
      image: '/assets/images/MixedJuice.png',
      ingredients: {}
    },
    {
      id: 41,
      name: '"Fluffy" Sweet Potatoes',
      basePower: 1783,
      image: '/assets/images/FluffySweetPotatoes.png',
      ingredients: {
        softPotato: 9,
        moomooMilk: 5
      }
    },
    {
      id: 42,
      name: '"Steadfast" Ginger Cookies',
      basePower: 4921,
      image: '/assets/images/SteadfastGingerCookies.png',
      ingredients: {
        honey: 14,
        warmingGinger: 12,
        soothingCacao: 5,
        fancyEgg: 4
      }
    },
    {
      id: 43,
      name: 'Fancy Apple Juice',
      basePower: 763,
      image: '/assets/images/FancyAppleJuice.png',
      ingredients: {
        fancyApple: 8
      }
    },
    {
      id: 44,
      name: 'Craft Soda Pop',
      basePower: 964,
      image: '/assets/images/CraftSodaPop.png',
      ingredients: {
        honey: 9
      }
    },
    {
      id: 45,
      name: '"Ember" Ginger Tea',
      basePower: 1788,
      image: '/assets/images/EmberGingerTea.png',
      ingredients: {
        warmingGinger: 9,
        fancyApple: 7
      }
    },
    {
      id: 46,
      name: 'Jigglypuff\'s Fruity Flan',
      basePower: 7594,
      image: '/assets/images/JigglypuffsFruityFlan.png',
      ingredients: {
        honey: 20,
        fancyEgg: 15,
        moomooMilk: 10,
        fancyApple: 10
      }
    },
    {
      id: 47,
      name: '"Lovely Kiss" Smoothie',
      basePower: 4734,
      image: '/assets/images/LovelyKissSmoothie.png',
      ingredients: {
        fancyApple: 11,
        moomooMilk: 9,
        honey: 7,
        soothingCacao: 8
      }
    },
    {
      id: 48,
      name: '"Lucky Chant" Apple Pie',
      basePower: 1634,
      image: '/assets/images/LuckyChantApplePie.png',
      ingredients: {
        fancyApple: 12,
        moomooMilk: 4
      }
    },
    {
      id: 49,
      name: 'Neroli\'sRestorativeTea',
      basePower: 5065,
      image: '/assets/images/NerolisRestorativeTea.png',
      ingredients: {
        warmingGinger: 11,
        fancyApple: 15,
        tastyMushroom: 9
      }
    },
    {
      id: 50,
      name: '"Sweet Scent" Chocolate Cake',
      basePower: 3280,
      image: '/assets/images/SweetScentChocolateCake.png',
      ingredients: {
        honey: 9,
        soothingCacao: 8,
        moomooMilk: 7
      }
    },
    {
      id: 51,
      name: 'Warm Moomoo Milk',
      basePower: 727,
      image: '/assets/images/WarmMoomooMilk.png',
      ingredients: {
        moomooMilk: 7
      }
    },
    {
      id: 52,
      name: '"Cloud Nine" Soy Cake',
      basePower: 1798,
      image: '/assets/images/CloudNineSoyCake.png',
      ingredients: {
        fancyEgg: 8,
        greengrassSoybeans: 7
      }
    },
    {
      id: 53,
      name: '"Hustle" Protein Smoothie',
      basePower: 3168,
      image: '/assets/images/HustleProteinSmoothie.png',
      ingredients: {
        greengrassSoybeans: 15,
        soothingCacao: 8
      }
    },
    {
      id: 54,
      name: '"Stalwart" Vegetable Juice',
      basePower: 1798,
      image: '/assets/images/StalwartVegetableJuice.png',
      ingredients: {
        snoozyTomato: 9,
        fancyApple: 7
      }
    },
    {
      id: 55,
      name: 'Big Malasada',
      basePower: 2927,
      image: '/assets/images/BigMalasada.png',
      ingredients: {
        pureOil: 10,
        moomooMilk: 7,
        honey: 6
      }
    },
    {
      id: 56,
      name: '"Huge Power" Soy Donuts',
      basePower: 3213,
      image: '/assets/images/HugePowerSoyDonuts.png',
      ingredients: {
        pureOil: 9,
        greengrassSoybeans: 6,
        soothingCacao: 7
      }
    },
    {
      id: 57,
      name: '"Explosion" Popcorn',
      basePower: 6048,
      image: '/assets/images/ExplosionPopcorn.png',
      ingredients: {
        greengrassCorn: 15,
        pureOil: 14,
        moomooMilk: 7
      }
    },
    {
      id: 58,
      name: '"Teatime" Corn Scones',
      basePower: 10925,
      image: '/assets/images/TeatimeCornScones.png',
      ingredients: {
        fancyApple: 20,
        warmingGinger: 20,
        greengrassCorn: 18,
        moomooMilk: 9
      }
    },
    {
      id: 59,
      name: '"Petal Dance" Chocolate Tarts',
      basePower: 3314,
      image: '/assets/images/PetalDanceChocolateTarts.png',
      ingredients: {
        fancyApple: 11,
        soothingCacao: 11
      }
    },
    {
      id: 60,
      name: '"Flower Gift" Macarons',
      basePower: 13834,
      image: '/assets/images/FlowerGiftMacarons.png',
      ingredients: {
        soothingCacao: 25,
        fancyEgg: 25,
        honey: 17,
        moomooMilk: 10
      }
    }
  ];
  ingredientCountsList = [
    {
      id: 1,
      name: 'Fancy Apple',
      basePower: 90,
      image: '/assets/images/fancyapple.png',
      count: 0
    },
    {
      id: 2,
      name: 'Moomoo Milk',
      basePower: 98,
      image: '/assets/images/moomoomilk.png',
      count: 0
    },
    {
      id: 3,
      name: 'Greengrass Soybeans',
      basePower: 100,
      image: '/assets/images/greengrasssoybeans.png',
      count: 0
    },
    {
      id: 4,
      name: 'Honey',
      basePower: 101,
      image: '/assets/images/honey.png',
      count: 0
    },
    {
      id: 5,
      name: 'Bean Sausage',
      basePower: 103,
      image: '/assets/images/beansausage.png',
      count: 0
    },
    {
      id: 6,
      name: 'Warming Ginger',
      basePower: 109,
      image: '/assets/images/warmingginger.png',
      count: 0
    },
    {
      id: 7,
      name: 'Snoozy Tomato',
      basePower: 110,
      image: '/assets/images/snoozytomato.png',
      count: 0
    },
    {
      id: 8,
      name: 'Fancy Egg',
      basePower: 115,
      image: '/assets/images/fancyegg.png',
      count: 0
    },
    {
      id: 9,
      name: 'Pure Oil',
      basePower: 121,
      image: '/assets/images/pureoil.png',
      count: 0
    },
    {
      id: 10,
      name: 'Soft Potato',
      basePower: 124,
      image: '/assets/images/softpotato.png',
      count: 0
    },
    {
      id: 11,
      name: 'Fiery Herb',
      basePower: 130,
      image: '/assets/images/fieryherb.png',
      count: 0
    },
    {
      id: 12,
      name: 'Greengrass Corn',
      basePower: 140,
      image: '/assets/images/greengrasscorn.png',
      count: 0
    },
    {
      id: 13,
      name: 'Soothing Cacao',
      basePower: 151,
      image: '/assets/images/soothingcacao.png',
      count: 0
    },
    {
      id: 14,
      name: 'Tasty Mushroom',
      basePower: 167,
      image: '/assets/images/tastymushroom.png',
      count: 0
    },
    {
      id: 15,
      name: 'Large Leek',
      basePower: 185,
      image: '/assets/images/largeleek.png',
      count: 0
    },
    {
      id: 16,
      name: 'Slowpoke Tail',
      basePower: 342,
      image: '/assets/images/slowpoketail.png',
      count: 0
    }
  ];
  allDishLevelMultipliers = [
    1, 1.02, 1.04, 1.06, 1.08,
    1.09, 1.11, 1.13, 1.16, 1.18,
    1.19, 1.21, 1.23, 1.24, 1.26,
    1.28, 1.3, 1.31, 1.33, 1.35,
    1.37, 1.4, 1.42, 1.45, 1.47,
    1.5, 1.52, 1.55, 1.58, 1.61,
    1.64, 1.67, 1.7, 1.74, 1.77,
    1.81, 1.84, 1.88, 1.92, 1.96,
    2, 2.04, 2.08, 2.13, 2.17,
    2.22, 2.27, 2.32, 2.37, 2.42,
    2.48, 2.53, 2.59, 2.65, 2.71
  ];
  islandBonusLookup = [
    '0%', '5%', '10%', '15%', '20%',
    '25%', '30%', '35%', '40%', '45%', '50%',
    '50%', '55%', '60%', '65%', '70%', '75%',
    '80%', '85%', '90%', '95%', '100%'
  ];

  /**
   * retrieve the list of pokemon
   * @returns list of pokemon
   */
  retrievePokemonList() {
    return this.pokemonList;
  }

  /**
   * retrieve the list of berries
   * @returns list of berries
   */
  retrieveBerryList() {
    return this.allBerries;
  }

  /**
   * retrieve the list of ingredients
   * @returns list of ingredients
   */
  retrieveIngredientsList() {
    return this.allIngredients;
  }

  /**
   * retrieve the list of skills
   * @returns list of skills
   */
  retrieveSkillsList() {
    return this.allSkills;
  }

  /**
   * retrieve the list of recipes
   * @returns list of recipes
   */
  retrieveRecipesList() {
    return this.recipesList;
  }

  /**
   * retrieve the list of ingredients
   * @returns list of ingredients
   */
  retrieveIngredientCountsList() {
    return this.ingredientCountsList;
  }

  /**
   * retrieve the list of dish level multipliers
   * @returns all dish level multipliers
   */
  retrieveDishLevelMultipliers() {
    return this.allDishLevelMultipliers;
  }

  /**
   * retrieve the list of island bonuses
   * @returns all island bonuses
   */
  retrieveIslandBonuses() {
    return this.islandBonusLookup;
  }
}
