const obj = {
  fname: "Piyush",
  lname: "Khati",
  age: 25,
};

const objProxy = new Proxy(obj, {
  get(target, prop) {
    // if (prop in target) return target[prop];
    if (prop in target) return Reflect.get(target,prop);
    else return false;
  },
  set(target, prop, value) {
    if (!(prop in target)) throw new Error(`${prop} does not exist`);
    switch (prop) {
      case "fname":
      case "lname":
        if (typeof value !== "string")
          throw new Error(`${prop} must be a string`);
        break;
      case "age":
        if (typeof value !== "number")
          throw new Error(`${prop} must be a number`);
        if (value <= 0) throw new Error(`${prop} must be a greater than zero`);
    }
    Reflect.set(target,prop,value); // namespace Obj that contains static methods for invoking intercepatble JS obj internal methods. The methods are the same as those of proxy handlers
    // target[prop]=value; // This can crash in some cases so use Reflect
  },
});
objProxy.fname="Piyushh";
console.log(objProxy);
