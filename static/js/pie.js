
var url = "/genre";

d3.json(url)
  .then(function(response) {

    var data = response.filter(genre => genre.count > 3)
    data.sort(function(a, b) {
        return parseFloat(b.count) - parseFloat(a.count)
    })
    // console.log(data)

    var labels = data.map(genre => genre.genre);
    var values = data.map(genre => genre.count);

    var pie = [{
        values: values,
        labels: labels,
        type: 'pie',
        insidetextfont  : {
            color: "rgb(244, 245, 247)"
        },
        outsidetextfont  : {
            color: "rgb(244, 245, 247)"
        },
        marker: {
            colors: ["#1cb953","#27a58c","#22af74","#2a969b","#2e7691","#305c87","#31467c","#323572","#3b3268","#43315f","#472f55","#462c4b","#41293e","#372531","#2d2026","#231a1c","#191414"]
        }
    }];
    
    var layout = {
        // title: "Genre Count of Top 100 artists",
        height: 550,
        width: 925,
        paper_bgcolor: 'rgba(0,0,0,0)',
        plot_bgcolor: 'rgba(0,0,0,0)',
        legend: {
            font: {
                color: "rgb(244, 245, 247)"
            }
        }
    };
    
    Plotly.newPlot('pie', pie, layout);

});

