/* Select hour, minute, and second hands from each clock element */
var hourhand = document.querySelectorAll("#hour");
var minutehand = document.querySelectorAll("#minute");
var secondhand = document.querySelectorAll("#second");

/* List of offsets corresponding to each clock's timezone based on US Central Time */
var offset = [8, 8, 12, 13, 7, 7, 7, 0, -1, -2, 7, 15, 0, 8, 7, 10, 1, 7, 2, 14, 14, 1, -2, 7];

/* Function to adjust the offset array based on the user's timezone */
(function adjustOffsets(){
    /* Find the time difference between Us Central Time and user's timezone in hours */
    var diff = 5 - ((new Date().getTimezoneOffset())/60);

    /* Adjust the offset of each clock based on the calculated difference */
    for(i = 0; i < offset.length; i++){
        offset[i] -= diff;
    }
})();

/* Iterate through each clock element and set its time */
for(i = 0; i < hourhand.length; i++){
    operateClock(i);
}

/* Function to set the clock time */
function operateClock(index) {
    /* Get the date in the current timezone and offset it to clock's correct timezone */
    var date = new Date(new Date().getTime() + offset[index] * 3600 * 1000);

    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    /* Convert to a position on an analog clock */
    let hrPosition = (hr*360/12)+(min*(360/60)/12);
    let minPosition = (min*360/60)+(sec*(360/60)/60);
    let secPosition = sec*360/60;

    /*Function to change the position of each hand */
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
