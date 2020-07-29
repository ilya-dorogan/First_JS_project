"use strict";

const numberOfFilms = +prompt('How many movies have you watched?', '');

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	ganres: [],
	privat: false,
};

for (let i = 0; i < 2; i++) {
	const a = prompt('Enter last watched movie?', ''),
		b = prompt('Rate it', '');

	if (a != null && b != null && a != '' && b != '' && a.length < 50) {
		personalMovieDB.movies[a] = b;
		alert('Done!');
	} else {
		alert('Error!');
		i--;
	}
}

if (personalMovieDB.count < 10) {
	alert('You watched a few films!');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
	alert('You are a classic spectator!');
} else if (personalMovieDB.count >= 30) {
	alert('You are a movie buff!');
} else {
	alert('Error!');
}

console.log(personalMovieDB);