// -----------------------------------------------------------------------------
// Slide internal links
// -----------------------------------------------------------------------------
function moveInternalLink() {
    $('a[href*="#"]').click(function() {
      var speed = 400;
      var href= $(this).attr("href");
      if (href.startsWith("./")) {
        href = href.substring(2);
      }
  
      if (!href.startsWith("#")) {
        return true;
      }
  
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
   });
}