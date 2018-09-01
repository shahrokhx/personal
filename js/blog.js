// function instagramFetch(){
	var feed = new Instafeed({
        get: 'user',

        // My public
        userId: 8243079691,
        accessToken: '8243079691.1677ed0.5df9b9cdb6744d83bbd12a1bfc0d8c91',
        
        // My Private
        // userId: 1441049479,
        // accessToken: '1441049479.1677ed0.a2ecf188756c4539bda0c4885ebbdccd',
        
        target: 'instagram',
        resolution: 'standard_resolution',
        orientation: 'square',
        limit: 6,

        filter: function(image) {

			var date = new Date(image.created_time*1000);

			m = date.getMonth();
			d = date.getDate();
			y = date.getFullYear();

			var month_names = new Array ( );
			month_names[month_names.length] = "Jan";
			month_names[month_names.length] = "Feb";
			month_names[month_names.length] = "Mar";
			month_names[month_names.length] = "Apr";
			month_names[month_names.length] = "May";
			month_names[month_names.length] = "Jun";
			month_names[month_names.length] = "Jul";
			month_names[month_names.length] = "Aug";
			month_names[month_names.length] = "Sep";
			month_names[month_names.length] = "Oct";
			month_names[month_names.length] = "Nov";
			month_names[month_names.length] = "Dec";

			var thetime = month_names[m] + ' ' + d + ' ' + y;

			image.created_time = thetime;

			return true;
		},

		after: function() {
		    // disable button if no more results to load
		    if (!this.hasNext()) {
		      loadMore.setAttribute('disabled', 'disabled');
		    }
		  },
        template: '<div class="col-md-4 col-sm-6"> <div class="project-item"><img src="{{image}}" alt=""><div class="project-hover"><div class="inside"><h5><a href="{{link}}" class="button alt" target="_blank"> <i class="fa fa-instagram"></i> <u>See More</u> </a></h5> <hr> <p><i class="fa fa-location-arrow"></i>  {{location}} <br>{{likes}} likes  <br>{{comments}} comments</p> </div> </div></div>   <div class="txt-content"><p5>{{model.created_time}}</p5> <br> <p><i class="fa fa-camera-retro"></i>   &nbsp {{caption}}</p></div>   </div>'
    });
    feed.run();
// }

var loadMore = document.getElementById("loadMoreInsta");
loadMore.addEventListener("click", function() {
  feed.next();
});


/*
<div class="col-md-4 col-sm-6"> 
    <div class="project-item">
    	<img src="{{image}}" alt="">
    	<div class="project-hover">
    		<div class="inside">
    			<h5><a href="{{link}}" target="_blank">{{caption}}</a></h5> 
    			<p>{{location}} <br>{{likes}} likes  <br>{{comments}} comments</p> 
			</div> 
		</div> 
	</div> 
	<div class="project-content">
		<p>{{caption}}</p><
	</div>
</div>

        template: '<div class="col-md-4 col-sm-6"> <div class="project-item"><img src="{{image}}" alt=""><div class="project-hover"><div class="inside"><p5>{{model.created_time}}  </p5> <h5><a href="{{link}}" target="_blank">{{caption}}</a></h5> <hr> <p><i class="fa fa-location-arrow"></i>  {{location}} <br>{{likes}} likes  <br>{{comments}} comments</p> </div> </div></div>   <div class="txt-content"><p><i class="fa fa-camera-retro"></i>   &nbsp {{caption}}</p></div>   </div>'
*/
