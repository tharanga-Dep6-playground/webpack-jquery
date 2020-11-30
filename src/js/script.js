var color = 'yellow';
$("button").click(function(){
    $("#my-div").css("background-color", color == 'blue'? (color = 'yellow'): (color = 'blue'));
});