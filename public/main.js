
function Theme ( bodyTargetColor, buttonTargetColor ) {
    var firstClick = document.getElementsByTagName('BODY')[0].style.backgroundColor != bodyTargetColor ? true : false;
    if (firstClick) { 
       document.getElementsByTagName('BODY')[0].style.backgroundColor = bodyTargetColor;
       return false;
   } 
   document.getElementById('changeColors').style.backgroundColor = buttonTargetColor;
}
        