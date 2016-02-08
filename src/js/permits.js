require("component-responsive-frame/child");
var Chartist = require("chartist");
var $ = require("jquery");

var permitData = {
  labels: ["2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014"],
  series: [
    [
      {meta: 'number', value: 0},
      {meta: 'number', value: -4.031287758},
      {meta: 'number', value: -3.045935573},
      {meta: 'number', value: -5.122569933},
      {meta: 'number', value: -11.71442176},
      {meta: 'number', value: -5.75194854},
      {meta: 'number', value: -7.265978719},
      {meta: 'number', value: -7.81999798},
      {meta: 'number', value: -5.224595737},
      {meta: 'number', value: -5.330242135},
      {meta: 'number', value: -3.242639024}
    ],
    [
      {meta: 'number', value: 0},
      {meta: 'number', value: -2.004080633},
      {meta: 'number', value: 1.657714296},
      {meta: 'number', value: 4.60060562},
      {meta: 'number', value: 5.572552598},
      {meta: 'number', value: 17.69542451},
      {meta: 'number', value: 39.17152911},
      {meta: 'number', value: 36.73783258},
      {meta: 'number', value: 49.60859106},
      {meta: 'number', value: 41.68749675},
      {meta: 'number', value: 48.52244546}
    ]
  ]
};

var permitChart = new Chartist.Line('#ct-permits', permitData, {
  axisX: {
    showGrid: false
  },
  axisY: {
    labelInterpolationFnc: function(value) {
      return value + "%";
    }
  }
});

var $chart = $('#ct-permits');

var $toolTip = $chart
  .append('<div class="tooltip"></div>')
  .find('.tooltip')
  .hide();

$chart.on('mouseenter', '.ct-point', function() {
  var $point = $(this);
  var value = Math.round($point.attr('ct:value'));
  $toolTip.html(
    `(${value}%)`
  ).show();
});

$chart.on('mouseleave', '.ct-point', function() {
  $toolTip.hide();
});

$chart.on('mousemove', function(event) {
  $toolTip.css({
    left: (event.offsetX || event.originalEvent.layerX) - $toolTip.width() / 2 - 10,
    top: (event.offsetY || event.originalEvent.layerY) - $toolTip.height() - 30
  });
});
