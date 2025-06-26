# 📬 Email Automation with Google Sheets, Apps Script & HTML Templates

## 🔧 Project Overview
This project automates the process of sending personalized payment reminder emails using **Google Apps Script**, **Google Sheets**, and **HTML-based email templates**. It was developed to reduce manual effort in repetitive email communication within a real estate business context.

## 🎯 Objective
To automatically generate and send dynamic, well-formatted emails to multiple recipients based on data from a Google Sheet — with **zero manual copy-paste work**.

---

## 🛠️ Tech Stack

- **Google Sheets** – stores all client and payment data
- **Google Apps Script** – scripting platform to automate email sending
- **MailApp** – built-in Gmail API for dispatching emails
- **HTML** – used to format the email body and structure

---

## ✨ Key Features

- ✅ Custom subject and HTML body using template strings
- ✅ Placeholder replacement using values from each row
- ✅ Indian currency formatting (`₹37,87,304`)
- ✅ Date formatting to `dd MMMM yyyy` format
- ✅ Runs directly from Google Workspace — no external tools needed
- ✅ Reusable and scalable

---

## 🧠 How It Works

1. User enters dynamic email subject and body templates in cells `P1` and `Q1`.
2. Each row of the sheet contains data like unit number, payment milestones, email, and folder links.
3. The script loops through each row, replacing placeholders with actual data.
4. Sends formatted HTML emails via `MailApp.sendEmail()`.

---

## 📌 Code Highlights

```javascript
var emailSubject = subjectTemplate.replace("%UnitNo%", rowData[x]);
var emailBody = emailBodyTemplate.replace(/%UnitNo%/g, rowData[x])
  .replace(/%Total Due%/g, formatDigits(rowData[xx]))
  .replace(/%TDS To Be Paid%/g, formatDigits(rowData[xx]))
  .replace(/%Folder Link%/g, rowData[xx]); // Not digits
```

## 📸 Screenshots / Sample Sheet Layout

_Add screenshots showing:_

- Template in `P1` (Subject) and `Q1` (HTML Body)
- Google Sheet structure with mock data
- Sample output email in Gmail

> ℹ️ Note: Actual client data has been replaced with dummy values for privacy.

---

## 💡 Use Cases

- Real estate payment reminders
- Invoice communications
- CRM-based customer follow-ups
- Automated progress reports

---

## 👤 Author

**Radha Meena**  
Data Analyst | Automation Enthusiast  
📫 [LinkedIn](https://www.linkedin.com/in/radha-meena/)

---

## 🔒 Access & Collaboration

> This is a simplified demo version of the full script.  
> If you're interested in the complete working logic or want a customized version for your use case, feel free to [connect with me on LinkedIn](https://www.linkedin.com/in/radha-meena/) or send a message.

---

## 🔗 License

This project is free to use under the **MIT License**.  
You're welcome to fork, adapt, or build upon it — just credit the original author.

---

## 🙌 Want to Collaborate?

Feel free to fork the repo, suggest improvements, or reach out if you'd like help building similar automations for your workflow or business.

🔒 This is a simplified demo version of the full script. If you're interested in the complete working logic or want a customized version for your use case, feel free to connect with me on LinkedIn or send a message.


