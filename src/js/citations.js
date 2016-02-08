require("component-responsive-frame/child");
var Chartist = require("chartist");
var $ = require("jquery");

var citationData = {
  labels: [16, 17, 18, 19, 20, 21, 22, 23, 24, 25],
  series: [
    [268.5, 438.9, 751.5, 654.2, 678.7, 623.8, 546.6, 474.6, 460.8, 393.2]
  ]
};

var citationChart = Chartist.Bar('#ct-citations', citationData, {
  axisX: {
    showGrid: false
  }
});

var $chart = $('#ct-citations');

var $toolTip = $chart
  .append('<div class="tooltip"></div>')
  .find('.tooltip')
  .hide();

$chart.on('mouseenter', '.ct-bar', function() {
  var $bar = $(this);
  var value = Math.round($bar.attr('ct:value'));
  $toolTip.html(
    `${value} citations`
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
