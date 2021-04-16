//WHEN CLICKING ON LOGO
function home() {
    location.assign("home.html");
}
///////////////////////////////////////

//HIDE AND SHOW OF LOG BUTTONS
if ($_C().getCookie("userVisit") == 1) {
    $("#name").html($_C().getCookie("UserName"));
    $("#logBtn").hide();
    $("#regesterBTN").hide();
}
else {
    $("#logoutBTN").hide();
}


function logout() {

    $_C().setCookie("userVisit", 0);
    location.assign("home.html");

}

//////////////////////////////////////

//WHEN CLICKING ON TRIP ANCHOR
function checkTrip() {
    if ($_C().getCookie("FromStation") == "" || $_C().getCookie("Price") == "" || $_C().getCookie("number_of_chair") == "" || ($_C().getCookie("ConfirmFlag") == 0)) {
        alert("You haven't booked a trip yet!");
        //return false;
    }
    else {
        location.assign("trips.html");
    }

}

function checkLoggedIn() {
    if ($_C().getCookie("userVisit") != 1) {
        alert("You are not logged in please login and try again :)");
    }
    else {
        checkTrip();
    }
}


////////////////////////////////////

//WHEN CLICKING ON PROFILE ANCHOR
function check() {
    if ($_C().getCookie("userVisit") == 1) {
        location.assign("profile.html");
    }
    else {
        alert("You are not logged in please login and try again :)");
    }
}


////////////////////////////////////


//WHEN NAVIGATING IN URL WITHOUT LOG IN
function checkl() {
    if ($_C().getCookie("userVisit") != 1) {
        // alert("You are not logged in please login and try again :)");
        location.assign("login.html");
    }
}

//////////////////////////////////

//DISPLAY USER INFO IN FORM
(function () {
    $("#UserName").val($_C().getCookie("UserName"));
    $("#UserEmail").val($_C().getCookie("useremail"));
    $("#UserPassword").val($_C().getCookie("userPassword"));
    if ($_C().getCookie("usergender") == "Male") {
        $("#profileImg").attr("src", "/img/profile/male-profile.png");
    }
    else {
        $("#profileImg").attr("src", "/img/profile/female-profile.png");
    }
})();


//////////////////////////////////

//EDITING USER INFO IN FORM
function edit() {
    $("#saveBtn").show();
    $("#editBtn").hide();
    if ($_C().getCookie("usergender") == "Male") {
        $("#profileImg").attr("src", "/img/profile/male-edit.png");
    }
    else {
        $("#profileImg").attr("src", "/img/profile/female-edit.png");
    }
    //$("#profileImg").attr("src", "/img/profile/edit_profile.jpg");
    $("#UserName").removeAttr("disabled");
    $("#UserEmail").removeAttr("disabled");
    $("#UserPassword").removeAttr("disabled");
}


//////////////////////////////////

//SAVING USER INFO IN FORM (SETTING COOKIES)
function savee() {
    var mailExp=/^[a-zA-Z\d\.-_]+@[a-zA-Z\d]+\.[a-zA-Z]{2,8}$/;
    var email=$("#UserEmail").val();
    if(email.match(mailExp))
    {
        $_C().setCookie("useremail", email);
    }
    else
    {
        alert("Please enter a valid email");
        return false;
    }
    $_C().setCookie("UserName", $("#UserName").val()); 
    $_C().setCookie("userPassword", $("#UserPassword").val());
    alert("Saved");
    location.reload();
}


//////////////////////////////////

//WHEN CLICKING ON LINES ANCHOR
//RESERVING ONE TRIP WITH NO OVERWRITE
//CONFIRMATION ON RE-BOOKING

function checkLinesBook() {
    if ($_C().getCookie("userVisit") == 1) {  //if logged in
        if ($_C().getCookie("ConfirmFlag") == 0)  //if trip not confirmed yet
        {
            if ($_C().getCookie("FromLine") == "") { location.assign("lines.html") } //if lines not selected yet

            if ($_C().getCookie("FromLine") != "") //if lines were selected
            {
                if ($_C().getCookie("number_of_chair") == "") //if seats not selected yet
                {
                    var seatconf = confirm("Do you want to continue your booking?");
                    if (seatconf == true) { location.assign("seats.html") }  //continuing to seats page not from lines
                    else {
                        $_C().DeleteCookie("FromLine");
                        $_C().DeleteCookie("FromStation");
                        $_C().DeleteCookie("ToLine");
                        $_C().DeleteCookie("ToStation");
                        $_C().DeleteCookie("Price");
                        location.assign("lines.html");
                    }
                }
                else  //if seats were selected
                {
                    var ticketConf = confirm("Do you want to continue your booking?");
                    if (ticketConf == true) { location.assign("ticket.html") }  //continuing to tickets page
                    else {
                        $_C().DeleteCookie("FromLine");
                        $_C().DeleteCookie("FromStation");
                        $_C().DeleteCookie("ToLine");
                        $_C().DeleteCookie("ToStation");
                        $_C().DeleteCookie("Price");
                        $_C().DeleteCookie("number_of_chair");
                        location.assign("lines.html");
                    }
                }
            }
        }
        else  //if confirm flag = 1 (if ticket was confirmed )
        {

            var rebook = confirm("Are you sure you want to re-book and cancel your current booked trip?");
            if (rebook == true) //lines page is accessible //booking process would start over (all cookies deleted)
            {
                $_C().DeleteCookie("FromLine");
                $_C().DeleteCookie("FromStation");
                $_C().DeleteCookie("ToLine");
                $_C().DeleteCookie("ToStation");
                $_C().DeleteCookie("Price");
                $_C().DeleteCookie("number_of_chair");
                $_C().DeleteCookie("ConfirmFlag");
                location.assign("lines.html");
            }
            else { location.reload(); }
        }
    } else alert("You are not logged in, please log in and try again :)");  //if user visit = 0 (user not logged in)
}