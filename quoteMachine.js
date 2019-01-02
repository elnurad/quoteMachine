const btn = document.querySelector("#new-quote");
const text = document.querySelector("#text");
const author= document.querySelector("#author");
const twitter = document.querySelector("#tweet-quote");
const href = document.querySelector("href");



//const url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';
fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    const quote = data;
    text.textContent = quote;
  
    
          
   twitter.addEventListener("click",function(){
   twitter.setAttribute("href", "https://twitter.com/intent/tweet?text=" + encodeURIComponent(quote));
                                                                          
   });

  })
  .catch(function(){
    console.log("The request generated an error.");
    text.textContent = "Ooops! Something went wrong.";
  })

btn.addEventListener("click", function(){
  fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    const quoteNew = data; 
    text.textContent = quoteNew;
    
       
       
   twitter.addEventListener("click",function(){
   twitter.setAttribute("href", "https://twitter.com/intent/tweet?text=" + encodeURIComponent(quoteNew));
  
   });

  })
  .catch(function(){
    console.log("The request generated an error.");
    text.textContent = "Ooops! Something went wrong.";
  })
  
})
  
  
