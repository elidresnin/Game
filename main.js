var gameBall, ballx, bally;
window.onload=function() {
    gameBall= document. querySelector(".ball");
    ballx=0;
    bally=100;
}
function right() {
    // document.body.style.backgroundColor = "red";
    // document.body.style.backgroundColor = "blue";
         
    ballx += 100;
          
    if(ballx > 1600){
        ballx = 1600;
    }   
    gameBall.style.left=ballx;
}
        
function left() {
    //  document.body.style.backgroundColor = "purple";    
    ballx -= 100;
    if(ballx < 0 ){
        ballx = 0 ;
    }   
    gameBall.style.left=ballx;
} 
function up(){
    document.body.style.backgroundColor = "green";
    document.body.style.backgroundColor = "blue";
    bally=bally-100;
    if(bally < 0){
        bally = 0;
    }   
    gameBall.style.top=bally;
}

function down(){
    document.body.style.backgroundColor = "blue";
    bally=bally+100;
    if(bally > 700){
        bally = 700;
    }   
    gameBall.style.top=bally;
}
