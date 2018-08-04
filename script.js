var hourhand = document.querySelectorAll("#hour");
var minutehand = document.querySelectorAll("#minute");
var secondhand = document.querySelectorAll("#second");

for(i = 0; i < hourhand.length; i++){
    operateClock(i);
}

function operateClock(index) {
    var offset = [8, 8, 12, 13, 7, 7, 7, 0, -1, -2, 7, 15, 0, 8, 7, 10, 1, 7, 2, 14, 14, 1, -2, 7];
    var date = new Date(new Date().getTime() + offset[index] * 3600 * 1000);

    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    let hrPosition = (hr*360/12)+(min*(360/60)/12);
    let minPosition = (min*360/60)+(sec*(360/60)/60);
    let secPosition = sec*360/60;

    function runTheClock() {

        hrPosition = hrPosition+(3/360);
        minPosition = minPosition+(6/60);
        secPosition = secPosition+6;

        hourhand[index].style.transform = "rotate(" + hrPosition + "deg)";
        minutehand[index].style.transform = "rotate(" + minPosition + "deg)";
        secondhand[index].style.transform = "rotate(" + secPosition + "deg)";

    }

    var interval = setInterval(runTheClock, 1000);
}
