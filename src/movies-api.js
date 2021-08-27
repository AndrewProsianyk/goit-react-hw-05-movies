const KEY = '0e40dad794763eb0d7353c3db2dc515b';
const URL = 'https://api.themoviedb.org/3';
export const IMG = 'https://www.themoviedb.org/t/p/w200';

async function fetchWithErrorHandling(url = '', config = {}) {
    const response = await fetch(url, config);
    return response.ok
        ? await response.json()
        : Promise.reject(new Error('Not found'));
}
export function fetchTrendingMovies() {
    return fetchWithErrorHandling(`${URL}/trending/all/day?api_key=${KEY}`);
};

export function fetchMoviesId(movieId) {
    return fetchWithErrorHandling(`${URL}/movie/${movieId}?api_key=${KEY}&language=en-US`);
}

export function fetchMovieSearch(query) {
    return fetchWithErrorHandling(`${URL}/search/movie?api_key=${KEY}&query=${query}&language=en-US&page=1&include_adult=false`);
}

export function fetchMovieCast(movieId) {
    return fetchWithErrorHandling(`${URL}/movie/${movieId}/credits?api_key=${KEY}&language=en-US`);
}

export function fetchMovieReviews(movieId) {
    return fetchWithErrorHandling(`${URL}/movie/${movieId}/reviews?api_key=${KEY}&language=en-US`);
}
