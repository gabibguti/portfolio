import { useQuery } from 'react-query'
import { fetcher } from '../utils/fetcher'

const API_KEY =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMjI1ZDBkOTEyZjhmZGEyYjZmNTIzNWY5OGFiNGI4ZiIsIm5iZiI6MTczNDQ4NjE1OS43MzUwMDAxLCJzdWIiOiI2NzYyMjg4ZjhkMWNmZGM1MjI0YTFkNTgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.tK0Lomsyb7GQBYlE7wDTc2KUDXR3V-2lO2Y1s4Necxk'

export interface SearchMovieResponse {
  page: number // The page number of the results.
  total_results: number // The total number of results available.
  total_pages: number // The total number of pages of results.
  results: SearchMovie[]
}

export interface SearchMovie {
  poster_path: string | null // The path to the movie poster image (null if not available).
  adult: boolean // Whether the movie is for adults.
  overview: string // A short overview of the movie.
  release_date: string // The release date of the movie in 'YYYY-MM-DD' format.
  genre_ids: number[] // Genre IDs of the movie. (Use the /genre/list endpoint to get the genre names)
  id: number // The movie ID.
  original_title: string // The original title of the movie.
  original_language: string // The original language of the movie.
  title: string // The title of the movie.
  backdrop_path: string | null // The path to the movie backdrop image (null if not available).
  popularity: number // The popularity score of the movie.
  vote_count: number // The number of votes the movie has received.
  video: boolean // Whether the movie has a video.
  vote_average: number // The average vote rating of the movie.
}

export interface MovieDetailsResponse {
  adult: boolean // Whether the movie is for adults.
  backdrop_path: string | null // The path to the movie backdrop image (null if not available).
  belongs_to_collection: BelongsToCollection | null // Information about the collection the movie belongs to (null if not applicable).
  budget: number // The budget of the movie in the original currency.
  genres: Genre[] // An array of genres the movie belongs to.
  homepage: string | null // The official website of the movie (null if not available).
  id: number // The movie ID.
  imdb_id: string | null // The movie's IMDB ID (null if not available).
  original_language: string // The original language of the movie.
  original_title: string // The original title of the movie.
  overview: string // A short overview of the movie.
  popularity: number // The popularity score of the movie.
  production_companies: ProductionCompany[] // An array of production companies involved in the movie.
  production_countries: ProductionCountry[] // An array of countries where the movie was produced.
  release_date: string // The release date of the movie in 'YYYY-MM-DD' format.
  revenue: number // The revenue of the movie in the original currency.
  runtime: number // The runtime of the movie in minutes.
  spoken_languages: SpokenLanguage[] // An array of languages spoken in the movie.
  status: string // The current production status of the movie.
  tagline: string | null // The tagline of the movie (null if not available).
  title: string // The title of the movie.
  video: boolean // Whether the movie has a video.
  vote_average: number // The average vote rating of the movie.
  vote_count: number // The number of votes the movie has received.
  poster_path: string | null
}

interface BelongsToCollection {
  id: number // The ID of the collection.
  name: string // The name of the collection.
  poster_path: string | null // The path to the collection poster image (null if not available).
  backdrop_path: string | null // The path to the collection backdrop image (null if not available).
}

export interface Genre {
  id: number // The genre ID.
  name: string // The name of the genre.
}

interface ProductionCompany {
  id: number // The ID of the production company.
  logo_path: string | null // The path to the company logo image (null if not available).
  name: string // The name of the production company.
  origin_country: string // The country of origin of the production company.
}

interface ProductionCountry {
  iso_3166_1: string // The ISO 3166-1 code for the country.
  name: string // The name of the country.
}

interface SpokenLanguage {
  iso_639_1: string // The ISO 639-1 code for the language.
  name: string // The name of the language.
}

export interface GenreResponse {
  genres: Genre[]
}

export interface SearchTvShowResponse {
  page: number // The page number of the results.
  total_results: number // The total number of results available.
  total_pages: number // The total number of pages of results.
  results: SearchTvShow[]
}

export interface SearchTvShow {
  backdrop_path: string | null // The path to the TV show backdrop image (null if not available).
  first_air_date: string | null // The first air date of the TV show (null if not available).
  genre_ids: number[] // Genre IDs of the TV show (Use the /genre/list endpoint to get the genre names).
  id: number // The TV show ID.
  name: string // The name of the TV show.
  origin_country: string[] // The original production countries of the TV show.
  original_language: string // The original language of the TV show.
  original_name: string // The original name of the TV show.
  overview: string // A short overview of the TV show.
  popularity: number // The popularity score of the TV show.
  poster_path: string | null // The path to the TV show poster image (null if not available).
  vote_average: number // The average vote rating of the TV show.
  vote_count: number // The number of votes the TV show has received.
}

export interface TvShowDetailsResponse {
  backdrop_path: string | null // The path to the TV show backdrop image (null if not available).
  created_by: Creator[] // An array of creators of the TV show.
  episode_run_time: number[] // The episode runtime in minutes (may be an array of different runtimes).
  first_air_date: string // The first air date of the TV show.
  genres: Genre[] // An array of genres the TV show belongs to.
  homepage: string | null // The official website of the TV show (null if not available).
  id: number // The TV show ID.
  in_production: boolean // Whether the TV show is still in production.
  languages: string[] // An array of languages the TV show is available in.
  last_air_date: string | null // The last air date of the TV show (null if still airing).
  name: string // The name of the TV show.
  networks: Network[] // An array of networks the TV show aired on.
  number_of_episodes: number // The total number of episodes of the TV show.
  number_of_seasons: number // The total number of seasons of the TV show.
  original_language: string // The original language of the TV show.
  original_name: string // The original name of the TV show.
  overview: string // A short overview of the TV show.
  popularity: number // The popularity score of the TV show.
  poster_path: string | null // The path to the TV show poster image (null if not available).
  production_companies: ProductionCompany[] // An array of production companies involved in the TV show.
  production_countries: ProductionCountry[] // An array of countries where the TV show was produced.
  seasons: Season[] // An array of seasons associated with the TV show (may not be included in all responses).
  spoken_languages: SpokenLanguage[] // An array of languages spoken in the TV show.
  status: string // The current production status of the TV show (e.g., "Returning", "Canceled").
  tagline: string | null // The tagline of the TV show (null if not available).
  vote_average: number // The average vote rating of the TV show.
  vote_count: number // The number of votes the TV show has received.
}

interface Creator {
  id: number // The ID of the creator.
  credit_id: string // The credit ID for the creator.
  name: string // The name of the creator.
  gender: number // The gender of the creator (1 or 2).
  profile_path: string | null // The path to the creator's profile image (null if not available).
}

interface Network {
  id: number // The ID of the network.
  name: string // The name of the network.
  logo_path: string | null // The path to the network's logo image (null if not available).
  origin_country: string // The original country of the network.
}

interface ProductionCompany {
  id: number // The ID of the production company.
  logo_path: string | null // The path to the company logo image (null if not available).
  name: string // The name of the production company.
  origin_country: string // The country of origin of the production company.
}

interface ProductionCountry {
  iso_3166_1: string // The ISO 3166-1 code for the country.
  name: string // The name of the country.
}

interface Season {
  air_date: string | null // The air date of the season (null if not yet aired).
  episode_count: number // The number of episodes in the season.
  id: number // The ID of the season.
  name: string // The name of the season.
  overview: string | null // A short overview of the season (null if not available).
  poster_path: string | null // The path to the season poster image (null if not available).
  season_number: number // The season number.
}

interface SpokenLanguage {
  iso_639_1: string
}

export function useGetMovie(name: string) {
  const init: RequestInit = {
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer ' + API_KEY,
    },
  }

  const searchParams: Record<string, any> = new URLSearchParams()

  searchParams.append('query', name)
  searchParams.append('include_adult', false)
  searchParams.append('language', 'en-US')
  searchParams.append('page', 1)

  const baseUrl = new URL('https://api.themoviedb.org/3/search/movie')

  baseUrl.search = searchParams.toString()

  return useQuery<SearchMovieResponse, Error>(
    ['movies', name],
    () => fetcher<SearchMovieResponse>(baseUrl.toString(), init),
    {}
  )
}

export function useGetTVShow(name: string) {
  const init: RequestInit = {
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer ' + API_KEY,
    },
  }

  const searchParams: Record<string, any> = new URLSearchParams()

  searchParams.append('query', name)
  searchParams.append('include_adult', false)
  searchParams.append('language', 'en-US')
  searchParams.append('page', 1)

  const baseUrl = new URL('https://api.themoviedb.org/3/search/tv')

  baseUrl.search = searchParams.toString()

  return useQuery<SearchTvShowResponse, Error>(
    ['tv_show', name],
    () => fetcher<SearchTvShowResponse>(baseUrl.toString(), init),
    {}
  )
}

export function useGetMovieDetails(id?: number) {
  const init: RequestInit = {
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer ' + API_KEY,
    },
  }

  const searchParams: Record<string, any> = new URLSearchParams()

  searchParams.append('language', 'en-US')

  const baseUrl = new URL('https://api.themoviedb.org/3/movie/' + id)

  baseUrl.search = searchParams.toString()

  return useQuery<MovieDetailsResponse, Error>(
    ['movie_details', id],
    () => fetcher<MovieDetailsResponse>(baseUrl.toString(), init),
    {}
  )
}

export function useGetTVShowDetails(id?: number) {
  const init: RequestInit = {
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer ' + API_KEY,
    },
  }

  const searchParams: Record<string, any> = new URLSearchParams()

  searchParams.append('language', 'en-US')

  const baseUrl = new URL('https://api.themoviedb.org/3/tv/' + id)

  baseUrl.search = searchParams.toString()

  return useQuery<TvShowDetailsResponse, Error>(
    ['tv_show_details', id],
    () => fetcher<TvShowDetailsResponse>(baseUrl.toString(), init),
    {}
  )
}

export function useGetMovieGenres() {
  const init: RequestInit = {
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer ' + API_KEY,
    },
  }

  const baseUrl = new URL('https://api.themoviedb.org/3/genre/movie/list')

  return useQuery<GenreResponse, Error>(
    ['movie_genres'],
    () => fetcher<GenreResponse>(baseUrl.toString(), init),
    {}
  )
}

export function useGetTVShowGenres() {
  const init: RequestInit = {
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer ' + API_KEY,
    },
  }

  const baseUrl = new URL('https://api.themoviedb.org/3/genre/tv/list')

  return useQuery<GenreResponse, Error>(
    ['tv_show_genres'],
    () => fetcher<GenreResponse>(baseUrl.toString(), init),
    {}
  )
}
