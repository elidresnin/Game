 var gameBall= document. querySelector(".ball");
var ballx=0;
var bally=100;

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
          bally=bally+100;
          gameBall.style.top=bally;
         }
