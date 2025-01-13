let Car=Object.seal({
    Engine:"7 DCT Turbo",
    BHP:160,
    Torque: "253Nm",
    Type:"Sedan",
    model:2023
})

Car.model=2025 //existing prop we can change
Car.brand="Hyundai" //Cant add new prop as it is sealed
console.log(Car)