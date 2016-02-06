require("component-responsive-frame/child");
var Chartist = require("chartist");
var $ = require("jquery");

function commafy( num ) {
  if (!num) return;
  if (num.length >= 4) {
    num = num.replace(/(\d)(?=(\d{3})+$)/g, '$1,');
  }
  return num;
}

var series = [
  [
    {meta: 17734, value: 41.66921215},
    {meta: 5694, value: 35.45675322},
    {meta: 2560, value: 33.33333333},
    {meta: 2104, value: 30.06573307},
    {meta: 944, value: 28.01186944},
    {meta: 590, value: 24.69652574},
    {meta: 473, value: 24.96042216}
  ],
  [
    {meta: 11213, value: 26.34695364},
    {meta: 4385, value: 27.30556074},
    {meta: 2082, value: 27.109375},
    {meta: 1859, value: 26.56473278},
    {meta: 833, value: 24.71810089},
    {meta: 544, value: 22.77103391},
    {meta: 403, value: 21.26649077}
  ],
  [
    {meta: 6117, value: 14.37298809},
    {meta: 2556, value: 15.91630861},
    {meta: 1350, value: 17.578125},
    {meta: 1403, value: 20.04858531},
    {meta: 699, value: 20.74183976},
    {meta: 527, value: 22.0594391},
    {meta: 395, value: 20.84432718}
  ],
  [
    {meta: 5543, value: 13.02427219},
    {meta: 2441, value: 15.20019927},
    {meta: 1205, value: 15.69010417},
    {meta: 1217, value: 17.39068305},
    {meta: 685, value: 20.3264095},
    {meta: 535, value: 22.39430724},
    {meta: 475, value: 25.06596306}
  ],
  [
    {meta: 1952, value: 4.586573933},
    {meta: 983, value: 6.121178156},
    {meta: 483, value: 6.2890625},
    {meta: 415, value: 5.93026579},
    {meta: 209, value: 6.201780415},
    {meta: 193, value: 8.078694014},
    {meta: 149, value: 7.862796834}
  ]
];

var incomeChart = new Chartist.Bar('#ct-income', {
  labels: ['15', '16', '17', '18', '19', '20', '21'],
  series: series,
}, {
  reverseData: true,
  stackBars: true,
  horizontalBars: true,
  axisX: {
    onlyInteger: true,
    high: 100,
    labelInterpolationFnc: function(value) {
      return (value) + '%';
    }
  },
  axisY: {
    showGrid: false
  },
   seriesBarDistance: 2
});

var $chart = $('#ct-income');

var $toolTip = $chart
  .append('<div class="tooltip"></div>')
  .find('.tooltip')
  .hide();

$chart.on('mouseenter', '.ct-bar', function() {
  var $bar = $(this),
    value = Math.round($bar.attr('ct:value')),
    meta = commafy($bar.attr('ct:meta'));
    $toolTip.html(
      `${meta} (${value}%)`
    ).show();
});

$chart.on('mouseleave', '.ct-bar', function() {
  $toolTip.hide();
});

$chart.on('mousemove', function(event) {
  $toolTip.css({
    left: (event.offsetX || event.originalEvent.layerX) - $toolTip.width() / 2 - 10,
    top: (event.offsetY || event.originalEvent.layerY) - $toolTip.height() - 30
  });
});
