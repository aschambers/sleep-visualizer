export class Ingredient {
  public id: number;
  public name: string;
  public basePower: number;
  public image: string;
  public count: number;

  constructor(id: number, name: string, basePower: number, image: string, count: number) {
    this.id = id;
    this.name = name;
    this.basePower = basePower;
    this.image = image;
    this.count = count;
  }
}