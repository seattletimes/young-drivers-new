require("component-responsive-frame/child");
var Chartist = require("chartist");

var testingData = [
  { series: [6632, 54220] },
  { series: [9020, 28579] }
];

var testingChart1 = new Chartist.Pie('#ct-testing-1', testingData[0]);

var testingChart2 = new Chartist.Pie('#ct-testing-2', testingData[1]);
