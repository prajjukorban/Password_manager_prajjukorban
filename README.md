# Password Manager

A simple and secure password manager application built with React. This application allows users to store, manage, and retrieve their passwords securely.

## Features

- **User Input**: Users can input URL, username, and password.
- **Password Visibility Toggle**: Users can toggle password visibility.
- **Data Persistence**: Passwords are saved to and loaded from local storage.
- **CRUD Operations**: Create and delete password entries.
- **Responsive Design**: User-friendly interface.

## Technologies Used

- **Frontend**: React, JavaScript, HTML, CSS

## Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/prajjukorban/Password_manager_prajjukorban.git
    cd Password_manager_prajjukorban
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Start the application:**
    ```bash
    npm start
    ```

## Usage

1. Open your browser and go to `http://localhost:3000`.
2. Input the URL, username, and password.
3. Click the "Save" button to store the credentials.
4. Toggle password visibility by clicking the eye icon.
5. View your saved passwords in the table below the input form.
6. Delete passwords using the "Delete" button next to each entry.

## Code Overview

### `Input Component`

The main component of the application, responsible for rendering the form, handling user input, managing local storage, and displaying stored passwords.

#### State Variables

- `form`: Object to manage the current form input values.
- `formData`: Array to manage the list of saved password entries.

#### Functions

- `changeType`: Toggles the type of the password input field between `password` and `text`.
- `handleChange`: Updates the form state when the input fields change.
- `saveData`: Validates the form input, saves the data to `formData` state and local storage.
- `deleteData`: Deletes a password entry from `formData` state and updates local storage.
- `useEffect`: Loads saved data from local storage when the component mounts.

