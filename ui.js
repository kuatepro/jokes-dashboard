const jokesList = document.getElementById("jokes");
const message = document.getElementById("message");
const total = document.getElementById("total");

export function showLoading() {
  message.textContent = "Loading...";
  total.textContent = "";
  jokesList.innerHTML = "";
}

export function showError(text) {
  message.textContent = text;
  total.textContent = "";
  jokesList.innerHTML = "";
}

export function renderCards(jokes) {
  if (jokes.length === 0) {
    message.textContent = "No joke found.";
    total.textContent = "";
    jokesList.innerHTML = "";
    return;
  }

  const programmingCount = jokes.reduce(function (sum, joke) {
    if (joke.category === "Programming") {
      return sum + 1;
    }
    return sum;
  }, 0);

  message.textContent = "";
  total.textContent = jokes.length + " jokes - " + programmingCount + " programming";

  jokesList.innerHTML = jokes.map(function (joke) {
    const cardClass = joke.category === "Programming" ? "card programming" : "card";

    return `
      <article class="${cardClass}">
        <h2>${joke.category}</h2>
        <p>${joke.setup}</p>
        <p><strong>${joke.delivery}</strong></p>
      </article>
    `;
  }).join("");
}
