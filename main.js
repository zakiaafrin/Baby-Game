var box = document.getElementById("container");
var text = document.createElement("div");
text.innerHTML = " ";
box.appendChild(text);
var score = document.getElementById("scoreBox");

function sun() {
    text.innerHTML = "Hey, Everyone. GOOD MORNING!!!";
    score.innerHTML = parseInt(score.innerHTML) + 1;
    document.getElementById("sunSound").play();
    document.getElementById("sunPic").animate([
        { transform: 'rotate(0)' },
        { transform: 'rotate(360deg)' }], {
            duration: 6880,
            iterations: 2 });
}
function baby1() {
    text.innerHTML = "Baby girl is singing her favourite song!!!";
    score.innerHTML = parseInt(score.innerHTML) + 1;
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
    text.innerHTML = "You have heard the sound of the horse neighing.";
    score.innerHTML = parseInt(score.innerHTML) + 1;
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
    text.innerHTML = "Baby girl is laughing!!!";
    score.innerHTML = parseInt(score.innerHTML) + 1;
    document.getElementById("baby2Sound").play();
    document.getElementById("baby2Pic").animate([
        { transform: 'translateY(0px)' },
        { transform: 'translateY(-40px)' },
        { transform: 'translateY(0px)' }], {
            duration: 750,
            iterations: 5 });
}
function duck() {
    text.innerHTML = "The duck is singing.";
    score.innerHTML = parseInt(score.innerHTML) + 1;
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
    text.innerHTML = "Ha Ha Ha Haaa....Ha Ha Ha Haaa....Ha Ha Ha Haaa....!!!";
    score.innerHTML = parseInt(score.innerHTML) + 1;
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
    score.innerHTML = parseInt(score.innerHTML) + 1;
    document.getElementById("monkeySound").play();
    document.getElementById("monkeyPic").animate([
        { transform: 'rotate(20deg)' },
        { transform: 'translateY(0px)' },
        { transform: 'translateY(-100px)' },
        { transform: 'translateY(0px)' },
        { transform: 'rotate(20deg)' }], {
            duration: 500,
            easing: 'linear',
            iterations: 3 });
}