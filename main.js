import { fetchJokes } from "./api.js";
import { showLoading, showError, renderCards } from "./ui.js";

const searchInput = document.getElementById("search");
let jokes = [];

async function start() {
  showLoading();

  try {
    jokes = await fetchJokes();
    jokes.sort(function (a, b) {
      return a.category.localeCompare(b.category);
    });
    renderCards(jokes);
  } catch (error) {
    showError("Something went wrong. Please try again.");
  }
}

searchInput.addEventListener("input", function () {
  const text = searchInput.value.toLowerCase();

  const result = jokes.filter(function (joke) {
    return joke.setup.toLowerCase().includes(text)
      || joke.delivery.toLowerCase().includes(text)
      || joke.category.toLowerCase().includes(text);
  });

  renderCards(result);
});

start();
