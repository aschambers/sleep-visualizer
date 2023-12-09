export class Pokemon {
  public name: string;
  public berry: string;
  public ingredients: Array<string>;
  public mainSkill: string;
  public specialty: string;

  constructor(name: string, berry: string, ingredients: Array<string>, mainSkill: string, speciality: string) {
    this.name = name;
    this.berry = berry;
    this.ingredients = ingredients;
    this.mainSkill = mainSkill;
    this.specialty = speciality;
  }
}
