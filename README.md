# Interactive_Visualizations_Challenge

In this project...
- an interactive dashboard was created to explore a given belly button diversity dataset, which catalogs the microbes present in human navels. 

Specifically:
- Used the D3 library to read in samples.json (in Data)
- Created a horizontal bar chart with a dropdown menu to display the top species found in an individual
	- sample_values as the values for the bar chart
	- otu_ids as the labels for the bar chart
	- otu_labels as the hovertext for the chart
- Created a bubble chart the displays each sample. Used...
	- otu_ids for the x values
	- otu_ids for the x values
	- sample_values for the y values
	- sample_values for the marker size
	- otu_ids for the marker colors
	- otu_labels for the text values
- Displayed the sample metadata
- Displayed each key-value pair from the metadata JSON object somewhere on the page
- Updated all the plots any time that a new sample is selected
