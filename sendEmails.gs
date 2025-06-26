/**
 * sendEmails.gs
 * Automated email sender using Google Sheets data and HTML templates
 * Author: Radha Meena
 * License: MIT
 */

function sendEmails() {
  // Access the sheet named "Sheet1"
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
  var data = sheet.getDataRange().getValues(); // Get all data from the sheet

  // Email subject and HTML body templates from cells A1 and B1
  var subjectTemplate = sheet.getRange("A1").getValue();
  var emailBodyTemplate = sheet.getRange("B1").getValue();

  /**
   * Format a given date as 'dd MMMM yyyy'
   * @param {string|Date} date - Date to format
   * @returns {string}
   */
  function formatDate(date) {
    return Utilities.formatDate(new Date(date), 'GMT+0530', 'dd MMMM yyyy');
  }

  /**
   * Format number into Indian currency style (e.g., 37,87,304)
   * @param {number} number
   * @returns {string}
   */
  function formatDigits(number) {
    return Number(number).toLocaleString('en-IN');
  }

  // Loop through each row, skipping the header row
  for (var i = 1; i < data.length && data[i][0] !== ""; i++) {
    var rowData = data[i];

    var unitNo = rowData[0];                // e.g., "A-101"
    var recipientEmail = rowData[1];        // e.g., "user@example.com"
    var paymentOnBooking = rowData[2];      // etc.

    // Replace placeholders in the subject
    var emailSubject = subjectTemplate.replace("%UnitNo%", unitNo);

    // Replace placeholders in the HTML body
    var emailBody = emailBodyTemplate
      .replace(/%UnitNo%/g, unitNo)
      .replace(/%On Booking%/g, formatDigits(rowData[x]))
      .replace(/%Within 15 Days%/g, formatDigits(rowData[x]))
      .replace(/%Foundation Work%/g, formatDigits(rowData[x]))
      .replace(/%1st Floor%/g, formatDigits(rowData[x]))
      .replace(/%7th Floor%/g, formatDigits(rowData[x]))
      .replace(/%14th Floor%/g, formatDigits(rowData[x]))
      .replace(/%Final Slab%/g, formatDigits(rowData[x]))
      .replace(/%Finishing work%/g, formatDigits(rowData[x]))
      .replace(/%Intimation to possession%/g, formatDigits(rowData[x]))
      .replace(/%Total%/g, formatDigits(rowData[x]))
      .replace(/%Total Due%/g, formatDigits(rowData[x]))
      .replace(/%TDS To Be Paid%/g, formatDigits(rowData[x]))
      .replace(/%Folder Link%/g, rowData[x]); // Assuming this is a link

    // Send the email using Gmail
    MailApp.sendEmail({
      to: recipientEmail,
      subject: emailSubject,
      htmlBody: emailBody,
    });
  }
}


