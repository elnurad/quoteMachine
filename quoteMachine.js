const btn = document.querySelector("#new-quote");
const text = document.querySelector("#text");
const author= document.querySelector("#author");
const twitter = document.querySelector("#tweet-quote");
const href = document.querySelector("href");



const url = "https://talaikis.com/api/quotes/random/";
  fetch(url)
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    const quote = data.quote; 
    const authorVar = data.author;
    text.textContent = quote;
    author.textContent = authorVar;
    
          
   twitter.addEventListener("click",function(){
   twitter.setAttribute("href", "https://twitter.com/intent/tweet?text=" + encodeURIComponent(quote + " -" +authorVar));
                                                                          
  // window.open("https://twitter.com/intent/tweet?text=" + encodeURIComponent(quote + " -" +authorVar));
   });

  })
  .catch(function(){
    console.log("The request generated an error.");
    text.textContent = "Ooops! Something went wrong.";
  })

btn.addEventListener("click", function(){
  fetch(url)
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    const quoteNew = data.quote; 
    const authorVarNew = data.author;
    text.textContent = quoteNew;
    author.textContent = authorVarNew;
       
       
   twitter.addEventListener("click",function(){
   twitter.setAttribute("href", "https://twitter.com/intent/tweet?text=" + encodeURIComponent(quoteNew + " -" +authorVarNew));
   //window.open("https://twitter.com/intent/tweet?text=" + encodeURIComponent(quoteNew + " -" +authorVarNew));
   });

  })
  .catch(function(){
    console.log("The request generated an error.");
    text.textContent = "Ooops! Something went wrong.";
  })
  
})
  
  