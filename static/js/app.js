//Populate the drop down menu
d3.json('samples.json').then(data => {
    d3.select("#selDataset")
        .selectAll("option")
        .data(data.samples)
        .join("option")
        .attr("value", data => data.id)
        .text(data => data.id)
    })

// function that runs whenever drop down is changed
function optionChanged(inputValue) {
  // import json file
  d3.json('samples.json').then(data => {
    // load samples data into variable
    let samples = data.samples;
    // filters out the selected ID from the sampeles
    const filterSub = (samples) => samples.id == inputValue;
    let filteredSub = samples.filter(filterSub);
    // load OTU labels into a varible and reduces their number to 10
    let hover = filteredSub.map(sub =>sub.otu_labels)
    hover = hover [0]
    hover10 = hover.slice(0, 10)
    // load sample values into a varible and reduces their number to 10
    let value = filteredSub.map(sub => sub.sample_values);
    value = value[0]
    value10 = value.slice(0, 10)
    // load OTU IDs into a varible and reduces their number to 10
    let label = filteredSub.map(sub => sub.otu_ids);
    label = label[0]
    // adds OTU prefix to OTU IDs
    labels = label.map(el => 'OTU ' + el)
    label10 = labels.slice(0, 10)
    // sets up data for bar graph
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

    // sets up data for bubble plot
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
    // load metadata subdata into variable
    let meta = data.metadata;
    // filters out selected ID from metadata
    let filterMeta = (meta) => meta.id == inputValue;
    let subMeta = meta.filter(filterMeta);
    // outputs metadata to demographic info
    d3.select('tbody')
      .selectAll('tr')
      .data(subMeta)
      .join('tr')
      .selectAll('tr')
      .data(d => Object.entries(d))
      .join('tr')
      .text(i => i);
  });
};

optionChanged(940);