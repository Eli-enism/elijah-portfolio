function getCurrentDate() {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const now = new Date();
    const dayOfWeek = daysOfWeek[now.getDay()]; // Get day of the week (0-6)
    const dayOfMonth = now.getDate(); // Get day of the month (1-31)
    const month = monthsOfYear[now.getMonth()]; // Get month (0-11)

    // Format date as "Day, Month Date, Year"
    const dateString = `${dayOfWeek}, ${month} ${dayOfMonth}`;
    
    // Set the date string in the HTML element with ID "date"
    document.getElementById('date').textContent = dateString;
}

// Call the function when the page loads
getCurrentDate();