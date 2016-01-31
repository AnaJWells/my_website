/*JQuery('#mydiv').html('CityPopulation Table!!!');*/
//initialize function called when the script loads
function initialize(){
    cities();
};


//function to create a table with cities and their populations
function cities(){
    //define an array of objects for cities and population
    var cityPop = [
        {
            city: 'Milwaukee',
            population: 594833
        },
        {
            city: 'Madison',
            population: 233209
        },
        {
            city: 'Green Bay',
            population: 104057
        },
        {
            city: 'Waukesha',
            population: 70718
        },
        {
            city: 'La Crosse',
            population: 51320
        },
        {
            city: 'Sun Prairie',
            population: 29364
        },
        {
            city: 'Superior',
            population: 27244
        },
        {
            city: 'Middleton',
            population: 17442
        },
        {
            city: 'Westby',
            population: 2200
        }
    ];

//

    function addEvents(){
      //$("table").mouseover(function(){
	    $("table").mouseover(function(){
		    // string color initialize with "rgb ("
		    var color = "rgb(";
        // set a random color, based on r,g,b values
		    for (var i=0; i<3; i++){
          // find a value between 0 and 255
			    var random = Math.round(Math.random() * 255);
          // string color = "rgb(random"   -- the random value from above
			    color += random;  // random is a varaible, shouldn't be an string!!!!
          // attach values to the color variable
			    if (i<2){
				     color += ",";
			       // finally, the color is set ) )
			    } else {
				     color += ")";
		      };
        };
        // at the end the color would have "rgb(1,2,3)"
        // where 1,2,3 are the random values from above
        // change text color on table
		    $("table").css('color', color);//$(this).css('color', color);
      });  // end mouseover

	    function clickme(){
     // alert the user that she/he click on the table
		    alert('Hey, you clicked me!');
	    };
      // turn on event on the table
	    $('table').on('click', clickme);
    }; //end addEvents

//
    // method addColumns for the table cityPop
    function addColumns(cityPop){

        $('tr').each(function(i){

        	if (i == 0){
    // correct apend to append  -- append header for this column to the table
        		$(this).append('<th>City Size</th>');
            //console.log(cityPop[i].population);
        	} else {
            //console.log(cityPop[i-1].population);
        		var citySize; // = 'Large';
            // add size of the city for each city (row) in the table
            // Small for populations less than 100000
        		if (cityPop[i-1].population < 100000){
        			citySize = 'Small';
            // Medium for populations less than 500000, but greater than 100000
        		} else if (cityPop[i-1].population < 500000){
        			citySize = 'Medium';  //Typo  corrected
            // Large for cities with populations greater than 500000
        		} else {
        			citySize = 'Large';
        		};
            //append the city size into the city_row - correct the line
            //console.log(citySize);
        		$(this).append('<td>' + citySize + '</td>');
        	};
        });
    };

    //append the table element to the div
    $("#mydiv").append("<table>");

    //append a header row to the table
    $("table").append('<tr>');

    //add the "City" and "Population" columns to the header row
    $("tr").append("<th>City</th><th>Population</th>");

    //loop to add a new row for each city
    for (var i = 0; i < cityPop.length; i++){
        //assign longer html strings to a variable
        var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
        //add the row's html string to the table
        $("table").append(rowHtml);
    };

    // add border to the table
    $("table").attr("border", "3");
    // call method addColumns to add the City Size
    addColumns(cityPop);
    // call method addEvents to change color of text and respond to click
    addEvents();
};


//Initial color for the text
$('#mydiv').css('color', 'blue');

//define style for the document
$('#mydiv').css({
    'width': '100%',
    'margin': '0 auto',
    'height': '320px'
});

//change the text size and alignment
$('#mydiv').css({
    'font-size': '1.3em',
    'text-align': 'left'
});


//call the initialize function when the document has loaded
$(document).ready(initialize);
