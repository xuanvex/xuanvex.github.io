const canvas = document.getElementById("checkboxCanvas");
const ctx = canvas.getContext("2d");

const status = document.getElementById("status");

let checked = false;

function drawCheckbox() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const x = 30;
  const y = 30;
  const size = 40;

  // Checkbox
  ctx.beginPath();
  ctx.roundRect(x, y, size, size, 8);

  if (checked) {
    // Checked background
    ctx.fillStyle = "#6366f1";
    ctx.fill();

    // Check mark
    ctx.beginPath();
    ctx.moveTo(x + 10, y + 21);
    ctx.lineTo(x + 18, y + 29);
    ctx.lineTo(x + 32, y + 12);

    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 4;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.stroke();
  } else {
    // Unchecked
    ctx.fillStyle = "#ffffff";
    ctx.fill();

    ctx.strokeStyle = "#999999";
    ctx.lineWidth = 2;
    ctx.stroke();
  }

  // Label
  ctx.font = "18px Arial";
  ctx.fillStyle = "#222";
  ctx.textBaseline = "middle";
  ctx.fillText("I agree to the terms", 85, 50);
}

canvas.addEventListener("click", () => {
  checked = !checked;

  status.textContent = checked
    ? "Checked ✓"
    : "Unchecked";

  drawCheckbox();
});

drawCheckbox();