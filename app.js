function moveHands() {
    with(new Date()) {
        var h = 30 * (getHours() % 12 + getMinutes() / 60);
        var m = 6 * getMinutes();
        var s = 6 * getSeconds();

        var seconds_angle;
        var minutes_angle;
        var hours_angle;

        if (s < 90) {
            seconds_angle = 360 + (s - 90)
        } else {
            seconds_angle = s - 90;
        }

        if (m < 90) {
            minutes_angle = 360 + (m - 90)
        } else {
            minutes_angle = m - 90;
        }

        if (h < 90) {
            hours_angle = 360 + (h - 90)
        } else {
            hours_angle = h - 90;
        }

        var seconds_top = 50 * Math.sin(seconds_angle * (Math.PI / 180));
        var seconds_left = 50 * Math.cos(seconds_angle * (Math.PI / 180));

        var minutes_top = 50 * Math.sin(minutes_angle * (Math.PI / 180));
        var minutes_left = 50 * Math.cos(minutes_angle * (Math.PI / 180));

        var hours_top = 50 * Math.sin(hours_angle * (Math.PI / 180));
        var hours_left = 50 * Math.cos(hours_angle * (Math.PI / 180));

        document.getElementById('seconds').style.cssText = "-webkit-transform:rotate(" + s + "deg);";
        document.getElementById('second_hand_ext').style.cssText = "-webkit-transform:rotate(" + (s + 180) + "deg);";

        document.getElementById('second_hand').style.cssText = "-webkit-transform:rotate(" + s + "deg); top:" + seconds_top + "px; left:" + seconds_left + "px;";

        document.getElementById('minutes').style.cssText = "-webkit-transform:rotate(" + m + "deg);";
        document.getElementById('minute_hand').style.cssText = "-webkit-transform:rotate(" + m + "deg); top:" + minutes_top + "px; left:" + minutes_left + "px;";

        document.getElementById('hours').style.cssText = "-webkit-transform:rotate(" + h + "deg);";
        document.getElementById('hour_hand').style.cssText = "-webkit-transform:rotate(" + h + "deg); top:" + hours_top + "px; left:" + hours_left + "px;";



        setTimeout(moveHands, 1000);
    }
}

window.onload = moveHands;