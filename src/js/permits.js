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

var permitData = {
  labels: ["2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014"],
  series: [
    [
      {meta: '68951', value: 0},
      {meta: '68193', value: -1.10},
      {meta: '69226', value: 0.40},
      {meta: '67957', value: -1.44},
      {meta: '62794', value: -8.93},
      {meta: '65649', value: -4.79},
      {meta: '64082', value: -7.06},
      {meta: '62741', value: -9.01},
      {meta: '64273', value: -6.78},
      {meta: '64776', value: -6.06},
      {meta: '66363', value: -3.75}
    ],
    [
      {meta: '10053', value: 0},
      {meta: '9883', value: -1.69},
      {meta: '10443', value: 3.88},
      {meta: '10836', value: 7.79},
      {meta: '11255', value: 11.96},
      {meta: '12729', value: 26.62},
      {meta: '14844', value: 47.66},
      {meta: '14305', value: 42.30},
      {meta: '15377', value: 52.96},
      {meta: '14220', value: 41.45},
      {meta: '14756', value: 46.78}
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
},
[
  ['(max-width: 480px)', {
    axisX: {
      labelInterpolationFnc: function(value) {
        return "'" + value.slice(-2);
      }
    }
  }]
]);

var $chart = $('#ct-permits');

var $toolTip = $chart
  .append('<div class="tooltip"></div>')
  .find('.tooltip')
  .hide();

$chart.on('mouseenter', '.ct-point', function() {
  var $point = $(this);
  var value = Math.round($point.attr('ct:value'));
  var sign = value > 0 ? "&#9650;" : "&#9660;";
  value = value > 0 ? value : value * -1;
  var meta = commafy($point.attr('ct:meta'));
  if (value !== 0) {
    $toolTip.html(
      `${meta} permitted <br>(<span class='tiny'>${sign}</span>${value}%)`
    ).show();
  } else {
    $toolTip.html(
      `${meta} permitted`
    ).show();
  }
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
