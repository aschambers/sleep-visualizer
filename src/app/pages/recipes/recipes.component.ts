import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent {
  @Input() dishLevel = 1;
  dishLevelMultiplier = 1;
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
  islandBonusMultiplier = 1;
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
  ingredientsList = [
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
  selectedRecipe = this.recipesList[0];
  extraIngredientsBasePower = 0;
  estimatedTotalStrength = this.getEstimatedTotalStrength() || 0;

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
