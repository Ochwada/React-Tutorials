import emojipedia from "./emojipedia";


const newEmojipedia = emojipedia.map((emojiEntry) => {
    return emojiEntry.meaning.substring(0,100)

});

console.log(newEmojipedia);
//Map -Create a new array by doing something with each item in an array.


//Filter - Create a new array by keeping the items that return true.

//Reduce - Accumulate a value by doing something to each item in an array.

//Find - find the first item that matches from an array.

//FindIndex - find the index of the first item that matches.
