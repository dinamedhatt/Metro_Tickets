///start from 1 to 12
///all chairs
///cookieVal return of getcookie
///intVal return but number
///newVal valeu will be added in cookie "update"
///remain to calculate remain chairs

var numChair;
var totalNum;
totalNum = 12;
var cookieVal, intVal, newVal;
var remain;

///to hold number of chair cookie value for booked chairs still remain
///when i refresh and in case that cookie is expired 


displaySeats(intVal,7,6);  ///to start change new images


function bookNow() {
	cookieVal = $_C().getCookie("number_of_chair");
	if (cookieVal == 0) {
		intVal = 0;

	} else {

		intVal = parseInt(cookieVal);
	}

	numChair = parseInt(document.getElementById("num").value); ///to hold input value
	///to be changes remain 
	///عشان الحجز الى القديم يفضل زى ما كان
	if ((document.getElementById("num").value) == "") {
		alert("please enter number");
	}
	else {
		if (intVal != 12) {
			
			displaySeats(intVal,7,6);
			
			remain = totalNum - intVal;///12- oldValue of cookie "the first time will be 0 "

			if (numChair <= remain) {
				newVal = numChair + intVal; ///update cookie
				$_C().setCookie("number_of_chair", newVal, 1);
				
		        displaySeats(newVal,7,6);
				
				alert("Congratulations :) Seats Booking is Done");
			}
			else { alert("Please enter less number of seats :("); }

		}
		else {
			alert("No Available Seats :(");
		}
	}
}



function cancelBook() {
	cookieVal = $_C().getCookie("number_of_chair");
	if (cookieVal == 0) {
		intVal = 0;

	} else {

		intVal = parseInt(cookieVal);
	}
	numChair = parseInt(document.getElementById("num").value); ///to hold input value
	if (intVal == 0) { alert("No seats here to cancel"); }
	else {
		newVal = intVal - numChair;
		if (numChair <= intVal) {
			$_C().setCookie("number_of_chair", newVal);
			
			displaySeats(numChair,9,8);
			
			alert("Cancelation Done");
			location.reload();
		} else { alert("The number you entered is more than your booked seats :("); }
	}

}



$(".arrowBtn").click(function () {
	var arrowClass = $(".arrowBtn i").attr("class");

	if (arrowClass == "fas fa-angle-down") {
		$(".imgDiv").css({ "overflow": "visible", "height": "100%" });
		$(".arrowBtn i").removeClass().addClass("fas fa-angle-up");
		var arrowClass = $(".arrowBtn i").attr("class");
	}

	else {
		$(".imgDiv").css({ "overflow": "hidden", "height": "520px" });
		$(".arrowBtn i").removeClass().addClass("fas fa-angle-down");
	}
});


$("#ticketBtn").click(function () {
	if ((($_C().getCookie("FromStation") == "") || ($_C().getCookie("Price") == "")) || ($_C().getCookie("number_of_chair") == 0)) {
		alert("You haven't booked a trip yet!");
		return false;
	}
	location.assign("Ticket.html");
});

function displaySeats(numberofSeats,imgLeft,imgRight){
	   var srcLeft="../img/seats/"+imgLeft+".png";
	   var srcRight="../img/seats/"+imgRight+".png";
			for (var i = 1; i <= numberofSeats; i++) { 

					if (i <= 6) { //i 1:6

                    
						document.getElementsByClassName("status")[i - 1].src =srcLeft ;
					}
					else {  // i 7:12

						document.getElementsByClassName("status")[i - 1].src = srcRight;
					}


				}
}
