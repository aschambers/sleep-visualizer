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
  selectedRecipe: Recipe = new Recipe(0, '', 0, '', new Ingredients());
  extraIngredientsBasePower = 0;
  estimatedTotalStrength = this.getEstimatedTotalStrength() || 0;

  constructor(private pokemonService: PokemonService) { }
  
  ngOnInit() {
    const recipesList = this.pokemonService.retrieveRecipesList();
    this.recipesList = recipesList;
    this.selectedRecipe = recipesList[0];
    this.ingredientsList = this.pokemonService.retrieveIngredientCountsList();
    this.allDishLevelMultipliers = this.pokemonService.retrieveDishLevelMultipliers();
    this.islandBonusLookup = this.pokemonService.retrieveIslandBonuses();
  }

  updateDishLevel(event: Event) {
    const value = (event.target as HTMLInputElement).valueAsNumber;
    if (value > 55) {
      this.dishLevel = 55;
    } else if (value < 1) {
      this.dishLevel = 1;
    } else {
      this.dishLevel = value;
    }
    this.updateMultiplier();
    this.estimatedTotalStrength = this.getEstimatedTotalStrength();
    (document.getElementById('dish-level') as HTMLInputElement).value = String(this.dishLevel);
  }

  updateMultiplier() {
    this.dishLevelMultiplier = this.allDishLevelMultipliers[this.dishLevel - 1];
    this.estimatedTotalStrength = this.getEstimatedTotalStrength();
  }

  updateIslandBonus(event: Event) {
    const islandBonus = (event.target as HTMLInputElement).value;
    this.islandBonusMultiplier = (parseFloat(islandBonus) / 100.0) + 1;
    this.estimatedTotalStrength = this.getEstimatedTotalStrength();
  }

  changeSelectedRecipe(event: Event) {
    const recipeIndex = Number((event.target as HTMLInputElement).value);
    if (recipeIndex > -1 && typeof this.recipesList[recipeIndex] === 'object') {
      this.selectedRecipe = this.recipesList[recipeIndex];
    }
    this.estimatedTotalStrength = this.getEstimatedTotalStrength();
  }

  updateIngredientCount(ingredient: number, isIncrement: boolean) {
    if (this.ingredientsList[ingredient].count <= 0 && !isIncrement) return;
    
    const basePower = this.ingredientsList.length > 0 ? (this.ingredientsList[ingredient].basePower || 0) : 0;
    if (isIncrement) {
      this.ingredientsList[ingredient].count += 1;
      this.extraIngredientsBasePower += basePower;
    } else {
      this.ingredientsList[ingredient].count -= 1;
      this.extraIngredientsBasePower -= basePower;
    }
    this.estimatedTotalStrength = this.getEstimatedTotalStrength();
  }

  getEstimatedTotalStrength() {
    const totalStrength = (this.islandBonusMultiplier * this.selectedRecipe.basePower * this.dishLevelMultiplier + (this.islandBonusMultiplier * this.extraIngredientsBasePower)) || 0;
    return Math.round(totalStrength);
  }
}
