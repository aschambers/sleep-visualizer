export class Pokemon {
  public name: string;
  public ingredient: string;
  public mainSkill: string;
  public specialty: string;

  constructor(name: string, ingredient: string, mainSkill: string, speciality: string) {
    this.name = name;
    this.ingredient = ingredient;
    this.mainSkill = mainSkill;
    this.specialty = speciality;
  }
}
