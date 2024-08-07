import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  constructor() { }

  allBerries: Array<string> = ['Belue Berry', 'Bluk Berry', 'Cheri Berry', 'Chesto Berry',
                              'Durin Berry', 'Figy Berry', 'Grepa Berry', 'Leppa Berry',
                              'Lum Berry', 'Mago Berry', 'Oran Berry', 'Pamtre Berry',
                              'Pecha Berry', 'Persim Berry', 'Rawst Berry', 'Sitrus Berry',
                              'Wiki Berry', 'Yache Berry'];
  allIngredients: Array<string> = ['fancyapple', 'moomoomilk', 'greengrasssoybeans',
                                  'honey', 'beansausage', 'warmingginger', 'snoozytomato',
                                  'fancyegg', 'pureoil', 'softpotato', 'fieryherb',
                                  'greengrasscorn', 'soothingcacao', 'tastymushroom',
                                  'largeleek', 'slowpoketail'];
  allSkills: Array<string> = ['Charge Strength S', 'Charge Strength M', 'Dream Shard Magnet S - Var',
                              'Energizing Cheer S', 'Charge Strength S - Var', 'Dream Shard Magnet S',
                              'Charge Energy S', 'Energy for Everyone S', 'Extra Helpful S',
                              'Extra Helpful S', 'Cooking Power-Up S', 'Metronome',
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
  'Steelix', 'Heracross', 'Houndour', 'Houndoom', 'Raikou', 'Entei', 'Larvitar', 'Pupitar', 'Tyranitar', 'Ralts', 'Kirlia',
  'Gardevoir', 'Slakoth', 'Vigoroth', 'Slaking', 'Sableye', 'Gulpin', 'Swalot', 'Swablu', 'Altaria', 'Shuppet', 'Banette',
  'Absol', 'Wynaut', 'Spheal', 'Sealeo', 'Walrein', 'Bonsly', 'Mime Jr.', 'Riolu', 'Lucario', 'Croagunk', 'Toxicroak',
  'Snover', 'Abomasnow', 'Magnezone', 'Togekiss', 'Leafeon', 'Glaceon', 'Gallade', 'Sylveon', 'Dedenne', 'Stufful', 'Bewear',
  'Comfey', 'Cramorant', 'Sprigatito', 'Floragato', 'Meowscarada', 'Fuecoco', 'Crocalor', 'Skeledirge', 'Quaxly', 'Quaxwell', 'Quaqaval'];
  pokemonList: Array<Pokemon> = [
    {
      name: 'Bulbasaur',
      berry: 'Durin Berry',
      ingredients: ['honey', 'snoozytomato', 'softpotato'],
      mainSkill: 'Extra Helpful S',
      specialty: 'Ingredients'
    },
    {
      name: 'Ivysaur',
      berry: 'Durin Berry',
      ingredients: ['honey', 'snoozytomato', 'softpotato'],
      mainSkill: 'Extra Helpful S',
      specialty: 'Ingredients'
    },
    {
      name: 'Venusaur',
      berry: 'Durin Berry',
      ingredients: ['honey', 'snoozytomato', 'softpotato'],
      mainSkill: 'Extra Helpful S',
      specialty: 'Ingredients'
    },
    {
      name: 'Charmander',
      berry: 'Leppa Berry',
      ingredients: ['beansausage', 'warmingginger', 'fieryherb'],
      mainSkill: 'Extra Helpful S',
      specialty: 'Ingredients'
    },
    {
      name: 'Charmeleon',
      berry: 'Leppa Berry',
      ingredients: ['beansausage', 'warmingginger', 'fieryherb'],
      mainSkill: 'Extra Helpful S',
      specialty: 'Ingredients'
    },
    {
      name: 'Charizard',
      berry: 'Leppa Berry',
      ingredients: ['beansausage', 'warmingginger', 'fieryherb'],
      mainSkill: 'Extra Helpful S',
      specialty: 'Ingredients'
    },
    {
      name: 'Squirtle',
      berry: 'Oran Berry',
      ingredients: ['moomoomilk', 'soothingcacao', 'beansausage'],
      mainSkill: 'Extra Helpful S',
      specialty: 'Ingredients'
    },
    {
      name: 'Wartortle',
      berry: 'Oran Berry',
      ingredients: ['moomoomilk', 'soothingcacao', 'beansausage'],
      mainSkill: 'Extra Helpful S',
      specialty: 'Ingredients'
    },
    {
      name: 'Blastoise',
      berry: 'Oran Berry',
      ingredients: ['moomoomilk', 'soothingcacao', 'beansausage'],
      mainSkill: 'Extra Helpful S',
      specialty: 'Ingredients'
    },
    {
      name: 'Caterpie',
      berry: 'Lum Berry',
      ingredients: ['honey', 'snoozytomato', 'greengrasssoybeans'],
      mainSkill: 'Extra Helpful S',
      specialty: 'Berries'
    },
    {
      name: 'Metapod',
      berry: 'Lum Berry',
      ingredients: ['honey', 'snoozytomato', 'greengrasssoybeans'],
      mainSkill: 'Extra Helpful S',
      specialty: 'Berries'
    },
    {
      name: 'Butterfree',
      berry: 'Lum Berry',
      ingredients: ['honey', 'snoozytomato', 'greengrasssoybeans'],
      mainSkill: 'Extra Helpful S',
      specialty: 'Berries'
    },
    {
      name: 'Rattata',
      berry: 'Persim Berry',
      ingredients: ['fancyapple', 'snoozytomato', 'greengrasssoybeans'],
      mainSkill: 'Charge Energy S',
      specialty: 'Berries'
    },
    {
      name: 'Raticate',
      berry: 'Persim Berry',
      ingredients: ['fancyapple', 'snoozytomato', 'greengrasssoybeans'],
      mainSkill: 'Charge Energy S',
      specialty: 'Berries'
    },
    {
      name: 'Ekans',
      berry: 'Chesto Berry',
      ingredients: ['beansausage', 'fancyegg', 'fieryherb'],
      mainSkill: 'Charge Energy S',
      specialty: 'Berries'
    },
    {
      name: 'Arbok',
      berry: 'Chesto Berry',
      ingredients: ['beansausage', 'fancyegg', 'fieryherb'],
      mainSkill: 'Charge Energy S',
      specialty: 'Berries'
    },
    {
      name: 'Pikachu',
      berry: 'Grepa Berry',
      ingredients: ['fancyapple', 'warmingginger', 'fancyegg'],
      mainSkill: 'Charge Strength S',
      specialty: 'Berries'
    },
    {
      name: 'Raichu',
      berry: 'Grepa Berry',
      ingredients: ['fancyapple', 'warmingginger', 'fancyegg'],
      mainSkill: 'Charge Strength S',
      specialty: 'Berries'
    },
    {
      name: 'Clefairy',
      berry: 'Pecha Berry',
      ingredients: ['fancyapple', 'honey', 'greegrasssoybeans'],
      mainSkill: 'Metronome',
      specialty: 'Berries'
    },
    {
      name: 'Clefable',
      berry: 'Pecha Berry',
      ingredients: ['fancyapple', 'honey', 'greegrasssoybeans'],
      mainSkill: 'Metronome',
      specialty: 'Berries'
    },
    {
      name: 'Vulpix',
      berry: 'Leppa Berry',
      ingredients: ['greengrasssoybeans', 'greengrasscorn', 'softpotato'],
      mainSkill: 'Energizing Cheer S',
      specialty: 'Berries'
    },
    {
      name: 'Ninetales',
      berry: 'Leppa Berry',
      ingredients: ['greengrasssoybeans', 'greengrasscorn', 'softpotato'],
      mainSkill: 'Energizing Cheer S',
      specialty: 'Berries'
    },
    {
      name: 'Jigglypuff',
      berry: 'Pecha Berry',
      ingredients: ['honey', 'pureoil', 'soothingcacao'],
      mainSkill: 'Energy for Everyone S',
      specialty: 'Skills'
    },{
      name: 'Wigglytuff',
      berry: 'Pecha Berry',
      ingredients: ['honey', 'pureoil', 'soothingcacao'],
      mainSkill: 'Energy for Everyone S',
      specialty: 'Skills'
    },
    {
      name: 'Diglett',
      berry: 'Figy Berry',
      ingredients: ['snoozytomato', 'largeleek', 'greengrasssoybeans'],
      mainSkill: 'Charge Strength S',
      specialty: 'Ingredients'
    },
    {
      name: 'Dugtrio',
      berry: 'Figy Berry',
      ingredients: ['snoozytomato', 'largeleek', 'greengrasssoybeans'],
      mainSkill: 'Charge Strength S',
      specialty: 'Ingredients'
    },
    {
      name: 'Meowth',
      berry: 'Persim Berry',
      ingredients: ['moomoomilk', 'beansausage'],
      mainSkill: 'Dream Shard Magnet S',
      specialty: 'Skills'
    },
    {
      name: 'Persian',
      berry: 'Persim Berry',
      ingredients: ['moomoomilk', 'beansausage'],
      mainSkill: 'Dream Shard Magnet S',
      specialty: 'Skills'
    },
    {
      name: 'Psyduck',
      berry: 'Oran Berry',
      ingredients: ['soothingcacao', 'fancyapple', 'beansausage'],
      mainSkill: 'Charge Strength S - Var',
      specialty: 'Skills'
    },
    {
      name: 'Golduck',
      berry: 'Oran Berry',
      ingredients: ['soothingcacao', 'fancyapple', 'beansausage'],
      mainSkill: 'Charge Strength S - Var',
      specialty: 'Skills'
    },
    {
      name: 'Mankey',
      berry: 'Cheri Berry',
      ingredients: ['beansausage', 'tastymushrooms', 'honey'],
      mainSkill: 'Charge Strength S - Var',
      specialty: 'Berries'
    },
    {
      name: 'Primeape',
      berry: 'Cheri Berry',
      ingredients: ['beansausage', 'tastymushrooms', 'honey'],
      mainSkill: 'Charge Strength S - Var',
      specialty: 'Berries'
    },
    {
      name: 'Growlithe',
      berry: 'Leppa Berry',
      ingredients: ['fieryherb', 'beansausage', 'moomoomilk'],
      mainSkill: 'Extra Helpful S',
      specialty: 'Skills'
    },
    {
      name: 'Arcanine',
      berry: 'Leppa Berry',
      ingredients: ['fieryherb', 'beansausage', 'moomoomilk'],
      mainSkill: 'Extra Helpful S',
      specialty: 'Skills'
    },
    {
      name: 'Bellsprout',
      berry: 'Durin Berry',
      ingredients: ['snoozytomato', 'softpotato', 'largeleek'],
      mainSkill: 'Charge Energy S',
      specialty: 'Ingredients'
    },
    {
      name: 'Weepinbell',
      berry: 'Durin Berry',
      ingredients: ['snoozytomato', 'softpotato', 'largeleek'],
      mainSkill: 'Charge Energy S',
      specialty: 'Ingredients'
    },
    {
      name: 'Victreebel',
      berry: 'Durin Berry',
      ingredients: ['snoozytomato', 'softpotato', 'largeleek'],
      mainSkill: 'Charge Energy S',
      specialty: 'Ingredients'
    },
    {
      name: 'Geodude',
      berry: 'Sitrus Berry',
      ingredients: ['greengrasssoybeans', 'softpotato', 'tastymushrooms'],
      mainSkill: 'Charge Strength S - Var',
      specialty: 'Ingredients'
    },
    {
      name: 'Graveler',
      berry: 'Sitrus Berry',
      ingredients: ['greengrasssoybeans', 'softpotato', 'tastymushrooms'],
      mainSkill: 'Charge Strength S - Var',
      specialty: 'Ingredients'
    },
    {
      name: 'Golem',
      berry: 'Sitrus Berry',
      ingredients: ['greengrasssoybeans', 'softpotato', 'tastymushrooms'],
      mainSkill: 'Charge Strength S - Var',
      specialty: 'Ingredients'
    },
    {
      name: 'Slowpoke',
      berry: 'Oran Berry',
      ingredients: ['soothingcacao', 'slowpoketail', 'snoozytomato'],
      mainSkill: 'Energizing Cheer S',
      specialty: 'Skills'
    },
    {
      name: 'Slowbro',
      berry: 'Oran Berry',
      ingredients: ['soothingcacao', 'slowpoketail', 'snoozytomato'],
      mainSkill: 'Energizing Cheer S',
      specialty: 'Skills'
    },
    {
      name: 'Slowking',
      berry: 'Oran Berry',
      ingredients: ['soothingcacao', 'slowpoketail', 'snoozytomato'],
      mainSkill: 'Energizing Cheer S',
      specialty: 'Skills'
    },
    {
      name: 'Magnemite',
      berry: 'Belue Berry',
      ingredients: ['pureoil', 'fieryherb'],
      mainSkill: 'Cooking Power-Up S',
      specialty: 'Skills'
    },
    {
      name: 'Magneton',
      berry: 'Belue Berry',
      ingredients: ['pureoil', 'fieryherb'],
      mainSkill: 'Cooking Power-Up S',
      specialty: 'Skills'
    },
    {
      name: 'Doduo',
      berry: 'Pamtre Berry',
      ingredients: ['greengrasssoybeans', 'soothingcacao', 'beansausage'],
      mainSkill: 'Extra Helpful S',
      specialty: 'Berries'
    },
    {
      name: 'Dodrio',
      berry: 'Pamtre Berry',
      ingredients: ['greengrasssoybeans', 'soothingcacao', 'beansausage'],
      mainSkill: 'Extra Helpful S',
      specialty: 'Berries'
    },
    {
      name: 'Gastly',
      berry: 'Bluk Berry',
      ingredients: ['fieryherb', 'tastymushrooms', 'pureoil'],
      mainSkill: 'Charge Strength S',
      specialty: 'Ingredients'
    },
    {
      name: 'Haunter',
      berry: 'Bluk Berry',
      ingredients: ['fieryherb', 'tastymushrooms', 'pureoil'],
      mainSkill: 'Charge Strength S',
      specialty: 'Ingredients'
    },
    {
      name: 'Gengar',
      berry: 'Bluk Berry',
      ingredients: ['fieryherb', 'tastymushrooms', 'pureoil'],
      mainSkill: 'Charge Strength S',
      specialty: 'Ingredients'
    },
    {
      name: 'Onix',
      berry: 'Sitrus Berry',
      ingredients: ['snoozytomato', 'beansausage', 'softpotato'],
      mainSkill: 'Extra Helpful S',
      specialty: 'Berries'
    },
    {
      name: 'Cubone',
      berry: 'Figy Berry',
      ingredients: ['warmingginger', 'soothingcacao'],
      mainSkill: 'Charge Energy S',
      specialty: 'Berries'
    },
    {
      name: 'Marowak',
      berry: 'Figy Berry',
      ingredients: ['warmingginger', 'soothingcacao'],
      mainSkill: 'Charge Energy S',
      specialty: 'Berries'
    },
    {
      name: 'Kangaskhan',
      berry: 'Persim Berry',
      ingredients: ['warmingginger', 'softpotato', 'greengrasssoybeans'],
      mainSkill: 'Extra Helpful S',
      specialty: 'Ingredients'
    },
    {
      name: 'Mr. Mime',
      berry: 'Mago Berry',
      ingredients: ['snoozytomato', 'softpotato', 'largeleek'],
      mainSkill: 'Charge Strength S',
      specialty: 'Ingredients'
    },
    {
      name: 'Pinsir',
      berry: 'Lum Berry',
      ingredients: ['honey', 'fancyapple', 'beansausage'],
      mainSkill: 'Charge Strength S',
      specialty: 'Ingredients'
    },
    {
      name: 'Ditto',
      berry: 'Persim Berry',
      ingredients: ['pureoil', 'largeleek', 'slowpoketail'],
      mainSkill: 'Charge Strength S',
      specialty: 'Ingredients'
    },
    {
      name: 'Eevee',
      berry: 'Persim Berry',
      ingredients: ['moomoomilk', 'soothingcacao', 'beansausage'],
      mainSkill: 'Extra Helpful S',
      specialty: 'Skills'
    },
    {
      name: 'Vaporeon',
      berry: 'Oran Berry',
      ingredients: ['moomoomilk', 'soothingcacao', 'beansausage'],
      mainSkill: 'Extra Helpful S',
      specialty: 'Skills'
    },
    {
      name: 'Jolteon',
      berry: 'Grepa Berry',
      ingredients: ['moomoomilk', 'soothingcacao', 'beansausage'],
      mainSkill: 'Extra Helpful S',
      specialty: 'Skills'
    },
    {
      name: 'Flareon',
      berry: 'Leppa Berry',
      ingredients: ['moomoomilk', 'soothingcacao', 'beansausage'],
      mainSkill: 'Cooking Power-Up S',
      specialty: 'Skills'
    },
    {
      name: 'Dratini',
      berry: 'Yache Berry',
      ingredients: ['fieryherb', 'greengrasscorn', 'pureoil'],
      mainSkill: 'Charge Energy S',
      specialty: 'Ingredients'
    },
    {
      name: 'Dragonair',
      berry: 'Yache Berry',
      ingredients: ['fieryherb', 'greengrasscorn', 'pureoil'],
      mainSkill: 'Charge Energy S',
      specialty: 'Ingredients'
    },
    {
      name: 'Dragonite',
      berry: 'Yache Berry',
      ingredients: ['fieryherb', 'greengrasscorn', 'pureoil'],
      mainSkill: 'Charge Energy S',
      specialty: 'Ingredients'
    },
    {
      name: 'Chikorita',
      berry: 'Durin Berry',
      ingredients: ['soothingcacao', 'honey', 'largeleek'],
      mainSkill: 'Charge Strength S - Var',
      specialty: 'Berries'
    },
    {
      name: 'Bayleef',
      berry: 'Durin Berry',
      ingredients: ['soothingcacao', 'honey', 'largeleek'],
      mainSkill: 'Charge Strength S - Var',
      specialty: 'Berries'
    },
    {
      name: 'Meganium',
      berry: 'Durin Berry',
      ingredients: ['soothingcacao', 'honey', 'largeleek'],
      mainSkill: 'Charge Strength S - Var',
      specialty: 'Berries'
    },
    {
      name: 'Cyndaquil',
      berry: 'Leppa Berry',
      ingredients: ['warmingginger', 'fieryherb', 'pureoil'],
      mainSkill: 'Charge Strength S - Var',
      specialty: 'Berries'
    },
    {
      name: 'Quilava',
      berry: 'Leppa Berry',
      ingredients: ['warmingginger', 'fieryherb', 'pureoil'],
      mainSkill: 'Charge Strength S - Var',
      specialty: 'Berries'
    },
    {
      name: 'Typhlosion',
      berry: 'Leppa Berry',
      ingredients: ['warmingginger', 'fieryherb', 'pureoil'],
      mainSkill: 'Charge Strength S - Var',
      specialty: 'Berries'
    },
    {
      name: 'Totodile',
      berry: 'Oran Berry',
      ingredients: ['beansausage', 'pureoil'],
      mainSkill: 'Charge Strength S - Var',
      specialty: 'Berries'
    },
    {
      name: 'Croconaw',
      berry: 'Oran Berry',
      ingredients: ['beansausage', 'pureoil'],
      mainSkill: 'Charge Strength S - Var',
      specialty: 'Berries'
    },
    {
      name: 'Feraligatr',
      berry: 'Oran Berry',
      ingredients: ['beansausage', 'pureoil'],
      mainSkill: 'Charge Strength S - Var',
      specialty: 'Berries'
    },
    {
      name: 'Pichu',
      berry: 'Grepa Berry',
      ingredients: ['fancyapple', 'warmingginger', 'fancyegg'],
      mainSkill: 'Charge Strength S',
      specialty: 'Berries'
    },
    {
      name: 'Cleffa',
      berry: 'Pecha Berry',
      ingredients: ['fancyapple', 'honey', 'greegrasssoybeans'],
      mainSkill: 'Metronome',
      specialty: 'Berries'
    },
    {
      name: 'Igglybuff',
      berry: 'Pecha Berry',
      ingredients: ['honey', 'pureoil', 'soothingcacao'],
      mainSkill: 'Energy for Everyone S',
      specialty: 'Skills'
    },
    {
      name: 'Togepi',
      berry: 'Pecha Berry',
      ingredients: ['fancyegg', 'warmingginger', 'soothingcacao'],
      mainSkill: 'Metronome',
      specialty: 'Skills'
    },
    {
      name: 'Togetic',
      berry: 'Pecha Berry',
      ingredients: ['fancyegg', 'warmingginger', 'soothingcacao'],
      mainSkill: 'Metronome',
      specialty: 'Skills'
    },
    {
      name: 'Mareep',
      berry: 'Grepa Berry',
      ingredients: ['fieryherb', 'fancyegg'],
      mainSkill: 'Charge Strength M',
      specialty: 'Skills'
    },
    {
      name: 'Flaaffy',
      berry: 'Grepa Berry',
      ingredients: ['fieryherb', 'fancyegg'],
      mainSkill: 'Charge Strength M',
      specialty: 'Skills'
    },
    {
      name: 'Ampharos',
      berry: 'Grepa Berry',
      ingredients: ['fieryherb', 'fancyegg'],
      mainSkill: 'Charge Strength M',
      specialty: 'Skills'
    },
    {
      name: 'Sudowoodo',
      berry: 'Sitrus Berry',
      ingredients: ['snoozytomato', 'greengrasssoybeans', 'tastymushrooms'],
      mainSkill: 'Charge Strength M',
      specialty: 'Skills'
    },
    {
      name: 'Espeon',
      berry: 'Mago Berry',
      ingredients: ['moomoomilk', 'soothingcacao', 'beansausage'],
      mainSkill: 'Charge Strength M',
      specialty: 'Skills'
    },
    {
      name: 'Umbreon',
      berry: 'Wiki Berry',
      ingredients: ['moomoomilk', 'soothingcacao', 'beansausage'],
      mainSkill: 'Charge Energy S',
      specialty: 'Skills'
    },
    {
      name: 'Wobbuffet',
      berry: 'Mago Berry',
      ingredients: ['fancyapple', 'tastymushrooms', 'pureoil'],
      mainSkill: 'Energizing Cheer S',
      specialty: 'Skills'
    },
    {
      name: 'Steelix',
      berry: 'Belue Berry',
      ingredients: ['snoozytomato', 'beansausage', 'softpotato'],
      mainSkill: 'Extra Helpful S',
      specialty: 'Berries'
    },
    {
      name: 'Heracross',
      berry: 'Lum Berry',
      ingredients: ['honey', 'tastymushrooms', 'beansausage'],
      mainSkill: 'Extra Helpful S',
      specialty: 'Skills'
    },
    {
      name: 'Delibird',
      berry: 'Pamtre Berry',
      ingredients: ['fancyegg', 'fancyapple', 'soothingcacao'],
      mainSkill: 'Extra Helpful S',
      specialty: 'Ingredients'
    },
    {
      name: 'Houndour',
      berry: 'Wiki Berry',
      ingredients: ['fieryherb', 'warmingginger', 'largeleek'],
      mainSkill: 'Charge Strength S',
      specialty: 'Ingredients'
    },
    {
      name: 'Houndoom',
      berry: 'Wiki Berry',
      ingredients: ['fieryherb', 'warmingginger', 'largeleek'],
      mainSkill: 'Charge Strength S',
      specialty: 'Berries'
    },
    {
      name: 'Raikou',
      berry: 'Grepa Berry',
      ingredients: ['beansausage', 'fieryherb', 'largeleek'],
      mainSkill: 'Helper Boost',
      specialty: 'Skills'
    },
    {
      name: 'Entei',
      berry: 'Leppa Berry',
      ingredients: ['pureoil', 'snoozytomato', 'tastymushroom'],
      mainSkill: 'Helper Boost',
      specialty: 'Skills'
    },
    {
      name: 'Larvitar',
      berry: 'Sitrus Berry',
      ingredients: ['warmingginger', 'greengrasssoybeans', 'beansausage'],
      mainSkill: 'Charge Energy S',
      specialty: 'Berries'
    },
    {
      name: 'Pupitar',
      berry: 'Sitrus Berry',
      ingredients: ['warmingginger', 'greengrasssoybeans', 'beansausage'],
      mainSkill: 'Charge Energy S',
      specialty: 'Ingredients'
    },
    {
      name: 'Tyranitar',
      berry: 'Wiki Berry',
      ingredients: ['warmingginger', 'greengrasssoybeans', 'beansausage'],
      mainSkill: 'Charge Energy S',
      specialty: 'Ingredients'
    },
    {
      name: 'Ralts',
      berry: 'Mago Berry',
      ingredients: ['fancyapple', 'greengrasscorn', 'largeleek'],
      mainSkill: 'Energy for Everyone S',
      specialty: 'Skills'
    },
    {
      name: 'Kirlia',
      berry: 'Mago Berry',
      ingredients: ['fancyapple', 'greengrasscorn', 'largeleek'],
      mainSkill: 'Energy for Everyone S',
      specialty: 'Skills'
    },
    {
      name: 'Gardevoir',
      berry: 'Mago Berry',
      ingredients: ['fancyapple', 'greengrasscorn', 'largeleek'],
      mainSkill: 'Energy for Everyone S',
      specialty: 'Skills'
    },
    {
      name: 'Slakoth',
      berry: 'Persim Berry',
      ingredients: ['snoozytomato', 'honey', 'fancyapple'],
      mainSkill: 'Extra Helpful S',
      specialty: 'Berries'
    },
    {
      name: 'Vigoroth',
      berry: 'Persim Berry',
      ingredients: ['snoozytomato', 'honey', 'fancyapple'],
      mainSkill: 'Extra Helpful S',
      specialty: 'Berries'
    },
    {
      name: 'Slaking',
      berry: 'Persim Berry',
      ingredients: ['snoozytomato', 'honey', 'fancyapple'],
      mainSkill: 'Extra Helpful S',
      specialty: 'Berries'
    },
    {
      name: 'Sableye',
      berry: 'Wiki Berry',
      ingredients: ['pureoil', 'tastymushrooms'],
      mainSkill: 'Dream Shard Magnet S - Var',
      specialty: 'Skills'
    },
    {
      name: 'Gulpin',
      berry: 'Chesto Berry',
      ingredients: ['greengrasssoybeans', 'tastymushrooms'],
      mainSkill: 'Dream Shard Magnet S - Var',
      specialty: 'Skills'
    },
    {
      name: 'Swalot',
      berry: 'Chesto Berry',
      ingredients: ['greengrasssoybeans', 'tastymushrooms'],
      mainSkill: 'Dream Shard Magnet S - Var',
      specialty: 'Skills'
    },
    {
      name: 'Swablu',
      berry: 'Pamtre Berry',
      ingredients: ['fancyegg', 'greengrasssoybeans', 'fancyapple'],
      mainSkill: 'Charge Energy S',
      specialty: 'Berries'
    },
    {
      name: 'Altaria',
      berry: 'Yache Berry',
      ingredients: ['fancyegg', 'greengrasssoybeans', 'fancyapple'],
      mainSkill: 'Charge Energy S',
      specialty: 'Berries'
    },
    {
      name: 'Shuppet',
      berry: 'Bluk Berry',
      ingredients: ['pureoil', 'warmingginger', 'tastymushroom'],
      mainSkill: 'Charge Strength S',
      specialty: 'Berries'
    },
    {
      name: 'Banette',
      berry: 'Bluk Berry',
      ingredients: ['pureoil', 'warmingginger', 'tastymushroom'],
      mainSkill: 'Charge Strength S',
      specialty: 'Berries'
    },
    {
      name: 'Absol',
      berry: 'Wiki Berry',
      ingredients: ['soothingcacao', 'fancyapple', 'tastymushroom'],
      mainSkill: 'Charge Strength S',
      specialty: 'Ingredients'
    },
    {
      name: 'Wynaut',
      berry: 'Mago Berry',
      ingredients: ['fancyapple', 'tastymushrooms', 'pureoil'],
      mainSkill: 'Energizing Cheer S',
      specialty: 'Skills'
    },
    {
      name: 'Spheal',
      berry: 'Rawst Berry',
      ingredients: ['pureoil', 'beansausage', 'warmingginger'],
      mainSkill: 'Extra Helpful S',
      specialty: 'Berries'
    },
    {
      name: 'Sealeo',
      berry: 'Rawst Berry',
      ingredients: ['pureoil', 'beansausage', 'warmingginger'],
      mainSkill: 'Extra Helpful S',
      specialty: 'Berries'
    },
    {
      name: 'Walrein',
      berry: 'Rawst Berry',
      ingredients: ['pureoil', 'beansausage', 'warmingginger'],
      mainSkill: 'Extra Helpful S',
      specialty: 'Berries'
    },
    {
      name: 'Bonsly',
      berry: 'Sitrus Berry',
      ingredients: ['snoozytomato', 'greengrasssoybeans', 'tastymushrooms'],
      mainSkill: 'Charge Strength M',
      specialty: 'Skills'
    },
    {
      name: 'Mime Jr.',
      berry: 'Mago Berry',
      ingredients: ['snoozytomato', 'softpotato', 'largeleek'],
      mainSkill: 'Charge Strength S',
      specialty: 'Ingredients'
    },
    {
      name: 'Riolu',
      berry: 'Cheri Berry',
      ingredients: ['pureoil', 'softpotato', 'fancyegg'],
      mainSkill: 'Dream Shard Magnet S',
      specialty: 'Skills'
    },
    {
      name: 'Lucario',
      berry: 'Cheri Berry',
      ingredients: ['pureoil', 'softpotato', 'fancyegg'],
      mainSkill: 'Dream Shard Magnet S',
      specialty: 'Skills'
    },
    {
      name: 'Croagunk',
      berry: 'Chesto Berry',
      ingredients: ['pureoil', 'beansausage'],
      mainSkill: 'Charge Strength S',
      specialty: 'Ingredients'
    },
    {
      name: 'Toxicroak',
      berry: 'Chesto Berry',
      ingredients: ['pureoil', 'beansausage'],
      mainSkill: 'Charge Strength S',
      specialty: 'Ingredients'
    },
    {
      name: 'Magnezone',
      berry: 'Belue Berry',
      ingredients: ['pureoil', 'fieryherb'],
      mainSkill: 'Cooking Power-Up S',
      specialty: 'Skills'
    },
    {
      name: 'Togekiss',
      berry: 'Pecha Berry',
      ingredients: ['fancyegg', 'warmingginger', 'soothingcacao'],
      mainSkill: 'Metronome',
      specialty: 'Skills'
    },
    {
      name: 'Leafeon',
      berry: 'Durin Berry',
      ingredients: ['moomoomilk', 'soothingcacao', 'beansausage'],
      mainSkill: 'Energizing Cheer S',
      specialty: 'Skills'
    },
    {
      name: 'Glaceon',
      berry: 'Rawst Berry',
      ingredients: ['moomoomilk', 'soothingcacao', 'beansausage'],
      mainSkill: 'Cooking Power-Up S',
      specialty: 'Skills'
    },
    {
      name: 'Gallade',
      berry: 'Berries.Cherry',
      ingredients: ['fancyapple', 'greengrasscorn', 'largeleek'],
      mainSkill: 'Extra Helpful S',
      specialty: 'Skills'
    },
    {
      name: 'Sylveon',
      berry: 'Pecha Berry',
      ingredients: ['moomoomilk', 'soothingcacao', 'beansausage'],
      mainSkill: 'Energy for Everyone S',
      specialty: 'Skills'
    },
    {
      name: 'Dedenne',
      berry: 'Grepa Berry',
      ingredients: ['fancyapple', 'soothingcacao', 'greengrasscorn'],
      mainSkill: 'Tasty Chance S',
      specialty: 'Skills'
    },
    {
      name: 'Stufful',
      berry: 'Cheri Berry',
      ingredients: ['greengrasscorn', 'beansausage', 'fancyegg'],
      mainSkill: 'Charge Strength S',
      specialty: 'Ingredients'
    },
    {
      name: 'Bewear',
      berry: 'Cheri Berry',
      ingredients: ['greengrasscorn', 'beansausage', 'fancyegg'],
      mainSkill: 'Charge Strength S',
      specialty: 'Ingredients'
    },
    {
      name: 'Comfey',
      berry: 'Pecha Berry',
      ingredients: ['greengrasscorn', 'warmingginger', 'soothingcacao'],
      mainSkill: 'Energizing Cheer S',
      specialty: 'Ingredients'
    },
    {
      name: 'Cramorant',
      berry: 'Pamtre Berry',
      ingredients: ['pureoil', 'softpotato', 'fancyegg'],
      mainSkill: 'Tasty Chance S',
      specialty: 'Ingredients'
    },
    {
      name: 'Sprigatito',
      berry: 'Durin Berry',
      ingredients: ['softpotato', 'moomoomilk', 'warmingginger'],
      mainSkill: 'Cooking Power-Up S',
      specialty: 'Ingredients'
    },
    {
      name: 'Floragato',
      berry: 'Durin Berry',
      ingredients: ['softpotato', 'moomoomilk', 'warmingginger'],
      mainSkill: 'Cooking Power-Up S',
      specialty: 'Ingredients'
    },
    {
      name: 'Meowscarada',
      berry: 'Wiki Berry',
      ingredients: ['softpotato', 'moomoomilk', 'warmingginger'],
      mainSkill: 'Cooking Power-Up S',
      specialty: 'Ingredients'
    },
    {
      name: 'Fuecoco',
      berry: 'Leppa Berry',
      ingredients: ['fancyapple', 'beansausage', 'fieryherb'],
      mainSkill: 'Charge Energy S',
      specialty: 'Ingredients'
    },
    {
      name: 'Crocalor',
      berry: 'Leppa Berry',
      ingredients: ['fancyapple', 'beansausage', 'fieryherb'],
      mainSkill: 'Charge Energy S',
      specialty: 'Ingredients'
    },
    {
      name: 'Skeledirge',
      berry: 'Bluk Berry',
      ingredients: ['fancyapple', 'beansausage', 'fieryherb'],
      mainSkill: 'Charge Energy S',
      specialty: 'Ingredients'
    },
    {
      name: 'Quaxly',
      berry: 'Oran Berry',
      ingredients: ['greengrasssoybeans', 'largeleek', 'pureoil'],
      mainSkill: 'Charge Strength M',
      specialty: 'Ingredients'
    },
    {
      name: 'Quaxwell',
      berry: 'Oran Berry',
      ingredients: ['greengrasssoybeans', 'largeleek', 'pureoil'],
      mainSkill: 'Charge Strength M',
      specialty: 'Ingredients'
    },
    {
      name: 'Quaquaval',
      berry: 'Cheri Berry',
      ingredients: ['greengrasssoybeans', 'largeleek', 'pureoil'],
      mainSkill: 'Charge Strength M',
      specialty: 'Ingredients'
    }
  ];
  recipesList = [
    {
      id: 1,
      name: 'Mixed Curry',
      basePower: 0,
      image: '/sleep-visualizer/assets/images/MixedCurry.png',
      ingredients: {},
      totalIngredients: 0
    },
    {
      id: 2,
      name: 'Fancy Apple Curry',
      basePower: 668,
      image: '/sleep-visualizer/assets/images/FancyAppleCurry.png',
      ingredients: {
        fancyApple: 7
      },
      totalIngredients: 7
    },
    {
      id: 3,
      name: 'Grilled Tail Curry',
      basePower: 7483,
      image: '/sleep-visualizer/assets/images/GrilledTailCurry.png',
      ingredients: {
        slowpokeTail: 8,
        fieryHerb: 25
      },
      totalIngredients: 33
    },
    {
      id: 4,
      name: 'Solar Power Tomato Curry',
      basePower: 1943,
      image: '/sleep-visualizer/assets/images/SolarPowerTomatoCurry.png',
      ingredients: {
        snoozyTomato: 10,
        fieryHerb: 5
      },
      totalIngredients: 15
    },
    {
      id: 5,
      name: 'Dream Eater Butter Curry',
      basePower: 9010,
      image: '/sleep-visualizer/assets/images/DreamEaterButterCurry.png',
      ingredients: {
        softPotato: 18,
        snoozyTomato: 15,
        soothingCacao: 12,
        moomoomilk: 10
      },
      totalIngredients: 55
    },
    {
      id: 6,
      name: 'Spicy Leek Curry',
      basePower: 5900,
      image: '/sleep-visualizer/assets/images/SpicyLeekCurry.png',
      ingredients: {
        largeLeek: 14,
        warmingGinger: 10,
        fieryHerb: 8
      },
      totalIngredients: 32
    },
    {
      id: 7,
      name: 'Spore Mushroom Curry',
      basePower: 4041,
      image: '/sleep-visualizer/assets/images/SporeMushroomCurry.png',
      ingredients: {
        tastyMushroom: 14,
        softPotato: 9
      },
      totalIngredients: 23
    },
    {
      id: 8,
      name: 'Egg Bomb Curry',
      basePower: 4523,
      image: '/sleep-visualizer/assets/images/EggBombCurry.png',
      ingredients: {
        honey: 12,
        fancyApple: 11,
        fancyEgg: 8,
        softPotato: 4
      },
      totalIngredients: 35
    },
    {
      id: 9,
      name: 'Hearty Cheeseburger Curry',
      basePower: 1785,
      image: '/sleep-visualizer/assets/images/HeartyCheeseburgerCurry.png',
      ingredients: {
        moomooMilk: 8,
        beanSausage: 8
      },
      totalIngredients: 16
    },
    {
      id: 10,
      name: 'Soft Potato Chowder',
      basePower: 3089,
      image: '/sleep-visualizer/assets/images/SoftPotatoChowder.png',
      ingredients: {
        moomooMilk: 10,
        softPotato: 8,
        tastyMushroom: 4
      },
      totalIngredients: 22
    },
    {
      id: 11,
      name: 'Simple Chowder',
      basePower: 727,
      image: '/sleep-visualizer/assets/images/SimpleChowder.png',
      ingredients: {
        moomooMilk: 7
      },
      totalIngredients: 7
    },
    {
      id: 12,
      name: 'Beanburger Curry',
      basePower: 764,
      image: '/sleep-visualizer/assets/images/BeanburgerCurry.png',
      ingredients: {
        beanSausage: 7
      },
      totalIngredients: 7
    },
    {
      id: 13,
      name: 'Mild Honey Curry',
      basePower: 749,
      image: '/sleep-visualizer/assets/images/MildHoneyCurry.png',
      ingredients: {
        honey: 7
      },
      totalIngredients: 7
    },
    {
      id: 14,
      name: 'Ninja Curry',
      basePower: 9445,
      image: '/sleep-visualizer/assets/images/NinjaCurry.png',
      ingredients: {
        greengrassSoybeans: 24,
        beanSausage: 9,
        largeLeek: 12,
        tastyMushroom: 5
      },
      totalIngredients: 38
    },
    {
      id: 15,
      name: 'Drought Katsu Curry',
      basePower: 1815,
      image: '/sleep-visualizer/assets/images/DroughtKatsuCurry.png',
      ingredients: {
        beanSausage: 10,
        pureOil: 5
      },
      totalIngredients: 15
    },
    {
      id: 16,
      name: 'Melty Omelette Curry',
      basePower: 2009,
      image: '/sleep-visualizer/assets/images/MeltyOmeletteCurry.png',
      ingredients: {
        fancyEgg: 10,
        snoozyTomato: 6
      },
      totalIngredients: 16
    },
    {
      id: 17,
      name: 'Bulk Up Bean Curry',
      basePower: 3274,
      image: '/sleep-visualizer/assets/images/BulkUpBeanCurry.png',
      ingredients: {
        greengrassSoybeans: 12,
        beanSausage: 6,
        fieryHerb: 4,
        fancyEgg: 4
      },
      totalIngredients: 26
    },
    {
      id: 18,
      name: 'Limber Corn Stew',
      basePower: 4670,
      image: '/sleep-visualizer/assets/images/LimberCornStew.png',
      ingredients: {
        greengrassCorn: 14,
        moomooMilk: 8,
        softPotato: 8
      },
      totalIngredients: 30
    },
    {
      id: 19,
      name: 'Inferno Corn Keema Curry',
      basePower: 13690,
      image: '/sleep-visualizer/assets/images/InfernoCornKeemaCurry.png',
      ingredients: {
        fieryHerb: 27,
        beanSausage: 24,
        greengrassCorn: 14,
        warmingGinger: 12
      },
      totalIngredients: 77
    },
    {
      id: 20,
      name: 'Mixed Salad',
      basePower: 0,
      image: '/sleep-visualizer/assets/images/MixedSalad.png',
      ingredients: {},
      totalIngredients: 0
    },
    {
      id: 21,
      name: 'Slowpoke Tail Pepper Salad',
      basePower: 8169,
      image: '/sleep-visualizer/assets/images/SlowpokeTailPepperSalad.png',
      ingredients: {
        slowpokeTail: 10,
        fieryHerb: 10,
        pureOil: 15
      },
      totalIngredients: 35
    },
    {
      id: 22,
      name: 'Spore Mushroom Salad',
      basePower: 5859,
      image: '/sleep-visualizer/assets/images/SporeMushroomSalad.png',
      ingredients: {
        tastyMushroom: 17,
        snoozyTomato: 8,
        pureOil: 8
      },
      totalIngredients: 33
    },
    {
      id: 23,
      name: 'Snow Cloak Caesar Salad',
      basePower: 1774,
      image: '/sleep-visualizer/assets/images/SnowCloakCaesarSalad.png',
      ingredients: {
        moomooMilk: 10,
        beanSausage: 6
      },
      totalIngredients: 16
    },
    {
      id: 24,
      name: 'Gluttony Potato Salad',
      basePower: 5040,
      image: '/sleep-visualizer/assets/images/GluttonyPotatoSalad.png',
      ingredients: {
        softPotato: 14,
        fancyEgg: 9,
        beanSausage: 7,
        fancyApple: 6
      },
      totalIngredients: 36
    },
    {
      id: 25,
      name: 'Water Veil Tofu Salad',
      basePower: 3113,
      image: '/sleep-visualizer/assets/images/WaterVeilTofuSalad.png',
      ingredients: {
        greengrassSoybeans: 15,
        snoozyTomato: 6
      },
      totalIngredients: 16
    },
    {
      id: 26,
      name: 'Superpower Extreme Salad',
      basePower: 2958,
      image: '/sleep-visualizer/assets/images/SuperpowerExtremeSalad.png',
      ingredients: {
        beanSausage: 9,
        warmingGinger: 6,
        fancyEgg: 5,
        softPotato: 3
      },
      totalIngredients: 23
    },
    {
      id: 27,
      name: 'Bean Ham Salad',
      basePower: 873,
      image: '/sleep-visualizer/assets/images/BeanHamSalad.png',
      ingredients: {
        beanSausage: 8
      },
      totalIngredients: 8
    },
    {
      id: 28,
      name: 'Snoozy Tomato Salad',
      basePower: 933,
      image: '/sleep-visualizer/assets/images/SnoozyTomatoSalad.png',
      ingredients: {
        snoozyTomato: 8
      },
      totalIngredients: 8
    },
    {
      id: 29,
      name: 'Moomoo Caprese Salad',
      basePower: 2856,
      image: '/sleep-visualizer/assets/images/MoomooCapreseSalad.png',
      ingredients: {
        moomooMilk: 12,
        snoozyTomato: 6,
        pureOil: 5
      },
      totalIngredients: 23
    },
    {
      id: 30,
      name: 'Contrary Chocolate Meat Salad',
      basePower: 3558,
      image: '/sleep-visualizer/assets/images/ContraryChocolateMeatSalad.png',
      ingredients: {
        soothingCacao: 14,
        beanSausage: 9
      },
      totalIngredients: 23
    },
    {
      id: 31,
      name: 'Overheat Ginger Salad',
      basePower: 5225,
      image: '/sleep-visualizer/assets/images/OverheatGingerSalad.png',
      ingredients: {
        fieryHerb: 17,
        warmingGinger: 10,
        snoozyTomato: 8
      },
      totalIngredients: 35
    },
    {
      id: 32,
      name: 'Fancy Apple Salad',
      basePower: 763,
      image: '/sleep-visualizer/assets/images/FancyAppleSalad.png',
      ingredients: {
        fancyApple: 8
      },
      totalIngredients: 8
    },
    {
      id: 33,
      name: 'Immunity Leek Salad',
      basePower: 2658,
      image: '/sleep-visualizer/assets/images/ImmunityLeekSalad.png',
      ingredients: {
        largeLeek: 10,
        warmingGinger: 5
      },
      totalIngredients: 15
    },
    {
      id: 34,
      name: 'Dazzling Apple Cheese Salad',
      basePower: 2578,
      image: '/sleep-visualizer/assets/images/DazzlingAppleCheeseSalad.png',
      ingredients: {
        fancyApple: 15,
        moomooMilk: 5,
        pureOil: 3
      },
      totalIngredients: 23
    },
    {
      id: 35,
      name: 'Ninja Salad',
      basePower: 11659,
      image: '/sleep-visualizer/assets/images/NinjaSalad.png',
      ingredients: {
        largeLeek: 15,
        greengrassSoybeans: 19,
        tastyMushroom: 12,
        warmingGinger: 11
      },
      totalIngredients: 53
    },
    {
      id: 36,
      name: 'Heat Wave Tofu Salad',
      basePower: 1976,
      image: '/sleep-visualizer/assets/images/HeatWaveTofuSalad.png',
      ingredients: {
        greengrassSoybeans: 10,
        fieryHerb: 6
      },
      totalIngredients: 16
    },
    {
      id: 37,
      name: 'Greengrass Salad',
      basePower: 11393,
      image: '/sleep-visualizer/assets/images/GreengrassSalad.png',
      ingredients: {
        pureOil: 22,
        greengrassCorn: 17,
        snoozyTomato: 14,
        softPotato: 9
      },
      totalIngredients: 62
    },
    {
      id: 38,
      name: 'Calm Mind Fruit Salad',
      basePower: 7675,
      image: '/sleep-visualizer/assets/images/CalmMindFruitSalad.png',
      ingredients: {
        fancyApple: 21,
        honey: 16,
        greengrassCorn: 12
      },
      totalIngredients: 47
    },
    {
      id: 39,
      name: 'Fury Attack Corn Salad',
      basePower: 2785,
      image: '/sleep-visualizer/assets/images/FuryAttackCornSalad.png',
      ingredients: {
        greengrasscorn: 9,
        pureOil: 3
      },
      totalIngredients: 12
    },
    {
      id: 40,
      name: 'Mixed Juice',
      basePower: 0,
      image: '/sleep-visualizer/assets/images/MixedJuice.png',
      ingredients: {},
      totalIngredients: 0
    },
    {
      id: 41,
      name: 'Fluffy Sweet Potatoes',
      basePower: 1783,
      image: '/sleep-visualizer/assets/images/FluffySweetPotatoes.png',
      ingredients: {
        softPotato: 9,
        moomooMilk: 5
      },
      totalIngredients: 14
    },
    {
      id: 42,
      name: 'Steadfast Ginger Cookies',
      basePower: 4921,
      image: '/sleep-visualizer/assets/images/SteadfastGingerCookies.png',
      ingredients: {
        honey: 14,
        warmingGinger: 12,
        soothingCacao: 5,
        fancyEgg: 4
      },
      totalIngredients: 35
    },
    {
      id: 43,
      name: 'Fancy Apple Juice',
      basePower: 763,
      image: '/sleep-visualizer/assets/images/FancyAppleJuice.png',
      ingredients: {
        fancyApple: 8
      },
      totalIngredients: 8
    },
    {
      id: 44,
      name: 'Craft Soda Pop',
      basePower: 964,
      image: '/sleep-visualizer/assets/images/CraftSodaPop.png',
      ingredients: {
        honey: 9
      },
      totalIngredients: 9
    },
    {
      id: 45,
      name: 'Ember Ginger Tea',
      basePower: 1788,
      image: '/sleep-visualizer/assets/images/EmberGingerTea.png',
      ingredients: {
        warmingGinger: 9,
        fancyApple: 7
      },
      totalIngredients: 16
    },
    {
      id: 46,
      name: 'Jigglypuff\'s Fruity Flan',
      basePower: 7594,
      image: '/sleep-visualizer/assets/images/JigglypuffsFruityFlan.png',
      ingredients: {
        honey: 20,
        fancyEgg: 15,
        moomooMilk: 10,
        fancyApple: 10
      },
      totalIngredients: 55
    },
    {
      id: 47,
      name: 'Lovely Kiss Smoothie',
      basePower: 4734,
      image: '/sleep-visualizer/assets/images/LovelyKissSmoothie.png',
      ingredients: {
        fancyApple: 11,
        moomooMilk: 9,
        honey: 7,
        soothingCacao: 8
      },
      totalIngredients: 35
    },
    {
      id: 48,
      name: 'Lucky Chant Apple Pie',
      basePower: 1634,
      image: '/sleep-visualizer/assets/images/LuckyChantApplePie.png',
      ingredients: {
        fancyApple: 12,
        moomooMilk: 4
      },
      totalIngredients: 16
    },
    {
      id: 49,
      name: 'Neroli\'s Restorative Tea',
      basePower: 5065,
      image: '/sleep-visualizer/assets/images/NerolisRestorativeTea.png',
      ingredients: {
        warmingGinger: 11,
        fancyApple: 15,
        tastyMushroom: 9
      },
      totalIngredients: 35
    },
    {
      id: 50,
      name: 'Sweet Scent Chocolate Cake',
      basePower: 3280,
      image: '/sleep-visualizer/assets/images/SweetScentChocolateCake.png',
      ingredients: {
        honey: 9,
        soothingCacao: 8,
        moomooMilk: 7
      },
      totalIngredients: 24
    },
    {
      id: 51,
      name: 'Warm Moomoo Milk',
      basePower: 727,
      image: '/sleep-visualizer/assets/images/WarmMoomooMilk.png',
      ingredients: {
        moomooMilk: 7
      },
      totalIngredients: 7
    },
    {
      id: 52,
      name: 'Cloud Nine Soy Cake',
      basePower: 1798,
      image: '/sleep-visualizer/assets/images/CloudNineSoyCake.png',
      ingredients: {
        fancyEgg: 8,
        greengrassSoybeans: 7
      },
      totalIngredients: 15
    },
    {
      id: 53,
      name: 'Hustle Protein Smoothie',
      basePower: 3168,
      image: '/sleep-visualizer/assets/images/HustleProteinSmoothie.png',
      ingredients: {
        greengrassSoybeans: 15,
        soothingCacao: 8
      },
      totalIngredients: 22
    },
    {
      id: 54,
      name: 'Stalwart Vegetable Juice',
      basePower: 1798,
      image: '/sleep-visualizer/assets/images/StalwartVegetableJuice.png',
      ingredients: {
        snoozyTomato: 9,
        fancyApple: 7
      },
      totalIngredients: 16
    },
    {
      id: 55,
      name: 'Big Malasada',
      basePower: 2927,
      image: '/sleep-visualizer/assets/images/BigMalasada.png',
      ingredients: {
        pureOil: 10,
        moomooMilk: 7,
        honey: 6
      },
      totalIngredients: 23
    },
    {
      id: 56,
      name: 'Huge Power Soy Donuts',
      basePower: 5547,
      image: '/sleep-visualizer/assets/images/HugePowerSoyDonuts.png',
      ingredients: {
        pureOil: 12,
        greengrassSoybeans: 16,
        soothingCacao: 7
      },
      totalIngredients: 22
    },
    {
      id: 57,
      name: 'Explosion Popcorn',
      basePower: 6048,
      image: '/sleep-visualizer/assets/images/ExplosionPopcorn.png',
      ingredients: {
        greengrassCorn: 15,
        pureOil: 14,
        moomooMilk: 7
      },
      totalIngredients: 36
    },
    {
      id: 58,
      name: 'Teatime Corn Scones',
      basePower: 10925,
      image: '/sleep-visualizer/assets/images/TeatimeCornScones.png',
      ingredients: {
        fancyApple: 20,
        warmingGinger: 20,
        greengrassCorn: 18,
        moomooMilk: 9
      },
      totalIngredients: 67
    },
    {
      id: 59,
      name: 'Petal Dance Chocolate Tarts',
      basePower: 3314,
      image: '/sleep-visualizer/assets/images/PetalDanceChocolateTarts.png',
      ingredients: {
        fancyApple: 11,
        soothingCacao: 11
      },
      totalIngredients: 22
    },
    {
      id: 60,
      name: 'Flower Gift Macarons',
      basePower: 13834,
      image: '/sleep-visualizer/assets/images/FlowerGiftMacarons.png',
      ingredients: {
        soothingCacao: 25,
        fancyEgg: 25,
        honey: 17,
        moomooMilk: 10
      },
      totalIngredients: 77
    }
  ];
  ingredientCountsList = [
    {
      id: 1,
      name: 'Fancy Apple',
      basePower: 90,
      image: '/sleep-visualizer/assets/images/fancyapple.png',
      count: 0
    },
    {
      id: 2,
      name: 'Moomoo Milk',
      basePower: 98,
      image: '/sleep-visualizer/assets/images/moomoomilk.png',
      count: 0
    },
    {
      id: 3,
      name: 'Greengrass Soybeans',
      basePower: 100,
      image: '/sleep-visualizer/assets/images/greengrasssoybeans.png',
      count: 0
    },
    {
      id: 4,
      name: 'Honey',
      basePower: 101,
      image: '/sleep-visualizer/assets/images/honey.png',
      count: 0
    },
    {
      id: 5,
      name: 'Bean Sausage',
      basePower: 103,
      image: '/sleep-visualizer/assets/images/beansausage.png',
      count: 0
    },
    {
      id: 6,
      name: 'Warming Ginger',
      basePower: 109,
      image: '/sleep-visualizer/assets/images/warmingginger.png',
      count: 0
    },
    {
      id: 7,
      name: 'Snoozy Tomato',
      basePower: 110,
      image: '/sleep-visualizer/assets/images/snoozytomato.png',
      count: 0
    },
    {
      id: 8,
      name: 'Fancy Egg',
      basePower: 115,
      image: '/sleep-visualizer/assets/images/fancyegg.png',
      count: 0
    },
    {
      id: 9,
      name: 'Pure Oil',
      basePower: 121,
      image: '/sleep-visualizer/assets/images/pureoil.png',
      count: 0
    },
    {
      id: 10,
      name: 'Soft Potato',
      basePower: 124,
      image: '/sleep-visualizer/assets/images/softpotato.png',
      count: 0
    },
    {
      id: 11,
      name: 'Fiery Herb',
      basePower: 130,
      image: '/sleep-visualizer/assets/images/fieryherb.png',
      count: 0
    },
    {
      id: 12,
      name: 'Greengrass Corn',
      basePower: 140,
      image: '/sleep-visualizer/assets/images/greengrasscorn.png',
      count: 0
    },
    {
      id: 13,
      name: 'Soothing Cacao',
      basePower: 151,
      image: '/sleep-visualizer/assets/images/soothingcacao.png',
      count: 0
    },
    {
      id: 14,
      name: 'TastyMushroom',
      basePower: 167,
      image: '/sleep-visualizer/assets/images/tastymushroom.png',
      count: 0
    },
    {
      id: 15,
      name: 'Large Leek',
      basePower: 185,
      image: '/sleep-visualizer/assets/images/largeleek.png',
      count: 0
    },
    {
      id: 16,
      name: 'Slowpoke Tail',
      basePower: 342,
      image: '/sleep-visualizer/assets/images/slowpoketail.png',
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
    2.48, 2.53, 2.59, 2.65, 2.71,
    2.77, 2.83, 2.9, 2.97, 3.03
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
