d3.json('samples.json').then(data => {
    d3.select("#selDataset")
        .selectAll("option")
        .data(data.samples)
        .join("option")
        .attr("value", data => data.id)
        .text(data => data.id)
    })

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
        let meta = data.metadata;
    let filterMeta = (meta) => meta.id == inputValue;
    let subMeta = meta.filter(filterMeta);
    
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