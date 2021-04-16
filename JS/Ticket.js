var currentTime = new Date();

(function () {
    var color;
    if ($_C().getCookie("Price") == 5) {
        color = "#F1E14F";
    }

    else if ($_C().getCookie("Price") == 7) {
        color = "#9FE891";
    }

    else {
        color = "#FFB4B4";
    }

    $("#ticketDiv").css("background-color", color);
    $("#Confirm").css("border-color", color)
        .hover(function () { $("#Confirm").css("background-color", color) },
            function () { $("#Confirm").css("background-color", "white") })

    $("#back_To_Lines").css("border-color", color)
        .hover(function () { $("#back_To_Lines").css("background-color", color) },
            function () { $("#back_To_Lines").css("background-color", "white") })
})();

$("#From").html($_C().getCookie("FromStation"));
$("#To").html($_C().getCookie("ToStation"));
$("#price").html($_C().getCookie("Price"));

$("#no_Seats").html($_C().getCookie("number_of_chair"));
$("#TotalP").html(($_C().getCookie("number_of_chair")) * ($_C().getCookie("Price")));
$("#Code").html("<p id='Code_paragraph'>Enter This code in any Fawry machine to complete your reservation within 24 hours</p>" + "<p id='codeNum'>" + Math.ceil(Math.random() * 1000000000) + "</p>");
$("#time").html(currentTime.getHours() + ":" + currentTime.getMinutes())

$("#back_To_Lines").click(function (e) {
    e.preventDefault();
    $_C().DeleteCookie("FromLine");
    $_C().DeleteCookie("FromStation");
    $_C().DeleteCookie("ToLine");
    $_C().DeleteCookie("ToStation");
    $_C().DeleteCookie("Price");
    $_C().DeleteCookie("number_of_chair");
    location.assign("lines.html");
});

$("#Trips").click(function () {
    if ($_C().getCookie("ConfirmFlag") == 0) {
        alert("You should confirm first");
        return false;
    }
    else {
        location.assign("trips.html");
    }
});

$("#Confirm").click(function () {
    $_C().setCookie("ConfirmFlag", 1, 1);
    location.assign("trips.html");
});


