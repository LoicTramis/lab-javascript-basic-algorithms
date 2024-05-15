// Iteration 1: Names and Input
const hacker1 = "Paulae";
console.log(`The driver's name is ${hacker1}`);
const hacker2 = "Paula";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}
// Iteration 3: Loops
let spacedCapitalName = "";
for (let index = 0; index < hacker1.length; index++) {
    spacedCapitalName += hacker1[index].toUpperCase() + " ";
}
console.log(spacedCapitalName)

let reversedName = "";
for (let index = 0; index < hacker1.length; index++) {
    reversedName += hacker1[hacker1.length - index - 1];
}
console.log(reversedName)

let lexicalOrderName = "";
let length = 0;

// Choose the length of longest word
if (hacker1.length < hacker2.length) {
    length = hacker2.length
} else {
    length = hacker1.length
}

/* 
    For each iteration of the longest word

*/
for (let index = 0; index < length; index++) {
    if (hacker1[index] < hacker2[index] || !hacker1[index] && hacker2[index]) {
        console.log("The driver's name goes first.")
        break;
    } else if (hacker1[index] < hacker2[index] || hacker1[index] && !hacker2[index]) {
        console.log("Yo, the navigator goes first, definitely.")
        break;
    } else if ((!hacker1[index + 1] && !hacker2[index + 1]) && hacker1[index] === hacker2[index]) {
        console.log("What?! You both have the same name?")
        break;
    }
}


// Bonus Time! 1.
const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus id erat iaculis suscipit. Etiam in porta augue. Cras vehicula nibh viverra efficitur ullamcorper. Phasellus nec sodales tellus, quis fringilla neque. Ut et tellus egestas, venenatis urna sed, aliquam quam. Ut mollis sodales sem sit amet laoreet. Phasellus lobortis maximus maximus. Nunc massa lorem, venenatis ut felis vel, fermentum tempus risus. Phasellus viverra dictum enim lobortis commodo. Sed id dignissim massa, non tempus urna. Cras laoreet scelerisque massa eu bibendum. Etiam congue massa in nunc tempus pretium. Nulla convallis velit eget fringilla aliquet. Integer ut elementum purus. Duis vitae feugiat odio. Proin justo diam, mattis ac interdum ut, gravida ac purus.

In dictum malesuada placerat. Mauris hendrerit lectus vitae varius ultrices. Nam dictum pulvinar mi, vitae fermentum orci eleifend at. Donec at porttitor lectus, mollis dapibus ipsum. Cras vulputate nisl finibus, mattis metus sed, iaculis eros. Donec nec est fermentum, cursus nulla ultricies, gravida dolor. Maecenas mollis dapibus mi, in volutpat sapien dignissim in. Donec ultricies mi ante, quis ultricies ipsum consectetur at. Donec id velit aliquam, interdum dui quis, cursus ex.

Nulla aliquam ullamcorper porttitor. Fusce quis vehicula massa. Ut eget leo non lorem commodo auctor eget quis nibh. Donec sit amet maximus mauris. Nam fringilla at erat sit amet tempus. Vestibulum bibendum ipsum in eros euismod, id convallis tortor tristique. Nulla auctor, nulla id egestas venenatis, lectus mi fringilla dolor, nec vestibulum ex magna vitae lorem. Aliquam vitae odio a diam vehicula porta et eu magna. Nunc sit amet arcu vel lorem consequat commodo sit amet in purus.`;

let numberOfWords = 0;
let numberOfEt = 0;
for (let index = 0; index < longText.length; index++) {
    if (longText[index] === " ") {
        numberOfWords++;
    }
    const etWord = longText[index] + longText[index + 1]
    if (etWord === "et") {
        numberOfEt++;
    }
}
console.log(numberOfWords);
console.log(numberOfEt);

// Bonus Time! 2.
const phrases = [
    `A man, a plan, a canal, Panama!`,
    `Amor, Roma`,
    `race car`,
    `stack cats`,
    `step on no pets`,
    `taco cat`,
    `put it up`,
    `Was it a car or a cat I saw?" and "No 'x' in Nixon`,
];
for (let phrase = 0; phrase < phrases.length; phrase++) {
    let beginning = "";
    let ending = "";
    let phraseToCheck = phrases[phrase].replace(/ |,|\?|"|'|!/g, "");

    for (let index = 0; index < phraseToCheck.length; index++) {

            beginning += phraseToCheck[index].toLowerCase();
            ending += phraseToCheck[phraseToCheck.length - index - 1].toLowerCase();    
    }
    if (beginning === ending) {
        console.log(`${phrases[phrase]} is a palindrome.`)
    }
}