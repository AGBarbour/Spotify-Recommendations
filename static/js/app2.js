// from data.js
// Step 1 - Use d3 to set up the table body and give it a variable.
var tbody = d3.select("#tbody1");
var tbody2 = d3.select("#tbody2");

// console.log(suggestData);

// Step 2 - Use d3 to update/append cell's text with song data such as Title, Artist, and Album
function displayData(data) {
  tbody.text("");
  data.forEach(function (view) {
    row = tbody.append("tr");
    Object.entries(view).forEach(function ([key, value]) {
      cell = row.append("td").text(value);
    });
  });
}

// displayData(suggestData);

var button = d3.select("#filter-btn");
var inputSong = d3.select("#songname");

// function to call flask api and update the second table with recommendations
function displayDB() {
  console.log("entered displayDB");
  tbody2.text("");
  console.log(recommendedData);
  recommendedData.forEach(function (view) {
    row = tbody2.append("tr");
    Object.entries(view).forEach(function ([key, value]) {
      cell = row.append("td").text(value);
    });
  });
}

// displayDB(recommendedData);

// function to update the first table with the users search result
function updateRecs() {
  d3.event.preventDefault();
  searchSong = inputSong.property("value");
  console.log(searchSong);
  d3.json(`/search/${searchSong}`, function (songInfo) {
    console.log("check");
    console.log(searchSong);
    console.log(songInfo);
    newSongs = songInfo.filter(song => song.song === inputSong.property("value"));
    displayData(songInfo[0]);
  });
  console.log("check2");
  displayDB();
}


//  listener to update table one when the user types a song
// inputSong.on("change",  updateRecs);
        
// listener to update table two w hen the user clicks the button  to recommend songs
button.on("click", updateRecs);
