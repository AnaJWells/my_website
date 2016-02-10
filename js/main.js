// initialize calls both functions

function initialize(){
    // make a request to load the megaCities data file
    //jQueryAjax();

    // call the debugging functions for loading the megaCities file
    debugAjax();
};

// Create a request and if there is success call the callback
function jQueryAjax() {

  jQuery.ajax("data/MegaCities.GeoJSON", {
    dataType: 'json',
        // if the request was suceessfull calls debugCallback
    success: callback  //debugCallback
  });
};


//callback function -
//Print in the screen the data from the Mega Cities
function callback(response, status ){
    //send data to the console and to the screen
    // Here the data is access correctly
    // Data retrived from Server has arrived! It can be used
    console.log(JSON.stringify(response));
	  $(mydiv).append('<br>GeoJSON Mega Cities:</br>' + JSON.stringify(response));
    // show object and its status
    console.log(response, status);
};

//---------DEBUGGING FUNCTIONS----------------------
function debugAjax(){
  // local variable mydata
	var myCityData;
	$.ajax("data/MegaCities.geojson", {
		dataType: "json",
		success: function(response){
      // correct location to use data! Data can be send to the a callback function
			debugCallback(response);  // use response return from the request
		}
	});
  // data has not arrived from Server!
  $(mydiv).append('In debugAjax --> Data cannot be accessed! ' );
  console.log(myCityData);
	$(mydiv).append('<br>GeoJSON Mega Cities:</br>' + JSON.stringify(myCityData));
  $(mydiv).append('<br> </br>');
};  //end of dubugAjax---------------------


// Print the data from the Mega Cities in the screen and console
// but use variable response instead of variable mydata
function debugCallback(response){
  $(mydiv).append('In debugAjax --> Data can be accessed! ' );
  console.log(JSON.stringify(response));
  $(mydiv).append('<br>GeoJSON data can be accessed:</br>' + JSON.stringify(response));
};

$(document).ready(initialize);
