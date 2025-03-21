# Email Subscription Form

This project allows users to subscribe to a newsletter using an **HTML, CSS, and JavaScript** form that saves data to a **Google Sheets** via **Google Apps Script**.

## 🚀 How to Set Up

### 1️⃣ Create a Google Sheet
- Open [Google Sheets](https://docs.google.com/spreadsheets/).
- Create a new sheet and name it **Subscribers**.
- Add column headers: **Name, Email, Timestamp**.

### 2️⃣ Set Up Google Apps Script
- Open **Extensions > Apps Script** in Google Sheets.
- Replace the default code with the following:

```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.openById("YOUR_SHEET_ID").getActiveSheet();
  var data = JSON.parse(e.postData.contents);
  
  sheet.appendRow([data.name, data.email, new Date()]);

  return ContentService.createTextOutput("Success").setMimeType(ContentService.MimeType.TEXT);
}
```

- Replace `"YOUR_SHEET_ID"` with your **Google Sheet ID**.
- Click **Deploy > New Deployment** and **set access to "Anyone"**.
- Copy the **Deployment URL**.

### 3️⃣ Update the JavaScript File
- Open `script.js` and **replace** `'YOUR_DEPLOYMENT_URL'` with your **Google Apps Script URL**.

### 4️⃣ Run the Project
- Open `index.html` in a browser.
- Enter a name & email and **click Subscribe**.
- Check your **Google Sheet**—data should appear! ✅

## 📌 Notes
- Ensure **Google Apps Script is deployed as a Web App**.
- Open **browser console (`Ctrl + Shift + J`)** to debug.

Enjoy! 🎉
