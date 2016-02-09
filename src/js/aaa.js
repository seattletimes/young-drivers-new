require("component-responsive-frame/child");
var Chartist = require("chartist");
var $ = require("jquery");

var aaaData = {
  labels: [
    "Did not have a car", 
    "Could get around without driving", 
    "<strong>Gas was too expensive</strong>", 
    "<strong>Driving was too expensive</strong>", 
    "Just didn’t get around to it", 
    "Could do what I wanted to do without driving", 
    "Was nervous about driving", 
    "Just not very interested in driving", 
    "Had to complete driver education course first", 
    "<strong>Getting a license was too expensive</strong>"
  ],
  series: [
    [44, 39, 36, 36, 35, 32, 30, 29, 28, 26],
  ]
};

var aaaChart = new Chartist.Bar('#ct-aaa', aaaData, {
  horizontalBars: true,
  reverseData: true,
  axisX: {
    labelInterpolationFnc: function(value) {
      return (value) + '%';
    }
  },
  axisY: {
    showGrid: false,
    offset: 400
  }
},
[
  ['(max-width: 768px)', {
    axisY: {
      offset: 250
    }
  }],
  ['(max-width: 480px)', {
    axisY: {
      offset: 210
    }
  }]
]);

var $chart = $('#ct-aaa');

var $toolTip = $chart
  .append('<div class="tooltip"></div>')
  .find('.tooltip')
  .hide();

$chart.on('mouseenter', '.ct-bar', function() {
  var $bar = $(this);
  var value = Math.round($bar.attr('ct:value'));
  $toolTip.html(
    `${value}%`
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