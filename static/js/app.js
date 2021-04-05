// from data.js
var tableData = data;

// Use D3 to select the table
var table = d3.select("table");

// Use d3 to create a bootstrap striped table
// http://getbootstrap.com/docs/3.3/css/#tables-striped
table.attr("class", "table table-striped");

// Use D3 to select the table body
var tbody = d3.select("tbody");

tableData.forEach(rowData => {
    // Append one table row `tr` to the table body
    var rowTable = tbody.append("tr");

    Object.entries(rowData).forEach(([key, value]) => {
        // // Append one cell for the datetime m/d/yyyy
        var cellTable = rowTable.append("td")
        cellTable.text(value);
    });
});

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form-group");

// Create event handlers 
button.on("click", runFilter);
form.on("submit",runFilter);

// Complete the event handler function for the form
function runFilter() {
    tbody.html("");
    
    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    if (inputValue==="") { filteredData = tableData;
    } else {var filteredData = tableData.filter(filteredRow => filteredRow.datetime === inputValue);}
    //   d3.select("tbody").html("");
    filteredData.forEach(rowData => {
        // Append one table row `tr` to the table body
        var rowTable = tbody.append("tr");

        Object.entries(rowData).forEach(([key, value]) => {
            // // Append one cell for the datetime m/d/yyyy
            var cellTable = rowTable.append("td");
            cellTable.text(value);
        });
   });
};
