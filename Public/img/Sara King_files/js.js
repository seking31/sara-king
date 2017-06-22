
 $(document).ready(function() {

   $("#card", this).hover(swapImageIn, swapImageOut);

          function swapImageIn(e) {
              this.src = this.src.replace("_off", "_on");
          }
          function swapImageOut (e) {
              this.src = this.src.replace("_on", "_off");
          }

 });
