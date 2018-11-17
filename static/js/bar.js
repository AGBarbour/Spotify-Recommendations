var url = "/features";

d3.json(url)
  .then(function(response) {

    // trace1 = go.Bar(
    //     x=['giraffes', 'orangutans', 'monkeys'],
    //     y=[20, 14, 23],
    //     name='SF Zoo'
    // )
    // trace2 = go.Bar(
    //     x=['giraffes', 'orangutans', 'monkeys'],
    //     y=[12, 18, 29],
    //     name='LA Zoo'
    // )
    
    // data = [trace1, trace2]
    // layout = go.Layout(
    //     barmode='group'
    // )
    
    // fig = go.Figure(data=data, layout=layout)
    // py.iplot(fig, filename='grouped-bar')
      
//     // //   var layout = {
//     // //     title: "'Bar' Chart",
//     // //     xaxis: { title: "Drinks"},
//     // //     yaxis: { title: "I like drinks"}
//     // //   };
      
//     // //   Plotly.newPlot("bar", data, layout);

    console.log(response[0].danceability)
    
    dance = response[0].danceability
    song_energy = response[0].energy
    speech = response[0].speechiness
    loud = response[0].loudness
    
    var trace2 = {  
        x : response[0].song_id,
        y : dance.map(d => d * 100),
        type: "bar" , 
        name : "Danceability"

    };

    var trace3 = {  
        x : response[0].song_id,
        y : response[0].popularity,
        type: "bar" , 
        name : "Popularity"

    };

    var trace1 = {  
        x : response[0].song_id,
        y : song_energy.map(e => e * 100),
        type: "bar",
        name : "Energy"

    };

    var trace4 = {  
        x : response[0].song_id,
        y : speech.map(s => s * 100),
        type: "bar" , 
        name : "Speechiness"

    };

    var trace5= {  
        x : response[0].song_id,
        y : loud.map(l => l * -10),
        type: "bar" , 
        name : "Loudness"

    };
    
  
    var data = [trace3, trace2, trace1, trace4, trace5];
  
    var layout = {
        height: 550,
        width: 925,
        // title: "Song Attributes",
        barmode: "group"
    };

   
  
    Plotly.newPlot("bar", data, layout);


    
});




