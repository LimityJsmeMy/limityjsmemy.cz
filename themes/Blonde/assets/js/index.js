var wrappers = document.querySelectorAll('.teaser-wrapper, .featured-wrapper');
Array.prototype.forEach.call(wrappers, function (el, i) {
  var tilt = -0.25 + Math.random() / 2;
  el.style.transform = 'rotate(' + tilt + 'deg)';
  let firstChild = el.children[0];
  firstChild.style.transform = 'rotate(-' + tilt + 'deg)';
});

