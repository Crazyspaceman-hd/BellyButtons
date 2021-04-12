d3.json('samples.json').then(data => {
    console.log(data);
    let samples = data.samples;
    console.log(samples);
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
    let doubleFilter= unpack(samples.filter(filterSub));
    console.log(doubleFilter);
    let value = (filteredSub)
    let plotData = [{
      values: filteredSub.sample_values,
      labels: filteredSub.otu_ids,
      type: "bar"
    }]
    console.log(value)
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


