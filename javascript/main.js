//Grabbing the input value

var button = document.querySelector("button");
button.addEventListener("click", function() {
var input = document.querySelector("input").value;
getInput(input);
  
  
});

var x = document.querySelector(".js-userinput");
x.addEventListener("keyup", function(e) {

var input = document.querySelector("input").value;

// 13 is key code for Enter
if(e.which === 13) {
getInput(input);
}
});



// Interacting with the Giphy API

function getInput(item) {
  var query = item.split(' ').join('+')
  

  var url = "https://api.giphy.com/v1/gifs/search?q="+ query + "&api_key=SDEsWMHoj4DO7LFMxWFHlVJVkElcDm8h";




// AJAX Request
var GiphyAJAXCall = new XMLHttpRequest();
GiphyAJAXCall.open( 'GET', url );
GiphyAJAXCall.send();


GiphyAJAXCall.addEventListener('load', function(e) {
var data = e.target.response
pushToDom(data)
});

}


// Showing the gifs

function pushToDom(input) {
  var response = JSON.parse(input);
  var f = document.querySelector(".js-container");
  var result = document.querySelector(".results");
  
  clear(f);
  clear(result);
    
      var imageUrls = response.data

      imageUrls.forEach(function(gif) {
        var src = gif.images.fixed_height.url;

        result.innerHTML = src.length + " gifs found";
        f.innerHTML += "<img src=\"" + src + "\" class=\"container-image\">";
    

      })

     
      function clear(item) {
        item.innerHTML = "";
    }


}
