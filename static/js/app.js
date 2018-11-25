// from data.js
var tableData = data;

// Step 1 - Use d3 to set up the table body and give it a variable.
var tbody = d3.select("tbody");

console.log(tableData);

// Step 2 - Use d3 to update/append cell's text with UFO data
//  such as Date/City/State/Country/Shape/Duration/Comment
function displayData(data){
  tbody.text("")
  data.forEach(function(view){
    row = tbody.append("tr")
    Object.entries(view).forEach(function([key,value]) {
      cell = row.append("td").text(value)
    });
  })};

displayData(tableData)


var button = d3.select("filter-btn");
var inputDate = d3.select("#datetime");


var inputCity = d3.select("#city");
var inputState = d3.select("#state");
var inputCountry = d3.select("#country");
var inputShape = d3.select("#shape");

function updateDates() {
  d3.event.preventDefault();
  console.log(inputDate.property("value"));
  newDates = tableData.filter(date => date.datetime===inputDate.property("value"))
  displayData(newDates)
}
function updateCity() {
  d3.event.preventDefault();
  console.log(inputCity.property("value"));
  newCity = tableData.filter(city => city.city===inputCity.property("value"))
  displayData(newCity)
}
function updateState() {
  d3.event.preventDefault();
  console.log(inputState.property("value"));
  newState = tableData.filter(state => state.state===inputState.property("value"))
  displayData(newState)
}
function updateCountry() {
  d3.event.preventDefault();
  console.log(inputCountry.property("value"));
  newCountry = tableData.filter(country => country.country===inputCountry.property("value"))
  displayData(newCountry)
}
function updateShape() {
  d3.event.preventDefault();
  console.log(inputShape.property("value"));
  newShape = tableData.filter(shape => shape.shape===inputShape.property("value"))
  displayData(newShape)
}
inputDate.on("change",updateDates)
inputCity.on("change",updateCity);
inputState.on("change",updateState);
inputCountry.on("change",updateCountry);
inputShape.on("change",updateShape);

button.on("click", displayData)
