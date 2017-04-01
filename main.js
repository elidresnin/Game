window.onload = function() {
//   init();
  var up = document.getElementById("up");
  var down = document.getElementById("down");
  var right = document.getElementById("right");
  var left = document.getElementById("left");
  var gameBall= document. getElementsByClassName("ball");

       function right(){
         document.body.style.backgroundColor = "red";
       }
        
       function left(){
           document.body.style.backgroundColor = "purple";    
       } 
         function up(){
         document.body.style.backgroundColor = "green";
         }
         function down(){
         document.body.style.backgroundColor = "blue";
         }
};
