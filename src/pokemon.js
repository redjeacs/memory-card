import { useState } from "react";

async function fetchPokemons(id) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  if (!response.ok) {
    throw new Error("Encountered Error when fetching data!");
  }
  const data = await response.json();
  const spriteUrl = data.sprites.front_default;
  const name = data.name;

  return { spriteUrl, name, id };
}

export default async function getRandomPokemons(count) {
  const pokemons = [];
  const possiblePokemons = 493;
  for (let i = 0; i < count; i++) {
    const randomId = Math.floor(Math.random() * possiblePokemons + 1);
    if (pokemons.some((pokemon) => pokemon.id === randomId)) {
      i--;
      continue;
    }
    const data = await fetchPokemons(randomId);
    pokemons.push(data);
  }
  return pokemons;
}
