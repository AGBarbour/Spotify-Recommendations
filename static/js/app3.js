var tableData = data;
var tableSVM = modelSVM;
var tableKNN = modelKNN;
var tableDL = modelDL;


var tbody = d3.select("#tbody1");
var tbody2 = d3.select("#tbody2");


var button1 = d3.select("#filter-btn");
var button2 = d3.select("#filter-modelSVM");
var button3 = d3.select("#filter-modelKNN");
var button3 = d3.select("#filter-modelDL");
var inputSong = d3.select("#songname");

// This pulls the static song data
function updateSongs() {
  d3.event.preventDefault();
  console.log(inputSong.property("value"));
//   newSongs = tableData.filter(song => song.songname===inputSong.property("value"))
  staticData(newSongs)
}
// This updates tbody 1 with the static song data
function staticData(data){
    tbody.text("")
    data.forEach(function(view){
      row = tbody.append("tr")
      Object.entries(view).forEach(function([key,value]) {
        cell = row.append("td").text(value)
      });
    })};

button1.on("click", updateSongs);


function displaySVM() {
    console.log("entered displayDB");
    tbody2.text("");
    tableSVM.forEach(function (view) {
      row = tbody2.append("tr");
      Object.entries(view).forEach(function ([key, value]) {
        cell = row.append("td").text(value);
      });
    });
  }
button2.on("click", displaySVM);
// function SVMData(tableSVM){
//     tbody2.text("")
//     tableSVM.forEach(function(view){
//       row = tbody2.append("tr")
//       Object.entries(view).forEach(function([key,value]) {
//         cell = row.append("td").text(value)
//       });
//     })};

// function updateSVM() {
//     d3.event.preventDefault();
//     console.log(inputSong.property("value"));
//     SVMSongs = tableSVM.filter(song => song.songname===inputSong.property("value"))
//     SVMData(SVMSongs)
//   }

// button2.on("click", updateSVM);

// function KNNData(tableKNN){
//     tbody2.text("")
//     tableKNN.forEach(function(view){
//       row = tbody2.append("tr")
//       Object.entries(view).forEach(function([key,value]) {
//         cell = row.append("td").text(value)
//       });
//     })};

// function updateKNN() {
//     d3.event.preventDefault();
//     console.log(inputSong.property("value"));
//     KNNSongs = tableKNN.filter(song => song.songname===inputSong.property("value"))
//     KNNData(KNNSongs)
//   }

// button3.on("click", updateKNN);