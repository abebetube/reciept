// הגדרת מספר קבלה אוטומטי
let receiptCounter = 1;
document.getElementById('receiptNumber').value = receiptCounter;

// אתחול מחברת חתימה
const canvas = document.getElementById('signaturePad');
const signaturePad = new SignaturePad(canvas);

function resizeCanvas() {
  const ratio = Math.max(window.devicePixelRatio || 1, 1);
  canvas.width = canvas.offsetWidth * ratio;
  canvas.height = canvas.offsetHeight * ratio;
  canvas.getContext("2d").setTransform(1, 0, 0, 1, 0, 0);
  signaturePad.clear();
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

function clearSignature() {
  signaturePad.clear();
}

function saveData() {
  // שמירת הנתונים בשדות התצוגה
  document.getElementById('displayNumber').textContent = document.getElementById('receiptNumber').value;
  document.getElementById('displayFullName').textContent = document.getElementById('fullName').value;
  document.getElementById('displayPhone').textContent = document.getElementById('phone').value;
  document.getElementById('displayEmail').textContent = document.getElementById('email').value;
  document.getElementById('displayNotes').textContent = document.getElementById('notes').value;

  // הצגת חתימה
  if (!signaturePad.isEmpty()) {
    const dataURL = signaturePad.toDataURL();
    document.getElementById('displaySignature').innerHTML = `<img src="${dataURL}" style="width:100%; height:100%;" />`;
  } else {
    document.getElementById('displaySignature').innerHTML = '';
  }

  // עדכון מספר קבלה
  receiptCounter++;
  document.getElementById('receiptNumber').value = receiptCounter;
}

function downloadReceipt() {
  // יצירת תמונה של הקבלה
  html2canvas(document.getElementById('receipt')).then(canvas => {
    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/png');
    link.download = 'קבלה.png';
    link.click();
  });
}