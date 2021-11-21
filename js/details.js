const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const url =
  "https://api.pokemontcg.io/v2/cards/" +
  id +
  "?key=fa2d022d-84cf-4490-996f-eafbd915f8c7";

const detailContainer = document.querySelector(".pokemon");

const attackList = document.querySelector(".attackList");

const resultsContainer = document.querySelector(".pokemon");

const title = document.querySelector("title");

async function fetchPokemon() {
  try {
    const response = await fetch(url);

    const details = await response.json();

    const data = details.data;

    detailContainer.innerHTML = "";

    attackList.innerHTML = "";

    resultsContainer.innerHTML = "";

    title.innerHTML = "";

    console.log(data);

    createHtml(data);
  } catch (error) {
    resultsContainer.innerHTML = errorMessage(
      "Unable to get the description based on API call."
    );
  }
}

fetchPokemon();

function createHtml(data) {
  detailContainer.innerHTML = `<div class="result">
                                <h1>${data.name}</h1>
                                <div class="details-description">Rarity: ${data.rarity}</div>
                                <div class="details-description">Pokemon type: ${data.types}</div>
                                </div>`;

  title.innerHTML = `${data.name}`;

  const attacks = data.attacks;
  console.log(attacks);

  attackList.innerHTML = "";

  for (let i = 0; i < attacks.length; i++) {
    attackList.innerHTML += `<div class="result">
        <p>Pokemon attacks text:${attacks[i].text}</p>
        <p>Pokemon attacks name:${attacks[i].name}</p>
        <p>Pokemon attacks damage:${attacks[i].damage}</p>
        </div>`;
  }

  const images = data.images;
  console.log(images);

  attackList.innerHTML += `<div class="results">
                                 <img     src="${images.small}" >
                                </div>`;
}
