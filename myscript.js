var demo = document.getElementById("demo");

// Set the date we're counting down to
var endTime = new Date("Jan 1, 2025 00:00:00").getTime();
	
// Update the count down every 1 second
setInterval(function() {
    // Get today's date and time
    var startTime = new Date().getTime();
    
    // Find the difference (in seconds) between start and end time
    var diff = (endTime - startTime) / 1000;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(diff / 86400);
    var hours = Math.floor(diff / 3600) % 24;
    var minutes = Math.floor(diff / 60) % 60;
    var seconds = Math.floor(diff) % 60;
    
    /*
    var totalSeconds = Math.floor(diff);
    var currentSecond = totalSeconds % 60;
    var totalMinutes = Math.floor(totalSeconds / 60);
    var currentMinute = totalMinutes % 60;
    var totalHours = Math.floor(totalMinutes / 60);
    var currentHour = totalHours % 24;
    var totalDays = Math.floor(totalHours / 24);
    */
    
    // Output the result in an element with id="demo"
    demo.innerHTML = days + " days, " + hours + " hours, " + minutes + " mins, " + seconds + " secs";
}, 1000);
