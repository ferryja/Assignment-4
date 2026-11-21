<template>
  <div>
    <Beverage :isIced="currentTemp === 'Cold'" />
    <ul>
      <li>
        <template v-for="temp in temps" :key="temp">
          <label>
            <input
              type="radio"
              name="temperature"
              :id="`r${temp}`"
              :value="temp"
              v-model="currentTemp"
            />
            {{ temp }}
          </label>
        </template>
      </li>
    </ul>
<h3>Base Beverage</h3>
<label v-for="base in bases" :key="base.id">
  <input
    type="radio"
    name="base"
    :value="base"
    v-model="currentBase"
  />
  {{ base.name }}
</label>

<h3>Creamer</h3>
<label v-for="creamer in creamers" :key="creamer.id">
  <input
    type="radio"
    name="creamer"
    :value="creamer"
    v-model="currentCreamer"
  />
  {{ creamer.name }}
</label>

<h3>Syrup</h3>
<label v-for="syrup in syrups" :key="syrup.id">
  <input
    type="radio"
    name="syrup"
    :value="syrup"
    v-model="currentSyrup"
  />
  {{ syrup.name }}
</label>

<h3>Name</h3>
<input
  type="text"
  v-model="beverageName"
  placeholder="Enter beverage name"
/>

<button @click="beverageStore.makeBeverage()">
  Make Beverage
</button>

<div id="beverage-container">
  <h3>Saved Beverages</h3>

  <button
    v-for="(beverage, index) in savedBeverages"
    :key="index"
    @click="beverageStore.showBeverage(index)"
  >
    {{ beverage.name }}
  </button>
</div>



  </div>
</template>


<script setup lang="ts">
import Beverage from "./components/Beverage.vue";
import { useBeverageStore } from "./stores/beverageStore";
import { storeToRefs } from "pinia";

const beverageStore = useBeverageStore();

const {
  temps,
  bases,
  creamers,
  syrups,
  currentTemp,
  currentBase,
  currentCreamer,
  currentSyrup,
  beverageName,
  savedBeverages,
} = storeToRefs(beverageStore);
</script>


<style lang="scss">
body,
html {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #6e4228;
  background: linear-gradient(to bottom, #6e4228 0%, #956f5a 100%);
}
ul {
  list-style: none;
}
</style>
