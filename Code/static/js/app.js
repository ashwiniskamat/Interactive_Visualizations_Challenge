// start with a function that will pull data which will form the plots for each id
function buildsomeplots(id) {
 
  // read samples.json using d3
      d3.json("samples.json").then (sampledata => {
          console.log(sampledata)

          var ids = sampledata.samples[0].otu_ids;
          var sampleValues =  sampledata.samples[0].sample_values.slice(0,10).reverse();
          var labels =  sampledata.samples[0].otu_labels.slice(0,10);
          
          // CREATE A HORIZONTAL BAR CHART WITH A DOPDOWN MENU TO ONLY DISPLAY THE TOP 10 OTUs FOUND IN A GIVEN INDIVIDUAL

          // use otu_ids as labels
          // pull top 10 otu ids and need to add reverse at the end
          var OTU_top = (sampledata.samples[0].otu_ids.slice(0, 10)).reverse();
          
          // get the ids for the plot?
          var OTU_id = OTU_top.map(d => "OTU " + d);
          
          // use otu_labels for the hovertext 
          // pull top 10 labels for the plot
          var labels =  sampledata.samples[0].otu_labels.slice(0,10).reverse();
          
          // create trace
          var trace_bar = {
              x: sampleValues,
              y: OTU_id,
              text: labels,
              type:"bar",
              orientation: "h",
              marker: {
              color: 'maroon'},           
          };

          // create data variable
          var data_bar = [trace_bar];
  
          // create layout variable
          var layout = {
              title: "Top 10 OTUs",
              yaxis:{
                  tickmode:"linear",
              },
              margin: {
                  l: 80,
                  r: 10,
                  t: 50,
                  b: 50
              }
          };
  
          // now create bar plot
          Plotly.newPlot("bar", data_bar, layout);

          // create the bubble chart
          var trace_bubble = {
              x: sampledata.samples[0].otu_ids,
              y: sampledata.samples[0].sample_values,
              mode: "markers",
                marker: {
                  size: sampledata.samples[0].sample_values,
                  color: sampledata.samples[0].otu_ids
              },
              text:  sampledata.samples[0].otu_labels
  
          };
  
          // creating data variable like above 
          var data_bubble = [trace_bubble];

          // bubble plot layout
          var layout_bubble = {
              xaxis:{title: "OTU IDs"},
              height: 1800,
              width: 1500
          };
  
      // create the bubble plot
      Plotly.newPlot("bubble", data_bubble, layout_bubble); 
      
      });
  }  

  // build function again in order to fill the dropdown menu (Mostly same as above)
  function DemographicInfo(id) {

  // read the json file to get data
      d3.json("samples.json").then((data)=> {
  // get the metadata info for the demographic panel
          var metadata = data.metadata;
  
        // filter meta data info by id
         var result = metadata.filter(meta => meta.id.toString() === id)[0];

        // select demographic panel to put data
         var demographicInfo = d3.select("#sample-metadata");
          
       // Clears the rectangle each time for a new id
         demographicInfo.html("");
  
       // grab the necessary demographic data data for the id and append the info to the panel
          Object.entries(result).forEach((key) => {   
              demographicInfo.append("h5").text(key[0].toUpperCase() + ": " + key[1] + "\n");    
          });
      });
  }
  // create the function for the change event
  function choiceChanged(id) {
      buildsomeplots(id);
      DemographicInfo(id);
  }
  
  // create the function for the initial data rendering
  function start() {
      // select dropdown menu 
      var dropdown = d3.select("#selDataset");
  
      // read samples.json using d3
      d3.json("samples.json").then((data)=> {
          console.log(data)
  
          // get id data for the dropdwown menu
          data.names.forEach(function(name) {
              dropdown.append("option").text(name).property("value");
          });
  
          // call the functions to display the data and the plots to the page
          buildsomeplots(data.names[0]);
          DemographicInfo(data.names[0]);
      });
  }
  
  start();