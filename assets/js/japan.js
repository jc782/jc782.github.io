window.onload = function () {
  var world = Snap.load("http://localhost:4000/assets/svg/Japan.svg", onSVGLoaded);
  let last_known_scroll_position = 0;
  let ticking = false;
  var limit = document.getElementById("scroll").scrollHeight
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

};

function animateAlongPath(path, element, start, dur) {
  var len = Snap.path.getTotalLength(path);
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
}

function doSomething(scroll_pos, limit) {
  var s = Snap("#someID");
  var path = s.select("#trainPath")
  var scrolled = s.select("#scrolled")
  scrolled.remove()
  var len = Snap.path.getTotalLength(path);
  var value = len * (scroll_pos / parseFloat(limit));
  var subPath1 = path.getSubpath(0, value);
  var subPath2 = path.getSubpath(value, len);
  var subPat1 = s.path(subPath1);
  subPat1.attr({"id":"scrolled", "stroke": "red", "stroke-width": "1.5", "fill": "none","line-cap":"round" })
}

