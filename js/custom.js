function sendMsg(){

	var name = document.getElementById('your-name').value
	var email = document.getElementById('email').value
	var subject = document.getElementById('your-subject').value
	var msg = document.getElementById('message').value

	console.log('SEND PRESSED')
	console.log(name)
	console.log(email)
	console.log(msg)

	if (name!='' && email!='') {
		sleep(2000)
		var at = String.fromCharCode(64);
		window.open('mailto:shahi.gatech'+at+'gmail.com?subject='+subject+'&body='+msg);
	}
	
}


function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

/*
twttr.widgets.createTimeline(
  {
    sourceType: "list",
    ownerScreenName: "TwitterDev",
    slug: "national-parks"
  },
  document.getElementById("container")
);
*/


// Set the date we're counting down to
var countDownDate = new Date("Oct 29, 2018 15:37:25").getTime();

// Update the count down every 1 second
var countdownfunction = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now an the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="demo"
    document.getElementById("demo").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    document.getElementById("demo1").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(countdownfunction);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);