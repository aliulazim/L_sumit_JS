// How to check 1-6 randomly


function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomNum(1, 6));

// 2. How to arrange class student names alphabetically.

const students = ["sumit", "saad", "daiyan", "akash"];
console.log(students.sort());

// How to arrange class student roll Number small to large
const rollNumbers = [8, 5, 11, 22, 1];
console.log(rollNumbers.sort(function(a, b){
    return a - b; 
}));

// How to arrange class student roll Number  large to small
const roll_Numbers = [8, 5, 11, 22, 1];
console.log(roll_Numbers.sort(function(a, b){
    return b - a; 
}));

//  How to check leap year 
function isLeapYear(year) {
    if ((year % 400 === 0) || ((year % 4 === 0) && (year % 100 !== 0))) {
        console.log(`${year} is a leap year!`);
    } else {
        console.log(`${year} is not a leap year!`);
    }
}
isLeapYear(2528);

//  How many vowel have a sentence

// 1st wyea

/*
const vowels1 = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

function countVowel(sentence) {
    let count = 0;
    const letters = Array.from(sentence);
    letters.forEach(function (value) {
        if (vowels1.includes(value)) {
            count++;
        }
    })
    return count;
}

console.log(`Total vowels =  ${countVowel('I i I I Love Bangladesh')}`);
 */



// 2nd wyea


const vowels = ['a', 'e', 'i', 'o', 'u'];
const uppercased = vowels.map(arr => arr.toUpperCase());

// console.log(uppercased);

vowels.push(...uppercased);
console.log(vowels);

function countVowel(sentence) {
    let count = 0;
    const letters = Array.from(sentence);
    letters.forEach(function (value) {
        if (vowels.includes(value)) {
            count++;
        }
    })
    return count;
}

console.log(`Total vowels =  ${countVowel('I i I I Love Bangladesh')}`);


//  Found a duplicate value in an array

const numbers = [5, 1, 2, 5, 4, 6, 4, 7, 9, 11, 11, 6];

const duplicate = numbers.filter(function (value, index, array) {
    return array.indexOf(value) !== index
    
});

console.log(`Duplicate Valur: ${duplicate}`);


//  Found a Unique Numbers in an array

const numbers1 = [5, 1, 2, 5, 4, 6, 4, 7, 9, 11, 11, 6];
console.log(numbers1);

const uniqueNumbers = numbers.filter(function (value, index, array) {
    return array.indexOf(value) === index
    
});

console.log(`Unique Numbers: ${uniqueNumbers}`);


