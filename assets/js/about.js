
// set triggers for hamburger menu at med size breakpoint
const hamburgerMenu = document.getElementById('#mobile-demo');

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, hamburgerMenu);
});

var aText = new Array(
  "about me",
  "               "

  );
  var iSpeed = 100;
  var iIndex = 0; 
  var iArrLength = aText[0].length; 
  var iScrollAt = 20; 
   
  var iTextPos = 0;
  var sContents = ''; 
  var iRow; 
   
  function typewriter()
  {
   sContents =  ' ';
   iRow = Math.max(0, iIndex-iScrollAt);
   var destination = document.getElementById("typewriter");
   
   while ( iRow < iIndex ) {
    sContents += aText[iRow++] + '<br />';
   }
   destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
   if ( iTextPos++ == iArrLength ) {
    iTextPos = 0;
    iIndex++;
    if ( iIndex != aText.length ) {
     iArrLength = aText[iIndex].length;
     setTimeout("typewriter()", 500);
    }
   } else {
    setTimeout("typewriter()", iSpeed);
   }
  }
  
  
  typewriter();
    