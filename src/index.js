// index.js (React app)
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import OrchidAnimation from './OrchidAnimation';

const sendEmail = async () => {
  try {
    const response = await fetch('/sendEmail', { // Assuming your Cloud Function endpoint is '/sendEmail'
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: 'She pressed Yes' }),
    });
    if (response.ok) {
      console.log('Email sent successfully!');
    } else {
      console.error('Failed to send email');
    }
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

ReactDOM.render(
  <React.StrictMode>
    <App sendEmail={sendEmail} />
    <OrchidAnimation />
    <button onClick={sendEmail}>Yes</button> {/* Button to trigger email sending */}
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
