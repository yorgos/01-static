// 1. Before the document loads ////////////////////////////////////////////////

// 1.1 Event listener (when the "send" button of the contact form is being pressed)
$("#send").on("click", function() {
  console.log("clicked"); // Here we make sure we're catching the click
  var comment = $(".message-box").val();
  // $("#visible-comment").html(comment);
  // $(".message-box").hide();

  if(comment = "") {
         (".message-box").css("border", "3px solid red");
  } else {
        $("#visible-comment").html(comment);
        $(".message-box").hide();
  };
  // since we do not have any back-end yet to store the data inserted in the textarea
  // we are just "returning false" for the time being.
  return false;
});

// 1.2 Google maps in contact section
var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 52.516281, lng: 13.37843},
    zoom: 16
  });
  // Marker with "initial drop" and "bounche when clicked" animation
  var marker = new google.maps.Marker({
    map: map,
    draggable: true,
    animation: google.maps.Animation.DROP,
    position: {lat: 52.516281, lng: 13.37843}
  });

  marker.addListener('click', toggleBounce);
}

function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}



// 2. Once the document has been loaded ////////////////////////////////////////
$(document).ready(function(){

  // 2.1 Hamburger Toggle
  $('.navbar-collapse ul li a').click(function(){
    $('.navbar-toggle:visible').click();
  });

  $(function () {
   $('.navbar-collapse ul li a:not(.dropdown-toggle)').click(function () {
     $('.navbar-toggle:visible').click();
    });
  });

  $(function () {
    $('.navbar-collapse ul li a:not(.dropdown-toggle)').bind('click touchstart', function () {
      $('.navbar-toggle:visible').click();
    });
 });


  // 2.2 Smooth scrolling
  var $root = $('html, body');
  $(".navbar-nav a:not(.dropdown-toggle)").click(function() {
      var href = $.attr(this, 'href');
      $root.animate({
          scrollTop: $(href).offset().top
      }, 500, function () {
          window.location.hash = href;
      });
      // return false;
  });

  $(".navbar-nav a.dropdown-toggle").click(function() {
    var href = $.attr(this, "data-scroll-to");
    $root.animate({
        scrollTop: $(href).offset().top
    }, 500, function() {
        window.location.hash = href
    });
  });

  // 2.3 Tooltips
    // Tooltip in the introduction section at the left column in the paragraph
    $(function () {
      $('#tooltip1').tooltip();
    });

    // Tooltip in the introduction section at the mid column on the button
    $(function () {
      $('[data-toggle="tooltip"]').tooltip();
    });

  // 2.4 Event listener "keyup on message-box"
  $("#message").on("keyup", function() {

      console.log("keyup happened"); // Here we make sure we're catching the keyup
      var charCount = $("#message").val().length; //Here we set the length of the content of the textarea to a variable
      console.log(charCount); // Checking our code along the way. Here we make sure we set it to the right value
      $("#char-count").html(charCount); // Here we are presenting a running character count to the user

      if(charCount > 50) {
             $("#char-count").css("color", "red"); // Turns character count into red
      } else {
             $("#char-count").css("color", "white"); // Turns character count back into white
      };

  });

  // 2.5 Work
  for(var i = 0; i < works.length; ++i ) {
    $("#other-work").append("\
      <div class='col-lg-3 col-md-3 col-sm-6'>\
        <div class='other-work-image'>\
          <a href='works[i].url' class='work-img'>\
            <img class='img-responsive' src='" + works[i].pic + "'>\
            <span class='info'><p class='proj-title'>Title:</p>" + works[i].title + "</span>\
          </a>\
        </div>\
      </div>\
    ");

    $(".work-img").mouseenter( function() {
      $(".info", this).show();
    }).mouseleave(function(){
      $(".info", this).hide();
    });
  };

});
