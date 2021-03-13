$('.digitts').countdown({
    stepTime: 60,
    format: 'hh:mm:ss',
    startTime: "12:32:55",
    digitImages: 6,
    digitWidth: 65,
    endTime: new Date('07/16/13 05:00:00'),
	start: true,
    image: "img/background/digits.png"
  });
  AOS.init();

$(document).ready(function(){
	$("#soc, #socc, #btn-2, #soc-2").click(function(){
		$(".top").toggleClass("top_active"); return false;
	});
});
$(window).on("scroll", function() {
    if ($(window).scrollTop() > 200) $('.top').removeClass('top_active');
    });