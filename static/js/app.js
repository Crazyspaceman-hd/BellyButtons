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
    labels = label.map(el => 'OTU ' + el)
    label10 = labels.slice(0, 10)
    
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
    let layout = {};
    Plotly.newPlot("bar", plotData, layout);

    const bubs =[{
      x: label,
      y: value,
      text: hover,
      mode:'markers',
      marker: {
        color: label,
        size: value
      }
    }]
    let bLayout = {
      xaxis: {title: "OTU ID"}
    };

    Plotly.newPlot("bubble", bubs, bLayout)
    // console.log(trace)
    let meta = data.metadata;
    let filterMeta = (meta) => meta.id == inputValue;
    let subMeta = meta.filter(filterMeta);
    subMeta = subMeta[0]
    console.log(subMeta)
    for (const thing in subMeta){
      d3.select(".panel-body").text(`${thing}: ${subMeta[thing]} ${br}`);
    }
    // d3.select(".panel-body").text(JSON.stringify(subMeta, null, 2));

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


