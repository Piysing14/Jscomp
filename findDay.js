function getDayName(dateString) {
    let dayName;
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    const date = new Date(dateString);  // Convert the string to a Date object
    dayName = days[date.getDay()];      // Get the day name using the getDay() method
    
    return dayName;
}

// Example usage
const dateInput = "2025-01-20";
console.log(getDayName(dateInput));  // Output: "Tuesday" (depending on the date)
