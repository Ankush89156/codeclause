const uploadForm = document.getElementById("uploadForm");
const fileInput = document.getElementById("fileInput");
const linkContainer = document.getElementById("linkContainer");
const fileLink = document.getElementById("fileLink");
const fileList = document.getElementById("fileList");

uploadForm.addEventListener("submit", function (e) {
    e.preventDefault();
    
    const file = fileInput.files[0];
    if (!file) {
        alert("Please select a file!");
        return;
    }

    // Create a fake download link (for demonstration purposes)
    const fakeDownloadUrl = URL.createObjectURL(file);
    
    // Display the shareable link
    fileLink.href = fakeDownloadUrl;
    fileLink.textContent = fakeDownloadUrl;
    linkContainer.style.display = "block";

    // Add the file to the file list
    const li = document.createElement("li");
    const downloadLink = document.createElement("a");
    downloadLink.href = fakeDownloadUrl;
    downloadLink.textContent = file.name;
    downloadLink.setAttribute("download", file.name);
    li.appendChild(downloadLink);
    fileList.appendChild(li);
    
    // Clear the file input after upload
    fileInput.value = "";
});
