var sleep = 100;
var bar1 = setInterval(depleteS, 340);
var hunger = 100;
var bar2 = setInterval(depleteH, 100);
var thirst = 100;
var bar3 = setInterval(depleteT, 200);
var dead = 0;

document.getElementById("sleepButton").onclick = fillSleep;
document.getElementById("hungerButton").onclick = fillHunger;
document.getElementById("thirstButton").onclick = fillThirst;

function deadCheck() {
  if (sleep == 0 && hunger == 0 && thirst == 0 && dead == 0) {
    alert("Well your going to prison");
    dead++;
    setKanna();
  } else {
    setKanna();
  }
}

function setKanna() {
  if (sleep == 0 && hunger == 0 && thirst == 0) {
    document.getElementById("kanna_chan").src =
      "https://ci.memecdn.com/11699216.gif";
  }
}

function fillSleep() {
  if (sleep <= 99 && sleep != 0) {
    sleep += 10;
    document.getElementById("kanna_chan").src =
      "https://media1.tenor.com/images/8084a602b2cbbc2e6d84205de87bfc6a/tenor.gif?itemid=13512625";
  } else if (sleep == 0) {
    sleep = +0;
  }
}

function fillHunger() {
  if (hunger <= 99 && hunger != 0) {
    hunger += 20;
    document.getElementById("kanna_chan").src =
      "https://i.pinimg.com/originals/16/96/71/169671a5daec67f08202732bd590c783.gif";
  } else if (sleep == 0) {
    hunger = +0;
  }
}

function fillThirst() {
  if (thirst <= 99 && thirst != 0) {
    thirst += 22;
    document.getElementById("kanna_chan").src =
      "https://media1.tenor.com/images/1663ddadda47df1a787d569be351d1cd/tenor.gif?itemid=15819577";
  } else if (thirst == 0) {
    thirst = +0;
  }
}

function depleteS() {
  if (sleep == 0) {
    clearInterval(bar1);
    alert("Kanna-chan needs sleep");
    deadCheck();
  } else {
    sleep--;
    document.getElementById("sleep").value = sleep;
  }
}

function depleteH() {
  if (hunger == 0) {
    clearInterval(bar2);
    alert("Kanna-chan needs food");
    deadCheck();
  } else {
    hunger--;
    document.getElementById("hunger").value = hunger;
  }
}

function depleteT() {
  if (thirst == 0) {
    clearInterval(bar3);
    alert("Kanna-chan needs juice");
    deadCheck();
  } else {
    thirst--;
    document.getElementById("thirst").value = thirst;
  }
}
