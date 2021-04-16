
function login() { location.assign("login.html"); }

function register(){ location.assign("register.html");}

function home(){ location.assign("home.html"); }



$(document).ready(function(){
 
  $('#aboutBtn').hover(function() {
    $('#anchorBtn').css('margin-left','630px');
  },function() {
    $('#anchorBtn').css('margin-left','650px');
  });


    $('.header').hover(function() {
      $(this).css({'font-size': '30px','text-decoration': 'underline','padding':'15px 0px','text-underline-offset': '7px'});
    },function() {
      $(this).css({'font-size': '25px','text-decoration': 'none','padding':'20px 0px'});
    });

    
    $('#hisbtn').click(function(){

      var val=  $('#hisbtn').attr('value');
    if(val=='Read More')
    {  $('#history').css({"height":"1550px"});
       $('#hispara').css({"overflow":"visible"});
       $('#hisbtn').css({"margin-top":"563px","margin-left":"230px"});
       $('#hisbtn').attr('value','Read Less');
      }
    else{
      $('#history').css({"height":"1000px"});
      $('#hispara').css({"overflow":"hidden"});
      $('#hisbtn').css({"margin-top":"20px","margin-left":"230px"});
      $('#hisbtn').attr('value','Read More');
    }
    })
});

