# Super Admin Dashboard Setup Guide

This guide will help you set up the Super Admin Dashboard with Firebase.

## 1. Firebase Project Setup

### Create a Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a new project"
3. Enter your project name (e.g., "ABC of Islam")
4. Follow the setup wizard

### Enable Authentication
1. In Firebase Console, go to **Authentication**
2. Click **Get Started**
3. Enable **Email/Password** sign-in method

### Create Firestore Database
1. In Firebase Console, go to **Firestore Database**
2. Click **Create database**
3. Choose **Start in production mode**
4. Select your region
5. Click **Create**

### Set Firestore Security Rules
Replace the default rules with:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Admin-only collections
    match /contentCards/{document=**} {
      allow read: if true;
      allow write: if request.auth.uid != null && get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin';
    }
    
    match /navButtons/{document=**} {
      allow read: if true;
      allow write: if request.auth.uid != null && get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin';
    }
    
    match /users/{uid} {
      allow read: if request.auth.uid == uid || get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin';
      allow write: if request.auth.uid == uid || get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin';
    }
    
    match /site_stats/{document=**} {
      allow read: if true;
      allow write: if request.auth.uid != null && get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin';
    }
    
    match /activityLogs/{document=**} {
      allow read: if request.auth.uid != null && get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin';
      allow write: if request.auth.uid != null && get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin';
    }
  }
}
```

## 2. Get Firebase Configuration

1. In Firebase Console, go to **Project Settings** (gear icon)
2. Scroll down to "Your apps"
3. Click on the web app (or create one if needed)
4. Copy the Firebase config object

Your config will look like:
```javascript
{
  apiKey: "YOUR_API_KEY",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project",
  storageBucket: "your-project.firebasestorage.app",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef",
  measurementId: "G-ABCDEF"
}
```

## 3. Configure Environment Variables

Create a `.env.local` file in the root of your project:

```
VITE_FIREBASE_API_KEY=YOUR_API_KEY
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project
VITE_FIREBASE_STORAGE_BUCKET=your-project.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=1:123456789:web:abcdef
VITE_FIREBASE_MEASUREMENT_ID=G-ABCDEF
```

## 4. Create Your First Admin User

### Option A: Manual Setup (Recommended for first admin)

1. Sign up on your site at `/signup`
2. Use Firebase Console to manually change the user role to "admin":
   - Go to **Firestore Database**
   - Navigate to `users` collection
   - Find your user document
   - Change the `role` field from "user" to "admin"

### Option B: Programmatic Setup

Run this in your browser console after signing up:
```javascript
// This will be available after the app loads
// Contact support if you need help with this
```

## 5. Access the Admin Dashboard

1. Log in with your admin account
2. Navigate to `/admin` or look for the admin link in your user menu
3. You should see the Admin Dashboard

## 6. Features Overview

### Dashboard Tab
- View key statistics (total visitors, users, admins, active users, banned users)
- See pie charts for user distribution
- View recent users

### Content Cards Tab
- Add, edit, and delete learning modules
- Manage card order
- Upload image URLs

### Nav Buttons Tab
- Manage navigation buttons
- Add, edit, delete buttons
- Control button order

### Users Tab
- View all registered users
- Change user roles (user/admin)
- Change user status (active/inactive/banned)
- Delete users

### Statistics Tab
- View comprehensive site statistics
- Refresh stats manually
- See activity trends

### Activity Logs Tab
- View all admin actions
- Track who did what and when
- Filter by action type

## 7. Migrating Existing Content

To migrate your existing content from the hardcoded arrays to Firebase:

1. Go to the Admin Dashboard
2. Click on "Content Cards"
3. Click "Add New Card" for each card in your original data
4. Fill in the details and click "Create Card"
5. Repeat for Navigation Buttons

## 8. Troubleshooting

### Can't access admin dashboard
- Make sure your user role is set to "admin" in Firestore
- Check that you're logged in
- Clear browser cache and try again

### Changes not showing up
- Refresh the page
- Check browser console for errors
- Verify Firestore rules are correct

### Firestore rules errors
- Make sure you've set the security rules correctly
- Check that your user document has the correct role field
- Verify the collection names match exactly

## 9. Backup and Recovery

### Backup your data
1. Go to Firestore Database in Firebase Console
2. Click the three dots menu
3. Select "Export"
4. Choose collections to export
5. Download the backup

### Restore data
1. Click the three dots menu
2. Select "Import"
3. Choose your backup file
4. Confirm the import

## 10. Support

For issues or questions:
1. Check the browser console for error messages
2. Verify all Firebase configuration is correct
3. Make sure Firestore rules are properly set
4. Check that collections exist in Firestore

---

**Your Admin Dashboard is now ready to use!**
