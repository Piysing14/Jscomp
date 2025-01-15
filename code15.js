//Input:
// s = "Hello World"
// Output:
// 5
// Explanation:
// The last word is "World" with length 5.

var lastWords = function(s) {
    let trimStr = s.trim();  // Remove whitespace
    let result = '';         // Initialize a new string for the result

    for (let word of trimStr) {
        result += word.toLowerCase();  // Append the lowercase version of each character
    }
    
     console.log(result);  // Return the entire modified string
};


lastWords("Hello World")
