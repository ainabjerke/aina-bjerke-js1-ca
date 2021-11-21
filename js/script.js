const url = "https://api.pokemontcg.io/v2/cards/";

const resultsContainer = document.querySelector(".pokemon");

async function getPokemonInfo() {
  try {
    const response = await fetch(url);

    const results = await response.json();

    const pokemonInfo = results.data;

    resultsContainer.innerHTML = "";

    console.log(pokemonInfo);

    createHTML(pokemonInfo);
  } catch (error) {
    resultsContainer.innerHTML = errorMessage(
      "Unable to get the description based on API call."
    );
  }
}
getPokemonInfo();

function createHTML(pokemonInfo) {
  for (let i = 0; i < pokemonInfo.length; i++) {
    if (i === 3) {
      break;
    }
    resultsContainer.innerHTML += `<a href ="details.html?id=${pokemonInfo[i].id}">                                    
                                            <div class = "result">
                                            <h3>Pokemon name:${pokemonInfo[i].name}</h3>
                                            <p>Pokemon rarity:${pokemonInfo[i].rarity}</p>
                                            <p>Pokemon id:${pokemonInfo[i].id}</p>
                                            <p>Pokemon supertype:${pokemonInfo[i].supertype}</p>
                                            </div></a>`;
  }
}
