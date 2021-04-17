# Belly Buttons

This website calls a Javascript function when the selection in the drop down menu is changed.

It first uses a d3.json call to populate the dropdown from the supplied data. When the dropdown value is changed it runs a function which performs another d3.json call to allow access to the data file. The sample section is then seperated and a filter function is used to select the specific sample data. A series of variables are then loaded with data and fed into plotly to produce a horizontal bar plot and a bubble plot. 

A variable is then used to seperate out the metadata and another filter function selects the specific sample ID. A d3.select function and object.entries are then used to load the data into the Demographic Info table.