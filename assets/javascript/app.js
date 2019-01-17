var counter = 60;

var timer = undefined;

function tictac(){
    counter--;
    $("#runTime").html(counter);

    if(counter === 0){
        $("#gameOver").show();
        $("#questionPage").hide();
    }
}

 $("#welcomeButton").click(function(){
    $("#welcome").hide();
    $("#meme").show();
});

$("#enterButton").click(function(){
    $("#meme").hide();
    $("#escapeRoom").show();
});

$("#go").click(function(){
    $("#escapeRoom").hide();
    $("#questionPage").show();
    timer = window.setInterval('tictac()', 1000);
});



$("#rightChoice1").click(function(rightChoice){
    $("#question1").hide();
    $("#question2").show();
    $("#key1").css('visibility', 'visible');
});

$("#rightChoice2").click(function(){
    $("#question2").hide();
    $("#question3").show();
    $("#key2").css('visibility', 'visible');
});

$("#rightChoice3").click(function(){
    
    $("#question3").hide();
    $("#question4").show();
    $("#key3").css('visibility', 'visible');
});

$("#rightChoice4").click(function(){
    
    $("#question4").hide();
    $("#question5").show();
    $("#key4").css('visibility', 'visible');
});

$("#rightChoice5").click(function(){
    
    $("#question5").hide();
    $("#beforeUnlock").show();
    $("#key5").css('visibility', 'visible');
    window.clearInterval(timer);
});

$("#key5").click(function(){
    $("#unlocked").show();
    $("#questionPage").hide();
});

$("#showDoors").click(function(){
    $("#unlocked").hide();
    $("#doorOptions").show();
    $("#keys").show();
});

$("#blake").click(function(){
    $("#questionPage").hide();
    $("#gameOver").show();
});

$("#davidD").click(function(){
    $("#questionPage").hide();
    $("#gameOver").show();
});

$("#becky").click(function(){
    $("#questionPage").hide();
    $("#gameOver").show();
});

$("#glasses").click(function(){
    $("#questionPage").hide();
    $("#gameOver").show();
});

$("#cal").click(function(){
    $("#questionPage").hide();
    $("#gameOver").show();
});

$("#maris").click(function(){
    $("#questionPage").hide();
    $("#gameOver").show();
});

$("#belinda").click(function(){
    $("#questionPage").hide();
    $("#gameOver").show();
});

$("#raymond").click(function(){
    $("#questionPage").hide();
    $("#gameOver").show();
});

$("#google").click(function(){
    $("#questionPage").hide();
    $("#gameOver").show();
});

$("#braedon").click(function(){
    $("#questionPage").hide();
    $("#gameOver").show();
});

$("#mark").click(function(){
    $("#questionPage").hide();
    $("#gameOver").show();
});

$("#rachel").click(function(){
    $("#questionPage").hide();
    $("#gameOver").show();
});

$("#jr").click(function(){
    $("#questionPage").hide();
    $("#gameOver").show();
});

$("#davidS").click(function(){
    $("#questionPage").hide();
    $("#gameOver").show();
});

$("#clifton").click(function(){
    $("#questionPage").hide();
    $("#gameOver").show();
});

$("#key44").click(function(){
    $("#doorOptions").show();
    $("#death").hide();
    $("#dimension").hide();
    $("#space").hide();
    $("#dimension2").hide();
    $("#newWorld").hide();
    $("#float").hide();
    $("#key44").hide();
});

$("#key33").click(function(){
    $("#doorOptions").show();
    $("#death").hide();
    $("#dimension").hide();
    $("#space").hide();
    $("#dimension2").hide();
    $("#newWorld").hide();
    $("#float").hide();
    $("#key33").hide();
});

$("#key22").click(function(){
    $("#doorOptions").show();
    $("#death").hide();
    $("#dimension").hide();
    $("#space").hide();
    $("#dimension2").hide();
    $("#newWorld").hide();
    $("#float").hide();
    $("#key22").hide();
});

$("#key11").click(function(){
    $("#doorOptions").show();
    $("#death").hide();
    $("#dimension").hide();
    $("#space").hide();
    $("#dimension2").hide();
    $("#newWorld").hide();
    $("#float").hide();
    $("#key11").hide();
});

$("#door1").click(function(){
    $("#death").show();
    $("#doorOptions").hide();
});

$("#door2").click(function(){
    $("#dimension").show();
    $("#doorOptions").hide();
});

$("#door3").click(function(){
    $("#space").show();
    $("#doorOptions").hide();
});

$("#door4").click(function(){
    $("#dimension2").show();
    $("#doorOptions").hide();
});

$("#door5").click(function(){
    $("#newWorld").show();
    $("#doorOptions").hide();
});

$("#door6").click(function(){
    $("#freedom").show();
    $("#doorOptions").hide();
    $("#keys").hide();
});

$("#door7").click(function(){
    $("#float").show();
    $("#doorOptions").hide();
});