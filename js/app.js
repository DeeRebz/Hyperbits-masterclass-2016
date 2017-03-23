$(document).foundation();

var activePart;

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
	$("#outline-sidebar").stick_in_parent();

	var navChildren = $("#outline-sidebar li").children();
    var aArray = [];
    for (var i = 0; i < navChildren.length; i++) {
        var aChild = navChildren[i];
        var ahref = $(aChild).attr('href');
        aArray.push(ahref);
    }
    $(window).scroll(function() {
        var windowPos = $(window).scrollTop();
        var windowHeight = $(window).height();
        var docHeight = $(document).height();
        for (var i = 0; i < aArray.length; i++) {
            var theID = aArray[i];
            var secPosition = $(theID).offset().top;
            secPosition = secPosition;
            var divHeight = $(theID).height();
            divHeight = divHeight + 2;
            if (windowPos >= secPosition && windowPos < (secPosition + divHeight)) {
                $("a[href='" + theID + "']").parent().addClass("active");
            } else {
                $("a[href='" + theID + "']").parent().removeClass("active");
            }
        }
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

$("a.smooth-scroll").click(function() {
    var navId= $(this).attr("href");
    $("html body").animate({scrollTop: $(navId).offset().top+2},500);
    $(this).addClass('active');
    return false;
});

//countdown clock for bonus
  $(".bonus-countdown .days").countdown("2017/03/25", function(event) {
  	$(this).text(
      event.strftime('%D')
    );
    $(this).fadeIn(100);
  });
  $(".bonus-countdown .hours").countdown("2017/03/25", function(event) {
  	$(this).text(
      event.strftime('%H')
    );
    $(this).fadeIn(100);
  });
    $(".bonus-countdown .min").countdown("2017/03/25", function(event) {
  	$(this).text(
      event.strftime('%M')
    );
    $(this).fadeIn(100);
  });
      $(".bonus-countdown .sec").countdown("2017/03/25", function(event) {
  	$(this).text(
      event.strftime('%S')
    );
    $(this).fadeIn(100);
  });

