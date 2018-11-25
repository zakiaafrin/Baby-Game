var text = document.createElement("div");
text.innerHTML = " ";
document.body.appendChild(text);

function sun() {
    text.innerHTML = "Hey, Everyone. GOOD MORNING!!!";
    score();
    document.getElementById("sunSound").play();
    document.getElementById("sunPic").animate([
        { transform: 'rotate(0)' },
        { transform: 'rotate(360deg)' }], {
        duration: 6880,
        iterations: 2 });  
    }

function baby1() {
    text.innerHTML = "Baby girl is singing her favourite song!!!";
    score();
    document.getElementById("baby1Sound").play();
    document.getElementById("baby1Pic").animate([
        { transform: 'translateX(0px)' },
        { transform: 'translateX(-80px)' },
        { transform: 'translateX(80px)' },
        { transform: 'translateX(0px)' }], {
        duration: 16200,
        iterations: 1 });  
}

function horse() {
    text.innerHTML = "You have heard the music of the horse neighing.";
    score();
    document.getElementById("horseSound").play();
    document.getElementById("horsePic").animate([
        { transform: 'rotate(20deg)' },
        { transform: 'translateX(-20px)' },
        { transform: 'rotate(-20deg)' },
        { transform: 'translateX(20px)' },
        { transform: 'rotate(20deg)' }], {
        duration: 970,
        iterations: 6 });
}

function baby2() {
    text.innerHTML = "Baby boy is laughing!!!";
    score();
    document.getElementById("baby2Sound").play();
    document.getElementById("baby2Pic").animate([
        { transform: 'translateY(0px)' },
        { transform: 'translateY(-40px)' },
        { transform: 'translateY(0px)' }], {
        duration: 750,
        iterations: 5 });
}

function duck() {
    text.innerHTML = "You have heard the song of the duck.";
    score();
    document.getElementById("duckSound").play();
    document.getElementById("duckPic").animate([
        { transform: 'translateX(0px)' },
        { transform: 'translateX(140px)' },
        { transform: 'rotateY(-180deg)' },
        { transform: 'rotateY(0deg)' }], {
        duration: 14000,
        iterations: 1 }); 
}

function cartoon() {
    text.innerHTML = "You have heard the sounds of the woddy woodpecker.";
    score();
    document.getElementById("woodySound").play();
    document.getElementById("woodyPic").animate([
        { transform: 'scale(1)' },
        { transform: 'scale(.5)' },
        { transform: 'scale(1)' }], {
        duration: 750,
        easing: 'ease-in-out',
        iterations: 6 });
}
function monkey() {
    text.innerHTML = "The monkey is jumping with joy!!!";
    score();
    document.getElementById("monkeySound").play();
    document.getElementById("monkeyPic").animate([
        { transform: 'rotate(20deg)' },
        { transform: 'translateY(0px)' },
        { transform: 'translateY(-100px)' },
        { transform: 'translateY(0px)' },
        { transform: 'rotate(20deg)' }], {
        duration: 355,
        easing: 'linear',
        iterations: 4 });
}

function score() {                                 
    var score = document.getElementById("scoreBox");
    score.innerHTML = parseInt(score.innerHTML) + 1;
}