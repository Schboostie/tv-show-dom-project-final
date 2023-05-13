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

// second commit - 200 points

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");

  // Add search input
  const searchInput = document.createElement("input");
  searchInput.type = "text";
  searchInput.placeholder = "Search episodes";
  searchInput.addEventListener("input", () =>
    updateDisplayedEpisodes(episodeList, searchInput.value.trim())
  );
  rootElem.appendChild(searchInput);

  // Add episode count display
  const episodeCountElem = document.createElement("p");
  episodeCountElem.id = "episode-count";
  rootElem.appendChild(episodeCountElem);

  // Add episode list container
  const episodeListContainer = document.createElement("div");
  episodeListContainer.id = "episode-list-container";
  rootElem.appendChild(episodeListContainer);

  updateDisplayedEpisodes(episodeList);
}

function updateDisplayedEpisodes(episodeList, searchTerm = "") {
  const episodeListContainer = document.getElementById(
    "episode-list-container"
  );
  episodeListContainer.innerHTML = "";

  const matchingEpisodes = episodeList.filter((episode) => {
    const summary = episode.summary.toLowerCase();
    const name = episode.name.toLowerCase();
    return (
      summary.includes(searchTerm.toLowerCase()) ||
      name.includes(searchTerm.toLowerCase())
    );
  });

  const episodeCountElem = document.getElementById("episode-count");
  episodeCountElem.textContent = `Displaying ${matchingEpisodes.length} of ${episodeList.length} episodes`;

  matchingEpisodes.forEach((episode) => {
    const episodeElem = document.createElement("div");

    const episodeCode = `S${episode.season
      .toString()
      .padStart(2, "0")}E${episode.number.toString().padStart(2, "0")}`;
    const episodeTitle = `${episodeCode} - ${episode.name}`;

    const episodeImg = document.createElement("img");
    episodeImg.src = episode.image.medium;
    episodeImg.alt = episodeTitle;

    const episodeSummary = document.createElement("p");
    episodeSummary.innerHTML = episode.summary;

    episodeElem.appendChild(episodeImg);
    episodeElem.appendChild(document.createElement("br"));
    episodeElem.appendChild(document.createTextNode(episodeTitle));
    episodeElem.appendChild(document.createElement("br"));
    episodeElem.appendChild(
      document.createTextNode(episodeSummary.textContent)
    );

    episodeListContainer.appendChild(episodeElem);
  });
}
