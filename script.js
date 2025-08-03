// הגדרת מספר קבלה אוטומטי
let receiptCounter = 1;
document.getElementById('receiptNumber').value = receiptCounter;



function saveData() {
  // שמירת הנתונים בשדות התצוגה
  document.getElementById('displayNumber').textContent = document.getElementById('receiptNumber').value;
  document.getElementById('displayFullName').textContent = document.getElementById('fullName').value;
  document.getElementById('displayPhone').textContent = document.getElementById('phone').value;
  document.getElementById('displayEmail').textContent = document.getElementById('email').value;
  document.getElementById('displayNotes').textContent = document.getElementById('notes').value;

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
// עדכון זמן הפקה
function getCurrentDateTime() {
    const now = new Date();
    const date = now.toLocaleDateString('iw-IL' );
    const time = now.toLocaleTimeString('iw-IL', { hour: '2-digit', minute: '2-digit' });
    return `${date} --- ${time}`;
  }

  // הצגת התאריך והשעה בעת טעינת העמוד
  document.getElementById('dateTime').textContent = getCurrentDateTime();