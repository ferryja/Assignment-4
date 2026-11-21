import { defineStore } from "pinia";
import tempretures from "../data/tempretures.json";
import bases from "../data/bases.json";
import creamers from "../data/creamers.json";
import syrups from "../data/syrups.json";

export const useBeverageStore = defineStore("BeverageStore", {
  state: () => ({
  temps: tempretures,
  currentTemp: tempretures[0],

  bases: bases,
  currentBase: bases[0],

  creamers: creamers,
  currentCreamer: creamers[0],

  syrups: syrups,
  currentSyrup: syrups[0],
  beverageName: "",
  savedBeverages: [] as Array<{
  name: string;
  temp: typeof tempretures[number];
  base: typeof bases[number];
  creamer: typeof creamers[number];
  syrup: typeof syrups[number];
}>,
}),

  actions: {
  makeBeverage() {
    if (this.beverageName.trim() === "") {
      return;
    }

    const newBeverage = {
      name: this.beverageName,
      temp: this.currentTemp,
      base: this.currentBase,
      creamer: this.currentCreamer,
      syrup: this.currentSyrup,
    };

    this.savedBeverages.push(newBeverage);
    this.beverageName = "";
  },

  showBeverage(index: number) {
  const beverage = this.savedBeverages[index];

  if (beverage) {
    this.currentTemp = beverage.temp;
    this.currentBase = beverage.base;
    this.currentCreamer = beverage.creamer;
    this.currentSyrup = beverage.syrup;
  }
},
},
  persist: false,
});
