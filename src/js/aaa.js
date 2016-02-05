require("component-responsive-frame/child");
var Chartist = require("chartist");

var aaaData = {
  labels: ["Did not have a car", "Could get around without driving", "Gas was too expensive", "Driving was too expensive", "Just didn’t get around to it", "Could do what I wanted to do without driving", "Was nervous about driving", "Just not very interested in driving", "Had to complete driver education course first", "Getting a license was too expensive"],
  series: [
    [44, 39, 36, 36, 35, 32, 30, 29, 28, 26],
  ]
};

var aaaChart = new Chartist.Bar('#ct-aaa', aaaData, {
  horizontalBars: true,
    reverseData: true,
  axisX: {
    showGrid: false,
    showLabel: false
  },
  axisY: {
    showGrid: false,
    offset: 400
  }
});