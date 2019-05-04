$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

  $('#modal_button').click(function(e) {
    $('.modal').addClass('active');
    e.preventDefault();
  });

  $('.modal').click(function(e) {
    $('.modal').removeClass('active');
    e.preventDefault();
  });

  $(function () {
  
    $('.md-trigger').on('click', function() {
      $('.md-modal').addClass('md-show');
      $('body').addClass('no-scroll');
      // $('.md-modal').addClass('touchscroll');
    });
    
    $('.md-close').on('click', function() {
      $('.md-modal').removeClass('md-show');
      $('body').removeClass('no-scroll');
      // $('.md-modal').removeClass('touchscroll');
    });
    
  });

  function scrollToPreventBounce(htmlElement) {
    const {scrollTop, offsetHeight, scrollHeight} = htmlElement;

    // If at top, bump down 1px
    if (scrollTop <= 0) {
      htmlElement.scrollTo(0, 1);
      return;
    }

    // If at bottom, bump up 1px
    if (scrollTop + offsetHeight >= scrollHeight) {
      htmlElement.scrollTo(0, scrollHeight - offsetHeight - 1);
    }
  }
  // When rendering the element
  function afterRender() {
     htmlElement.addEventListener('touchstart', scrollToPreventBounce);
  }
  // Remember to clean-up when removing it
  function beforeRemove() {
     htmlElement.removeEventListener('touchstart', scrollToPreventBounce);
  }


});