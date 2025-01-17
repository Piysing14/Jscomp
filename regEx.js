function isValidURL(url) {
    const regex = /^(ftp|http|https):\/\/[^\s]+$/;
     return regex.test(url);
  }
  
  console.log(isValidURL('https://www.google.com'))