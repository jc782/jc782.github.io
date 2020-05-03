window.onload= function(){
  var world = Snap.load("http://localhost:4000/assets/svg/Japan.svg", onSVGLoaded);
};

function animateAlongPath(path, element, start, dur) {
  var len = Snap.path.getTotalLength(path);
  console.log(len)
  Snap.animate(start, len, function (value) {
    var movePoint = Snap.path.getPointAtLength(path, value);
    var subPath = path.getSubpath(0, value);
    var subPat = s.path(subPath)
    subPat.attr({ "stroke": "orange", "stroke-width": 3, "fill": "none" })
    element.attr({ cx: movePoint.x, cy: movePoint.y });
    console.log(movePoint.y)
  }, dur);
};

function onSVGLoaded(data) {
  var s = Snap("#someID");
  s.append(data);
  var element = s.select("#marker");
  var path = s.select("#trainPath");
  //animateAlongPath(path, element, 0, 4000);
}

let last_known_scroll_position = 0;
let ticking = false;
var limit = Math.max(document.body.scrollHeight, document.body.offsetHeight,
  document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
console.log(limit)

function doSomething(scroll_pos, limit) {
  var path = s.select("#trainPath")
  var len = Snap.path.getTotalLength(path);
  var value = len*(scroll_pos/parseFloat(limit));
  var movePoint = Snap.path.getPointAtLength(path, value);
  var subPath1 = path.getSubpath(0, value);
  var subPath2 = path.getSubpath(value, len);
  var subPat1 = s.path(subPath1);
  var subPat2 = s.path(subPath2);
  subPat1.attr({ "stroke": "orange", "stroke-width": 3, "fill": "none" })
  subPat2.attr({ "stroke": "black", "stroke-width": 1, "fill": "none" })
}

window.addEventListener('scroll', function (e) {
  last_known_scroll_position = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function () {
      doSomething(last_known_scroll_position, limit);
      ticking = false;
    });

    ticking = true;
  }
});