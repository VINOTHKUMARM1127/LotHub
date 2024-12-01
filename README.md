# Lothub - Movie Database Website
**Lothub** is a movie discovery platform inspired by **IMDb**. It provides users with an intuitive interface to explore, search, and discover movies, TV shows, and actors. The website pulls data from **The Movie Database (TMDb) API** to give real-time information on movies, actors, trending content, and much more.

## Demo

You can check out the live demo of the app here: [LotHub Demo](https://lothub.netlify.app)

## Introduction
Lothub is a web-based movie platform where users can:

- Browse movies and TV shows .
- Get detailed information about each movie, TV show, or actor.
- Search for specific content by name.
- View ratings, and reviews of movies.
- Explore trending content.
This project is built using React for the frontend and The Movie Database (TMDb) API to fetch movie-related data.

## Features
- **Browse Movies & TV Shows:** Explore the latest, top-rated, and trending movies and TV shows.
- **Search Functionality:** Search for your favorite movies, TV shows, or actors.
- **Details Page:** View detailed information about each movie, including its cast, crew, and ratings.
- **Infinite Scroll:** The homepage and other pages load content dynamically using infinite scrolling.
- **Actor Profiles:** Get detailed information about actors and their work.

## Installation

**1.Clone the repository**
```bash
git clone https://github.com/VINOTHKUMARM1127/LotHub
cd lothub
```
**2.Install Dependencies**
Ensure you have Node.js and npm installed. Then, run:
```bash
npm install
```

**3.Configure the TMDb API Key**
To access the movie data, you need to sign up at TMDb and get an API key.

Create a .env file at the root of the project.
Add your API key to the .env file like this:
```bash
VITE_API_KEY=your_api_key_here
```

## Technologies Used
- **React:** Frontend JavaScript framework to build the user interface.
- **React Router:** For routing and navigation between different pages.
- **Axios:** For making HTTP requests to the TMDb API.
- **TMDb API:** The API provides movie, TV show, and actor data.
- **React-Infinite-Scroll-Component:** To implement infinite scrolling for movie listings.
- **CSS:** For styling and layout of the website.

## API Integration
This project fetches data from The Movie Database (TMDb) API to provide real-time movie, TV show, and actor information.

### Key API Endpoints Used:
- **Movies:** (https://api.themoviedb.org/3/movie/popular?api_key=your_api_key)
- **TV Shows:** (https://api.themoviedb.org/3/tv/popular?api_key=your_api_key)
- **Search:** (https://api.themoviedb.org/3/search/multi?api_key=your_api_key&query=query)
- **Movie Details:** (https://api.themoviedb.org/3/movie/{id}?api_key=your_api_key)
- **Actor Details:** (https://api.themoviedb.org/3/person/{id}?api_key=your_api_key)
Make sure to replace your_api_key with your actual API key.

## Usage
Once the app is up and running, you can start exploring movies and TV shows. Here's a quick guide:

- **Home Page:** Displays a list of popular, trending, and upcoming movies and TV shows.
- **Search Page:** Allows you to search for movies, TV shows, or actors.
- **Movie/TV Show Details:** Click on any movie or show to see detailed information such as the cast, crew, plot, release date, and more.
- **Actor Details:** Click on any actor's name to view their filmography and biography.