// from data.js
var tableData = data;

var tbody = d3.select("tbody");
let table = d3.select("table");

// inserting table into the the page
// made the table creation into a function, to help shorten the code for filtering
function buildtable(data) {
    // to refresh the table, so filter data or changed data wouldn't populate on top of the older table
  tbody.html("");
  data.forEach((item) => {
    // console.log(item)
    let row = tbody.append("tr");
    let date = row.append("td");
    let city = row.append("td");
    let state = row.append("td");
    let country = row.append("td");
    let shape = row.append("td");
    let duration = row.append("td");
    let comments = row.append("td");
    date.text(item.datetime);
    city.text(item.city);
    state.text(item.state);
    country.text(item.country);
    shape.text(item.shape);
    duration.text(item.durationMinutes);
    comments.text(item.comments);
  });
}

// Track all of the filters
var filters = {};
function updateFilters() {
  var changedElement = d3.select(this).select("input");
  var elementValue = changedElement.property("value");
  var filterId = changedElement.attr("id");

  /* if a filter value was entered then add that filterid and value
    to the filters list. otherwise, clear that filter from the filter objects */
  if (elementValue) {
    filters[filterId] = elementValue;
  } else {
    delete filters[filterId];
  }
  //  Call function to apply all filters and rebuild the table
  filterTable();
}

function filterTable() {
  // set the filtered data to the tableData
  let filteredData = tableData;

   /*Loop through all of the filters and keep any data that
   matches the filter values */
 //   This part of code was provided by the instructor. 
  Object.entries(filters).forEach(([key, value]) => {
    filteredData = filteredData.filter((item) => item[key] === value);
  });
  buildtable(filteredData);
}

d3.selectAll(".filter").on("change", updateFilters);

buildtable(tableData);
