let Car=Object.seal({
    Engine:"7 DCT Turbo",
    BHP:160,
    Torque: "253Nm",
    Type:"Sedan",
    model:2023
})

let Owner={
    name:"Piyush",
    age:26
}

Car.model=2025 //existing prop we can change
Car.brand="Hyundai" //Cant add new prop as it is sealed
console.log(Car,Object.isSealed(Car))
console.log(Owner,Object.isSealed(Owner))