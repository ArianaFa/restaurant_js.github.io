$(function() {

	$(document).ready(function(){

 var image=$("body").css({"background": "url('https://upload.wikimedia.org/wikipedia/commons/1/14/Barcelona-Restaurant-Flo.jpg') no-repeat  scroll  top/cover transparent"});
 $("body").css({"margin":0});

 $(image).css({"height": "700px","width":"auto"});
 

$("<div class='head'></div>").appendTo(".content");
$(".head").css({"background-color":"red","height":"100px","width":"auto","opacity":"0.5"});
$("<section class='middle'></section>").insertAfter(".content");
$(".head").append("<h1>logo</h1>").append("<div class=' btn mnu'>menu</div>")
			.append("<div class='btn map'>address</div>")
			.append("<div class='btn contact'>about us</div>").css({"color":"#000","text-transform":"uppercase","font-weight":"bold"});
$("h1").css({"float":"left","margin":"30px"});
$(".btn").css({"border":"solid #000 1px","margin-left":"150px","left":"50%","margin-top":"30px","display":"inline-block","padding":"10px","cursor":"pointer"});
$(".btn").hover(function(){
	$(this).css({"color":"#fff","text-decoration":"underline","border":"#fff solid 1px"});

},function(){
	$(this).css({"color":"#000","text-decoration":"none","border":"#000 solid 1px"});
});	
$('.middle').append("<div class= ' g items'>menu list <ul><li>Crescentina</li><li>Crocchè</li><li>Farinata</li><li>Ficattola</li><li>Focaccia</li><li>Fragguno</li></ul></div>")
.append("<div class= ' g adr'>location:Italian restaurant <br>3456 g. main st washington dc <br>0000-0000 usa  </div>").append("<div class=' g about'>About us<br><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, magni laboriosam consectetur odio quaerat voluptates tempora autem placeat reiciendis sit excepturi ex dolor nam quod, eum aspernatur molestiae, quis debitis.</p></div>").css({"style-type-list":"none","color":"#000","text-transform":"uppercase","margin-top":"100px","margin-left":"400px","font-weight":"bold"});
$(".items").css({"text-decoration":"underline"});
$(".g").css({"display":"none"});

$(".mnu").click(function(){
    // что-то делаем
    $(".items").show();
    $(".adr").hide();
      $(".about").hide();
    
    
});
$(".items ul li:first-child").hover(function(){
	$("body").css({"background": "url('https://upload.wikimedia.org/wikipedia/commons/f/f3/Gnocco_fritto_of_Modena.JPG') no-repeat  scroll  top/cover transparent"});
},
function(){
	$("body").css({"background": "url('https://upload.wikimedia.org/wikipedia/commons/1/14/Barcelona-Restaurant-Flo.jpg') no-repeat  scroll  top/cover transparent"});
});
$(".items ul li:nth-child(2)").hover(function(){
	$("body").css({"background": "url('https://upload.wikimedia.org/wikipedia/commons/5/57/Croquettes_with_salad.jpg') no-repeat  scroll  top/cover transparent"});
},
function(){
	$("body").css({"background": "url('https://upload.wikimedia.org/wikipedia/commons/1/14/Barcelona-Restaurant-Flo.jpg') no-repeat  scroll  top/cover transparent"});
});
$(".items ul li:nth-child(3)").hover(function(){
	$("body").css({"background": "url('https://upload.wikimedia.org/wikipedia/commons/7/7c/Farinata_and_Focaccia.jpg') no-repeat  scroll  top/cover transparent"});
},
function(){
	$("body").css({"background": "url('https://upload.wikimedia.org/wikipedia/commons/1/14/Barcelona-Restaurant-Flo.jpg') no-repeat  scroll  top/cover transparent"});
});
$(".items ul li:nth-child(4)").hover(function(){
	$("body").css({"background": "url('https://c1.staticflickr.com/5/4068/5076899884_31824a869d_b.jpg') no-repeat  scroll  top/cover transparent"});
},
function(){
	$("body").css({"background": "url('https://upload.wikimedia.org/wikipedia/commons/1/14/Barcelona-Restaurant-Flo.jpg') no-repeat  scroll  top/cover transparent"});
});
$(".items ul li:nth-child(5)").hover(function(){
	$("body").css({"background": "url('https://c1.staticflickr.com/6/5055/5529537855_3f961ae428_b.jpg') no-repeat  scroll  top/cover transparent"});
},
function(){
	$("body").css({"background": "url('https://upload.wikimedia.org/wikipedia/commons/1/14/Barcelona-Restaurant-Flo.jpg') no-repeat  scroll  top/cover transparent"});
});
$(".items ul li:last-child").hover(function(){
	$("body").css({"background": "url('https://upload.wikimedia.org/wikipedia/commons/1/1c/Forno_a_legna_(Altamura).jpg') no-repeat  scroll  top/cover transparent"});
},
function(){
	$("body").css({"background": "url('https://upload.wikimedia.org/wikipedia/commons/1/14/Barcelona-Restaurant-Flo.jpg') no-repeat  scroll  top/cover transparent"});
});
$('.map').bind('click', function(){
   
    
      $(".adr").show();
     $(".items").hide();
      $(".about").hide();
});

$('.contact').bind('click', function(){
    
    $('.about').show();
     $(".adr").hide();
      $(".items").hide();
});


$("<footer class='footer'></footer>").insertAfter(".middle");
$(".footer").css({"background-color":"red","height":"100px","width":"auto","margin-top":"600px","margin-bottom":"0","opacity":"0.9"}).append("<div class='fa'>Italian restaurant <br>3456 g. main st washington dc <br>0000-0000 usa </div>").append("<h1>logo</h1>");
$(".fa").css({"text-transform":"uppercase","float":"right","margin":"30px","margin-top":"3px"});
$("h1").css({"float":"left","margin":"30px"});
});
// Custom JS

});
