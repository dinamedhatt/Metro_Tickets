(function () {

    Cookie = function (cookiName, cookieVal, expFlag) {
        if (arguments.length <= 2 || arguments.length == 3) {
            this._cookieVal = cookieVal;
            this._cookiName = cookiName;
            this._expFlag = expFlag;

            var cookies = document.cookie.split(";");
            var cookiesArr = [];
            var key;
            var val;
            var today = new Date();
            function d() {
                for (i = 0; i < cookies.length; i++) {
                    key = (cookies[i].split("=")[0]).trim();
                    val = decodeURIComponent((cookies[i].split("=")[1]));

                    cookiesArr[key] = val;
                }
            }
            Cookie.prototype.getcookie = function (cookiename) {
                if (arguments.length == 1) {
                    d();
                    if (cookiesArr[cookiename]) {
                        return cookiesArr[cookiename];
                        //console.log("",cookiesArr[cookiename]);
                    }
                    else {
                        //console.log("Not found!");
                        return 0;
                    }
                } else throw "it should contain one argumante";
            }
            Cookie.prototype.getall = function () {
                if (arguments.length == 0) {
                    for (i = 0; i < cookies.length; i++) {
                        key = (cookies[i].split("=")[0]).trim();
                        val = decodeURIComponent((cookies[i].split("=")[1]));

                        console.log("", key, "=", val);
                    }
                } else throw "it should contain one argumante";
            }

            Cookie.prototype.deletecookie = function (key) {
                if (arguments.length == 1) {
                    d();
                    if (cookiesArr[key]) {
                        today.setMonth((today.getMonth()) - 1);
                        document.cookie = key + "=;=expiers=" + today.toUTCString();
                        console.log("deleted");
                    }
                    else {
                        //console.log("not found");
                        return 0;
                    }
                } else throw "it should contain one argumante";
            }

            Cookie.prototype.addcookie = function (cookiName, cookieVal, expFlag) {
                if (arguments.length <= 2 || arguments.length == 3) {
                    if (expFlag) {

                        today.setMonth(today.getMonth() + 1);
                        document.cookie = cookiName + "=" + cookieVal + ";=expiers=" + today.toUTCString();
                    }
                    else {
                        document.cookie = cookiName + "=" + cookieVal;
                    }
                } else throw "it should contain one argumante";
            }

            Cookie.prototype.hasCookie = function (cookieName) {
                if (arguments.length == 1) {
                    var x = $_C().getcookie(cookieName);
                    if (x) {
                        console.log("exist");
                    }
                } else throw "it should contain one argumante";
            }
            Cookie.prototype.welcome = function () {
                for (i = 0; i < cookies.length; i++) {
                    key = (cookies[i].split("=")[0]).trim();
                    val = decodeURIComponent((cookies[i].split("=")[1]));

                    cookiesArr[key] = val;
                }
                if (cookiesArr["usergender"] == "Male") {
                    document.images[0].src = "1.jpg";
                }
                else {
                    document.images[0].src = "2.jpg";
                }
                var countr = parseInt($_C().getcookie("userVisit"));
                if (countr) {
                    ++countr;
                    document.write("Welcome " + cookiesArr["UserName"].fontcolor(cookiesArr["userColor"]).bold() + " you are here visiting this site " + cookiesArr["userVisit"].fontcolor(cookiesArr["userColor"]).bold() + " times :)");
                    $_C().addcookie("userVisit", countr, 1);
                }
                else {
                    document.write("Welcome " + cookiesArr["UserName"].fontcolor(cookiesArr["userColor"]).bold() + " no cookie for you");
                }
            }
        } else throw "it should contain one argumante";
        return Cookie.prototype;
    }
    window.$_C = Cookie;
    return $_C;
})();
