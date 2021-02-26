// Use D3 to pull the JSON file
d3.json("Data/samples.json").then((data)=> {
    console.log(data)

    // Drop down
    var names = Object.values(importedData.names);
    var metadata = Object.values(importedData.metadata);
    var samples = Object.values(importedData.samples);

    var data = importedData;

    var metadata = data.metadata;
    var samples = data.samples;

    // Filter Metadata
    var filteredMetadata = metadata.filter(metaObject => metaObject.id == singleId)[0];

    // Pick ID
    var demographics = d3.select("#sample-metadata");

    // Clear demographics info each time
    demographics.html("");

    // Pull info and add
    Object.entries(result).forEach((key) => {   
      demographicInfo.append("h5").text(key[0].toUpperCase() + ": " + key[1] + "\n");    
  });
});
}

    // Filtering samples
    var filterSamples = samples.filter(sampleObject => sampleObject.id == singleId)[0];

    // Sample Values, OTU_Ids, and OTU_Label
    var sampleValues = Samples.sample_values;
    var OTU_Ids = Samples.otu_ids;
    var OTU_Labels = Samples.otu_labels;

    // Bar chart trace
    var traceBar = [{
      x: sample_values,
      y: otu_full_ids,
      text: otu_labels,
      orientation: "h",
      type: 'bar'
  }];

    // get the data from the record
    var otu_ids = record[0].otu_ids.slice(0,10).reverse();
    var sample_values = record[0].sample_values.slice(0,10).reverse();
    var otu_labels = record[0].otu_labels.slice(0,10).reverse();
    var all_otu_ids = record[0].otu_ids;
    var all_sample_values = record[0].sample_values;
    var all_otu_labels = record[0].otu_labels;
    

    // Create the bar plot
    Plotly.newPlot("bar", data, traceBar);

    // Create the trace for the bubble chart
    var trace = {
    x: samples.otu_ids,
    y: samples.sample_values,
    text: samples.otu_labels,
    mode: "markers",
    marker: {
      color: samples.otu_ids,
      size: samples.sample_values

    // Create bubble plot layout
    var layout = {
    xaxis:{title: "OTU ID"},
    height: 500,
    width: 1500
};

    // Create the data variable 
    var data = [trace];

    // Create the bubble plot
    Plotly.newPlot("bubble", data1, layout); 
