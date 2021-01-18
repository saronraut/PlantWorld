
/********************************************/
function buildTable() {
  

  queryUrl="/table"
  d3.json(queryUrl).then(data => {
    var table = d3.select("#summary-table");
    var tbody = table.select("tbody");

    data.dataset.data.forEach(d => {
      var row = tbody.append('tr')
      Object.values(d).forEach((element, index) => {
        if (index <= 5) {
          row.append('td').text(element)
        }
      })
    })
  })

}

/********************************************/
function buildChart() {
  url="/chart"
  d3.json(url).then(Plot)
  
  function Plot(data) {
    var name = data.dataset.name;
    var stock = data.dataset.dataset_code;
    var startDate = data.dataset.start_date;
    var endDate = data.dataset.end_date;
    var dates = data.dataset.data.map(d=>d[0]);
    var openingPrices = data.dataset.data.map(d=>d[1]);
    var highPrices = data.dataset.data.map(d=>d[2]);
    var lowPrices = data.dataset.data.map(d=>d[3]);
    var closingPrices = data.dataset.data.map(d=>d[4]);

    var trace1 = {
      type: "scatter",
      mode: "lines",
      name: name,
      x: dates,
      y: closingPrices,
      line: {
        color: "#17BECF"
      }
    }
    var trace2 = {
      type: "candlestick",
      x: dates,
      high: highPrices,
      low: lowPrices,
      open: openingPrices,
      close: closingPrices
    };


    var layout = {
      title: `${stock} closing prices`,
      xaxis: {
        range: [startDate, endDate],
        type: "date",        
      },
      yaxis: {
        autorange: true,
        type: "linear",
        rangeslider: {
          title:"red"
        }
      },
      showlegend: false
    };

    Plotly.newPlot('plot', [trace1,trace2], layout)
  }

}

/********************************************/

buildTable()
buildChart()
