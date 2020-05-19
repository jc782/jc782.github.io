window.onload = function () {
  var world = Snap.load("https://joshcarr.co.uk/assets/svg/mor.svg", onSVGLoaded);
  var s = Snap("#someID");
  let last_known_scroll_position = 0;
  let ticking = false;
  var limit = document.getElementById("scroll").scrollHeight
  window.addEventListener('scroll', function (e) {
    last_known_scroll_position = window.scrollY;
    if (!ticking) {
      window.requestAnimationFrame(function () {
        doSomething(window.scrollY, limit)
        ticking = false;
      });

      ticking = true;
    }
  }
  );
};

function onSVGLoaded(data) {
  var s = Snap("#someID");
  s.append(data);
}

function doSomething(scroll_pos, limit) {
  var s = Snap("#someID");
  var path = s.select("#linearGradient5928")
  var elev = s.select("#path5360")
  var dimens = elev.getBBox();
  var len = dimens.width;
  var value = len * (scroll_pos / parseFloat(limit));
  path.attr({ "x2": value, "x1": 0, "y2": 180, "y1": 180, });
}