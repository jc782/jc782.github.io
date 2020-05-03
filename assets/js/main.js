window.onload= function(){
var world = Snap.load("https://joshcarr.co.uk/assets/svg/Georgia.svg", onSVGLoaded ) ;
};

function onSVGLoaded( data ){ 
    var path = data.select("#flight");
    var s = Snap("#someID");
    s.append( data );
    path.animate({
      "stroke-dashoffset": -300,
    }, 4000, mina.easeinout);
}
