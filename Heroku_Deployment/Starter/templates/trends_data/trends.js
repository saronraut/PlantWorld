
    d3.json("trends_data/treetypes.json").then((data) => {
      var metadata = data["pine tree"];
      var metadata2 = data["palm tree"];
      var metadata3 = data["apple tree"];
      var metadata4 = data["avocado tree"];
      var metadata5 = data["orange tree"];
      var y_arr = [];
      var x_arr = [];
      var y_arr2 = [];
      var x_arr2 = [];
      var y_arr3 = [];
      var x_arr3 = [];
      var y_arr4 = [];
      var x_arr4 = [];
      var y_arr5 = [];
      var x_arr5 = [];
      for (const [key, value] of Object.entries(metadata)) {
        var k = parseInt(key, 10);
        var k2 = new Date(k);
        x_arr.push(k2);
        y_arr.push(value);
      }
      for (const [key, value] of Object.entries(metadata2)) {
        var k = parseInt(key, 10);
        var k2 = new Date(k);
        x_arr2.push(k2);
        y_arr2.push(value);
      }
      for (const [key, value] of Object.entries(metadata3)) {
        var k = parseInt(key, 10);
        var k2 = new Date(k);
        x_arr3.push(k2);
        y_arr3.push(value);
      }
      for (const [key, value] of Object.entries(metadata4)) {
        var k = parseInt(key, 10);
        var k2 = new Date(k);
        x_arr4.push(k2);
        y_arr4.push(value);
      }
      for (const [key, value] of Object.entries(metadata5)) {
        var k = parseInt(key, 10);
        var k2 = new Date(k);
        x_arr5.push(k2);
        y_arr5.push(value);
      }
      var trace1 = {
        x: x_arr,
        y: y_arr,
        type: 'scatter',
        name: 'pine tree'
      };
      var trace2 = {
        x: x_arr2,
        y: y_arr2,
        type: 'scatter',
        name: 'palm tree'
      };
      var trace3 = {
        x: x_arr3,
        y: y_arr3,
        type: 'scatter',
        name: 'apple tree'

      };
      var trace4 = {
        x: x_arr4,
        y: y_arr4,
        type: 'scatter',
        name: 'avocado tree',
        line: {
          color: 'rgba(234,234,67,1)',
        }
      };
      var trace5 = {
        x: x_arr5,
        y: y_arr5,
        type: 'scatter',
        name: 'orange tree'

      };
      var layout1 = {
        title: "Fruit Trees",
        hovermode: "closest",
        hoverlabel: { bgcolor: "#FFF" },
        legend: {orientation: 'h', y: -0.3},
        xaxis: {
          title: "Date",
          zeroline: false
        },
        yaxis: {
          title: "Search Interest",
          zeroline: false
        }
      }
      var data1 = [trace1, trace2, trace3, trace4, trace5];
      Plotly.newPlot("graph1", data1, layout1)
    })
    
    d3.json("trends_data/buy_vs_dying.json").then((data) => {
      var metadata = data["buy plants online"];
      var metadata2 = data["dying plant"];
      var y_arr = [];
      var x_arr = [];
      var y_arr2 = [];
      var x_arr2 = [];
      for (const [key, value] of Object.entries(metadata)) {
        var k = parseInt(key, 10);
        var k2 = new Date(k);
        x_arr.push(k2);
        y_arr.push(value);
      }
      for (const [key, value] of Object.entries(metadata2)) {
        var k = parseInt(key, 10);
        var k2 = new Date(k);
        x_arr2.push(k2);
        y_arr2.push(value);
      }
      var trace1 = {
        x: x_arr,
        y: y_arr,
        type: 'scatter',
        name: "buy plants online",
        line: {
          color: '#00FF00',
        }
      };
      var trace2 = {
        x: x_arr2,
        y: y_arr2,
        type: 'scatter',
        name: "dying plant",
        line: {
          color: '#FFA500',
        }
      };
      var data1 = [trace1, trace2];
      var layout2 = {
        title: "Buying Plants vs Dying Plants",
        hovermode: "closest",
        hoverlabel: { bgcolor: "#FFF" },
        legend: {orientation: 'h', y: -0.3},
        xaxis: {
          title: "Date",
          zeroline: false
        },
        yaxis: {
          title: "Search Interest",
          zeroline: false
        }
      }
      Plotly.newPlot("graph2", data1, layout2)
    })

    d3.json("trends_data/veg_vs_flower.json").then((data) => {
      var metadata = data["vegetable garden"];
      var metadata2 = data["flower garden"];
      var y_arr = [];
      var x_arr = [];
      var y_arr2 = [];
      var x_arr2 = [];
      for (const [key, value] of Object.entries(metadata)) {
        var k = parseInt(key, 10);
        var k2 = new Date(k);
        x_arr.push(k2);
        y_arr.push(value);
      }
      for (const [key, value] of Object.entries(metadata2)) {
        var k = parseInt(key, 10);
        var k2 = new Date(k);
        x_arr2.push(k2);
        y_arr2.push(value);
      }
      var trace1 = {
        x: x_arr,
        y: y_arr,
        type: 'scatter',
        name: 'vegetable garden'
      };
      var trace2 = {
        x: x_arr2,
        y: y_arr2,
        type: 'scatter',
        name: 'flower garden'
      };
      var data1 = [trace1, trace2];
      var layout3 = {
        title: "Flowers or Vegetables",
        hovermode: "closest",
        hoverlabel: { bgcolor: "#FFF" },
        legend: {orientation: 'h', y: -0.3},
        xaxis: {
          title: "Date",
          zeroline: false
        },
        yaxis: {
          title: "Search Interest",
          zeroline: false
        }
      }
      Plotly.newPlot("graph3", data1, layout3)
    })

    d3.json("trends_data/flowers.json").then((data) => {
      var metadata = data["daffodil"];
      var metadata2 = data["marigold"];
      var metadata3 = data["tulip"];
      var metadata4 = data["daisy"];
      var metadata5 = data["lily"];

      var y_arr = [];
      var x_arr = [];
      var y_arr2 = [];
      var x_arr2 = [];
      var y_arr3 = [];
      var x_arr3 = [];
      var y_arr4 = [];
      var x_arr4 = [];
      var y_arr5 = [];
      var x_arr5 = [];
      for (const [key, value] of Object.entries(metadata)) {
        var k = parseInt(key, 10);
        var k2 = new Date(k);
        x_arr.push(k2);
        y_arr.push(value);
      }
      for (const [key, value] of Object.entries(metadata2)) {
        var k = parseInt(key, 10);
        var k2 = new Date(k);
        x_arr2.push(k2);
        y_arr2.push(value);
      }
      for (const [key, value] of Object.entries(metadata3)) {
        var k = parseInt(key, 10);
        var k2 = new Date(k);
        x_arr3.push(k2);
        y_arr3.push(value);
      }
      for (const [key, value] of Object.entries(metadata4)) {
        var k = parseInt(key, 10);
        var k2 = new Date(k);
        x_arr4.push(k2);
        y_arr4.push(value);
      }
      for (const [key, value] of Object.entries(metadata5)) {
        var k = parseInt(key, 10);
        var k2 = new Date(k);
        x_arr5.push(k2);
        y_arr5.push(value);
      }
      var trace1 = {
        x: x_arr,
        y: y_arr,
        type: 'scatter',
        name: 'daffodil'
      };
      var trace2 = {
        x: x_arr2,
        y: y_arr2,
        type: 'scatter',
        name: 'marigold'
      };
      var trace3 = {
        x: x_arr3,
        y: y_arr3,
        type: 'scatter',
        name: 'tulip'

      };
      var trace4 = {
        x: x_arr4,
        y: y_arr4,
        type: 'scatter',
        name: 'daisy'

      };
      var trace5 = {
        x: x_arr5,
        y: y_arr5,
        type: 'scatter',
        name: 'lily'

      };
      var layout4 = {
        title: "Top Flowers",
        hovermode: "closest",
        hoverlabel: { bgcolor: "#FFF" },
        legend: {orientation: 'h', y: -0.3},
        xaxis: {
          title: "Date",
          zeroline: false
        },
        yaxis: {
          title: "Search Interest",
          zeroline: false
        }
      }
      var data1 = [trace1, trace2, trace3, trace4, trace5];
      Plotly.newPlot("graph4", data1, layout4)
    })