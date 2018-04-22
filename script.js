var svgEl = document.querySelector('svg');
var pathEl = document.querySelector('rect');
var polyEl = document.querySelector('.polygon');
var absoluteOffset = anime.timeline();
var offset = anime.setDashoffset(pathEl);
pathEl.setAttribute('stroke-dashoffset', offset);

// svgEl.width = polyEl.offsetWidth;
// svgEl.height = polyEl.offsetHeight;

absoluteOffset
  .add({
    targets: pathEl,
    strokeDashoffset: [offset, 0],
    duration: 750,
    delay: 300,
    loop: false,
    easing: 'easeOutSine',
    autoplay: true
  });

absoluteOffset
  .add({
    targets: pathEl,
    duration: 500,
    stroke: {
      value: function(el, i) {
        return 'rgb(220,'+ i * 4 +', 100)';
      },
      easing: 'linear',
      duration: 1000
    },
    strokeWidth: {
      value: 4,
      easing: 'linear',
      delay: 200,
      duration: 600
    },
    autoplay: true,
    direction: 'alternate',
    loop: true
  });

  setTimeout(function() {
    pathEl.setAttribute('stroke', 'rgb(100, 0, 200)');
    anime({
      targets: pathEl,
      stroke: [{
        value: function(el, i) {
          return 'rgb(220,'+ i * 2 +', 100)';
        }},
        {value: function(el, i) {
          return 'rgb(100,' + i * 3 +', 200)';
        }}],
      strokeWidth: {
        value: 6,
        easing: 'linear',
        duration: 400,
        direction: 'easeOutCubic',
        loop: true
      },
      easing: 'linear',
      duration: 2000,
      direction: 'alternate',
      loop: true
    });
  }, 2800);