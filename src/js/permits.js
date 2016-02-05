require("component-responsive-frame/child");
var Chartist = require("chartist");

var permitData = {
  labels: ["2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014"],
  series: [
    [0, -4.031287758, -3.045935573, -5.122569933, -11.71442176, -5.75194854, -7.265978719, -7.81999798, -5.224595737, -5.330242135, -3.242639024],
    [0, -2.004080633, 1.657714296, 4.60060562, 5.572552598, 17.69542451, 39.17152911, 36.73783258, 49.60859106, 41.68749675, 48.52244546]
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
