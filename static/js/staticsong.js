var tableData = data;
var tbody = d3.select("#tbody1");

function staticData(data){
  tbody.text("")
  data.forEach(function(view){
    row = tbody.append("tr")
    Object.entries(view).forEach(function([key,value]) {
      cell = row.append("td").text(value)
    });
  })};

var button1 = d3.select("#filter-btn");
var button2 = d3.select("#filter-btnML1");
var button3 = d3.select("#filter-btnML2");
var inputSong = d3.select("#songname");

function updateSongs() {
  d3.event.preventDefault();
  console.log(inputSong.property("value"));
  newSongs = tableData.filter(song => song.songname===inputSong.property("value"))
  staticData(newSongs)
}

button1.on("click", updateSongs);

// function show_model_1() {
//   d3.event.preventDefault();
//   var src = "../static/images/heyheyhey.png";
//   show_image("../static/images/heyheyhey.png");
// }

// function show_image(src, width, height, alt) {
//   d3.event.preventDefault();
//   var img1 = document.createElement("img");
//   img1.src = src;
//   document.body.replaceChild(img1);
//   console.log("Potato")
// }
// button2.on("click", show_model_1);

// function show_model_2() {
//   d3.event.preventDefault();
//   var src = "../static/images/cdface.jpg";
//   show_image2("../static/images/cdface.jpg");
// }

// function show_image2(src, width, height, alt) {
//   d3.event.preventDefault();
//   var img2 = document.createElement("img");
//   img2.src = src;
//   document.body.replaceChild(img2);
// }
// button3.on("click", show_model_2);