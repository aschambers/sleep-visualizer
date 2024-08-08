import { Component, Input } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Ingredients, Recipe } from '../../models/recipe.model';
import { Ingredient } from 'src/app/models/ingredient.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent {
  @Input() dishLevel = 1;
  dishLevelMultiplier = 1;
  allDishLevelMultipliers: Array<number> = new Array<number>();
  islandBonusLookup: Array<string> = new Array<string>();
  islandBonusMultiplier = 1;
  recipesList: Array<Recipe> = new Array<Recipe>;
  ingredientsList: Array<Ingredient> = new Array<Ingredient>;
  selectedRecipe: Recipe = new Recipe(0, '', 0, '', new Ingredients(), 0);
  extraIngredientsBasePower = 0;
  totalIngredients = 0;
  totalExtraIngredients = 0;
  estimatedTotalStrength = this.getEstimatedTotalStrength() || 0;

  constructor(private pokemonService: PokemonService) { }
  
  ngOnInit() {
    const recipesList = this.pokemonService.retrieveRecipesList();
    this.recipesList = recipesList;
    this.selectedRecipe = recipesList[0];
    this.ingredientsList = this.pokemonService.retrieveIngredientCountsList();
    this.allDishLevelMultipliers = this.pokemonService.retrieveDishLevelMultipliers();
    this.islandBonusLookup = this.pokemonService.retrieveIslandBonuses();
    this.totalIngredients = this.getTotalIngredients();
  }

  updateDishLevel(event: Event) {
    const value = (event.target as HTMLInputElement).valueAsNumber;
    if (value > 60) {
      this.dishLevel = 60;
    } else if (value < 1) {
      this.dishLevel = 1;
    } else {
      this.dishLevel = value;
    }
    this.updateMultiplier();
    this.estimatedTotalStrength = this.getEstimatedTotalStrength();
    this.totalIngredients = this.getTotalIngredients();
    (document.getElementById('dish-level') as HTMLInputElement).value = String(this.dishLevel);
  }

  updateMultiplier() {
    this.dishLevelMultiplier = this.allDishLevelMultipliers[this.dishLevel - 1];
    this.estimatedTotalStrength = this.getEstimatedTotalStrength();
    this.totalIngredients = this.getTotalIngredients();
  }

  updateIslandBonus(event: Event) {
    const islandBonus = (event.target as HTMLInputElement).value;
    this.islandBonusMultiplier = (parseFloat(islandBonus) / 100.0) + 1;
    this.estimatedTotalStrength = this.getEstimatedTotalStrength();
    this.totalIngredients = this.getTotalIngredients();
  }

  changeSelectedRecipe(recipe: Recipe) {
    this.selectedRecipe = recipe;
    this.estimatedTotalStrength = this.getEstimatedTotalStrength();
    this.totalIngredients = this.getTotalIngredients();
  }

  updateIngredientCount(ingredient: number, isIncrement: boolean) {
    if (this.ingredientsList[ingredient].count <= 0 && !isIncrement) return;
    
    const basePower = this.ingredientsList.length > 0 ? (this.ingredientsList[ingredient].basePower || 0) : 0;
    if (isIncrement) {
      this.ingredientsList[ingredient].count += 1;
      this.extraIngredientsBasePower += basePower;
      this.totalExtraIngredients += 1;
    } else {
      this.ingredientsList[ingredient].count -= 1;
      this.extraIngredientsBasePower -= basePower;
      this.totalExtraIngredients -= 1;
    }
    this.estimatedTotalStrength = this.getEstimatedTotalStrength();
    this.totalIngredients = this.getTotalIngredients();
  }

  getTotalIngredients() {
    const recipe = this.selectedRecipe;
    
    return recipe.totalIngredients + this.totalExtraIngredients;
  }

  getEstimatedTotalStrength() {
    const totalStrength = (this.islandBonusMultiplier * this.selectedRecipe.basePower * this.dishLevelMultiplier + (this.islandBonusMultiplier * this.extraIngredientsBasePower)) || 0;
    return Math.round(totalStrength);
  }
}
