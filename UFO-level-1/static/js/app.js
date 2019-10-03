var tableData = data;
console.log(tableData);

//Select the tbody elements and input fields
var tbody = d3.select("tbody");
tableData.forEach(sighting => {
   var row = tbody.append("tr");
  Object.entries(sighting).forEach(([key, value]) => {
       var cell = row.append("td");
       cell.text(value);
   });
});

// Add the button for the selection and select UFOdata
var searchButton = d3.select("#filter-btn");
searchButton.on("click", function() {
   var inputElement = d3.select("#datetime");
   var inputValue = inputElement.property("value");
   console.log(inputValue);
   console.log(tableData);

   //Filter the data selected based on the date entered
   
   var filteredData = tableData.filter(ufo => ufo.datetime === inputValue);
   var sightings2 = filteredData.map(ufo => ufo);
   tbody.html("");
   if (inputValue) {
   sightings2.forEach(ufosighting => {
        var row2 = tbody.append("tr");
      Object.entries(ufosighting).forEach(([key, value]) => {
           var cell2 = row2.append("td");
           cell2.text(value);
       });
   });
}
   else {
       tbody.html("");
   tableData.forEach(sighting => {
   var row = tbody.append("tr");
  Object.entries(sighting).forEach(([key, value]) => {
       var cell = row.append("td");
       cell.text(value);
   });
});
   }
});