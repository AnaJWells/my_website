function addColumns(cityPop){

    $('tr').each(function(i){

    	if (i == 0){

    		$(this).apend('<th>City Size</th>');
    	} else {

    		var citySize;

    		if (cityPop[i-1].population < 100000){
    			citySize = 'Small';

    		} else if (cityPop[i-1].population < 500000){
    			citysize = 'Medium';

    		} else {
    			citySize = 'Large';
    		};

    		$this.append('<td' + citySize + '</td>');
    	};
    });
};

function addEvents(){

	$('#table').mouseover(function(){
		// string color initialize with "rgb ("
		var color = "rgb(";
    // set a random color, based on r,g,b values
		for (var i=0; i<3; i++){
      // find a value between 0 and 255
			var random = Math.round(Math.random() * 255);
      // string color = "rgb(random"   -- the random value from above
			color += "random";
      // attach values to the color variable
			if (i<2){
				color += ",";
			// finally, the color is set ) )
			}
      else {
				color += ")";
		  };
    }; // close the loop
      // at the end the color would have "rgb(1,2,3)"
      // where 1,2,3 are the random values from above
		$(this).css('color', color);
  // end mouseover
  });

	function clickme(){

		alert('Hey, you clicked me!');
	};

	$('table').on('click', clickme);
};
