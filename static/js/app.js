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




// function createCharts(dataset, value) {
//   console.log(dataset);
//   console.log(value);
//   // Create Charts Here!
// }
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
    // subMeta = subMeta[0];
    console.log(subMeta);

    d3.select('thead')
      .selectAll('th')
      .data(Object.keys(subMeta[0]))
      .join('th')
      .text(d => d)

    d3.select('tbody')
      .selectAll('tr')
      .data(subMeta)
      .join('tr')
      .text(d => d)
      .selectAll('td')
      .data(d => Object.values(d))
      .join('td')
      .text(i => i);
    // document.getElementById('sample-metadata').innerHTML = JSON.stringify(subMeta);
  });
};
    
const placeholder= 940




// var subject =(d3.json('samples.json')).filter(filterSubject)

// d3.json('samples.json').then(function(data) {
//      let 
