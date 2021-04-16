var FromLine = document.getElementById('FromLine');
var FromStation = document.getElementById('FromStation');
var ToLine = document.getElementById('ToLine');
var ToStation = document.getElementById('ToStation');

var xhr = new XMLHttpRequest();
var info; //Json object
var Fromchecked; //FromCheckedLine 
var Tochecked; //ToCheckedLine 
var FromIndex,StationFrom;
var ToIndex,StationTo;
$("#Error").hide();
xhr.onreadystatechange = function () 
{
    if (xhr.readyState == 4) 
    {
        info = JSON.parse(xhr.responseText);
        var keys = Object.keys(info);
        for(var i = 0; i < keys.length; i++)
        {
            addOption(keys[i], FromLine);
            addOption(keys[i], ToLine);
        }
    }

    FromLine.onchange = function(e) 
    {
        Fromchecked = e.target.value;
        FromStation.innerHTML = '';
        addOption("Please select", FromStation);
        for(var i = 0; i < info[Fromchecked].length; i++)
        {
            addOption(info[Fromchecked][i].stop, FromStation);
        }
    }

    ToLine.onchange = function(e) 
    {
        Tochecked = e.target.value;
        ToStation.innerHTML = '';
        addOption("Please select", ToStation);
        for(var i = 0; i < info[Tochecked].length; i++)
        {
            addOption(info[Tochecked][i].stop, ToStation);
        }
    }
    
    FromStation.onchange = function()
    {
        FromIndex = FromStation.selectedIndex;
        StationFrom = info[Fromchecked][FromIndex-1].stop;
    }
    
    ToStation.onchange = function()
    {
        ToIndex = ToStation.selectedIndex;
        StationTo = info[Tochecked][ToIndex-1].stop;
    }
    
}

xhr.open("GET", "/Json/metroLines.json");
xhr.send('');

var Distance;
function NumofStations()
{
    var flag = SameLine(Fromchecked,Tochecked);
    if(flag == 1)
        Distance = Math.abs(FromIndex-ToIndex);
    else
        {
            if(Fromchecked == "ElMarg-Helwan Line" && Tochecked == "El-Mounib-Shubra El-Kheima Line")//1->2 h7wl shohda2 index 14->13
                Distance = Math.abs(FromIndex-14) + Math.abs(ToIndex - 13);
            else if(Fromchecked == "El-Mounib-Shubra El-Kheima Line" && Tochecked == "ElMarg-Helwan Line")//2->1 h7wl shohda2 index 13->14
                Distance = Math.abs(FromIndex - 13) + Math.abs(ToIndex-14);
            else if(Fromchecked == "El-Mounib-Shubra El-Kheima Line" && Tochecked ==  "Adly Mansour-Attaba Line")//2->3 h7wl 3atba index:12->19
                Distance = Math.abs(FromIndex-12) + Math.abs(ToIndex - 19);   
            else if(Fromchecked ==  "Adly Mansour-Attaba Line"  && Tochecked == "El-Mounib-Shubra El-Kheima Line")//3->2 h7wl  index:19->12
                Distance = Math.abs(FromIndex-19) + Math.abs(ToIndex - 12); 
             else if(Fromchecked == "ElMarg-Helwan Line"   && Tochecked == "Adly Mansour-Attaba Line")//1->2->3 h7wl shohda2 then 3atba 
                 //from:14-->13:12-->19:to
             {
                 Distance = Math.abs(FromIndex-14) + Math.abs(ToIndex - 19);
                 //if (Distance < 0)
                             //Distance = -Distance;
                 Distance++; //1 mn shohda l 3atba
             }
            
            else if(Fromchecked == "Adly Mansour-Attaba Line" && Tochecked == "ElMarg-Helwan Line" )//3->2->1 h7wl 3atba then shohda 
                 //from:19-->12:13-->14:to
            {
                Distance = Math.abs(FromIndex-19) + Math.abs(ToIndex - 14);
                //if (Distance < 0)
                            // Distance = -Distance;
                Distance++; //1 mn 3atba l shohd
            }
            
        }

        if(FromLine.value=="Please select"||ToLine.value=="Please select"||ToStation.value=="Please select"||FromStation.value=="Please select")
        {
            $("#Error").slideDown();
            // document.getElementById("message").innerHTML+="Please select line and station";
            return false;
        }
        else if(ToStation.value==FromStation.value)
        {
            $("#Error").slideDown();
            return false;
        }
        else{
            addToCookie();
            //document.getElementById("message").innerHTML="";
            TicketPrice(Distance);
            location.assign("seats.html");
            return true;
        }
    // if(Distance < 0)
    //     Distance = -Distance;
    
}

function addToCookie()
{
    $_C().setCookie("FromLine",(FromLine.value),1);
    $_C().setCookie("FromStation",(FromStation.value),1);
    $_C().setCookie("ToLine",(ToLine.value),1);
    $_C().setCookie("ToStation",(ToStation.value),1);    
}


// $("#close").click(function(){
//     $("#Error").hide();
// })

function addOption(val, select) 
{
      var option = document.createElement('option');
      option.value = val;
      option.innerHTML = val;
      select.appendChild(option);
}

function SameLine(line1 , line2)
{
    if(line1 === line2)
        return 1;
    else
        return 0;
}

var Price;
function TicketPrice(Dist)
{
    if(Dist < 9)
        Price = 5;
    else if(Dist < 16 && Dist >= 9)
        Price = 7;
    else
        Price = 10;
    $_C().setCookie("Price",Price,1);
    console.log(Dist,Price);
}


function closeTab(){
     $("#Error").slideUp();
}

