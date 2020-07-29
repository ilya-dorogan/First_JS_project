"use strict";

let numberOfFilms;

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	ganres: [],
	privat: false,
};

function start() {
	numberOfFilms = +prompt('How many movies have you watched?', '');

	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt('How many movies have you watched?', '');
	}
}

function rememberMyFilms() {
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
}

function detectPersonalLevel() {
	if (personalMovieDB.count < 10) {
		alert('You watched a few films!');
	} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
		alert('You are a classic spectator!');
	} else if (personalMovieDB.count >= 30) {
		alert('You are a movie buff!');
	} else {
		alert('Error!');
	}
}

function showMyDB(hidden) {
	if (!hidden) {
		console.log(personalMovieDB);
	}
}

function writeYourGanres() {
	for (let i = 1; i <= 3; i++) {
		const ganre = prompt(`Enter your favourite ganre #${i}.`, '');
		if (ganre != null && ganre != '' && ganre.length < 20) {
			personalMovieDB.ganres[i - 1] = ganre;
			alert('Done!');
		} else {
			alert('Error!');
			i--;
		}
	}
}

// start();
// rememberMyFilms();
// detectPersonalLevel();
// showMyDB(personalMovieDB.privat);
// writeYourGanres();