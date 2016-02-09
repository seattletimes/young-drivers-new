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
    {value: 44.52554745, meta: 1952},
    {value: 45.80613172, meta: 5543},
    {value: 46.88434123, meta: 6117},
    {value: 52.59627562, meta: 11213},
    {value: 58.91890096, meta: 17734}
  ],
  [
    {value: 22.42244526, meta: 983},
    {value: 20.17188662, meta: 2441},
    {value: 19.59071051, meta: 2556},
    {value: 20.56850697, meta: 4385},
    {value: 18.91757201, meta: 5694}
  ],
  [
    {value: 11.01733577, meta: 483},
    {value: 9.957854723, meta: 1205},
    {value: 10.34720625, meta: 1350},
    {value: 9.765936489, meta: 2082},
    {value: 8.505265956, meta: 2560}
  ],
  [
    {value: 9.466240876, meta: 415},
    {value: 10.05702008, meta: 1217},
    {value: 10.75342991, meta: 1403},
    {value: 8.719921197, meta: 1859},
    {value: 6.990265457, meta: 2104}
  ],
  [
    {value: 4.767335766, meta: 209},
    {value: 5.660689199, meta: 685},
    {value: 5.357553461, meta: 699},
    {value: 3.907312726, meta: 833},
    {value: 3.136316821, meta: 944}  
  ],
  [
    {value: 4.402372263, meta: 193},
    {value: 4.421122221, meta: 535},
    {value: 4.039242738, meta: 527},
    {value: 2.551714433, meta: 544},
    {value: 1.960198013, meta: 590}
  ],
  [
    {value: 3.398722628, meta: 149},
    {value: 3.92529543, meta: 475},
    {value: 3.027515904, meta: 395},
    {value: 1.890332567, meta: 403},
    {value: 1.57148078, meta: 473}
  ]
];

var incomeChart = new Chartist.Bar('#ct-income', {
  labels: ['Below 20th percentile', 'Below 40th percentile', 'Below 60th percentile', 'Below 80th percentile', 'Richest'],
  series: series,
}, {
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
    showGrid: false,
    offset: 75

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
      `${meta} (<strong>${value}%</strong>)`
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
