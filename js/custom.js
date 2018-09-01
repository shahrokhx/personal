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