  $(document).ready(function() {
    $("#open-menu").click(function() {
      $("aside").animate({
        "left": 0
      }, 2500);
    });
    $("#close-menu").click(function() {
      $("aside").animate({
        "left": "-100\%"
      }, 2500);
    });

  });
