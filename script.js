async function displayEpisodes(showId) {
  const response = await fetch(
    `https://api.tvmaze.com/shows/${showId}/episodes`
  );
  const episodes = await response.json();

  const container = document.getElementById("episodes-container");
  container.innerHTML = "";

  episodes.forEach((episode) => {
    const code = `S${episode.season
      .toString()
      .padStart(2, "0")}E${episode.number.toString().padStart(2, "0")}`;
    const title = episode.name;
    const summary = episode.summary;
    const imageUrl =
      episode.image?.medium ??
      "https://via.placeholder.com/210x295?text=No+Image";

    const episodeElement = document.createElement("div");
    episodeElement.classList.add("episode");

    const imageElement = document.createElement("img");
    imageElement.src = imageUrl;
    imageElement.alt = title;
    imageElement.width = 210;
    imageElement.height = 295;

    const titleElement = document.createElement("h2");
    titleElement.textContent = `${title} (${code})`;

    const summaryElement = document.createElement("p");
    summaryElement.textContent = summary;

    episodeElement.appendChild(imageElement);
    episodeElement.appendChild(titleElement);
    episodeElement.appendChild(summaryElement);

    container.appendChild(episodeElement);
  });
}

window.onload = setup;
