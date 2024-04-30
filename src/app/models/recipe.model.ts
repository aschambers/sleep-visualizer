export class Recipe {
  public id: number;
  public name: string;
  public basePower: number;
  public image: string;
  public ingredients: Ingredients;

  constructor(id: number, name: string, basePower: number, image: string, ingredients: Ingredients) {
    this.id = id;
    this.name = name;
    this.basePower = basePower;
    this.image = image;
    this.ingredients = ingredients;
  }
}

export class Ingredients {
  public fancyApple?: number;
  public moomooMilk?: number;
  public greengrassSoybeans?: number;
  public honey?: number;
  public beanSausage?: number;
  public warmingGinger?: number;
  public snoozyTomato?: number;
  public fancyEgg?: number;
  public pureOil?: number;
  public softPotato?: number;
  public fieryHerb?: number;
  public greengrassCorn?: number;
  public soothingCacao?: number;
  public tastyMushroom?: number;
  public largeLeek?: number;
  public slowpokeTail?: number;
}