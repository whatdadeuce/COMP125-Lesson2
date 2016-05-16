/*Main JavaScript File*/
//IIFE

(function(){
    "use strict";
    
    //code goes here
    console.log("App Started...");
    //creates a reference and overrides <p> tag child text contents
    var firstParagraph = document.getElementById("firstParagraph");
    firstParagraph.textContent = "IT'S ALIVE!!!";
    
    
})();