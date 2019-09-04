var loopTime = setInterval(function loop(){
    console.log("I will loop forever");
}, 500);

setTimeout(function(){
    clearInterval(loopTime);
    console.log("Game over")
}, 5000)