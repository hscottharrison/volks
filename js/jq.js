angular.element(document).ready(function(){
  angular.element('.down-arrow').click(function() {
    $('html, body').animate({
        scrollTop: $("about").offset().top
    }, 10000);
});
})
