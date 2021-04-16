function login()
{
  location.assign("login.html");
}
function register()
{
    location.assign("register.html");
}

function home()
{
    location.assign("home.html");
}


//SLIDESHOW DISPLAY

var images=new Array('/img/1.jpg','/img/2.jpg','/img/3.jpg','/img/4.jpg','/img/5.jpg');
var nextimage=0;

doSlideshow();

function doSlideshow()
{
    if($('.slideshowimage').length!=0)
    {
        $('.slideshowimage').fadeOut(300,function(){
          slideshowFadeIn();
          $(this).remove()});
    }
    else
    {
        slideshowFadeIn();
    }
}

function slideshowFadeIn()
{
    $('.slideshow').prepend(
      $('<img class="slideshowimage" src="'+images[nextimage++]+'" style="display:none; opacity:0.7;">').fadeIn(300,function(){
        setTimeout(doSlideshow,2000);}));
        
    if(nextimage>=images.length)
        nextimage=0;
}


$('#slideBtn').hover(function() {
  $('#anchorBtn').css('margin-left','630px');
  $('#slideBtn').attr('value','View Lines');
},function() {
  $('#anchorBtn').css('margin-left','650px'); 
  $('#slideBtn').attr('value','Book Now');
});



$('#aboutDiv').hover(function() {
    $('#aboutDiv').css({'box-shadow':'0px 2px 10px 3px #000000a3', 'border-radius':'15px','border':'none'});
  },function() {
    $('#aboutDiv').css({'box-shadow':'none', 'border-radius':'0px','border-right':'1px solid black'});
  });



$('#linesDiv').hover(function() {
    $('#aboutDiv').css('border','none');
    $('#linesDiv').css({'box-shadow':'0px 2px 10px 3px #000000a3', 'border-radius':'15px','border':'none'});
  },function() {
    $('#linesDiv').css({'box-shadow':'none', 'border-radius':'0px','border-right':'1px solid black'});
    $('#aboutDiv').css('border-right','1px solid black');
  });


  $('#contactDiv').hover(function() {
    $('#contactDiv').css({'box-shadow':'0px 2px 10px 3px #000000a3', 'border-radius':'15px','border':'none'});
    $('#linesDiv').css('border','none');
  },function() {
    $('#contactDiv').css({'box-shadow':'none', 'border-radius':'0px'});
    $('#linesDiv').css('border-right','1px solid black');
  });


$("#fbBtn").click(function(){
var mailBody=$("#txtarea").val();
location.href="mailto:TAKEIT@gmail.com?Subject=Contacting TAKE IT&Body="+mailBody+" ";
});