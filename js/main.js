/* globals Chart:false, feather:false */
function drawChart(id, type, label, data) {
    // Graphs
    var ctx = document.getElementById(id)
    // eslint-disable-next-line no-unused-vars
    var myChart = new Chart(ctx, {
      type: type,
      data: {
        labels: label,
        datasets: data
      },
  
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        },
        legend: {
          display: true
        }
      }
    })
  }
  
  function transparentize(color, opacity) {
    var alpha = opacity === undefined ? 0.5 : 1 - opacity;
    return Color(color).alpha(alpha).rgbString();
  }
  
  
  (function () {
    'use strict'
  
    //
    var label1 = ['CGV Cinema', 'Lotte Cinema', 'Galaxy Cinema', 'MegaStar', 'LeDo Cinema', 'Metiz Cinema', 'StarLight Cinema', 'Kurama Cinema Cafe', 'Trung Vuong Theater', 'Others'];
    var dataset1 = [
      {
        label: 'Cinema and popular age',
        backgroundColor: 'red',
        borderColor: 'red',
        data: [
          560,
          300,
          350,
          250,
          150,
          350,
          400,
          100,
          150,
          50
        ],
        fill: false,
      }
    ]
    drawChart(
      'myChart',
      'bar',
      label1,
      dataset1);
  
    //pie
    
    var label2 = [
      '7-12',
      '13-18',
      '19-29',
      '30-49',
      '50+'
    ];
    var dataset2 = [
      {
        data: [
          150,
          400,
          450,
          200,
          100,
        ],
        backgroundColor: [
          'red',
          'orange',
          'yellow',
          'green',
          'blue',
        ],
        label: ''
      }
    ];
    drawChart('pieChart', 'pie', label2, dataset2);
  
    //area
    
  }())