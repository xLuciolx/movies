const token = "b1d9012cc84163eaae0dc00204efa919";

export function getMoviesFromSearch(text) {
    const url =
        "https://api.themoviedb.org/3/search/movie?api_key=" + token + "&language=fr&query=" + text;
    return fetch(url)
        .then(res => res.json())
        .catch(err => console.error(err));
}

export function getImageFromApi(name) {
    return "https://image.tmdb.org/t/p/w300/" + name;
}
