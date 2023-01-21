// ===============================================================
// Write a function which takes two numbers and returns their sum.
// ===============================================================

// 1. Can I restate the problem in my own words?
"implement addition"
// 2. What are the inputs that go into the problem?
    // - ints?
    // - floats?
    // - what about string for large numbers?
// 3. What are the outputs that should come from the solution to the problem?
    // - int? float? string?
// 4. Can the outputs be dermined from the inputs? In ther words, do i have enough inforamtion to solve the problem.
// 5. How should I label the important pieces of data that are a part of the problem?

// ===========================================================================================
// Write a function which takes in a string and returns counts of each character in the string.
// ===========================================================================================

//charCount("aaaa") // {a:4}
charCount("Hello") // {h:1, e:1, l:2, o:1}
//charCount("Your PIN number is 1234!") // {1:1, 2:1, 3:2, 4:1, b:1, e:1, i:2, m:1, n:2, o:1, p:1, r:2, s:1, u:2, y:1}

function charCount(str) {
    // make object to return at end
    var result = {};
    // loop over string for each character
    for (let i = 0; i < str.length; i++) {
        var char = str[i].toLowerCase();
        // if the char is a number/letter AND key in object, add one to count
        if(result[char]) {
            result[char]++;
        } 
        // if the char is a number/letter AND not in object, add it to object and set value to 1
        else {
            result[char] = 1;
        }
    }
        
        
        // if character is something else (space, period, etc.) don't do anything
    // return object at end
    return result;
}