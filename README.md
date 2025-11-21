Email Categorizer – Automation Assignment

This project is part of the Automation Engineer assignment.
The task was to build a small system that can take any email text, identify what type of email it is, generate a simple reply, and save everything into a Google Sheet.

I made the project using Node.js for the backend, a basic HTML page for the user interface, and Google Apps Script for storing data. Everything runs locally and doesn’t need any heavy setup.

-->>> What the Project Does

1. User pastes an email in the text box
2. The backend checks the content and categorizes it (Finance / HR / Technical / General)
3. A basic reply message is prepared depending on the category
4. The final result is stored in a Google Sheet with a timestamp
5. The Google Sheet works like a database and keeps a record of all processed emails.

-->>> Tech Used

1. Node.js + Express – backend API
2. HTML + CSS + JavaScript – frontend
3. Axios – sending data between services
4. Google Apps Script Web App – for storing data in Google Sheets
5. I used this stack because it’s simple to set up, easy to test, and ideal for automation-related workflows.

-->>> How the System Works

1. frontend.html sends the email to the backend (/process)
2. server.js checks the content and assigns a category
3. server.js creates a reply message
4. server.js sends email + category + reply to the Google Apps Script endpoint
5. Apps Script saves the data into the Google Sheet

-->>> Apps Script (Used for Google Sheets)

The Apps Script receives POST requests and stores each entry as a new row in the sheet. It’s a lightweight replacement for a cloud database in this assignment.

-->>> Improvements I Would Add

1. If given more time, I would improve the project by:
2. Using real AI for smarter categorization
3. Connecting it directly to Gmail using Gmail API
4. Improving the UI
5. Adding analytics/dashboard
6. Making replies more dynamic using NLP models

-->>> Final Note

The aim of this project was to show my understanding of automation, API communication, and simple data processing. I tried to keep everything clean and easy to follow so the evaluator can test it quickly.