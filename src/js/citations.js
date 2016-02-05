require("component-responsive-frame/child");
var Chartist = require("chartist");

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