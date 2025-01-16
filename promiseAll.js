let promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, "First");
  });
  let promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, "Second");
  });
  let promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 4000, "Third");
  });
  
  Promise.all([promise1, promise2, promise3])
    .then((value) => console.log(value))
    .catch((err) => console.log("Some error Occured: ",err));
  