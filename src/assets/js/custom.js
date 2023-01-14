$(document).ready(function(){
 collectMapSvg();
//  $(".ham-icon").click(function(){
//   $(".nav-icon3").toggleClass('open');
//   $(".my-sidenav").slideToggle("slow");
// });
 $('.ham-icon1').click(function(){
  $('.my-sidenav').css('max-width', '380px');
  $('.my-sidenav').css('display', 'block');
});
 $('.cross-btn1').click(function(){
  $('.my-sidenav').css('max-width', '0px');
}); 

//  $(".menu-icon").on("click", function() {
//   $("nav").toggleClass("showing");
// });
 $(".scroller").click(function() {
  $('html, body').animate({scrollTop: $(".chairman-sec").offset().top}, 500);  
});
});

$(document).ready(function(){
 $(".mbmenu").accordion();
 $("#show_chapter").on("click", function(){
  $(".chapter_2_remain").toggleClass("chapterShods");
});


 


 function myFunction(x) {
  if (x.matches) { 

    $("#leagueSlider").click(function(){
      $(".slider_1m").show();
      $(".slider_2m, .slider_3m, .slider_4m, .slider_5m, .slider_6m, .slider_7m, .slider_8m").hide();
    });
    $("#farmersSLider").click(function(){
      $(".slider_2m").show();
      $(".slider_1m, .slider_3m, .slider_4m, .slider_5m, .slider_6m, .slider_7m, .slider_8m").hide();
    });
    $("#womenSlider").click(function(){
      $(".slider_3m").show();
      $(".slider_2m, .slider_1m, .slider_4m, .slider_5m, .slider_6m, .slider_7m, .slider_8m").hide();
    });
    $("#thrivingSlider").click(function(){
      $(".slider_4m").show();
      $(".slider_2m, .slider_3m, .slider_1m, .slider_5m, .slider_6m, .slider_7m, .slider_8m").hide();
    });
    $("#wonderSlider").click(function(){
      $(".slider_5m").show();
      $(".slider_2m, .slider_3m, .slider_4m, .slider_1m, .slider_6m, .slider_7m, .slider_8m").hide();
    });
    $("#differntlyAbleSldier").click(function(){
      $(".slider_6m").show();
      $(".slider_2m, .slider_3m, .slider_4m, .slider_5m, .slider_1m, .slider_7m, .slider_8m").hide();
    });
    $("#enterSlider").click(function(){
      $(".slider_7m").show();
      $(".slider_2m, .slider_3m, .slider_4m, .slider_5m, .slider_6m, .slider_1m, .slider_8m").hide();
    });
    $("#youthSlider").click(function(){
      $(".slider_8m").show();
      $(".slider_2m, .slider_3m, .slider_4m, .slider_5m, .slider_6m, .slider_7m, .slider_1m").hide();
    });

    
  } else {

    
    $("#leagueSlider").click(function(){
      $(".slider_1").show();
      $(".slider_2, .slider_3, .slider_4, .slider_5, .slider_6, .slider_7, .slider_8").hide();
    });
    $("#farmersSLider").click(function(){
      $(".slider_2").show();
      $(".slider_1, .slider_3, .slider_4, .slider_5, .slider_6, .slider_7, .slider_8").hide();
    });
    $("#womenSlider").click(function(){
      $(".slider_3").show();
      $(".slider_2, .slider_1, .slider_4, .slider_5, .slider_6, .slider_7, .slider_8").hide();
    });
    $("#thrivingSlider").click(function(){
      $(".slider_4").show();
      $(".slider_2, .slider_3, .slider_1, .slider_5, .slider_6, .slider_7, .slider_8").hide();
    });
    $("#wonderSlider").click(function(){
      $(".slider_5").show();
      $(".slider_2, .slider_3, .slider_4, .slider_1, .slider_6, .slider_7, .slider_8").hide();
    });
    $("#differntlyAbleSldier").click(function(){
      $(".slider_6").show();
      $(".slider_2, .slider_3, .slider_4, .slider_5, .slider_1, .slider_7, .slider_8").hide();
    });
    $("#enterSlider").click(function(){
      $(".slider_7").show();
      $(".slider_2, .slider_3, .slider_4, .slider_5, .slider_6, .slider_1, .slider_8").hide();
    });
    $("#youthSlider").click(function(){
      $(".slider_8").show();
      $(".slider_2, .slider_3, .slider_4, .slider_5, .slider_6, .slider_7, .slider_1").hide();
    });
  }
}

var x = window.matchMedia("(max-width: 767px)")
myFunction(x) 
x.addListener(myFunction) 

 // 





$(".popup_1, .popup_2, .popup_3, .popup_4, .popup_5, .popup_6").hide();

$("#popup_show_1").click(function () {
  $(".popup_1").show();
  $(".popup_2, .popup_3, .popup_4, .popup_5, .popup_6").hide();
});
$("#popup_show_2").click(function () {
  $(".popup_2").show();
  $(".popup_1, .popup_3, .popup_4, .popup_5, .popup_6").hide();
});
$("#popup_show_3").click(function () {
  $(".popup_3").show();
  $(".popup_2, .popup_1, .popup_4, .popup_5, .popup_6").hide();
});
$("#popup_show_4").click(function () {
  $(".popup_4").show();
  $(".popup_2, .popup_3, .popup_1, .popup_5, .popup_6").hide();
});
$("#popup_show_5").click(function () {
  $(".popup_5").show();
  $(".popup_2, .popup_3, .popup_4, .popup_1, .popup_6").hide();
});
$("#popup_show_6").click(function () {
  $(".popup_6").show();
  $(".popup_2, .popup_3, .popup_4, .popup_5, .popup_1").hide();
});

$(".close_popup").click(function(){
  $(".popup_1, .popup_2, .popup_3, .popup_4, .popup_5, .popup_6").hide();
});

});


$(window).scroll(function() {    
  var scroll = $(window).scrollTop();
  if (scroll >=50) {
   $(".pdf-btn").addClass("annual-fix");
 } else {
   $(".pdf-btn").removeClass("annual-fix");
 }
});

$('.topSlider.owl-carousel').owlCarousel({
  autoplay: true,
  loop: true,
  dots:false,   
  nav: false,
  navText:"",
  touchDrag: true,
  mouseDrag: false,
  smartSpeed:3000,
  animateOut: 'fadeOut',
  margin:30,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 1
    }
  } 
});

$('.recognitionSlider.owl-carousel').owlCarousel({
  autoplay: false,
  loop: false,
  dots:false,   
  nav: true,
  navText:"",
  touchDrag: true,
  mouseDrag: false,
  smartSpeed: 1000,
  margin:30,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 3
    }
  } 
});
$('.ProrecognitionSlider.owl-carousel').owlCarousel({
  autoplay: false,
  loop: false,
  dots:false,   
  nav: true,
  navText:"",
  touchDrag: true,
  mouseDrag: false,
  smartSpeed: 1000,
  margin:30,
  responsive: {
    0: {
      items: 1,
      nav: false,
    },
    600: {
      items: 1
    },
    1000: {
      items: 4
    }
  } 
});
$('.vacancySlider.owl-carousel').owlCarousel({
  autoplay: false,
  loop: false,
  dots:true,   
  nav: true,
  navText:"",
  touchDrag: true,
  mouseDrag: false,
  smartSpeed: 1000,
  margin:30,
  responsive: {
    0: {
      items: 1,
      nav: false,
    },
    600: {
      items: 1
    },
    1000: {
      items: 4
    }
  } 
});
$('.clientTestimonial.owl-carousel').owlCarousel({
  autoplay: false,
  loop: true,
  dots:true,   
  nav: false,
  navText:"",
  touchDrag: true,
  mouseDrag: false,
  smartSpeed: 1000,
  margin:30,
  stagePadding: 140,
  responsive: {
    0: {
      items: 1,
      stagePadding: 0,
    },
    600: {
      items: 1
    },
    1000: {
      items: 1
    }
  } 
});

$('.beneficiarySlider.owl-carousel').owlCarousel({
  autoplay: false,
  loop: false,
  dots:false,   
  nav: true,
  navText:"",
  touchDrag: true,
  mouseDrag: false,
  smartSpeed: 1000,
  margin:30,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 1
    }
  } 
});
$('.implementationSlider.owl-carousel').owlCarousel({
  autoplay: false,
  loop: false,
  dots:true,   
  nav: true,
  navText:"",
  touchDrag: true,
  mouseDrag: false,
  smartSpeed: 1000,
  margin:30,
  responsive: {
    0: {
      items: 1,
      nav: false,
    },
    600: {
      items: 1
    },
    1000: {
      items: 1
    }
  } 
});
$('.partnerLogosSlider.owl-carousel').owlCarousel({
  autoplay: false,
  loop: false,
  dots:false,   
  nav: true,
  navText:"",
  touchDrag: true,
  mouseDrag: false,
  smartSpeed: 1000,
  margin:25,
  responsive: {
    0: {
      items: 2.5,
    },
    600: {
      items: 1
    },
    1000: {
      items: 5
    }
  } 
});


$('.inTheNewsSlider.owl-carousel').owlCarousel({
  autoplay: false,
  loop: true,
  dots:true,   
  nav: true,
  navText:"",
  touchDrag: true,
  mouseDrag: false,
  smartSpeed: 1000,
  margin:25,
  responsive: {
    0: {
      items: 1.2,
      nav: false,
    },
    600: {
      items: 1
    },
    1000: {
      items: 3
    }
  } 
});
$('.panel-collapse').on('shown.bs.collapse', function (e) {
  var $panel = $(this).closest('.panel');
  $('html,body').animate({
    scrollTop: $panel.offset().top-80
  }, 500); 
}); 
/*
 * Replace all SVG images with inline SVG
 */
function collectMapSvg() {
  $('img.mapsvg').each(function(){
  //$('.'+cls).css({ fill: "#ff0000" });
    var $img = $(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');

    $.get(imgURL, function(data) {
        // Get the SVG tag, ignore the rest
      var $svg = $(data).find('svg');

        // Add replaced image's ID to the new SVG
      if(typeof imgID !== 'undefined') {
       $svg = $svg.attr('id', imgID);
     }
        // Add replaced image's classes to the new SVG
     if(typeof imgClass !== 'undefined') {
       $svg = $svg.attr('class', imgClass+' replaced-svg');
     }

        // Remove any invalid XML tags as per http://validator.w3.org
     $svg = $svg.removeAttr('xmlns:a');

        // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
     if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
       $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
     }

        // Replace image with new SVG
     $img.replaceWith($svg);

   }, 'xml');

  });
}
$('.countMe').each(function () {
  $(this).prop('Counter',0).animate({
    Counter:parseInt(removeSpace($(this).text()))
  }, {
    duration: 4000,
    easing: 'swing',
    step: function (now) {
     if (Math.ceil(now).toString().length>3){ 
      $myNo=Math.ceil(now).toString().splice(3, 0, ","); 
    }else {
     $myNo=Math.ceil(now).toString();
   }
   $(this).text($myNo);
 }
});
});


 $(document).ready(function () {
  $("#map-0").show();
  $("#tabs-0").show();
//   
    $("#click-tabs-0").click(function(){
    $("#tabs-0").show();
    $("#tabs-1, #tabs-2, #tabs-3, #tabs-4, #tabs-5, #tabs-6, #tabs-7, #tabs-8, #tabs-9, #tabs-10").hide();
    // 
    $("#map-1").show();
    $("#map-0, #map-2, #map-3, #map-4, #map-5, #map-6, #map-7, #map-8, #map-9, #map-10").hide();
  });
//   
  $("#click-tabs-1").click(function(){
    $("#tabs-1").show();
    $("#tabs-0, #tabs-2, #tabs-3, #tabs-4, #tabs-5, #tabs-6, #tabs-7, #tabs-8, #tabs-9, #tabs-10").hide();
    // 
    $("#map-1").show();
    $("#map-0, #map-2, #map-3, #map-4, #map-5, #map-6, #map-7, #map-8, #map-9, #map-10").hide();
  });
  // 
  $("#click-tabs-2").click(function(){
    $("#tabs-2").show();
    $("#tabs-0, #tabs-1, #tabs-3, #tabs-4, #tabs-5, #tabs-6, #tabs-7, #tabs-8, #tabs-9, #tabs-10").hide();
    // 
    $("#map-2").show();
    $("#map-0, #map-1, #map-3, #map-4, #map-5, #map-6, #map-7, #map-8, #map-9, #map-10").hide();
  });
  // 
  $("#click-tabs-3").click(function(){
    $("#tabs-3").show();
    $("#tabs-0, #tabs-2, #tabs-1, #tabs-4, #tabs-5, #tabs-6, #tabs-7, #tabs-8, #tabs-9, #tabs-10").hide();
    // 
    $("#map-3").show();
    $("#map-0, #map-2, #map-1, #map-4, #map-5, #map-6, #map-7, #map-8, #map-9, #map-10").hide();
  });
  // 
  $("#click-tabs-4").click(function(){
    $("#tabs-4").show();
    $("#tabs-0, #tabs-2, #tabs-3, #tabs-1, #tabs-5, #tabs-6, #tabs-7, #tabs-8, #tabs-9, #tabs-10").hide();
    // 
    $("#map-4").show();
    $("#map-0, #map-2, #map-3, #map-1, #map-5, #map-6, #map-7, #map-8, #map-9, #map-10").hide();
  });
  // 
  $("#click-tabs-5").click(function(){
    $("#tabs-5").show();
    $("#tabs-0, #tabs-2, #tabs-3, #tabs-4, #tabs-1, #tabs-6, #tabs-7, #tabs-8, #tabs-9, #tabs-10").hide();
    // 
    $("#map-5").show();
    $("#map-0, #map-2, #map-3, #map-4, #map-1, #map-6, #map-7, #map-8, #map-9, #map-10").hide();
  });
  // 
  $("#click-tabs-6").click(function(){
    $("#tabs-6").show();
    $("#tabs-0, #tabs-2, #tabs-3, #tabs-4, #tabs-5, #tabs-1, #tabs-7, #tabs-8, #tabs-9, #tabs-10").hide();
    // 
    $("#map-6").show();
    $("#map-0, #map-2, #map-3, #map-4, #map-5, #map-1, #map-7, #map-8, #map-9, #map-10").hide();
  });
  // 
  $("#click-tabs-7").click(function(){
    $("#tabs-7").show();
    $("#tabs-0, #tabs-2, #tabs-3, #tabs-4, #tabs-5, #tabs-6, #tabs-1, #tabs-8, #tabs-9, #tabs-10").hide();
    // 
    $("#map-7").show();
    $("#map-0, #map-2, #map-3, #map-4, #map-5, #map-6, #map-1, #map-8, #map-9, #map-10").hide();
  });
  // 
  $("#click-tabs-8").click(function(){
    $("#tabs-8").show();
    $("#tabs-0, #tabs-2, #tabs-3, #tabs-4, #tabs-5, #tabs-6, #tabs-7, #tabs-1, #tabs-9, #tabs-10").hide();
    // 
    $("#map-8").show();
    $("#map-0, #map-2, #map-3, #map-4, #map-5, #map-6, #map-7, #map-1, #map-9, #map-10").hide();
  });
  // 
  $("#click-tabs-9").click(function(){
    $("#tabs-9").show();
    $("#tabs-0, #tabs-2, #tabs-3, #tabs-4, #tabs-5, #tabs-6, #tabs-7, #tabs-8, #tabs-1, #tabs-10").hide();
    // 
    $("#map-9").show();
    $("#map-0, #map-2, #map-3, #map-4, #map-5, #map-6, #map-7, #map-8, #map-1, #map-10").hide();
  });
  // 
  $("#click-tabs-10").click(function(){
    $("#tabs-10").show();
    $("#tabs-0, #tabs-2, #tabs-3, #tabs-4, #tabs-5, #tabs-6, #tabs-7, #tabs-8, #tabs-9, #tabs-1").hide();
    // 
    $("#map-10").show();
    $("#map-0, #map-2, #map-3, #map-4, #map-5, #map-6, #map-7, #map-8, #map-9, #map-1").hide();
  });

});
 
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();
$('.problemSolutionsSlider.owl-carousel').owlCarousel({
  autoplay: false,
  loop: false,
  dots:true,   
  nav: true,
  navText:"",
  touchDrag: true,
  mouseDrag: false,
  smartSpeed: 1000,
  margin:30,
  responsive: {
    0: {
      items: 1,
      nav: false,
    },
    600: {
      items: 1
    },
    1000: {
      items: 1
    }
  } 
});

$('.noRiskSlider.owl-carousel').owlCarousel({
  autoplay: false,
  loop: false,
  dots:true,   
  nav: true,
  navText:"",
  touchDrag: true,
  mouseDrag: false,
  smartSpeed: 1000,
  margin:24,
  responsive: {
    0: {
      items: 1,
      margin:0,
      nav: false,
    },
    600: {
      items: 1
    },
    1000: {
      items: 3
    }
  } 
});


