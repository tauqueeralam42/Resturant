

$(document).ready(function() {
    $(window).on('scroll', function() {
      if ($(document).scrollTop() > 20) {
        $(".navigation-wrap").addClass("scroll-on");
      } else {
        $(".navigation-wrap").removeClass("scroll-on");
      }
    });
  });


$(document).ready(function() {
    // Navbar collapse
    $('.nav-link').click(function() {
      $('.navbar-collapse.collapse').removeClass('show');
    });
  
    
    function counter(id, start, end, duration) {
      let obj = $('#' + id);
      let current = start;
      let range = end - start;
      let increment = end > start ? 1 : -1;
      let step = Math.abs(Math.floor(duration / range));
      let timer = setInterval(function() {
        current += increment;
        obj.text(current);
        if (current === end) {
          clearInterval(timer);
        }
      }, step);
    }
  
    counter('count1', 576, 1287, 2000);
    counter('count2', 170, 1186, 2500);
    counter('count3', 345, 1340, 2000);
    counter('count4', 289, 1410, 2000);
  });
   
  
  
  
  
   
   

