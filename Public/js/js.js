
 $(document).ready(function() {

   $("#card", this).hover(swapImageIn, swapImageOut);

          function swapImageIn(e) {
              this.src = this.src.replace("_off", "_on");
          }
          function swapImageOut (e) {
              this.src = this.src.replace("_on", "_off");
          }


 });
 $(document).scroll(function() {
   var st = $(this).scrollTop();
   $("#header").css({
     "background-position-y": (-st/20)
   })
   $("#headerc").css({
     "top": (-st/5),
     "bottom": (st/5)
   })
 });
