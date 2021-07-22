const API_KEY = process.env.API_KEY;

export default  {
    fetchTrending: {
        title: 'trending',
        url: `/trending/all/week?api_key=${API_KEY}&language=en-US`
    },
    fetchTopRated: {
        title: 'top rated',
        url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`
    },
    fetchActionMovies: {
        title: 'action',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=28`
    },
    fetchComedyMovies: {
        title: 'comedy',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=35`
    },
    fetchHorrorMovies: {
        title: 'horror',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=27`
    },
    fetchRomanceMovies: {
        title: 'romance',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`
    },
    fetchMysteryMovies: {
        title: 'mystery',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=9648`
    },
    fetchSciFi: {
        title: 'sci-fi',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=878`
    },
    fetchWestern: {
        title: 'western',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=37`
    },
    fetchAnimation: {
        title: 'animation',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=16`
    },
    fetchTV: {
        title: 'tv movie',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=10770`
    },
}