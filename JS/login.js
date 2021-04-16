$("#Error").hide();

function login() {
    location.assign("login.html");
}
function register() {
    location.assign("register.html");
}

function home() {
    location.assign("home.html");
}

function check()
{
    if($_C().getCookie("userVisit")==1)
    {
        location.assign("profile.html");
    }
    else
    {
        if(location.pathname=="/login.html"||location.href=="/register.html")
        {
            return false;
        }
        alert("You are not logged in please login and try again :)");
    }
}

function checklines()
{
    if($_C().getCookie("userVisit")==1)
    {
        location.assign("lines.html");
    }
    else
    {
        alert("You are not logged in please login and try again :)");
    }
}


$("#Btn").click(function (e) {
    e.preventDefault();
    if(document.getElementById("uname").value==""||document.getElementById("password").value=="")
    {
        $("#Error").slideDown();
        return false;
    }

    $("#train").animate({ left: "-=380px" }, 2000, "linear");
    
    setTimeout(function () {
        $("#train").hide();
        var username=$("#uname").val();
        var password=$("#password").val();

            if($_C().getCookie("UserName")==username &&$_C().getCookie("userPassword")==password)
            {
                location.assign("profile.html");
                $_C().setCookie("userVisit",1);
                $("#logBtn").css("display","none");
                $("#regesterBTN").css("display","none");    
            }
            else
            {
                alert("Please enter valid username and password");
                location.reload();
            }
    }, 2000);
});
var userArray=[];
$("#Btn2").click(function (e) {
    e.preventDefault();
    
    if(document.getElementById("username").value==""||document.getElementById("email").value==""||document.getElementById("Password").value==""||(document.getElementById("UserGenderM").checked==false&&document.getElementById("UserGenderF").checked==false))
    {
        $("#Error").slideDown();
        return false;
    }
    if(get()==false)
        {
            return false;
        }
    $("#train2").animate({ left: "-=380px" }, 2000, "linear");
    
    setTimeout(function () {
        $("#train2").hide();

            get();
        
        var obj=
        {
            name:$_C().getCookie("UserName"),
            email:$_C().getCookie("useremail"),
            Password:$_C().getCookie("userPassword"),
            visit:$_C().getCookie("userVisit"),
            Gender:$_C().getCookie("usergender")
        }
        userArray.push(obj);
        // console.log(userArray);
        
    location.assign("login.html");
    }, 2000);
});

function get ()
{
    var username=$("#username").val();
    var email=$("#email").val();
    var mailExp=/^[a-zA-Z\d\.-_]+@[a-zA-Z\d]+\.[a-zA-Z]{2,8}$/;
    var Password=$("#Password").val();
    var usergenderF=document.getElementById("UserGenderF").checked;
    var usergenderM=document.getElementById("UserGenderM").checked;
    
    if(email.match(mailExp))
    {
        $_C().setCookie("useremail",email,1);
    }
    else
    {
        alert("Please enter a valid email");
        return false;
    }
    if(usergenderM==true)
    {
        var usergenderMM=document.getElementById("UserGenderM").value;
        document.cookie=$_C().setCookie("usergender",usergenderMM,1);
    }
    else if(usergenderF==true){
        var usergenderFF=document.getElementById("UserGenderF").value;
        document.cookie=$_C().setCookie("usergender",usergenderFF,1);
    }
    var visit_count=0;
    $_C().setCookie("UserName",username,1);
    $_C().setCookie("userPassword",Password,1);
    $_C().setCookie("userVisit",visit_count,1);
}

function closeTab(){
    $("#Error").slideUp();
}

if ($_C().getCookie("userVisit") == 1) {
    location.assign("profile.html");
}