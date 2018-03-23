$(document).ready(function(){

   $('#news-carousel').carousel();
   $('#photos-carousel').carousel();
   $('.navbar-toggler').on('click', function(){

      $('.sidebar-menu').toggleClass('open');

   });

});
