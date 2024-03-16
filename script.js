
function startCountdown() {
  // Get the user input date and time
  var userInput = document.getElementById("userDate").value;
  
  // Set the date we're counting down to
  var countDownDate = new Date(userInput).getTime();

  // Update the countdown every 1 second
  var x = setInterval(function() {

    // Get the current date and time
    var now = new Date().getTime();
      
    // Calculate the distance between now and the countdown date
    var distance = countDownDate - now;
      
    // Calculate days, hours, minutes, and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
    // Output the result in an element with id="countdown"
    var countdownElement = document.getElementById("countdown");
    if (distance > 0) {
      countdownElement.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    } else {
      clearInterval(x);
      countdownElement.innerHTML = "EXPIRED";
    }
  }, 1000);
}
