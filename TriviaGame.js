$(document).ready(function() {

var start;
var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;
var questions;
var clock = 63;
var userAnswer;
var theClock;
    
//----------------------------Start Game------------------------------
    function startGame(){
        start = "<button type='button' class='btn btn-primary btn-lg'>Start</button>";
        $(".container").html(start);
    }
    startGame();

//on click event for start button ------------------------------------   
    $("body").on("click",".btn-lg", function(event){
        displayQuestions();
    })

//will list questions when called-----------------------------------------
    function displayQuestions(){
        questions = "<p class='time'>Time Remaining: <span class='timer'>60</span></p> <br> <p class='Q'>Q1: What is the most Popular Pet in the U.S.?</p> <br> \
         <form id='Q'> \
         <input type='radio' name='choice' value='Bird'>   Bird  \
         <input type='radio' name='choice' value='Dog'>   Dog   \
         <input type='radio' id='inch' name='choice' value='Cat'>   Cat   \
         <input type='radio' name='choice' value='Fish'> Fish \
         </form> \
         <br> <p class='Q'>Q2: Cats can't taste _____?</p> <br> \
         <form id='Q2'> \
         <input type='radio' id='sweet' name='choice' value='Sweet'> Sweet \
         <input type='radio' name='choice' value='Bitter'> Bitter \
         <input type='radio' name='choice' value='Sour'> Sour \
         <input type='radio' name='choice' value='Salt'> Salt \
         </form> \
         <br> <p class='Q'>Q3: The world's larget cat measures?</p> <br> \
         <form id='Q3'> \
         <input type='radio' name='choice' value='feet'> 6 ft \
         <input type='radio' name='choice' value='cm'> 216 cm \
         <input type='radio' id='inch' name='choice' value='inch'> 48.5 in \
         <input type='radio' name='choice' value='meter'> 2.85 m \
         </form> \
         <br> <p class='Q'>Q4: How many sounds can a cat make?</p> <br> \
         <form id='Q4'> \
         <input type='radio' name='choice' value='20'> 20 \
         <input type='radio' name='choice' value='10'> 10 \
         <input type='radio' id='hundred' name='choice' value='100'> 100 \
         <input type='radio' name='choice' value='45'> 45 \
         </form> \
         <br> <p class='Q'>Q5: What major ancient civilation honored cats the most? </p> <br> \
         <form id='Q5'> \
         <input type='radio' id='egypt' name='choice' value='Egypt'> Egypt \
         <input type='radio' name='choice' value='Greece'> Greece \
         <input type='radio' name='choice' value='Aztec'> Aztec \
         <input type='radio' name='choice' value='Rome'> Rome \
         </form> \
         <br> <p class='Q'>Q6: Cats can only sweat through their ______ ?</p> <br> \
         <form id='Q6'> \
         <input type='radio' name='choice' value='ears'> Ears \
         <input type='radio' name='choice' value='noses'> Noses \
         <input type='radio' id='footpad' name='choice' value='foot'> Footpads \
         <input type='radio' name='choice' value='whiskers'> Whiskers \
         </form> \
         <br> <p class='Q'>Q7: The largest litter of kittens produced how many kittens? </p> <br> \
         <form id='Q7'> \
         <input type='radio' name='choice' value='12'> 12 \
         <input type='radio' name='choice' value='28'> 28 \
         <input type='radio' name='choice' value='31'> 31 \
         <input type='radio' id= 'nineteen' name='choice' value='19'> 19 \
         </form> \
         <br> <p class='Q'>Q8: An average housecat is faster than _____ ?</p> <br> \
         <form id='Q8'> \
         <input type='radio' name='choice' value='car'> A Car \
         <input type='radio' name='choice' value='elephant'> An Elephant \
         <input type='radio' id='bolt' name='choice' value='bolt'> Usain Bolt \
         <input type='radio' name='choice' value='IE'> Internet Explorer \
         </form> \
         <br> <p class='Q'>Q9: How many cats did Abraham Lincoln keep in the White House?</p> <br> \
         <form id='Q9'> \
         <input type='radio' name='choice' value='8'> 8 \
         <input type='radio' name='choice' value='10'> 10 \
         <input type='radio' id='four' name='choice' value='4'> 4 \
         <input type='radio' name='choice' value='1'> 1 \
         </form> \
         <br> <p class='Q'>Q10: Cats are cooler than?</p> <br> \
         <form id='Q10'> \
         <input type='radio' id='you' name='choice' value='You'> You \
         <input type='radio' name='choice' value='Me'> Me \
         <input type='radio' name='choice' value='Trail'> Trail Mix \
         <input type='radio' name='choice' value='Monster'> Monster Trucks \
         </form> \
        <br> <button class='submit' id='button'>Submit</button>"
        $(".container").html(questions);
    }

// starts clock countdown
    function timerWrapper() {
        theClock = setInterval(sixtySeconds, 1000);
        function sixtySeconds() {
            if (clock === 0) {
              
                endGame();
                clearTimeout(theClock);
            }
            if (clock > 0) {
                clock--;
            }
            $(".timer").html(clock);
        }
    }
    timerWrapper();
    
// After submit is clicked this screen will show-----------------------------------
    function finalScreen(){
        $("body").on("click","#button",function() {
            
   var inch = document.getElementById("inch").checked 

            if(inch === true){
              correctAnswers++;
              console.log ("correct " + correctAnswers);
              
          } else if(inch === false){
            incorrectAnswers++;
            console.log("Wrong " + incorrectAnswers);}
          
        
  var sweet = document.getElementById("sweet").checked 

            if(sweet === true){
              correctAnswers++;
              console.log ("correct " + correctAnswers);
              
          } else if (sweet === false){
            incorrectAnswers++;
            console.log("Wrong " + incorrectAnswers) ;}

var inch = document.getElementById("inch").checked 

            if(inch === true){
              correctAnswers++;
              console.log ("correct " + correctAnswers);
              
          } else if(inch === false){
            incorrectAnswers++;
            console.log("Wrong " + incorrectAnswers);}

 var hundred = document.getElementById("hundred").checked 

            if(hundred === true){
              correctAnswers++;
              console.log ("correct " + correctAnswers);
              
          } else if(hundred === false){
            incorrectAnswers++;
            console.log("Wrong " + incorrectAnswers);}

var egypt = document.getElementById("egypt").checked 

            if(egypt === true){
              correctAnswers++;
              console.log ("correct " + correctAnswers);
              
          } else if(egypt === false){
            incorrectAnswers++;
            console.log("Wrong " + incorrectAnswers);}        
            
var footpad = document.getElementById("footpad").checked 

            if(footpad === true){
              correctAnswers++;
              console.log ("correct " + correctAnswers);
              
          } else if(footpad === false){
            incorrectAnswers++;
            console.log("Wrong " + incorrectAnswers);}

var nineteen = document.getElementById("nineteen").checked 

            if(nineteen === true){
              correctAnswers++;
              console.log ("correct " + correctAnswers);
              
          } else if(nineteen === false){
            incorrectAnswers++;
            console.log("Wrong " + incorrectAnswers);}

var bolt = document.getElementById("bolt").checked 

            if(bolt === true){
              correctAnswers++;
              console.log ("correct " + correctAnswers);
              
          } else if(bolt === false){
            incorrectAnswers++;
            console.log("Wrong " + incorrectAnswers);}

var four = document.getElementById("four").checked 

            if(four === true){
              correctAnswers++;
              console.log ("correct " + correctAnswers);
              
          } else if(four === false){
            incorrectAnswers++;
            console.log("Wrong " + incorrectAnswers);}

var you = document.getElementById("you").checked 

            if(you === true){
              correctAnswers++;
              console.log ("correct " + correctAnswers);
              
          } else if(you === false){
            incorrectAnswers++;
            console.log("Wrong " + incorrectAnswers);}

            var endGame = $(".container").html("Number of Correct Answers: " + correctAnswers + "<br> Number of Incorrect Answers: " + incorrectAnswers);
       
        })
        }
        

//function for when time runs out. idk why I made two but it works :) --------------------------------     
    function endGame(){
        var cat = document.getElementById("cat").checked;

          if(cat === true){
            correctAnswers++;
            console.log ("correct " + correctAnswers);
            
        } else if(cat === false){
          incorrectAnswers++;
          console.log("Wrong " + incorrectAnswers);}
        
      
      var sweet = document.getElementById("sweet").checked 

          if(sweet === true){
            correctAnswers++;
            console.log ("correct " + correctAnswers);
            
        } else if (sweet === false){
          incorrectAnswers++;
          console.log("Wrong " + incorrectAnswers) ;}

          var inch = document.getElementById("inch").checked 

            if(inch === true){
              correctAnswers++;
              console.log ("correct " + correctAnswers);
              
          } else if(inch === false){
            incorrectAnswers++;
            console.log("Wrong " + incorrectAnswers);}

 var hundred = document.getElementById("hundred").checked 

            if(hundred === true){
              correctAnswers++;
              console.log ("correct " + correctAnswers);
              
          } else if(hundred === false){
            incorrectAnswers++;
            console.log("Wrong " + incorrectAnswers);}

var egypt = document.getElementById("egypt").checked 

            if(egypt === true){
              correctAnswers++;
              console.log ("correct " + correctAnswers);
              
          } else if(egypt === false){
            incorrectAnswers++;
            console.log("Wrong " + incorrectAnswers);}        
            
var footpad = document.getElementById("footpad").checked 

            if(footpad === true){
              correctAnswers++;
              console.log ("correct " + correctAnswers);
              
          } else if(footpad === false){
            incorrectAnswers++;
            console.log("Wrong " + incorrectAnswers);}

var nineteen = document.getElementById("nineteen").checked 

            if(nineteen === true){
              correctAnswers++;
              console.log ("correct " + correctAnswers);
              
          } else if(nineteen === false){
            incorrectAnswers++;
            console.log("Wrong " + incorrectAnswers);}

var bolt = document.getElementById("bolt").checked 

            if(bolt === true){
              correctAnswers++;
              console.log ("correct " + correctAnswers);
              
          } else if(bolt === false){
            incorrectAnswers++;
            console.log("Wrong " + incorrectAnswers);}

var four = document.getElementById("four").checked 

            if(four === true){
              correctAnswers++;
              console.log ("correct " + correctAnswers);
              
          } else if(four === false){
            incorrectAnswers++;
            console.log("Wrong " + incorrectAnswers);}

var you = document.getElementById("you").checked 

            if(you === true){
              correctAnswers++;
              console.log ("correct " + correctAnswers);
              
          } else if(you === false){
            incorrectAnswers++;
            console.log("Wrong " + incorrectAnswers);}

        
     
      var showResults = $(".container").html("Number of Correct Answers: " + correctAnswers + "<br> Number of Incorrect Answers: " + incorrectAnswers);
    }
     
  

   finalScreen(); 

        
});
