'use strict'

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
	
	/*
	 * This function highlights the parking structure the user selects. This is an indication to the user
	 * to know which one he has selected. 
	 */
	$(".settings th, .permits li").click(function() {
		console.log("listitem clicked");
		var color = $( this ).css("background-color");

		// If current color is white, turn to something else
		if(color == "rgba(0, 0, 0, 0)" || color == "rgb(255, 255, 255)") {
			$(".settings th, .permits li").css("background", "white");
			$(".settings th, .permits li").css("color", "black");
			$(this).css("background", "#4CAF50");
			$(this).css('color', 'white');
		} else {
			$(this).css("background", "white");
			$(this).css('color', 'black');
		}
	})

	// Specifically for parking alerts
	$(".options li").click(function() {
		console.log("listitem clicked");
		var color = $( this ).css("background-color");

		// If current color is white, turn to something else
		if(color == "rgba(0, 0, 0, 0)" || color == "rgb(255, 255, 255)") {
			$(".options li").css("background", "white");
			$(".options li").css("color", "black");
			$(this).css("background", "#4CAF50");
			$(this).css('color', 'white');
			//alert("You will now be receiving notifications for " + $(this, ".inner").text());
			
			// Parking alerts		
			swal({
			  	title: "Parking Alerts",
			  	text: "Are you sure you want Parking alerts?",
			  	icon: "warning",
			  	buttons: true,
			  	dangerMode: true,
			})
			.then((willDelete) => {
			  	if (willDelete) { // Pressed OK
			    	
			  	} else { // Pressed Cancel
			    	$(this).css("background", "white");
					$(this).css('color', 'black');
			  	}
			});
			// End parking alert

		} else {
			$(this).css("background", "white");
			$(this).css('color', 'black');
		}
	})


	$(".dropdown-content a").click(function() {
		console.log("clicked");
		location.reload();
	})
})

function initializePage() {
	console.log("Javascript Connected!");
}