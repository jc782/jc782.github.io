window.onload = function () {
  var world = Snap.load("https://joshcarr.co.uk/assets/svg/Japan.svg", onSVGLoaded);
  let ticking = false;
  var limit = document.getElementById("scroll").scrollHeight
  var last_known_scroll_position = 0;
  drawMap(last_known_scroll_position, limit);

  window.addEventListener('scroll', function (e) {
    last_known_scroll_position = window.scrollY;
    if (!ticking) {
      window.requestAnimationFrame(function () {
        drawMap(last_known_scroll_position, limit);
        ticking = false;
      });
      ticking = true;
    }
  });

};

function onSVGLoaded(data) {
  var s = Snap("#someID");
  s.append(data);
}

function drawMap(scroll_pos, limit) {
  var s = Snap("#someID");
  var path = s.select("#trainPath");
  try {
    var scrolled = s.select("#scrolled");
    scrolled.remove();
    var len = Snap.path.getTotalLength(path);
    var value = len * (scroll_pos / parseFloat(limit));
    var subPath1 = path.getSubpath(0, value);
    var subPath2 = path.getSubpath(value, len);
    var subPat1 = s.path(subPath1);
    subPat1.attr({ "id": "scrolled", "stroke": "red", "stroke-width": "1.5", "fill": "none", "line-cap": "round" });
    var y = Math.floor(470 - 400 * (scroll_pos / parseFloat(limit)));
    s.attr({ viewBox: "0," + y + ",900,200" });
  } catch (error) {
    console.error('no scrolled element yet');
  }
}

