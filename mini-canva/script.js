
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
        addUpload(e.name, 10, URL.createObjectURL(e));
    });
})


function show() {
  uploadDiv.style.display = 'flex';
}
function hide() {
  uploadDiv.style.display = 'none';
}
function addUpload(fileName, uploadPercentage, path) {
  const uploadItem = document.createElement('div');
  uploadItem.className = 'upload-progress';
  uploadItem.innerHTML = `
  <img src='${path}' />
  <div class="pr">
          <div class="progress-info">
            <span class="img-name">${fileName}</span>
            <span class="progress-percentage">${uploadPercentage}%</span>
        </div>

        <div class="progress-bar">
            <div class="progress"></div>
        </div>
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


const params = new URLSearchParams(window.location.search);
const theme = params.get("theme");
if (theme === 'dark') {
  document.body.classList.add("dark")
}