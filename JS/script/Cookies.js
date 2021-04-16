(function(){
    Cookie = function(CookieName,CookieValue,expirydata){
        this._CookieName = CookieName;
        this._CookieValue = CookieValue;
        this._expirydata = expirydata;
                
        var Cookies,key,value;
        var Numofcookies = 0;
        var CookiesArr =[];
        var today = new Date();
        var arr;
        Cookie.prototype.AssArray = function ()
        {
            if(arguments.length == 0)
            {
                Cookies = document.cookie.split(";");
                for(var i = 0; i < Cookies.length; i++)
                {
                    key = (Cookies[i].split("=")[0]).trim();
                    value = decodeURIComponent(Cookies[i].split("=")[1]).trim();
                    CookiesArr[key] = (value);
                    Numofcookies++;
                }
                return CookiesArr;
            }
            else
                throw "It takes no parameters";

        }
        Cookie.prototype.setCookie = function(CookieName,CookieValue,expirydata)
        {
            if(arguments.length == 2 || arguments.length == 3)
            {
                 //persistent cookie
                if(expirydata)
                {
                    document.cookie = (CookieName)  +"="+ encodeURIComponent(CookieValue) +";expires=" + expirydata;
                }
                else //session cookie
                    document.cookie = (CookieName)  +"="+ encodeURIComponent(CookieValue);
            }
            else
                throw "It takes 2 or 3 parameters";
        }

        // Cookie.prototype.addCookie = function (cookieName, cookieValue, expirFlag) {
        //     if (arguments.length >= 2 || arguments.length <= 3) {
        //         if (expirFlag) {
        //             today = new Date();
        //             today.setMonth(today.getMonth() + expirFlag);
        //             document.cookie = cookieName + "=" + encodeURIComponent(cookieValue)  + ";expires=" + today.toUTCString();
        //         } else {
        //             document.cookie = cookieName + "=" + cookieValue;
        //         }
        //     } else {
        //         throw new Error("two to three arguments are allowed cookieName, cookieValue, [expiration Time]");
        //     }

        // }

        Cookie.prototype.getCookie = function(CookieName)
        {   if(arguments.length == 1)
            {
                arr = this.AssArray();
                if(arr[CookieName])
                {
                    
                return arr[CookieName];
                }
                else
                return 0;
            }
            else
                throw "It takes 1 parameter";


        }

        Cookie.prototype.DeleteCookie = function(CookieName)
        {
            if(arguments.length == 1)
            {
                arr = this.AssArray();
                delete arr[CookieName];
                today.setMonth(today.getMonth()-1);
                document.cookie = CookieName +'=; Path=/; Expires='+today.toUTCString();
                Numofcookies--;
                Cookies = document.cookie.split(";");
            }
            else
                throw "It takes 1 parameter";
        }

        Cookie.prototype.AllCookieList = function()
        {
            if(arguments.length == 0)
            {
                arr = this.AssArray();
                return arr;
            }
            else
                throw "It takes no parameter";
        }

        Cookie.prototype.hasCookie = function(CookieName)
        {
            if(arguments.length == 1)
            {
                arr = this.AssArray();
                for(var i in arr)
                {
                    if(i === CookieName) ///key exist
                        if(arr[i] === "")
                            return 0;
                        else return 1;
                    else
                        return 0;
                }
            }
            else
                throw "It takes 1 parameter";
        }

        Cookie.prototype.Deleteall = function()
        {
            if(arguments.length == 0)
            {
                arr = this.AssArray();
                for(var i in arr)
                {
                    this.DeleteCookie(i);
                }
            }
            else
                throw "It takes no parameter";
        }
        return Cookie.prototype;
    }
    window.$_C = Cookie;
    return $_C;
})();