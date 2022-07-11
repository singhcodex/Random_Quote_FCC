
let randomQuote = 'some thing will be here after new quote click';
let randomAuthor = 'singh here';


function someFunc(){
    //alert('document ready');

    $('#text').text(randomQuote);
    $('#author').text(randomAuthor);

    $.ajax({
        type: "POST",
        url: "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json",
        contentType: "application/json",
        dataType: "json",
        success: function(response) {
            console.log(response);
        },
        error: function(response) {
            console.log(response);
        }
});
}


function helloMe(){
    //alert("click function runs!!");
}



$(document).ready(function(){
   // alert('hello');
   someFunc();
   $('#new-quote').click(function(){
    helloMe();
   });
});