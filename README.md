# Google Sheets Form Integration with React

This project is a full-stack application that allows users to submit data through a React frontend, which is then stored in a Google Sheet using a Node.js backend. Additionally, the app provides functionality to view all data stored in the Google Sheet via the frontend.

---

## Features

- **Form Submission**: Users can submit their name, email, and a message via a styled form built with Tailwind CSS.
- **Duplicate Prevention**: Prevent duplicate submissions by checking if an email already exists in the Google Sheet.
- **Data Viewing**: View all submitted data from the Google Sheet in a table format on the frontend.

---

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- Node.js (v16 or higher)
- npm (or yarn)
- Google Cloud account with access to the Google Sheets API

---

## Setup Instructions

### Backend Setup

1. Clone the repository and navigate to the backend directory:
   ```bash
   git clone <repository-url>
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure Google Sheets API:
   - Create a service account in the [Google Cloud Console](https://console.cloud.google.com/).
   - Enable the Google Sheets API.
   - Download the service account JSON key file.
   - Share your Google Sheet with the service account email.

4. Create a `.env` file with the following variables:
   ```env
   SHEET_ID=your-google-sheet-id
   CLIENT_EMAIL=your-service-account-email
   PRIVATE_KEY="your-private-key"
   ```
   Note: Ensure the private key format is correct (replace `\n` with actual newlines).

5. Start the server:
   ```bash
   npm start
   ```

   The backend will run on `http://localhost:5000`.

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

   The frontend will run on `http://localhost:3000`.

---

## Project Structure

### Backend
- **`index.js`**: The main server file.
- **Google Sheets Integration**: Uses the Google Sheets API to read and write data.
- **Duplicate Email Check**: Prevents duplicate submissions based on email.

### Frontend
- **Form Component**: A React form styled with Tailwind CSS for data submission.
- **View Data Component**: Displays all data stored in the Google Sheet.
- **Routing**: Navigation between form submission and data viewing pages.

---

## Usage

### Submit Data
1. Navigate to `http://localhost:3000/submit`.
2. Fill in the form and click "Submit".
3. Success message will appear if the submission is successful.

### View Data
1. Navigate to `http://localhost:3000/view`.
2. All data stored in the Google Sheet will be displayed in a table format.

---

## Technologies Used

- **Frontend**:
  - React
  - Axios
  - Tailwind CSS

- **Backend**:
  - Node.js
  - Express
  - Google Sheets API

---

## Contributing

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes and push the branch.
4. Submit a pull request.

---

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

## Contact

For any questions or feedback, feel free to contact the project maintainer.

