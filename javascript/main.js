//Grabbing the input value

var button = document.querySelector(".js-button");

button.addEventListener("click", function(){
  window.location.reload()
}
);



// Interacting with the Giphy API

var item = prompt("What Genre You Wanna Watch?");
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




// Showing the gifs

function pushToDom(input) {
  var response = JSON.parse(input);
  var f = document.querySelector(".js-container");
 
 
    
    var imageUrls = response.data;
    var i;
    
     for(i=0; i < 20; i++){
      setTimeout(function(){
      var src = imageUrls[i].images.fixed_height.url;

        clear(f);
        f.innerHTML += "<img src=\"" + src + "\" class=\"container-image\">";
      
        i++;
        
  
      }, 3000*i);
     }
    
}

function clear(item){
  item.innerHTML = "";
}
