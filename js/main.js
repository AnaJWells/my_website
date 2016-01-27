/*JQuery('#mydiv').html('Hello World!!!');*/
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
        }
    ];

    //append the table element to the div
    $("#mydiv").append("<table>");

    //append a header row to the table
    $("table").append("<tr>");

    //add the "City" and "Population" columns to the header row
    $("tr").append("<th>City</th><th>Population</th>");

    //loop to add a new row for each city
    for (var i = 0; i < cityPop.length; i++){
        //assign longer html strings to a variable
        var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
        //add the row's html string to the table
        $("table").append(rowHtml);
    };
};

//change the text color
$('#mydiv').css('color', 'blue');

//change the text size and alignment
$('#mydiv').css({
    'font-size': '1.3em',
    'text-align': 'left'
});

//call the initialize function when the document has loaded
$(document).ready(initialize);
