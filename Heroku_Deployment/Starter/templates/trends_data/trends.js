
    d3.json("trends_data/treetypes.json").then((data) => {
      var metadata = data["lemon tree"];
      var metadata2 = data["cherry tree"];
      var metadata3 = data["apple tree"];
      var metadata4 = data["peach tree"];
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
        name: 'lemon tree',
        line: {
          color: '#FDCE2A',
        }
      };
      var trace2 = {
        x: x_arr2,
        y: y_arr2,
        type: 'scatter',
        name: 'cherry tree',
        line: {
          color: '#A91101',
        }
      };
      var trace3 = {
        x: x_arr3,
        y: y_arr3,
        type: 'scatter',
        name: 'apple tree',
        line: {
          color: '#bf4aa8',
        }
      };
      var trace4 = {
        x: x_arr4,
        y: y_arr4,
        type: 'scatter',
        name: 'peach tree',
        line: {
          color: '#51d0de',
        }
      };
      var trace5 = {
        x: x_arr5,
        y: y_arr5,
        type: 'scatter',
        name: 'orange tree',
        line: {
          color: '#6aa84f',
        }
      };
      var layout1 = {
        title: {
          text:"Popular Fruit Trees",
          font: {
            family: 'Arial',
            size: 24
          },
        },
        hovermode: "closest",
        hoverlabel: { bgcolor: "#FFF" },
        legend: {orientation: 'h', y: -0.1},
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
      Plotly.newPlot("graph3", data1, layout1)
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
          color: '#0A5E2AFF',
        }
      };
      var trace2 = {
        x: x_arr2,
        y: y_arr2,
        type: 'scatter',
        name: "dying plant",
        line: {
          color: '#fa625f',
        }
      };
      var data1 = [trace1, trace2];
      var layout2 = {
        title: {
          text:"Buying Plants Vs Dying Plants",
          font: {
            family: 'Arial',
            size: 24
          },
        },
        hovermode: "closest",
        hoverlabel: { bgcolor: "#FFF" },
        legend: {orientation: 'h', y: -0.1},
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
        name: 'vegetable garden',
        line: {
          color: '#00A4CCFF',
        }
      };
      var trace2 = {
        x: x_arr2,
        y: y_arr2,
        type: 'scatter',
        name: 'flower garden',
        line: {
          color: '#FF3EA5FF',
        }
      };
      var data1 = [trace1, trace2];
      var layout3 = {
        title: {
          text:"Flower Vs Vegetable Gardens",
          font: {
            family: 'Arial',
            size: 24
          },
        },
        hovermode: "closest",
        hoverlabel: { bgcolor: "#FFF" },
        legend: {orientation: 'h', y: -0.1},
        xaxis: {
          title: "Date",
          zeroline: false
        },
        yaxis: {
          title: "Search Interest",
          zeroline: false
        }
      }
      Plotly.newPlot("graph1", data1, layout3)
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
        name: 'daffodil',
        line: {
          color: '#c0e218',
        }
      };
      var trace2 = {
        x: x_arr2,
        y: y_arr2,
        type: 'scatter',
        name: 'marigold',
        line: {
          color: '#f37121',
        }
      };
      var trace3 = {
        x: x_arr3,
        y: y_arr3,
        type: 'scatter',
        name: 'tulip',
        line: {
          color: '#c70039',
        }

      };
      var trace4 = {
        x: x_arr4,
        y: y_arr4,
        type: 'scatter',
        name: 'daisy',
        line: {
          color: '#161748',
        }

      };
      var trace5 = {
        x: x_arr5,
        y: y_arr5,
        type: 'scatter',
        name: 'lily',
        line: {
          color: '#51c2d5',
        }

      };
      var layout4 = {
        title: {
          text:"Popular Flowers",
          font: {
            family: 'Arial',
            size: 24
          },
        },
        hovermode: "closest",
        hoverlabel: { bgcolor: "#FFF" },
        legend: {orientation: 'h', y: -0.1},
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