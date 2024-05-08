import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  constructor() { }

  allBerries: Array<string> = ['Berries.Belue', 'Berries.Bluk', 'Berries.Cheri', 'Berries.Chesto',
                              'Berries.Durin', 'Berries.Figy', 'Berries.Grepa', 'Berries.Leppa',
                              'Berries.Lum', 'Berries.Mago', 'Berries.Oran', 'Berries.Pamtre',
                              'Berries.Pecha', 'Berries.Persim', 'Berries.Rawst', 'Berries.Sitrus',
                              'Berries.Wiki', 'Berries.Yache'];
  allIngredients: Array<string> = ['fancyapple', 'moomoomilk', 'greengrasssoybeans',
                                  'honey', 'beansausage', 'warmingginger', 'snoozytomato',
                                  'fancyegg', 'pureoil', 'softpotato', 'fieryherb',
                                  'greengrasscorn', 'soothingcacao', 'tastymushroom',
                                  'largeleek', 'slowpoketail'];
  allSkills: Array<string> = ['Skills.ChargeStrengthS', 'Skills.ChargeStrengthM', 'Skills.DreamShardMagnetSVar',
                              'Skills.EnergizingCheerS', 'Skills.ChargeStrengthSVar', 'Skills.DreamShardMagnetS',
                              'Skills.ChargeEnergyS', 'Skills.EnergyForEveryoneS', 'Skills.ExtraHelpfulS',
                              'Skills.IngredientMagnetS', 'Skills.CookingPowerUpS', 'Skills.Metronome',
                              'Skills.TastyChanceS', 'Skills.HelperBoost'];
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
      berry: 'Berries.Durin',
      ingredients: ['honey', 'snoozytomato', 'softpotato'],
      mainSkill: 'Skills.IngredientMagnetS',
      specialty: 'Ingredients'
    },
    {
      name: 'Ivysaur',
      berry: 'Berries.Durin',
      ingredients: ['honey', 'snoozytomato', 'softpotato'],
      mainSkill: 'Skills.IngredientMagnetS',
      specialty: 'Ingredients'
    },
    {
      name: 'Venusaur',
      berry: 'Berries.Durin',
      ingredients: ['honey', 'snoozytomato', 'softpotato'],
      mainSkill: 'Skills.IngredientMagnetS',
      specialty: 'Ingredients'
    },
    {
      name: 'Charmander',
      berry: 'Berries.Leppa',
      ingredients: ['beansausage', 'warmingginger', 'fieryherb'],
      mainSkill: 'Skills.IngredientMagnetS',
      specialty: 'Ingredients'
    },
    {
      name: 'Charmeleon',
      berry: 'Berries.Leppa',
      ingredients: ['beansausage', 'warmingginger', 'fieryherb'],
      mainSkill: 'Skills.IngredientMagnetS',
      specialty: 'Ingredients'
    },
    {
      name: 'Charizard',
      berry: 'Berries.Leppa',
      ingredients: ['beansausage', 'warmingginger', 'fieryherb'],
      mainSkill: 'Skills.IngredientMagnetS',
      specialty: 'Ingredients'
    },
    {
      name: 'Squirtle',
      berry: 'Berries.Oran',
      ingredients: ['moomoomilk', 'soothingcacao', 'beansausage'],
      mainSkill: 'Skills.IngredientMagnetS',
      specialty: 'Ingredients'
    },
    {
      name: 'Wartortle',
      berry: 'Berries.Oran',
      ingredients: ['moomoomilk', 'soothingcacao', 'beansausage'],
      mainSkill: 'Skills.IngredientMagnetS',
      specialty: 'Ingredients'
    },
    {
      name: 'Blastoise',
      berry: 'Berries.Oran',
      ingredients: ['moomoomilk', 'soothingcacao', 'beansausage'],
      mainSkill: 'Skills.IngredientMagnetS',
      specialty: 'Ingredients'
    },
    {
      name: 'Caterpie',
      berry: 'Berries.Lum',
      ingredients: ['honey', 'snoozytomato', 'greengrasssoybeans'],
      mainSkill: 'Skills.IngredientMagnetS',
      specialty: 'Berries'
    },
    {
      name: 'Metapod',
      berry: 'Berries.Lum',
      ingredients: ['honey', 'snoozytomato', 'greengrasssoybeans'],
      mainSkill: 'Skills.IngredientMagnetS',
      specialty: 'Berries'
    },
    {
      name: 'Butterfree',
      berry: 'Berries.Lum',
      ingredients: ['honey', 'snoozytomato', 'greengrasssoybeans'],
      mainSkill: 'Skills.IngredientMagnetS',
      specialty: 'Berries'
    },
    {
      name: 'Rattata',
      berry: 'Berries.Persim',
      ingredients: ['fancyapple', 'snoozytomato', 'greengrasssoybeans'],
      mainSkill: 'Skills.ChargeEnergyS',
      specialty: 'Berries'
    },
    {
      name: 'Raticate',
      berry: 'Berries.Persim',
      ingredients: ['fancyapple', 'snoozytomato', 'greengrasssoybeans'],
      mainSkill: 'Skills.ChargeEnergyS',
      specialty: 'Berries'
    },
    {
      name: 'Ekans',
      berry: 'Berries.Chesto',
      ingredients: ['beansausage', 'fancyegg', 'fieryherb'],
      mainSkill: 'Skills.ChargeEnergyS',
      specialty: 'Berries'
    },
    {
      name: 'Arbok',
      berry: 'Berries.Chesto',
      ingredients: ['beansausage', 'fancyegg', 'fieryherb'],
      mainSkill: 'Skills.ChargeEnergyS',
      specialty: 'Berries'
    },
    {
      name: 'Pikachu',
      berry: 'Berries.Grepa',
      ingredients: ['fancyapple', 'warmingginger', 'fancyegg'],
      mainSkill: 'Skills.ChargeStrengthS',
      specialty: 'Berries'
    },
    {
      name: 'Raichu',
      berry: 'Berries.Grepa',
      ingredients: ['fancyapple', 'warmingginger', 'fancyegg'],
      mainSkill: 'Skills.ChargeStrengthS',
      specialty: 'Berries'
    },
    {
      name: 'Clefairy',
      berry: 'Berries.Pecha',
      ingredients: ['fancyapple', 'honey', 'greegrasssoybeans'],
      mainSkill: 'Skills.Metronome',
      specialty: 'Berries'
    },
    {
      name: 'Clefable',
      berry: 'Berries.Pecha',
      ingredients: ['fancyapple', 'honey', 'greegrasssoybeans'],
      mainSkill: 'Skills.Metronome',
      specialty: 'Berries'
    },
    {
      name: 'Vulpix',
      berry: 'Berries.Leppa',
      ingredients: ['greengrasssoybeans', 'greengrasscorn', 'softpotato'],
      mainSkill: 'Skills.EnergizingCheerS',
      specialty: 'Berries'
    },
    {
      name: 'Ninetales',
      berry: 'Berries.Leppa',
      ingredients: ['greengrasssoybeans', 'greengrasscorn', 'softpotato'],
      mainSkill: 'Skills.EnergizingCheerS',
      specialty: 'Berries'
    },
    {
      name: 'Jigglypuff',
      berry: 'Berries.Pecha',
      ingredients: ['honey', 'pureoil', 'soothingcacao'],
      mainSkill: 'Skills.EnergyForEveryoneS',
      specialty: 'Skills'
    },{
      name: 'Wigglytuff',
      berry: 'Berries.Pecha',
      ingredients: ['honey', 'pureoil', 'soothingcacao'],
      mainSkill: 'Skills.EnergyForEveryoneS',
      specialty: 'Skills'
    },
    {
      name: 'Diglett',
      berry: 'Berries.Figy',
      ingredients: ['snoozytomato', 'largeleek', 'greengrasssoybeans'],
      mainSkill: 'Skills.ChargeStrengthS',
      specialty: 'Ingredients'
    },
    {
      name: 'Dugtrio',
      berry: 'Berries.Figy',
      ingredients: ['snoozytomato', 'largeleek', 'greengrasssoybeans'],
      mainSkill: 'Skills.ChargeStrengthS',
      specialty: 'Ingredients'
    },
    {
      name: 'Meowth',
      berry: 'Berries.Persim',
      ingredients: ['moomoomilk', 'beansausage'],
      mainSkill: 'Skills.DreamShardMagnetS',
      specialty: 'Skills'
    },
    {
      name: 'Persian',
      berry: 'Berries.Persim',
      ingredients: ['moomoomilk', 'beansausage'],
      mainSkill: 'Skills.DreamShardMagnetS',
      specialty: 'Skills'
    },
    {
      name: 'Psyduck',
      berry: 'Berries.Oran',
      ingredients: ['soothingcacao', 'fancyapple', 'beansausage'],
      mainSkill: 'Skills.ChargeStrengthSVar',
      specialty: 'Skills'
    },
    {
      name: 'Golduck',
      berry: 'Berries.Oran',
      ingredients: ['soothingcacao', 'fancyapple', 'beansausage'],
      mainSkill: 'Skills.ChargeStrengthSVar',
      specialty: 'Skills'
    },
    {
      name: 'Mankey',
      berry: 'Berries.Cheri',
      ingredients: ['beansausage', 'tastymushrooms', 'honey'],
      mainSkill: 'Skills.ChargeStrengthSVar',
      specialty: 'Berries'
    },
    {
      name: 'Primeape',
      berry: 'Berries.Cheri',
      ingredients: ['beansausage', 'tastymushrooms', 'honey'],
      mainSkill: 'Skills.ChargeStrengthSVar',
      specialty: 'Berries'
    },
    {
      name: 'Growlithe',
      berry: 'Berries.Leppa',
      ingredients: ['fieryherb', 'beansausage', 'moomoomilk'],
      mainSkill: 'Skills.ExtraHelpfulS',
      specialty: 'Skills'
    },
    {
      name: 'Arcanine',
      berry: 'Berries.Leppa',
      ingredients: ['fieryherb', 'beansausage', 'moomoomilk'],
      mainSkill: 'Skills.ExtraHelpfulS',
      specialty: 'Skills'
    },
    {
      name: 'Bellsprout',
      berry: 'Berries.Durin',
      ingredients: ['snoozytomato', 'softpotato', 'largeleek'],
      mainSkill: 'Skills.ChargeEnergyS',
      specialty: 'Ingredients'
    },
    {
      name: 'Weepinbell',
      berry: 'Berries.Durin',
      ingredients: ['snoozytomato', 'softpotato', 'largeleek'],
      mainSkill: 'Skills.ChargeEnergyS',
      specialty: 'Ingredients'
    },
    {
      name: 'Victreebel',
      berry: 'Berries.Durin',
      ingredients: ['snoozytomato', 'softpotato', 'largeleek'],
      mainSkill: 'Skills.ChargeEnergyS',
      specialty: 'Ingredients'
    },
    {
      name: 'Geodude',
      berry: 'Berries.Sitrus',
      ingredients: ['greengrasssoybeans', 'softpotato', 'tastymushrooms'],
      mainSkill: 'Skills.ChargeStrengthSVar',
      specialty: 'Ingredients'
    },
    {
      name: 'Graveler',
      berry: 'Berries.Sitrus',
      ingredients: ['greengrasssoybeans', 'softpotato', 'tastymushrooms'],
      mainSkill: 'Skills.ChargeStrengthSVar',
      specialty: 'Ingredients'
    },
    {
      name: 'Golem',
      berry: 'Berries.Sitrus',
      ingredients: ['greengrasssoybeans', 'softpotato', 'tastymushrooms'],
      mainSkill: 'Skills.ChargeStrengthSVar',
      specialty: 'Ingredients'
    },
    {
      name: 'Slowpoke',
      berry: 'Berries.Oran',
      ingredients: ['soothingcacao', 'slowpoketail', 'snoozytomato'],
      mainSkill: 'Skills.EnergizingCheerS',
      specialty: 'Skills'
    },
    {
      name: 'Slowbro',
      berry: 'Berries.Oran',
      ingredients: ['soothingcacao', 'slowpoketail', 'snoozytomato'],
      mainSkill: 'Skills.EnergizingCheerS',
      specialty: 'Skills'
    },
    {
      name: 'Slowking',
      berry: 'Berries.Oran',
      ingredients: ['soothingcacao', 'slowpoketail', 'snoozytomato'],
      mainSkill: 'Skills.EnergizingCheerS',
      specialty: 'Skills'
    },
    {
      name: 'Magnemite',
      berry: 'Berries.Belue',
      ingredients: ['pureoil', 'fieryherb'],
      mainSkill: 'Skills.CookingPowerUpS',
      specialty: 'Skills'
    },
    {
      name: 'Magneton',
      berry: 'Berries.Belue',
      ingredients: ['pureoil', 'fieryherb'],
      mainSkill: 'Skills.CookingPowerUpS',
      specialty: 'Skills'
    },
    {
      name: 'Doduo',
      berry: 'Berries.Pamtre',
      ingredients: ['greengrasssoybeans', 'soothingcacao', 'beansausage'],
      mainSkill: 'Skills.IngredientMagnetS',
      specialty: 'Berries'
    },
    {
      name: 'Dodrio',
      berry: 'Berries.Pamtre',
      ingredients: ['greengrasssoybeans', 'soothingcacao', 'beansausage'],
      mainSkill: 'Skills.IngredientMagnetS',
      specialty: 'Berries'
    },
    {
      name: 'Gastly',
      berry: 'Berries.Bluk',
      ingredients: ['fieryherb', 'tastymushrooms', 'pureoil'],
      mainSkill: 'Skills.ChargeStrengthS',
      specialty: 'Ingredients'
    },
    {
      name: 'Haunter',
      berry: 'Berries.Bluk',
      ingredients: ['fieryherb', 'tastymushrooms', 'pureoil'],
      mainSkill: 'Skills.ChargeStrengthS',
      specialty: 'Ingredients'
    },
    {
      name: 'Gengar',
      berry: 'Berries.Bluk',
      ingredients: ['fieryherb', 'tastymushrooms', 'pureoil'],
      mainSkill: 'Skills.ChargeStrengthS',
      specialty: 'Ingredients'
    },
    {
      name: 'Onix',
      berry: 'Berries.Sitrus',
      ingredients: ['snoozytomato', 'beansausage', 'softpotato'],
      mainSkill: 'Skills.IngredientMagnetS',
      specialty: 'Berries'
    },
    {
      name: 'Cubone',
      berry: 'Berries.Figy',
      ingredients: ['warmingginger', 'soothingcacao'],
      mainSkill: 'Skills.ChargeEnergyS',
      specialty: 'Berries'
    },
    {
      name: 'Marowak',
      berry: 'Berries.Figy',
      ingredients: ['warmingginger', 'soothingcacao'],
      mainSkill: 'Skills.ChargeEnergyS',
      specialty: 'Berries'
    },
    {
      name: 'Kangaskhan',
      berry: 'Berries.Persim',
      ingredients: ['warmingginger', 'softpotato', 'greengrasssoybeans'],
      mainSkill: 'Skills.IngredientMagnetS',
      specialty: 'Ingredients'
    },
    {
      name: 'Mr. Mime',
      berry: 'Berries.Mago',
      ingredients: ['snoozytomato', 'softpotato', 'largeleek'],
      mainSkill: 'Skills.ChargeStrengthS',
      specialty: 'Ingredients'
    },
    {
      name: 'Pinsir',
      berry: 'Berries.Lum',
      ingredients: ['honey', 'fancyapple', 'beansausage'],
      mainSkill: 'Skills.ChargeStrengthS',
      specialty: 'Ingredients'
    },
    {
      name: 'Ditto',
      berry: 'Berries.Persim',
      ingredients: ['pureoil', 'largeleek', 'slowpoketail'],
      mainSkill: 'Skills.ChargeStrengthS',
      specialty: 'Ingredients'
    },
    {
      name: 'Eevee',
      berry: 'Berries.Persim',
      ingredients: ['moomoomilk', 'soothingcacao', 'beansausage'],
      mainSkill: 'Skills.IngredientMagnetS',
      specialty: 'Skills'
    },
    {
      name: 'Vaporeon',
      berry: 'Berries.Oran',
      ingredients: ['moomoomilk', 'soothingcacao', 'beansausage'],
      mainSkill: 'Skills.IngredientMagnetS',
      specialty: 'Skills'
    },
    {
      name: 'Jolteon',
      berry: 'Berries.Grepa',
      ingredients: ['moomoomilk', 'soothingcacao', 'beansausage'],
      mainSkill: 'Skills.ExtraHelpfulS',
      specialty: 'Skills'
    },
    {
      name: 'Flareon',
      berry: 'Berries.Leppa',
      ingredients: ['moomoomilk', 'soothingcacao', 'beansausage'],
      mainSkill: 'Skills.CookingPowerUpS',
      specialty: 'Skills'
    },
    {
      name: 'Dratini',
      berry: 'Berries.Yache',
      ingredients: ['fieryherb', 'greengrasscorn', 'pureoil'],
      mainSkill: 'Skills.ChargeEnergyS',
      specialty: 'Ingredients'
    },
    {
      name: 'Dragonair',
      berry: 'Berries.Yache',
      ingredients: ['fieryherb', 'greengrasscorn', 'pureoil'],
      mainSkill: 'Skills.ChargeEnergyS',
      specialty: 'Ingredients'
    },
    {
      name: 'Dragonite',
      berry: 'Berries.Yache',
      ingredients: ['fieryherb', 'greengrasscorn', 'pureoil'],
      mainSkill: 'Skills.ChargeEnergyS',
      specialty: 'Ingredients'
    },
    {
      name: 'Chikorita',
      berry: 'Berries.Durin',
      ingredients: ['soothingcacao', 'honey', 'largeleek'],
      mainSkill: 'Skills.ChargeStrengthSVar',
      specialty: 'Berries'
    },
    {
      name: 'Bayleef',
      berry: 'Berries.Durin',
      ingredients: ['soothingcacao', 'honey', 'largeleek'],
      mainSkill: 'Skills.ChargeStrengthSVar',
      specialty: 'Berries'
    },
    {
      name: 'Meganium',
      berry: 'Berries.Durin',
      ingredients: ['soothingcacao', 'honey', 'largeleek'],
      mainSkill: 'Skills.ChargeStrengthSVar',
      specialty: 'Berries'
    },
    {
      name: 'Cyndaquil',
      berry: 'Berries.Leppa',
      ingredients: ['warmingginger', 'fieryherb', 'pureoil'],
      mainSkill: 'Skills.ChargeStrengthSVar',
      specialty: 'Berries'
    },
    {
      name: 'Quilava',
      berry: 'Berries.Leppa',
      ingredients: ['warmingginger', 'fieryherb', 'pureoil'],
      mainSkill: 'Skills.ChargeStrengthSVar',
      specialty: 'Berries'
    },
    {
      name: 'Typhlosion',
      berry: 'Berries.Leppa',
      ingredients: ['warmingginger', 'fieryherb', 'pureoil'],
      mainSkill: 'Skills.ChargeStrengthSVar',
      specialty: 'Berries'
    },
    {
      name: 'Totodile',
      berry: 'Berries.Oran',
      ingredients: ['beansausage', 'pureoil'],
      mainSkill: 'Skills.ChargeStrengthSVar',
      specialty: 'Berries'
    },
    {
      name: 'Croconaw',
      berry: 'Berries.Oran',
      ingredients: ['beansausage', 'pureoil'],
      mainSkill: 'Skills.ChargeStrengthSVar',
      specialty: 'Berries'
    },
    {
      name: 'Feraligatr',
      berry: 'Berries.Oran',
      ingredients: ['beansausage', 'pureoil'],
      mainSkill: 'Skills.ChargeStrengthSVar',
      specialty: 'Berries'
    },
    {
      name: 'Pichu',
      berry: 'Berries.Grepa',
      ingredients: ['fancyapple', 'warmingginger', 'fancyegg'],
      mainSkill: 'Skills.ChargeStrengthS',
      specialty: 'Berries'
    },
    {
      name: 'Cleffa',
      berry: 'Berries.Pecha',
      ingredients: ['fancyapple', 'honey', 'greegrasssoybeans'],
      mainSkill: 'Skills.Metronome',
      specialty: 'Berries'
    },
    {
      name: 'Igglybuff',
      berry: 'Berries.Pecha',
      ingredients: ['honey', 'pureoil', 'soothingcacao'],
      mainSkill: 'Skills.EnergyForEveryoneS',
      specialty: 'Skills'
    },
    {
      name: 'Togepi',
      berry: 'Berries.Pecha',
      ingredients: ['fancyegg', 'warmingginger', 'soothingcacao'],
      mainSkill: 'Skills.Metronome',
      specialty: 'Skills'
    },
    {
      name: 'Togetic',
      berry: 'Berries.Pecha',
      ingredients: ['fancyegg', 'warmingginger', 'soothingcacao'],
      mainSkill: 'Skills.Metronome',
      specialty: 'Skills'
    },
    {
      name: 'Mareep',
      berry: 'Berries.Grepa',
      ingredients: ['fieryherb', 'fancyegg'],
      mainSkill: 'Skills.ChargeStrengthM',
      specialty: 'Skills'
    },
    {
      name: 'Flaaffy',
      berry: 'Berries.Grepa',
      ingredients: ['fieryherb', 'fancyegg'],
      mainSkill: 'Skills.ChargeStrengthM',
      specialty: 'Skills'
    },
    {
      name: 'Ampharos',
      berry: 'Berries.Grepa',
      ingredients: ['fieryherb', 'fancyegg'],
      mainSkill: 'Skills.ChargeStrengthM',
      specialty: 'Skills'
    },
    {
      name: 'Sudowoodo',
      berry: 'Berries.Sitrus',
      ingredients: ['snoozytomato', 'greengrasssoybeans', 'tastymushrooms'],
      mainSkill: 'Skills.ChargeStrengthM',
      specialty: 'Skills'
    },
    {
      name: 'Espeon',
      berry: 'Berries.Mago',
      ingredients: ['moomoomilk', 'soothingcacao', 'beansausage'],
      mainSkill: 'Skills.ChargeStrengthM',
      specialty: 'Skills'
    },
    {
      name: 'Umbreon',
      berry: 'Berries.Wiki',
      ingredients: ['moomoomilk', 'soothingcacao', 'beansausage'],
      mainSkill: 'Skills.ChargeEnergyS',
      specialty: 'Skills'
    },
    {
      name: 'Wobbuffet',
      berry: 'Berries.Mago',
      ingredients: ['fancyapple', 'tastymushrooms', 'pureoil'],
      mainSkill: 'Skills.EnergizingCheerS',
      specialty: 'Skills'
    },
    {
      name: 'Steelix',
      berry: 'Berries.Belue',
      ingredients: ['snoozytomato', 'beansausage', 'softpotato'],
      mainSkill: 'Skills.IngredientMagnetS',
      specialty: 'Berries'
    },
    {
      name: 'Heracross',
      berry: 'Berries.Lum',
      ingredients: ['honey', 'tastymushrooms', 'beansausage'],
      mainSkill: 'Skills.IngredientMagnetS',
      specialty: 'Skills'
    },
    {
      name: 'Delibird',
      berry: 'Berries.Pamtre',
      ingredients: ['fancyegg', 'fancyapple', 'soothingcacao'],
      mainSkill: 'Skills.IngredientMagnetS',
      specialty: 'Ingredients'
    },
    {
      name: 'Houndour',
      berry: 'Berries.Wiki',
      ingredients: ['fieryherb', 'warmingginger', 'largeleek'],
      mainSkill: 'Skills.ChargeStrengthS',
      specialty: 'Ingredients'
    },
    {
      name: 'Houndoom',
      berry: 'Berries.Wiki',
      ingredients: ['fieryherb', 'warmingginger', 'largeleek'],
      mainSkill: 'Skills.ChargeStrengthS',
      specialty: 'Berries'
    },
    {
      name: 'Raikou',
      berry: 'Berries.Grepa',
      ingredients: ['beansausage', 'fieryherb', 'largeleek'],
      mainSkill: 'Skills.HelperBoost',
      specialty: 'Skills'
    },
    {
      name: 'Larvitar',
      berry: 'Berries.Sitrus',
      ingredients: ['warmingginger', 'greengrasssoybeans', 'beansausage'],
      mainSkill: 'Skills.ChargeEnergyS',
      specialty: 'Berries'
    },
    {
      name: 'Pupitar',
      berry: 'Berries.Sitrus',
      ingredients: ['warmingginger', 'greengrasssoybeans', 'beansausage'],
      mainSkill: 'Skills.ChargeEnergyS',
      specialty: 'Ingredients'
    },
    {
      name: 'Tyranitar',
      berry: 'Berries.Wiki',
      ingredients: ['warmingginger', 'greengrasssoybeans', 'beansausage'],
      mainSkill: 'Skills.ChargeEnergyS',
      specialty: 'Ingredients'
    },
    {
      name: 'Ralts',
      berry: 'Berries.Mago',
      ingredients: ['fancyapple', 'greengrasscorn', 'largeleek'],
      mainSkill: 'Skills.EnergyForEveryoneS',
      specialty: 'Skills'
    },
    {
      name: 'Kirlia',
      berry: 'Berries.Mago',
      ingredients: ['fancyapple', 'greengrasscorn', 'largeleek'],
      mainSkill: 'Skills.EnergyForEveryoneS',
      specialty: 'Skills'
    },
    {
      name: 'Gardevoir',
      berry: 'Berries.Mago',
      ingredients: ['fancyapple', 'greengrasscorn', 'largeleek'],
      mainSkill: 'Skills.EnergyForEveryoneS',
      specialty: 'Skills'
    },
    {
      name: 'Slakoth',
      berry: 'Berries.Persim',
      ingredients: ['snoozytomato', 'honey', 'fancyapple'],
      mainSkill: 'Skills.IngredientMagnetS',
      specialty: 'Berries'
    },
    {
      name: 'Vigoroth',
      berry: 'Berries.Persim',
      ingredients: ['snoozytomato', 'honey', 'fancyapple'],
      mainSkill: 'Skills.IngredientMagnetS',
      specialty: 'Berries'
    },
    {
      name: 'Slaking',
      berry: 'Berries.Persim',
      ingredients: ['snoozytomato', 'honey', 'fancyapple'],
      mainSkill: 'Skills.IngredientMagnetS',
      specialty: 'Berries'
    },
    {
      name: 'Sableye',
      berry: 'Berries.Wiki',
      ingredients: ['pureoil', 'tastymushrooms'],
      mainSkill: 'Skills.DreamShardMagnetSVar',
      specialty: 'Skills'
    },
    {
      name: 'Gulpin',
      berry: 'Berries.Chesto',
      ingredients: ['greengrasssoybeans', 'tastymushrooms'],
      mainSkill: 'Skills.DreamShardMagnetSVar',
      specialty: 'Skills'
    },
    {
      name: 'Swalot',
      berry: 'Berries.Chesto',
      ingredients: ['greengrasssoybeans', 'tastymushrooms'],
      mainSkill: 'Skills.DreamShardMagnetSVar',
      specialty: 'Skills'
    },
    {
      name: 'Swablu',
      berry: 'Berries.Pamtre',
      ingredients: ['fancyegg', 'greengrasssoybeans', 'fancyapple'],
      mainSkill: 'Skills.ChargeEnergyS',
      specialty: 'Berries'
    },
    {
      name: 'Altaria',
      berry: 'Berries.Yache',
      ingredients: ['fancyegg', 'greengrasssoybeans', 'fancyapple'],
      mainSkill: 'Skills.ChargeEnergyS',
      specialty: 'Berries'
    },
    {
      name: 'Shuppet',
      berry: 'Berries.Bluk',
      ingredients: ['pureoil', 'warmingginger', 'tastymushroom'],
      mainSkill: 'Skills.ChargeStrengthS',
      specialty: 'Berries'
    },
    {
      name: 'Banette',
      berry: 'Berries.Bluk',
      ingredients: ['pureoil', 'warmingginger', 'tastymushroom'],
      mainSkill: 'Skills.ChargeStrengthS',
      specialty: 'Berries'
    },
    {
      name: 'Absol',
      berry: 'Berries.Wiki',
      ingredients: ['soothingcacao', 'fancyapple', 'tastymushroom'],
      mainSkill: 'Skills.ChargeStrengthS',
      specialty: 'Ingredients'
    },
    {
      name: 'Wynaut',
      berry: 'Berries.Mago',
      ingredients: ['fancyapple', 'tastymushrooms', 'pureoil'],
      mainSkill: 'Skills.EnergizingCheerS',
      specialty: 'Skills'
    },
    {
      name: 'Spheal',
      berry: 'Berries.Rawst',
      ingredients: ['pureoil', 'beansausage', 'warmingginger'],
      mainSkill: 'Skills.IngredientMagnetS',
      specialty: 'Berries'
    },
    {
      name: 'Sealeo',
      berry: 'Berries.Rawst',
      ingredients: ['pureoil', 'beansausage', 'warmingginger'],
      mainSkill: 'Skills.IngredientMagnetS',
      specialty: 'Berries'
    },
    {
      name: 'Walrein',
      berry: 'Berries.Rawst',
      ingredients: ['pureoil', 'beansausage', 'warmingginger'],
      mainSkill: 'Skills.IngredientMagnetS',
      specialty: 'Berries'
    },
    {
      name: 'Bonsly',
      berry: 'Berries.Sitrus',
      ingredients: ['snoozytomato', 'greengrasssoybeans', 'tastymushrooms'],
      mainSkill: 'Skills.ChargeStrengthM',
      specialty: 'Skills'
    },
    {
      name: 'Mime Jr.',
      berry: 'Berries.Mago',
      ingredients: ['snoozytomato', 'softpotato', 'largeleek'],
      mainSkill: 'Skills.ChargeStrengthS',
      specialty: 'Ingredients'
    },
    {
      name: 'Riolu',
      berry: 'Berries.Cheri',
      ingredients: ['pureoil', 'softpotato', 'fancyegg'],
      mainSkill: 'Skills.DreamShardMagnetS',
      specialty: 'Skills'
    },
    {
      name: 'Lucario',
      berry: 'Berries.Cheri',
      ingredients: ['pureoil', 'softpotato', 'fancyegg'],
      mainSkill: 'Skills.DreamShardMagnetS',
      specialty: 'Skills'
    },
    {
      name: 'Croagunk',
      berry: 'Berries.Chesto',
      ingredients: ['pureoil', 'beansausage'],
      mainSkill: 'Skills.ChargeStrengthS',
      specialty: 'Ingredients'
    },
    {
      name: 'Toxicroak',
      berry: 'Berries.Chesto',
      ingredients: ['pureoil', 'beansausage'],
      mainSkill: 'Skills.ChargeStrengthS',
      specialty: 'Ingredients'
    },
    {
      name: 'Magnezone',
      berry: 'Berries.Belue',
      ingredients: ['pureoil', 'fieryherb'],
      mainSkill: 'Skills.CookingPowerUpS',
      specialty: 'Skills'
    },
    {
      name: 'Togekiss',
      berry: 'Berries.Pecha',
      ingredients: ['fancyegg', 'warmingginger', 'soothingcacao'],
      mainSkill: 'Skills.Metronome',
      specialty: 'Skills'
    },
    {
      name: 'Leafeon',
      berry: 'Berries.Durin',
      ingredients: ['moomoomilk', 'soothingcacao', 'beansausage'],
      mainSkill: 'Skills.EnergizingCheerS',
      specialty: 'Skills'
    },
    {
      name: 'Glaceon',
      berry: 'Berries.Rawst',
      ingredients: ['moomoomilk', 'soothingcacao', 'beansausage'],
      mainSkill: 'Skills.CookingPowerUpS',
      specialty: 'Skills'
    },
    {
      name: 'Gallade',
      berry: 'Berries.Cherry',
      ingredients: ['fancyapple', 'greengrasscorn', 'largeleek'],
      mainSkill: 'Skills.ExtraHelpfulS',
      specialty: 'Skills'
    },
    {
      name: 'Sylveon',
      berry: 'Berries.Pecha',
      ingredients: ['moomoomilk', 'soothingcacao', 'beansausage'],
      mainSkill: 'Skills.EnergyForEveryoneS',
      specialty: 'Skills'
    },
    {
      name: 'Dedenne',
      berry: 'Berries.Grepa',
      ingredients: ['fancyapple', 'soothingcacao', 'greengrasscorn'],
      mainSkill: 'Skills.TastyChanceS',
      specialty: 'Skills'
    },
    {
      name: 'Stufful',
      berry: 'Berries.Cheri',
      ingredients: ['greengrasscorn', 'beansausage', 'fancyegg'],
      mainSkill: 'Skills.ChargeStrengthS',
      specialty: 'Ingredients'
    },
    {
      name: 'Bewear',
      berry: 'Berries.Cheri',
      ingredients: ['greengrasscorn', 'beansausage', 'fancyegg'],
      mainSkill: 'Skills.ChargeStrengthS',
      specialty: 'Ingredients'
    },
    {
      name: 'Comfey',
      berry: 'Berries.Pecha',
      ingredients: ['greengrasscorn', 'warmingginger', 'soothingcacao'],
      mainSkill: 'Skills.EnergizingCheerS',
      specialty: 'Ingredients'
    }
  ];
  recipesList = [
    {
      id: 1,
      name: 'Recipes.MixedCurry',
      basePower: 0,
      image: '/assets/images/MixedCurry.png',
      ingredients: {},
      totalIngredients: 0
    },
    {
      id: 2,
      name: 'Recipes.FancyAppleCurry',
      basePower: 668,
      image: '/assets/images/FancyAppleCurry.png',
      ingredients: {
        fancyApple: 7
      },
      totalIngredients: 7
    },
    {
      id: 3,
      name: 'Recipes.GrilledTailCurry',
      basePower: 7483,
      image: '/assets/images/GrilledTailCurry.png',
      ingredients: {
        slowpokeTail: 8,
        fieryHerb: 25
      },
      totalIngredients: 33
    },
    {
      id: 4,
      name: 'Recipes.SolarPowerTomatoCurry',
      basePower: 1943,
      image: '/assets/images/SolarPowerTomatoCurry.png',
      ingredients: {
        snoozyTomato: 10,
        fieryHerb: 5
      },
      totalIngredients: 15
    },
    {
      id: 5,
      name: 'Recipes.DreamEaterButterCurry',
      basePower: 9010,
      image: '/assets/images/DreamEaterButterCurry.png',
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
      name: 'Recipes.SpicyLeekCurry',
      basePower: 5900,
      image: '/assets/images/SpicyLeekCurry.png',
      ingredients: {
        largeLeek: 14,
        warmingGinger: 10,
        fieryHerb: 8
      },
      totalIngredients: 32
    },
    {
      id: 7,
      name: 'Recipes.SporeMushroomCurry',
      basePower: 4041,
      image: '/assets/images/SporeMushroomCurry.png',
      ingredients: {
        tastyMushroom: 14,
        softPotato: 9
      },
      totalIngredients: 23
    },
    {
      id: 8,
      name: 'Recipes.EggBombCurry',
      basePower: 4523,
      image: '/assets/images/EggBombCurry.png',
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
      name: 'Recipes.HeartyCheeseburgerCurry',
      basePower: 1785,
      image: '/assets/images/HeartyCheeseburgerCurry.png',
      ingredients: {
        moomooMilk: 8,
        beanSausage: 8
      },
      totalIngredients: 16
    },
    {
      id: 10,
      name: 'Recipes.SoftPotatoChowder',
      basePower: 3089,
      image: '/assets/images/SoftPotatoChowder.png',
      ingredients: {
        moomooMilk: 10,
        softPotato: 8,
        tastyMushroom: 4
      },
      totalIngredients: 22
    },
    {
      id: 11,
      name: 'Recipes.SimpleChowder',
      basePower: 727,
      image: '/assets/images/SimpleChowder.png',
      ingredients: {
        moomooMilk: 7
      },
      totalIngredients: 7
    },
    {
      id: 12,
      name: 'Recipes.BeanburgerCurry',
      basePower: 764,
      image: '/assets/images/BeanburgerCurry.png',
      ingredients: {
        beanSausage: 7
      },
      totalIngredients: 7
    },
    {
      id: 13,
      name: 'Recipes.MildHoneyCurry',
      basePower: 749,
      image: '/assets/images/MildHoneyCurry.png',
      ingredients: {
        honey: 7
      },
      totalIngredients: 7
    },
    {
      id: 14,
      name: 'Recipes.NinjaCurry',
      basePower: 6159,
      image: '/assets/images/NinjaCurry.png',
      ingredients: {
        greengrassSoybeans: 15,
        beanSausage: 9,
        largeLeek: 9,
        tastyMushroom: 5
      },
      totalIngredients: 38
    },
    {
      id: 15,
      name: 'Recipes.DroughtKatsuCurry',
      basePower: 1815,
      image: '/assets/images/DroughtKatsuCurry.png',
      ingredients: {
        beanSausage: 10,
        pureOil: 5
      },
      totalIngredients: 15
    },
    {
      id: 16,
      name: 'Recipes.MeltyOmeletteCurry',
      basePower: 2009,
      image: '/assets/images/MeltyOmeletteCurry.png',
      ingredients: {
        fancyEgg: 10,
        snoozyTomato: 6
      },
      totalIngredients: 16
    },
    {
      id: 17,
      name: 'Recipes.BulkUpBeanCurry',
      basePower: 3274,
      image: '/assets/images/BulkUpBeanCurry.png',
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
      name: 'Recipes.LimberCornStew',
      basePower: 4670,
      image: '/assets/images/LimberCornStew.png',
      ingredients: {
        greengrassCorn: 14,
        moomooMilk: 8,
        softPotato: 8
      },
      totalIngredients: 30
    },
    {
      id: 19,
      name: 'Recipes.InfernoCornKeemaCurry',
      basePower: 13690,
      image: '/assets/images/InfernoCornKeemaCurry.png',
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
      name: 'Recipes.MixedSalad',
      basePower: 0,
      image: '/assets/images/MixedSalad.png',
      ingredients: {},
      totalIngredients: 0
    },
    {
      id: 21,
      name: 'Recipes.SlowpokeTailPepperSalad',
      basePower: 8169,
      image: '/assets/images/SlowpokeTailPepperSalad.png',
      ingredients: {
        slowpokeTail: 10,
        fieryHerb: 10,
        pureOil: 15
      },
      totalIngredients: 35
    },
    {
      id: 22,
      name: 'Recipes.SporeMushroomSalad',
      basePower: 5859,
      image: '/assets/images/SporeMushroomSalad.png',
      ingredients: {
        tastyMushroom: 17,
        snoozyTomato: 8,
        pureOil: 8
      },
      totalIngredients: 33
    },
    {
      id: 23,
      name: 'Recipes.SnowCloakCaesarSalad',
      basePower: 1774,
      image: '/assets/images/SnowCloakCaesarSalad.png',
      ingredients: {
        moomooMilk: 10,
        beanSausage: 6
      },
      totalIngredients: 16
    },
    {
      id: 24,
      name: 'Recipes.GluttonyPotatoSalad',
      basePower: 5040,
      image: '/assets/images/GluttonyPotatoSalad.png',
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
      name: 'Recipes.WaterVeilTofuSalad',
      basePower: 1843,
      image: '/assets/images/WaterVeilTofuSalad.png',
      ingredients: {
        greengrassSoybeans: 10,
        snoozyTomato: 6
      },
      totalIngredients: 16
    },
    {
      id: 26,
      name: 'Recipes.SuperpowerExtremeSalad',
      basePower: 2958,
      image: '/assets/images/SuperpowerExtremeSalad.png',
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
      name: 'Recipes.BeanHamSalad',
      basePower: 873,
      image: '/assets/images/BeanHamSalad.png',
      ingredients: {
        beanSausage: 8
      },
      totalIngredients: 8
    },
    {
      id: 28,
      name: 'Recipes.SnoozyTomatoSalad',
      basePower: 933,
      image: '/assets/images/SnoozyTomatoSalad.png',
      ingredients: {
        snoozyTomato: 8
      },
      totalIngredients: 8
    },
    {
      id: 29,
      name: 'Recipes.MoomooCapreseSalad',
      basePower: 2856,
      image: '/assets/images/MoomooCapreseSalad.png',
      ingredients: {
        moomooMilk: 12,
        snoozyTomato: 6,
        pureOil: 5
      },
      totalIngredients: 23
    },
    {
      id: 30,
      name: 'Recipes.ContraryChocolateMeatSalad',
      basePower: 3558,
      image: '/assets/images/ContraryChocolateMeatSalad.png',
      ingredients: {
        soothingCacao: 14,
        beanSausage: 9
      },
      totalIngredients: 23
    },
    {
      id: 31,
      name: 'Recipes.OverheatGingerSalad',
      basePower: 5225,
      image: '/assets/images/OverheatGingerSalad.png',
      ingredients: {
        fieryHerb: 17,
        warmingGinger: 10,
        snoozyTomato: 8
      },
      totalIngredients: 35
    },
    {
      id: 32,
      name: 'Recipes.FancyAppleSalad',
      basePower: 763,
      image: '/assets/images/FancyAppleSalad.png',
      ingredients: {
        fancyApple: 8
      },
      totalIngredients: 8
    },
    {
      id: 33,
      name: 'Recipes.ImmunityLeekSalad',
      basePower: 2658,
      image: '/assets/images/ImmunityLeekSalad.png',
      ingredients: {
        largeLeek: 10,
        warmingGinger: 5
      },
      totalIngredients: 15
    },
    {
      id: 34,
      name: 'Recipes.DazzlingAppleCheeseSalad',
      basePower: 2578,
      image: '/assets/images/DazzlingAppleCheeseSalad.png',
      ingredients: {
        fancyApple: 15,
        moomooMilk: 5,
        pureOil: 3
      },
      totalIngredients: 23
    },
    {
      id: 35,
      name: 'Recipes.NinjaSalad',
      basePower: 10095,
      image: '/assets/images/NinjaSalad.png',
      ingredients: {
        largeLeek: 15,
        greengrassSoybeans: 15,
        tastyMushroom: 12,
        warmingGinger: 11
      },
      totalIngredients: 53
    },
    {
      id: 36,
      name: 'Recipes.HeatWaveTofuSalad',
      basePower: 1976,
      image: '/assets/images/HeatWaveTofuSalad.png',
      ingredients: {
        greengrassSoybeans: 10,
        fieryHerb: 6
      },
      totalIngredients: 16
    },
    {
      id: 37,
      name: 'Recipes.GreengrassSalad',
      basePower: 11393,
      image: '/assets/images/GreengrassSalad.png',
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
      name: 'Recipes.CalmMindFruitSalad',
      basePower: 7675,
      image: '/assets/images/CalmMindFruitSalad.png',
      ingredients: {
        fancyApple: 21,
        honey: 16,
        greengrassCorn: 12
      },
      totalIngredients: 47
    },
    {
      id: 39,
      name: 'Recipes.FuryAttackCornSalad',
      basePower: 2785,
      image: '/assets/images/FuryAttackCornSalad.png',
      ingredients: {
        greengrasscorn: 9,
        pureOil: 3
      },
      totalIngredients: 12
    },
    {
      id: 40,
      name: 'Recipes.MixedJuice',
      basePower: 0,
      image: '/assets/images/MixedJuice.png',
      ingredients: {},
      totalIngredients: 0
    },
    {
      id: 41,
      name: 'Recipes.FluffySweetPotatoes',
      basePower: 1783,
      image: '/assets/images/FluffySweetPotatoes.png',
      ingredients: {
        softPotato: 9,
        moomooMilk: 5
      },
      totalIngredients: 14
    },
    {
      id: 42,
      name: 'Recipes.SteadfastGingerCookies',
      basePower: 4921,
      image: '/assets/images/SteadfastGingerCookies.png',
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
      name: 'Recipes.FancyAppleJuice',
      basePower: 763,
      image: '/assets/images/FancyAppleJuice.png',
      ingredients: {
        fancyApple: 8
      },
      totalIngredients: 8
    },
    {
      id: 44,
      name: 'Recipes.CraftSodaPop',
      basePower: 964,
      image: '/assets/images/CraftSodaPop.png',
      ingredients: {
        honey: 9
      },
      totalIngredients: 9
    },
    {
      id: 45,
      name: 'Recipes.EmberGingerTea',
      basePower: 1788,
      image: '/assets/images/EmberGingerTea.png',
      ingredients: {
        warmingGinger: 9,
        fancyApple: 7
      },
      totalIngredients: 16
    },
    {
      id: 46,
      name: 'Recipes.JigglypuffsFruityFlan',
      basePower: 7594,
      image: '/assets/images/JigglypuffsFruityFlan.png',
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
      name: 'Recipes.LovelyKissSmoothie',
      basePower: 4734,
      image: '/assets/images/LovelyKissSmoothie.png',
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
      name: 'Recipes.LuckyChantApplePie',
      basePower: 1634,
      image: '/assets/images/LuckyChantApplePie.png',
      ingredients: {
        fancyApple: 12,
        moomooMilk: 4
      },
      totalIngredients: 16
    },
    {
      id: 49,
      name: 'Recipes.NerolisRestorativeTea',
      basePower: 5065,
      image: '/assets/images/NerolisRestorativeTea.png',
      ingredients: {
        warmingGinger: 11,
        fancyApple: 15,
        tastyMushroom: 9
      },
      totalIngredients: 35
    },
    {
      id: 50,
      name: 'Recipes.SweetScentChocolateCake',
      basePower: 3280,
      image: '/assets/images/SweetScentChocolateCake.png',
      ingredients: {
        honey: 9,
        soothingCacao: 8,
        moomooMilk: 7
      },
      totalIngredients: 24
    },
    {
      id: 51,
      name: 'Recipes.WarmMoomooMilk',
      basePower: 727,
      image: '/assets/images/WarmMoomooMilk.png',
      ingredients: {
        moomooMilk: 7
      },
      totalIngredients: 7
    },
    {
      id: 52,
      name: 'Recipes.CloudNineSoyCake',
      basePower: 1798,
      image: '/assets/images/CloudNineSoyCake.png',
      ingredients: {
        fancyEgg: 8,
        greengrassSoybeans: 7
      },
      totalIngredients: 15
    },
    {
      id: 53,
      name: 'Recipes.HustleProteinSmoothie',
      basePower: 3168,
      image: '/assets/images/HustleProteinSmoothie.png',
      ingredients: {
        greengrassSoybeans: 15,
        soothingCacao: 8
      },
      totalIngredients: 22
    },
    {
      id: 54,
      name: 'Recipes.StalwartVegetableJuice',
      basePower: 1798,
      image: '/assets/images/StalwartVegetableJuice.png',
      ingredients: {
        snoozyTomato: 9,
        fancyApple: 7
      },
      totalIngredients: 16
    },
    {
      id: 55,
      name: 'Recipes.BigMalasada',
      basePower: 2927,
      image: '/assets/images/BigMalasada.png',
      ingredients: {
        pureOil: 10,
        moomooMilk: 7,
        honey: 6
      },
      totalIngredients: 23
    },
    {
      id: 56,
      name: 'Recipes.HugePowerSoyDonuts',
      basePower: 3213,
      image: '/assets/images/HugePowerSoyDonuts.png',
      ingredients: {
        pureOil: 9,
        greengrassSoybeans: 6,
        soothingCacao: 7
      },
      totalIngredients: 22
    },
    {
      id: 57,
      name: 'Recipes.ExplosionPopcorn',
      basePower: 6048,
      image: '/assets/images/ExplosionPopcorn.png',
      ingredients: {
        greengrassCorn: 15,
        pureOil: 14,
        moomooMilk: 7
      },
      totalIngredients: 36
    },
    {
      id: 58,
      name: 'Recipes.TeatimeCornScones',
      basePower: 10925,
      image: '/assets/images/TeatimeCornScones.png',
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
      name: 'Recipes.PetalDanceChocolateTarts',
      basePower: 3314,
      image: '/assets/images/PetalDanceChocolateTarts.png',
      ingredients: {
        fancyApple: 11,
        soothingCacao: 11
      },
      totalIngredients: 22
    },
    {
      id: 60,
      name: 'Recipes.FlowerGiftMacarons',
      basePower: 13834,
      image: '/assets/images/FlowerGiftMacarons.png',
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
      name: 'Ingredients.FancyApple',
      basePower: 90,
      image: '/assets/images/fancyapple.png',
      count: 0
    },
    {
      id: 2,
      name: 'Ingredients.MoomooMilk',
      basePower: 98,
      image: '/assets/images/moomoomilk.png',
      count: 0
    },
    {
      id: 3,
      name: 'Ingredients.GreengrassSoybeans',
      basePower: 100,
      image: '/assets/images/greengrasssoybeans.png',
      count: 0
    },
    {
      id: 4,
      name: 'Ingredients.Honey',
      basePower: 101,
      image: '/assets/images/honey.png',
      count: 0
    },
    {
      id: 5,
      name: 'Ingredients.BeanSausage',
      basePower: 103,
      image: '/assets/images/beansausage.png',
      count: 0
    },
    {
      id: 6,
      name: 'Ingredients.WarmingGinger',
      basePower: 109,
      image: '/assets/images/warmingginger.png',
      count: 0
    },
    {
      id: 7,
      name: 'Ingredients.SnoozyTomato',
      basePower: 110,
      image: '/assets/images/snoozytomato.png',
      count: 0
    },
    {
      id: 8,
      name: 'Ingredients.FancyEgg',
      basePower: 115,
      image: '/assets/images/fancyegg.png',
      count: 0
    },
    {
      id: 9,
      name: 'Ingredients.PureOil',
      basePower: 121,
      image: '/assets/images/pureoil.png',
      count: 0
    },
    {
      id: 10,
      name: 'Ingredients.SoftPotato',
      basePower: 124,
      image: '/assets/images/softpotato.png',
      count: 0
    },
    {
      id: 11,
      name: 'Ingredients.FieryHerb',
      basePower: 130,
      image: '/assets/images/fieryherb.png',
      count: 0
    },
    {
      id: 12,
      name: 'Ingredients.GreengrassCorn',
      basePower: 140,
      image: '/assets/images/greengrasscorn.png',
      count: 0
    },
    {
      id: 13,
      name: 'Ingredients.SoothingCacao',
      basePower: 151,
      image: '/assets/images/soothingcacao.png',
      count: 0
    },
    {
      id: 14,
      name: 'Ingredients.TastyMushroom',
      basePower: 167,
      image: '/assets/images/tastymushroom.png',
      count: 0
    },
    {
      id: 15,
      name: 'Ingredients.LargeLeek',
      basePower: 185,
      image: '/assets/images/largeleek.png',
      count: 0
    },
    {
      id: 16,
      name: 'Ingredients.SlowpokeTail',
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
