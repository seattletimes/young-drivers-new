require("component-responsive-frame/child");
var Chartist = require("chartist");
var $ = require("jquery");

var citationData = {
  labels: [16, 17, 18, 19, 20, 21, 22, 23, 24, 25],
  series: [
    [0.27, 0.44, 0.75, 0.65, 0.68, 0.62, 0.55, 0.47, 0.46, 0.39]
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
  var value = $bar.attr('ct:value');
  $toolTip.html(
    `<strong>${value}</strong> citations per driver`
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
