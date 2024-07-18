setInterval(displayTime, 0);

function displayTime() {
    const date = new Date();

    const time = window.document.getElementById("time");
    time.innerHTML = "Time: " + date.getHours().toString() + ":" + date.getMinutes().toString() +":" + date.getSeconds().toString();
}