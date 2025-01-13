const person = {
    name: "Piyush",
    greet: function() {
      console.log(`Hello, my name is ${this.name}`);
    }
  };
  
  const greetPerson = person.greet;
  greetPerson(); // Undefined, because `this` refers to the global object or undefined in strict mode
  
  const boundGreet = person.greet.bind(person);
  boundGreet(); // Hello, my name is Piyush
  