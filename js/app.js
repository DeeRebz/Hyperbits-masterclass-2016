$(document).foundation();

$(document).ready(function(){
	$('.carousel').slick({
	  dots: true,
	  infinite: false,
	  speed: 300,
	  slidesToShow: 3,
	  slidesToScroll: 3,
	  responsive: [
	    {
	      breakpoint: 900,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	    // You can unslick at a given breakpoint now by adding:
	    // settings: "unslick"
	    // instead of a settings object
	  ]
	});
});

$(".faq-each").click(function(e) {
	e.preventDefault();
	$(this).find(".answer").slideToggle(400);
	$(this).find("img").toggleClass('rotate');
});

$("nav .top-bar-right li a").click(function() {
    var navId= $(this).attr("href");
    $("html body").animate({scrollTop: $(navId).offset().top},500);
    return false;
});


