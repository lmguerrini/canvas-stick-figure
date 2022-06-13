(function moveStickFigure() {
    var canvasInput = document.getElementById("canvasInput");
    var ctx = canvasInput.getContext("2d");
    ctx.strokeStyle = "lime";

    // StickFigure
    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.arc(225, 100, 70, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(225, 170);
    ctx.lineTo(225, 400);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(225, 250);
    ctx.lineTo(380, 150);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(225, 250);
    ctx.lineTo(70, 150);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(225, 399);
    ctx.lineTo(360, 550);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(225, 399);
    ctx.lineTo(90, 550);
    ctx.stroke();

    var canvasOutput = document.getElementById("canvasOutput");
    var ctx2 = canvasOutput.getContext("2d");
    ctx2.drawImage(canvasInput, 30, 25, 450, 600, 200, 50, 450, 600);

    var deltaX = 165;
    var deltaY = 25;

    document.addEventListener("keydown", function (e) {
        if (e.key === "ArrowRight") {
            ctx2.clearRect(0, 0, canvasOutput.width, canvasOutput.height);
            deltaX += 10;
            ctx2.drawImage(canvasInput, deltaX, deltaY);
        } else if (e.key === "ArrowLeft") {
            ctx2.clearRect(0, 0, canvasOutput.width, canvasOutput.height);
            deltaX -= 10;
            ctx2.drawImage(canvasInput, deltaX, deltaY);
        } else if (e.key === "ArrowUp") {
            ctx2.clearRect(0, 0, canvasOutput.width, canvasOutput.height);
            deltaY -= 10;
            ctx2.drawImage(canvasInput, deltaX, deltaY);
        } else if (e.key === "ArrowDown") {
            ctx2.clearRect(0, 0, canvasOutput.width, canvasOutput.height);
            deltaY += 10;
            ctx2.drawImage(canvasInput, deltaX, deltaY);
        } else {
            return;
        }
        e.preventDefault();
    });
})();
