# F&G Feedback and Grievance System

This project is a feedback and grievance system for a startup named F&G. It consists of two main components:
1. **Feedback Form**: A form for submitting feedback about a restaurant.
2. **Submissions List**: A table that displays all feedback submissions stored in the browser's local storage.

## Features

- **Feedback Form**: Users can submit their feedback about a restaurant. The form includes fields for customer name, email, phone number, and various rating questions.
- **Validation**: All fields are mandatory, and there is validation for email format and phone number format.
- **Local Storage**: Feedback submissions are saved in the browser's local storage to ensure data persistence.
- **Submissions List**: Displays all submitted feedback in a tabular format using the `react-table` library.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/fg-feedback-system.git
    cd fg-feedback-system
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Start the development server:

    ```bash
    npm start
    ```

### Project Structure

```plaintext
fg-feedback-system/
│
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── FeedbackForm.js
│   │   └── SubmissionsList.js
│   ├── App.js
│   ├── index.js
│   └── ...
├── README.md
└── package.json
