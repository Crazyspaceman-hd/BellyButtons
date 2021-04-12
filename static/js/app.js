d3.json('samples.json').then(data => {
    console.log(data);
    let samples = data.samples;
    // console.log(samples);
    d3.select("#selDataset")
        .selectAll("option")
        .data(data.samples)
        .join("option")
        .attr("value", data => data.id)
        .text(data => data.id)
    })

// d3.json('samples.json').then(data => {
//     let samples = data.samples;
//     const filterSub = (samples) => samples.id == inputValue;
//     let filteredSub = samples.filter(filterSub);
//     console.log(filteredSub);
// })


function optionChanged(inputValue) {
  d3.json('samples.json').then(data => {
    let samples = data.samples;
    const filterSub = (samples) => samples.id == inputValue;
    let filteredSub = samples.filter(filterSub);
    let hover = filteredSub.map(sub =>sub.otu_labels)
    hover = hover [0]
    hover10 = hover.slice(0, 10)
    let value = filteredSub.map(sub => sub.sample_values);
    value = value[0]
    value10 = value.slice(0, 10)
    let label = filteredSub.map(sub => sub.otu_ids);
    label = label[0]
    label = label.map(el => 'OTU ' + el)
    label10 = label.slice(0, 10)
    
    let trace = {
      x: value10.reverse(),
      y: label10.reverse(),
      text: hover10.reverse(),
      type: "bar",
      orientation: 'h'
    }
    let plotData = [trace]
    console.log(value)
    console.log(label)
    // console.log()
    var layout = {
      title: "B"
    };
    Plotly.newPlot("bar", plotData, layout);
    console.log(trace)
})
}
const placeholder= 940



// var subject =(d3.json('samples.json')).filter(filterSubject)

// d3.json('samples.json').then(function(data) {
//      let 
let form=d3.select("#selDataset")







  function unpack(rows, index) {
    return rows.map(function(row) {
      return row[index];
    });
  }


