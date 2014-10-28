$(function() {

  var $window = $(window); 
  $window.scroll(function() {
    var value = $(this).scrollTop();  // val of scroll
    $('#scrollValue').text(value);
  });

  $('.content').each(function(index) {
    var $self = $(this);
    var offsetCoords = $self.offset();
 
    $(window).scroll(function() {
      // If this section is in view
      if (($window.scrollTop() + $window.height()) > offsetCoords.top && ((offsetCoords.top + $self.height()) > $window.scrollTop())) {
        var yPos = -($window.scrollTop() / 6);
        if ($self.attr('id') != 'first') {
          yPos += 70;
        }
        var coords = '50%' + yPos + 'px';
        $self.css('backgroundPosition', coords);
      }
    });
  });

  $("#burgerMenu").click( function(event){
    event.preventDefault();
    if ($(this).hasClass("isDown") ) {
        $("#menu").animate({top:"-180px"}, 300);
        $(this).removeClass("isDown");
    } else {
        $("#menu").animate({top:"64px"}, 300);
        $(this).addClass("isDown");
    }
    return false;
  });

  $('.effect01').hover(function(){
    $(this).not(":animated").animate({letterSpacing: '.3em'}, 300);
  }, function(){
    $(this).animate({letterSpacing: '0em'}, 300);
  });
  
  
});

var mainCtrl = function($scope) {
    $scope.addUser = function() {
    }
}

