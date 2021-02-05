/*
    ASSIGNMENT RULES
    - All the answers must be in JavaScript
    - The solution must be pushed to the repository and be available for the tutors by the end of the day
    - You can ask for tutor's help
    - You can google / use StackOverflow BUT we suggest you to use just the material provided
    - You can test your code in a separate file or commenting the single parts in this file or directly in the Developer Console or in the Node Console.
    - Complete as many exercise that you can
    - Publish them into your own GitHub account and upload repository link on Eduflow before 16.30 (Berlin Time) 
*/

//JS Basics

/* Ex.A
   Create a variable test that contains a string.
*/
const test = 'paul'
console.log(test);

/* Ex.B
    Create a variable sum that contains the result of the sum between 10 and 20.
*/
const sum = 10 + 20;
console.log(sum);
/* Ex.C 
    Create a variable random that contains a random number between 0 and 20 (should be randomly created at each execution).
*/

/* Ex.D
    Create a variable me containing and object with the current information: name = your name, surname = your surname, age = your age.
*/
const me = {
    name : "Paul" ,
    surname : "Maliakel",
    age : 27,


};
console.log(me)

/* Ex.E 
    Programmatically remove the age property from the previously create object.
*/
delete me.age;
console.log(me);

/* Ex.F 
   Programmatically add to the object me an array "skills" that contains the programming languages that you know.
*/
me.skills = [
    'c', 'c#' , 'python'
]


/* Ex.G 
   Programmatically remove the last skill from the array "skills" inside of the "me" object.
*/
me.skills.pop();
console.log(me.skills);

// JS Functions
/* Ex.1
    Write the function dice that randomize an integer number between 1 and 6.
*/
const dice = function(){
    console.log(Math.floor((Math.random() * 6) + 1));
}
console.log("random number between 1 and 6:", dice())
/* Ex.2 
    Write the function whoIsBigger that receives 2 numbers and returns the bigger of the two.
*/
function WhoIsBigger(x, y) {
	return x > y ? x : y;
}
console.log(WhoIsBigger(5, 8));

/* Ex.3
    Write the function splitMe that receives a string and returns an array with every word in that string.
    Ex. splitMe("I love coding") => returns [ "I","Love","Coding"]
*/

/* Ex.4
    Write the function deleteOne that receives a string and a boolean. If the boolean is true it should return the string without the first letter, otherwise it should remove the last one.
*/

function DeleteOne(x, y) {
	h = x.length;
	if (y == true) {
		x = x.slice(1, h);
		console.log(x);
	} else {
		x = x.slice(0, h - 1);
		console.log(x);
	}
}
DeleteOne('john', false);
/* Ex.5
   Write the function onlyLetters that receives a string, removes all the numbers and returns it.
   Ex.: onlyLetters("I love 123 whatever")  => returns "I love whatever"
*/
function Onyletters(x) {
	x = x.replace(/[0-9]/g, '');
	return x;
}
console.log(Onyletters('I love 123 whatever'));
/* Ex.6 
   Write the function isThisAnEmail that receives a string and returns true if the string is a valid email.
*/
function IsThisAnEmail(x) {
	y = x.includes('@') && x.includes('.com');
	return y;
}
console.log(IsThisAnEmail('paulbalu93@hotmail.com'));

/* Ex.7
   Write the function WhatDayIsIt that should return the day of the week
*/
function WhatDayIsIt() {
	var d = new Date();
	var weekday = new Array(7);
	weekday[0] = 'Sunday';
	weekday[1] = 'Monday';
	weekday[2] = 'Tuesday';
	weekday[3] = 'Wednesday';
	weekday[4] = 'Thursday';
	weekday[5] = 'Friday';
	weekday[6] = 'Saturday';

	var n = weekday[d.getDay()];
	return n;
}
console.log(WhatDayIsIt());

/* Ex.7
   Write the function whatDayIsIt that should return the current day of the week.
*/

/* Ex.8
    Write the function rollTheDices that receives a numeric input.
    It should use the Dice function defined in Ex1 and return an object that contains both the sum of all values extracted and the single values of the dicerolls themselves.
    Example: RollTheDices(3) => returns {
        sum: 10
        values: [ 3, 3, 4]
    }
*/

/* Ex.9
   Write the function howManyDays that receives a date and returns the number of days that has passed since that day.
*/
function HowManyDays(dt) {
	var current = new Date(dt.getTime());
	var previous = new Date(dt.getFullYear(), 0, 1);

	return Math.ceil((current - previous + 1) / 86400000);
}
console.log(HowManyDays(new Date(2020, 0, 15)));
console.log(HowManyDays(new Date(2020, 11, 14)));

/* Ex.10
   Write the function isTodayMyBDay that returns true if it's your birthday, false otherwise.
*/
function IsTodayMyBDay(x) {
	if (x == '17.08.1993') return true;
	else return false;
}
console.log(IsTodayMyBDay('17.08.1994'));
// JS Arrays // Objs
// NOTE: movies array is defined at the end of the file!

const movies = [
    {
      Title: "The Lord of the Rings: The Fellowship of the Ring",
      Year: "2001",
      imdbID: "tt0120737",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
    },
    {
      Title: "The Lord of the Rings: The Return of the King",
      Year: "2003",
      imdbID: "tt0167260",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    },
    {
      Title: "The Lord of the Rings: The Two Towers",
      Year: "2002",
      imdbID: "tt0167261",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    },
    {
      Title: "Lord of War",
      Year: "2005",
      imdbID: "tt0399295",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
    },
    {
      Title: "Lords of Dogtown",
      Year: "2005",
      imdbID: "tt0355702",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
    },
    {
      Title: "The Lord of the Rings",
      Year: "1978",
      imdbID: "tt0077869",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    },
    {
      Title: "Lord of the Flies",
      Year: "1990",
      imdbID: "tt0100054",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
    },
    {
      Title: "The Lords of Salem",
      Year: "2012",
      imdbID: "tt1731697",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
    },
    {
      Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
      Year: "1984",
      imdbID: "tt0087365",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
    },
    {
      Title: "Lord of the Flies",
      Year: "1963",
      imdbID: "tt0057261",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
    },
    {
      Title: "The Avengers",
      Year: "2012",
      imdbID: "tt0848228",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    },
    {
      Title: "Avengers: Infinity War",
      Year: "2018",
      imdbID: "tt4154756",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
    },
    {
      Title: "Avengers: Age of Ultron",
      Year: "2015",
      imdbID: "tt2395427",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
    },
    {
      Title: "Avengers: Endgame",
      Year: "2019",
      imdbID: "tt4154796",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
    }
]



/* Ex.11
   Write the function deleteProp that receives an object and a string, and returns the object after deleting the property with that given name.
*/
const deleteProperty = ''
const deletepop = function(x,y) 

{


}

/* Ex.12 
    Write the function olderMovie that finds the older movie in the array.
*/

function olderMovie() {
    let oldest = movies[0].Year;
    for (i = 1; i < movies.length - 1; i++) {
      if (oldest > movies[i + 1].Year) {
        oldest = movies[i + 1].Year;
      }
    }
    return oldest;
  }
  console.log(olderMovie)
// const olderMovie = function(){
//     let largest = '';
//     for(let i=0;i<14;i++)
//     {for(let j=1;j<15;j++){

  
// if(movies[i].Year>movies[j].Year)

// largest= movies[i].Year;
// else largest = movies[j].Year;
   

// }
// }
// console.log(largest)
// }

//  olderMovie();


/* Ex.13
    Write the function countMovies that returns the number of movies into the array.
*/
function countMovies() {
    return movies.length;
  }
/* Ex.14
    Write the function onlyTitles that creates an array with only the titles of the movies.
*/
function onlyTitles() {
    let output = [];
    for (i = 0; i < movies.length; i++) {
      output.push(movies[i].Title);
    }
    return output;
  }

/* Ex.15
   Write the function onlyThisMillennium that returns only the movies produced in this millennium.
*/
function OnlyThisMillennium() {
    let output = [];
    for (i = 0; i < movies.length; i++) {
      if (1999 < movies[i].Year) {
        output.push(movies[i]);
      }
    }
    return output;
  }
/* Ex.16 
    Write the function getMovieById that receives an id and returns the movie with the given id.
*/
function getMovieById(id) {
    let output = [];
    for (i = 0; i < movies.length; i++) {
      if (id === movies[i].imdbID) {
        output.push(movies[i]);
      }
    }
    return output;
  }

/* Ex.17
    Write the function sumYears that returns the sum of the years the movie has been produced.
*/
function sumYears() {
    let output = [];
    for (i = 0; i < movies.length; i++) {
      output.push(parseInt(movies[i].Year));
    }
    const sum = output.reduce((a, b) => a + b, 0);
    return sum;
  }

/* Ex.18
    Write the function searchMovie that receives a string and returns all the movies with that string in the title.
*/
function searchMovie(str) {
    let output = [];
    for (i = 0; i < movies.length; i++) {
      if (movies[i].Title.indexOf(str) != -1) {
        output.push(movies[i].Title);
      }
    }
    return output;
  }
/* Ex.19
    Write the function searchAndDivide that receives a string and returns an object with an array "match" with all the movies that contains the given string in the title, and another array "nonMatch" with all the other movies.
*/
function searchAndDivide(str) {
    let match = [];
    let nonMatch = [];
    match = Object.assign(searchMovie(str));
    for (i = 0; i < movies.length; i++) {
      if (movies[i].Title.indexOf(str) == -1) {
        nonMatch.push(movies[i].Title);
      }
    }
    return `match: ${match}\nnonMatch: ${nonMatch}`.split(",").join(", ");
  }

/* Ex.20
   Write the function deleteX that receives a number and returns an array without the element in the given position.
*/
function deleteX(n) {
    movies.filter(n)
  }

// [EXTRAS] JS Advanced

/* Ex.21
  Create a function halfTree that recives the height creates an "*" half tree with that height.
  Example:
  halfTree(3)
  *
  **
  ***
*/
function halfTree(height) {
    if (isNumber(height)) {
      if (height < 0)
        height = -height;
      let tree = [];
      for (i = 0; i < height; i++) {
        let stars = [];
        let width = i;
        for (j = 0; j <= width; j++) {
          stars.push("*");
        }
        let tmp = stars.join("")
        tree[i] = Object.assign(tmp)
      }
      for (i = 0; i < height; i++) {
        let text = `${tree[i]}`
        console.log(text)
      }
    }
  }

/* Ex.22 
  Create a function tree that receives the height and creates an "*" tree with that height.
  Example: 
  tree(3)
    *  
   *** 
  *****
*/

/* Ex.23
  Create a function isItPrime that receives a number and returns true if the number is a prime number.
*/

