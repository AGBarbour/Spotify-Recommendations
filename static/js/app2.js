// from data.js
var suggestData = data;
// var recommendedData = dbData
// Step 1 - Use d3 to set up the table body and give it a variable.
var tbody = d3.select("#tbody1");
var tbody2 = d3.select("#tbody2");

console.log(suggestData);

// Step 2 - Use d3 to update/append cell's text with song data such as Title, Artist, and Album
function displayData(data){
  tbody.text("")
  data.forEach(function(view){
    row = tbody.append("tr")
    Object.entries(view).forEach(function([key,value]) {
      cell = row.append("td").text(value)
    });
  })};

displayData(suggestData)

// var button = d3.select("filter-btn");
var inputSong = d3.select("#songname");


// function displayDB(dbData){
//   tbody2.text("")
//   dbData.forEach(function(view){
//     row = tbody2.append("tr")
//     Object.entries(view).forEach(function([key,value]) {
//       cell = row.append("td").text(value)
//     });
//   })};

// displayDB(recommendedData)

function updateRecs() {
  d3.event.preventDefault();
  console.log(inputSong.property("value"));
  newSongs = suggestData.filter(song => song.songname===inputSong.property("value"))
  displayData(newSongs)
}
inputSong.on("change",updateRecs);

button.on("click", displayData);
