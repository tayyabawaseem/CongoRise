$(document).ready(function(){
	$(window).on('scroll', function(){
		if ($(window).scrollTop()) {
			$("nav").addClass('bg');
		}else{
			$("nav").removeClass('bg');
		}
	});
});

$(document).ready(function(){
    $('.carousel').carousel({
			padding: 200
	});
	autoplay();
	function autoplay() {
		$('.carousel').carousel('next');
		setTimeout(autoplay, 4500);
	}
  });

  $(document).ready(function() {
    $("#news-slider").owlCarousel({
        items : 3,
        itemsDesktop:[1199,3],
        itemsDesktopSmall:[980,2],
        itemsMobile : [600,1],
        navigation:true,
        navigationText:["",""],
        pagination:true,
        autoPlay:true
    });
});

/* testi */
 var slide = document.getElementById("slide");
 var up_arrow = document.getElementById("up_arrow");
 var down_arrow = document.getElementById("down_arrow");
 let x= 0
 up_arrow.onclick = function()
{
	if(x > "-900")
	{
	x = x - 300;
	slide.style.top = x + "px";
	}
}
 down_arrow.onclick = function()
{
	if(x < 0)
	{
	x = x + 300;
	slide.style.top = x + "px";
	}
}
/* testi */