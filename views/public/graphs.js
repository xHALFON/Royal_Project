var graph1 = document.getElementById('graph1');
graph1.setAttribute('id', "myChart");


var xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
var yValues = [55, 49, 44, 24, 15];
var barColors = ["red", "green","blue","orange","brown"];

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {
        display: true,
        text: "Hello"
    },
    title: {
      display: true,
      text: "World Wine Production 2018"
    }
  }
});