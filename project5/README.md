# Task Manager Web App Assignment

Build a Task Manager Web App with user authentication and CRUD operations for personal tasks using Firebase and fetch().

## 📋 Requirements
 1. User Authentication with Firebase
   - Integrate [Firebase Authentication](https://firebase.google.com/docs/auth).
   - Allow users to *Sign Up* and *Login* with email & password.
   - After login, store user info (UID/token) and display the Task Manager screen.
   - Add a *Logout* button to sign out.

### 2. Task Manager (Post-Login)
   - Show a form to *Add New Task* (title, description).
   - Display all tasks for the logged-in user in a list or card view.
   - Each task should have options:
    - ✅ *Mark as complete*
    - 📝 *Edit*
    - ❌ *Delete*


### 3. Authorization
   - Only authenticated users can access the Task Manager page.
   - Redirect unauthenticated users to the login page.
   - Optionally, protect data based on user's UID if using Firebase Firestore/Realtime DB.

### 4. UI & Styling
   - Use basic CSS or frameworks like *Tailwind* or *Bootstrap*.
   - Display tasks in a card or list view.
   - Show loading indicators when fetching or updating tasks.

### 5. Deployment

- Live Demo  [Netlify](https://taskmanagers-app.netlify.app/)


## 🚀 How to Run the App

1. *Clone the repository* or download the project files to your local machine.
2. *Install dependencies:*  
    No build tools required—just ensure you have a modern web browser and internet access.
3. *Set up Firebase:*  
    - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
    - Enable *Authentication* (Email/Password) and *Firestore* or *Realtime Database*.
    - Copy your Firebase config and paste it into firebase.js.
4. *Run locally:*  
    - Open index.html in your browser to start the app.