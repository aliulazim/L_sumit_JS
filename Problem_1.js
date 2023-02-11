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



