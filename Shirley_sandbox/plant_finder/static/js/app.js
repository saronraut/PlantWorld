// get table references
let tbody = d3.select("tbody");

d3.json("/plants").then(data => {
  const initial_data = data.data.slice(0,25)
  const loc = window.location.pathname;
  if(loc === "/form"){
  
    tbody.html("");
    const dataSet = data.data
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
  d3.selectAll("#filter-btn").on("click", updateFilters);

  function updateFilters() {
    // prevent auto refresh 
    d3.event.preventDefault();
  
    // Save the element, value, and id of the filter that was changed
    let filterNames = ["#Flower_Color","#Drought_Tolerance","#Shade_Tolerance","#Duration","#Edible", "#Toxicity"];
    let filters = {};
    console.log(filterNames)

    for (idFilters of filterNames){
      let changedElement = d3.select(idFilters);
      let elementValue = changedElement.property("value");
      let filterId = changedElement.attr("id");
      console.log(`filters=${idFilters}`)
      // If a filter value was entered then add that filterId and value
      // to the filters list. Otherwise, clear that filter from the filters object
      if (elementValue) {
        filters[filterId] = elementValue;
      }
      else {
        delete filters[filterId];
      }
    }
    
    // Call function to apply all filters and rebuild the table
    filterTable(filters);
  
  }

  function filterTable(filterValues) {

    // Set the filteredData to the tableData
    let filteredData = dataSet;
  
    // Loop through all of the filters and keep any data that
    // matches the filter values
    Object.entries(filterValues).forEach(([key, value]) => {
      filteredData = filteredData.filter(row => row[key] === value);
    });
  
    // Finally, rebuild the table using the filtered Data
    buildTable(filteredData);

  }

  function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");

    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
      // Append a row to the table body
      let row = tbody.append("tr");

      // add each value as a table cell (td)
  
      let commonName = dataRow['Common_Name'];
      let bloomPeriod = dataRow['Bloom_Period'];
      let droughtTolerance = dataRow['Drought_Tolerance'];
      let duration = dataRow['Duration'];
      let edible = dataRow['Edible'];
      let familyName = dataRow['Family_Name'];
      let flowerColor = dataRow['Flower_Color'];
      let foliage = dataRow['Foliage_Color'];
      let kindOfPlant = dataRow['Kind_of_Plant'];
      let scientificName = dataRow['Scientific_Name'];
      let shadeTolerance = dataRow['Shade_Tolerance'];
      let toxicity = dataRow['Toxicity'];
      let height = dataRow['Mature_Ht_ft'];

      row.append("td").text(commonName);
      row.append("td").text(scientificName);
      row.append("td").text(familyName);
      row.append("td").text(duration);
      row.append("td").text(flowerColor);
      row.append("td").text(foliage);
      row.append("td").text(kindOfPlant);
      row.append("td").text(height);
      row.append("td").text(toxicity);
      row.append("td").text(droughtTolerance);
      row.append("td").text(shadeTolerance);
      row.append("td").text(bloomPeriod);
      row.append("td").text(edible);

    });
  }

 }
  
})
