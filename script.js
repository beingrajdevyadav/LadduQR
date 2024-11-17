// selection of html element
let qrInputText = document.getElementById("qr-input-text");
let qrImg = document.getElementById("qr-img");
let generateQrBtn = document.getElementById("generate-qr-btn");
let downloadQrBtn = document.getElementById("download-qr-btn");

// QR generator function
generateQrBtn.addEventListener("click", () => {
    const qrCode = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${qrInputText.value}`;
    qrImg.src = qrCode;
    downloadQrBtn.disabled = false;
    // console.log(qrCode);
})

// QR download function
downloadQrBtn.addEventListener("click", async () => {
    const response = await fetch(qrImg.src);
    const blob = await response.blob();
    const downloadLink = document.createElement("a");
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = `LadduQR.jpg`;
    downloadLink.click();

    // to refresh form and result
    qrImg.src = "https://cdn.pixabay.com/animation/2023/11/30/10/11/10-11-02-622_512.gif";
    qrInputText.value = "";
    downloadQrBtn.disabled = true;
})