(function () {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    let birthday = "Mar 29, 2025 00:00:00",
        countdown = new Date(birthday).getTime();

    let x = setInterval(function () {
        let now = new Date().getTime(),
            distance = countdown - now;

        document.getElementById("days").innerText = Math.floor(distance / day);
        document.getElementById("hours").innerText = Math.floor((distance % day) / hour);
        document.getElementById("minutes").innerText = Math.floor((distance % hour) / minute);
        document.getElementById("seconds").innerText = Math.floor((distance % minute) / second);

        // When the countdown reaches zero
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("headline").innerText = "It's your birthday!";
            document.getElementById("countdown").style.display = "none";
            document.getElementById("content").style.display = "block";
        }
    }, 1000); // Update every second
})();
