/*
1)
Create a function to calculate the sum of the two given integers. If the two values are same, then returns triple their sum.
*/
const tripleSum = (a, b) =>
  parseInt(a) === parseInt(b) ? (a + b) * 3 : "two numbers are not equal";

/*
2)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
*/
const isFifty = (a, b) => (a === 50 || b === 50 || a + b === 50 ? true : false);

/*
3)
Create a function to remove a character at the specified position of a given string and return the new string.
*/
const striveSplice = (str, nbr) => {
  let arr = [];
  arr = str.split("");
  return arr.splice(nbr - 1, 1);
};

/*
4)
 Create a function to find the largest of three given integers.
*/
const biggestNbr = (a, b, c) => {
  const bigger = (i, j) => (parseInt(i) > parseInt(j) ? i : j);
  return bigger(bigger(a, b), c);
};

/*
5)
Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
*/
const dualRange = (i, j) => {
  const chkRange = (m, n, o) => (o <= n && o >= m ? true : false);
  if (chkRange(40, 60, i) && chkRange(40, 60, j)) {
    return "inclusive in 40 - 60";
  } else if (chkRange(70, 100, i) && chkRange(70, 100, j)) {
    return "inclusive in 70 - 100";
  }
};

/*
6)
Create a function to create a new string of specified copies (positive number) of a given string.
*/
const multiStr = (str, nbr) => {
  let arr = [];
  if (nbr > 0) {
    for (i = 0; i < nbr; i++) {
      arr.push(str);
    }
  }
  return arr;
};

/*
7)
Create a function to display the city name if the string begins with "Los" or "New" otherwise return blank.
*/
const cap = (str) => str.replace(/^\w/, (c) => c.toUpperCase());
const findCity = (city) => {
  let str = cap(city);
  str.startsWith("Los") || str.startsWith("New") ? console.log(str) : "";
};

/*
8)
Create a function to calculate the sum of three elements of a given array of integers of length 3.
*/
const sumArr = function (arr) {
  let tmp = arr[0];
  for (let i = 1; i < arr.length; i++) {
    tmp += arr[i];
  }
  return tmp;
};

/*
9)
Create a function to test whether an array of integers of length 2 contains 1 or a 3.
*/
const oneOrThree = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1 || arr[i] === 3) {
      return true;
    }
  }
  return false;
};

/*
10)
Create a function to test whether an array of integers of length 2 does not contain 1 or a 3
*/
const nietherOneOrThree = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1 || arr[i] === 3) {
      return false;
    }
  }
  return true;
};

/*
11)
Create a function to find the longest string from a given array of strings.
*/
// const findLongestArr = function (arr) {
//   let tmp = arr[0];
//   let unique = 0;
//   for (let i = 1; i < arr.length; i++) {
//     if (tmp.length === arr[i].length) {
//       unique = arr[i].length;
//     }
//     if (tmp.length < arr[i].length) {
//       tmp = arr[i];
//     }
//   }
//   if (unique !== 0) {
//     let multiLongest = [];
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i].length === unique) {
//         multiLongest.push(arr[i]);
//       }
//     }
//     return multiLongest;
//   } else {
//     return tmp;
//   }
// };

const findLongestArr = (arr) => {
  let result = [];
  arr.forEach((e) => result.push(e.length));
  return Math.max(...result);
};

/*
12)
Create a function to find the types of a given angle.
Types of angles:
    Acute angle: An angle between 0 and 90 degrees.
    Right angle: An 90 degree angle.
    btuse angle: An angle between 90 and 180 degrees.
    Straight angle: A 180 degree angle.
*/
const angleType = function (nbr) {
  nbr = parseInt(nbr);
  switch (true) {
    case nbr >= 0 && nbr < 90:
      return "Acute angle";
      break;
    case nbr === 90:
      return "Right angle";
      break;
    case nbr > 90 && nbr < 190:
      return "btuse angle";
      break;
    case nbr === 180:
      return "Straight angle";
      break;
    default:
      return "out of reach";
  }
};

/*
13)
Create a function to find the index of the greatest element of a given array of integers
*/
const findGreatest = function (arr) {
  let tmp = arr[0];
  let notUnique = [0];
  for (let i = 1; i < arr.length; i++) {
    if (tmp < arr[i]) {
      tmp = arr[i];
      if (notUnique.length === 1) {
        notUnique[0] = i;
      } else {
        notUnique = 0;
        notUnique.push(i);
      }
    }
    if (tmp === arr[i]) {
      if (notUnique[0] !== i) {
        notUnique.push(i);
      }
    }
  }
  if (tmp.length === 1) {
    return tmp[0];
  } else {
    return notUnique;
  }
};

/*
14)
Create a function to get the largest even number from an array of integers.
*/
const findGreatestEven = function (arr) {
  let tmp = arr[0] % 2 === 0 ? arr[i] : 0;
  let notUnique = [0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      if (tmp < arr[i]) {
        tmp = arr[i];
        if (notUnique.length === 1) {
          notUnique[0] = i;
        } else {
          notUnique = 0;
          notUnique.push(i);
        }
      }
      if (tmp === arr[i]) {
        if (notUnique[0] !== i) {
          notUnique.push(i);
        }
      }
    }
  }
  if (tmp.length === 1) {
    return tmp[0];
  } else {
    return notUnique;
  }
};

/*
15)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
16)
Create a function to check from two given integers, whether one is positive and another one is negative.
*/
const minAndMax = function (i, j) {
  if (i > 0) {
    console.log("i is positive");
  } else if (i < 0) {
    console.log("i is negative");
  } else {
    console.log("0 is neither positive nor negative");
  }
  if (j > 0) {
    console.log("j is positive");
  } else if (j < 0) {
    console.log("j is negative");
  } else {
    console.log("0 is neither positive nor negative");
  }
};

/*
17)
Create a function to create new string with first 3 characters are in lower case and the others in upper case. If the string length is less than 3 convert all the characters in upper case.
*/
const lowUppercase = function (str) {
  if (str.length <= 3) {
    return str.toUpperCase;
  } else {
    return (
      str.substr(0, 3).toLowerCase() +
      str.substr(3, str.length - 1).toUpperCase()
    );
  }
};

/*
18)
Create a function to calculate the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.
*/

const isEighty = (i, j) => (i + j >= 50 && i + j <= 80 ? 65 : 80);

/*
19)
Create a function to convert a number to a string, the contents of which depend on the number's factors. Follow next example:
If the number has 3 as a factor, output 'Diego'.
If the number has 5 as a factor, output 'Riccardo'.
If the number has 7 as a factor, output 'Stefano'.
If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
Examples
28's factors are 1, 2, 4, 7, 14, 28.
this would be a simple "Stefano".
30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
this would be a "DiegoRiccardo".
34 has four factors: 1, 2, 17, and 34.
this would be "34".
*/
const striveDivision = function (n) {
  let result = "";
  if (!(n % 3)) {
    result += "Diego";
  }
  if (!(n % 5)) {
    result += "Riccardo";
  }
  if (!(n % 7)) {
    result += "Stefano";
  }

  return result;
};

/*
20)
Create a function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC
*/
const acronym = function (str) {
  let arr = str.split(" ");
  let result = "";
  arr.forEach((arr) => (result += arr.substr(0, 1).toUpperCase()));
  return result;
};