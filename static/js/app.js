// from data.js
var tableData = data;

// Step 1 - Use d3 to set up the table body and give it a variable.
var tbody = d3.select("#tbody1");

console.log(tableData);

// Step 2 - Use d3 to update/append cell's text with Song data such as Song, Artist, and Album
function displayData(data){
  tbody.text("")
  data.forEach(function(view){
    row = tbody.append("tr")
    Object.entries(view).forEach(function([key,value]) {
      cell = row.append("td").text(value)
    });
  })};

displayData(tableData)

var inputSong = d3.select("#songname");

function updateSongs() {
  d3.event.preventDefault();
  console.log(inputSong.property("value"));
  newSongs = tableData.filter(song => song.songname===inputSong.property("value"))
  displayData(newSongs)
}
inputSong.on("change",updateSongs)

button.on("click", displayData)