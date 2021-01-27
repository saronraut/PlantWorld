// from data.js
//Update====================================
//need to grab from database
// var tableData = data;

// get table references
var tbody = d3.select("tbody");

d3.json("/plants").then(data => {
  console.log(data.data.slice(0,25))
  const initial_data = data.data.slice(0,25)
  const loc = window.location.pathname;
  if(loc === "/form"){
  // console.log("form route")
    tbody.html("");
    const dataset = data.data
    const mapped_data = initial_data.map(item=>{
    const tbody = document.querySelector("tbody");
    tbody.innerHTML += `
    <tr>
        <td>${item.Common_Name}</td>
        <td>${item.Scientific_Name}</td>
        <td>${item.Family_Name}</td>
        <td>${item.Duration}</td>
        <td>${item.Flower_Color}</td>
        <td>${item.Foliage_Color}</td>
        <td>${item.Kind_of_Plant}</td>
        <td>${item.Mature_Ht_ft}</td>
        <td>${item.Toxicity}</td>
        <td>${item.Drought_Tolerance}</td>
        <td>${item.Shade_Tolerance}</td>
        <td>${item.Bloom_Period}</td>
        <td>${item.Edible}</td>
    </tr>`
  })
 }
})
function buildTable(data) {
  // First, clear out any existing data
  
  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    var row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      var cell = row.append("td");
      cell.text(val);
      console.log(val)
    });
  });
}

// Keep Track of all filters
//Update HTML =========================
//the filters are in html file table
var filters = {};

function updateFilters() {

  // Save the element, value, and id of the filter that was changed
  var changedElement = d3.select(this).select("input");
  var elementValue = changedElement.property("value");
  var filterId = changedElement.attr("id");

  // If a filter value was entered then add that filterId and value
  // to the filters list. Otherwise, clear that filter from the filters object
  if (elementValue) {
    filters[filterId] = elementValue;
  }
  else {
    delete filters[filterId];
  }

  // Call function to apply all filters and rebuild the table
  filterTable();

}

function filterTable() {

  // Set the filteredData to the tableData
  let filteredData = tableData;

  // Loop through all of the filters and keep any data that
  // matches the filter values
  Object.entries(filters).forEach(([key, value]) => {
    filteredData = filteredData.filter(row => row[key] === value);
  });

  // Finally, rebuild the table using the filtered Data
  buildTable(filteredData);
}

// Attach an event to listen for changes to each filter
d3.selectAll(".filter").on("change", updateFilters);

// Build the table when the page loads
// buildTable(tableData);
