class Accommodation {
  #cost!: number;
  #name!: string;

  constructor(
    acost: number,
    aname: string,
  ) {
    this.setCost(acost);
    this.setName(aname);
  }
  setName(aName: unknown): void {
    if (typeof aName !== "string" || aName.trim() === "") {
      throw new Error("El nombre de la acomodación debe ser una cadena no vacía");
    }
    this.#name = aName.trim();
  }
  setCost(aCost: unknown): void {
    if (typeof aCost !== "number" || aCost < 0) {
      throw new Error("El costo del acomodamiento debe de ser mayor o igual a 0");
    }
    this.#cost = aCost;
  }
  getName(): string {
    return this.#name;
  }
  getCost(): number {
    return this.#cost;
  }
}
export default Accommodation;
