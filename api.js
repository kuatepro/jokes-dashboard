const url = "https://v2.jokeapi.dev/joke/Any?type=twopart&amount=10&safe-mode";

export async function fetchJokes() {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Could not load jokes");
  }

  const data = await response.json();

  if (data.error) {
    throw new Error("No jokes found");
  }

  return data.jokes;
}
