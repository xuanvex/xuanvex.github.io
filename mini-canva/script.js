
const file = document.querySelector('.file');
const startP = document.querySelector(".upload-progress");
const uploadDiv = document.querySelector(".upload");

file.addEventListener("change", () => {
  const files = Array.from(file.files);
  if (files.length === 0) {
    hide();
    return;
  }
  show();
      files.forEach((e) => {
        addUpload(e.name, 10);
    });
})


function show() {
  uploadDiv.style.display = 'flex';
}
function hide() {
  uploadDiv.style.display = 'none';
}
function addUpload(fileName, uploadPercentage) {
  const uploadItem = document.createElement('div');
  uploadItem.className = 'upload-progress';
  uploadItem.innerHTML = `
        <div class="progress-info">
            <span>${fileName}</span>
            <span class="progress-percentage">${uploadPercentage}%</span>
        </div>

        <div class="progress-bar">
            <div class="progress"></div>
        </div>
    `;
    uploadDiv.appendChild(uploadItem);

    const percentage = uploadItem.querySelector(".progress-percentage");
    const progress = uploadItem.querySelector(".progress");

    var value = uploadPercentage;

    const interval = setInterval(() => {
      value++;
      percentage.textContent = value + '%';
      progress.style.width = value + "%";
      if (value >= 100) {
        clearInterval(interval);
      }
    }, 50);

}