//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  rootElem.innerHTML = `<p>Displaying ${episodeList.length} episode(s) from TVMaze.com:</p>`;

  const episodesContainer = document.createElement("div");
  episodesContainer.classList.add("episodes-container");

  episodeList.forEach((episode) => {
    const episodeCard = document.createElement("div");
    episodeCard.classList.add("episode-card");

    // create episode code
    const episodeCode = `S${episode.season
      .toString()
      .padStart(2, "0")}E${episode.number.toString().padStart(2, "0")}`;

    // create episode image element
    const episodeImage = document.createElement("img");
    episodeImage.src = episode.image.medium;
    episodeImage.alt = `Poster for ${episode.name}`;
    episodeImage.classList.add("episode-image");

    // create episode name element
    const episodeName = document.createElement("h2");
    episodeName.textContent = `${episode.name} - ${episodeCode}`;
    episodeName.classList.add("episode-name");

    // create episode summary element
    const episodeSummary = document.createElement("p");
    episodeSummary.innerHTML = episode.summary;
    episodeSummary.classList.add("episode-summary");

    // add all elements to card
    episodeCard.appendChild(episodeImage);
    episodeCard.appendChild(episodeName);
    episodeCard.appendChild(episodeSummary);

    // add card to episodes container
    episodesContainer.appendChild(episodeCard);
  });

  // add episodes container to root element
  rootElem.appendChild(episodesContainer);
}

window.onload = setup;
