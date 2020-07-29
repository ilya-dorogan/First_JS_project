"use strict";

const numberOfFilms = +prompt('How many movies have you watched?', '');

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	ganres: [],
	privat: false,
};

const a = prompt('Enter last watched movie?', ''),
	b = prompt('Rate it', ''),
	c = prompt('Enter last watched movie?', ''),
	d = prompt('Enter last watched movie?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);