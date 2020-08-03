"use strict";

const personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	ganres: [],
	privat: false,
	start: function () {
		personalMovieDB.count = +prompt('How many movies have you watched?', '');

		while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
			personalMovieDB.count = +prompt('How many movies have you watched?', '');
		}
	},
	rememberMyFilms: function () {
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
	},
	detectPersonalLevel: function () {
		if (personalMovieDB.count < 10) {
			alert('You watched a few films!');
		} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
			alert('You are a classic spectator!');
		} else if (personalMovieDB.count >= 30) {
			alert('You are a movie buff!');
		} else {
			alert('Error!');
		}
	},
	showMyDB: function (hidden) {
		if (!hidden) {
			console.log(personalMovieDB);
		}
	},
	writeYourGanres: function () {
		for (let i = 1; i <= 3; i++) {
			const ganre = prompt(`Enter your favourite ganre #${i}.`, '');

			if (ganre === '' || ganre == null) {
				alert('The field is not filled.');
				i--;
			} else {
				personalMovieDB.ganres[i - 1] = ganre;
			}

			personalMovieDB.ganres.forEach((item, i) => {
				alert(`Your favourite ganre №${i+1} is ${item}.`);
			});
		}
	},
	toggleVisibleMyDB: function () {
		if (personalMovieDB.privat) {
			personalMovieDB.privat = false;
		} else {
			personalMovieDB.privat = true;
		}
	},
};