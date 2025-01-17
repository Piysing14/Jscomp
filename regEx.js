function isValidURL(url) {
    const regex = /^(ftp|http|https):\/\/[^\s]+$/;
     return regex.test(url);
  }
  console.log(isValidURL('https://www.google.com'))


  //Extract number from a string

  function extractNumbers(str) {
    // Define regex to match integers and floating-point numbers
    const regex = /\d+(\.\d+)?/g;
    
    // Match numbers and convert matched strings to numbers, or return an empty array if no matches
    const matches = str.match(regex);
    return matches ? matches.map(Number) : [];
}