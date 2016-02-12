require("component-responsive-frame/child");
var Chartist = require("chartist");
var $ = require("jquery");

function commafy( num ) {

  if (!num) return;
  num = num.toString();
  if (num.length >= 4) {
    num = num.replace(/(\d)(?=(\d{3})+$)/g, '$1,');
  }

  return num;
}

var testingData = [
  { series: 
    [
      {meta: "6,632 people failed", value: 10.9},
      {meta: "54,220 people passed", value: 89.1}
    ]
  },
  { series: 
    [
      {meta: "9,020 people failed", value: 24.0},
      {meta: "28,579 people passed", value: 76.0}
    ]
  }
];

var testingChart1 = new Chartist.Pie('#ct-testing-1', testingData[0], {
  showLabel: false
});

var testingChart2 = new Chartist.Pie('#ct-testing-2', testingData[1], {
  showLabel: false
});

var $chart1 = $('#ct-testing-1');

var $toolTip1 = $chart1
  .append('<div class="tooltip"></div>')
  .find('.tooltip')
  .hide();

$chart1.on('mouseenter', '.ct-slice-pie', function() {
  var $slice = $(this);
  var value = Math.round($slice.attr('ct:value'));
  value = commafy(value);
  var meta = $slice.attr('ct:meta');
  $toolTip1.html(
    `${meta}<br>(<strong>${value}</strong>%)`
  ).show();
});

$chart1.on('mouseleave', '.ct-slice-pie', function() {
  $toolTip1.hide();
});

$chart1.on('mousemove', function(event) {
  $toolTip1.css({
    left: (event.offsetX || event.originalEvent.layerX) - $toolTip1.width() / 2 - 10,
    top: (event.offsetY || event.originalEvent.layerY) - $toolTip1.height() - 30
  });
});

var $chart2 = $('#ct-testing-2');

var $toolTip2 = $chart2
  .append('<div class="tooltip"></div>')
  .find('.tooltip')
  .hide();

$chart2.on('mouseenter', '.ct-slice-pie', function() {
  var $slice = $(this);
  var value = Math.round($slice.attr('ct:value'));
  value = commafy(value);
  var meta = $slice.attr('ct:meta');
  $toolTip2.html(
    `${meta}<br>(<strong>${value}%</strong>)`
  ).show();
});

$chart2.on('mouseleave', '.ct-slice-pie', function() {
  $toolTip2.hide();
});

$chart2.on('mousemove', function(event) {
  $toolTip2.css({
    left: (event.offsetX || event.originalEvent.layerX) - $toolTip2.width() / 2 - 10,
    top: (event.offsetY || event.originalEvent.layerY) - $toolTip2.height() - 30
  });
});
