# Super Admin Dashboard - Complete Guide

## Overview

The Super Admin Dashboard is a comprehensive management system that allows you to control every aspect of your ABC of Islam website without writing any code. It includes content management, user administration, and detailed statistics.

## Quick Start

### Accessing the Dashboard

1. **Sign in** with your admin account at `/login`
2. **Navigate** to `/admin` or click your profile menu and look for admin options
3. You'll see the Admin Dashboard with a sidebar menu

### First Time Setup

If you're setting up for the first time:

1. Follow the instructions in `ADMIN_SETUP.md` to configure Firebase
2. Create your first admin user
3. Start adding content to your site

---

## Dashboard Features

### 1. Dashboard Tab (Overview)

The main dashboard shows key metrics at a glance:

- **Total Visitors**: Number of people who have visited your site
- **Total Users**: Total registered accounts
- **Active Users**: Users with active status
- **Admins**: Number of admin accounts

**Charts:**
- **User Status Distribution**: Pie chart showing active, inactive, and banned users
- **User Role Distribution**: Pie chart showing regular users vs admins
- **Recent Users**: List of the most recently registered users

**Action:** Click "Refresh Stats" to manually update statistics

---

### 2. Content Cards Tab

Manage the learning modules displayed on your homepage.

#### View Content Cards
- See all content cards in a grid view
- Each card shows:
  - Title
  - Subtitle
  - Preview image
  - Display order

#### Add New Card
1. Click "Add New Card" button
2. Fill in the form:
   - **Title**: The main heading (e.g., "Let's know the 6 Beliefs!")
   - **Subtitle**: Description text
   - **Image URL**: Link to the card image
   - **Link URL**: Where the card links to when clicked
   - **Order**: Display position (0 = first)
3. Click "Create Card"

#### Edit Card
1. Click the edit icon on any card
2. Update the information
3. Click "Update Card"

#### Delete Card
1. Click the trash icon on any card
2. Confirm the deletion
3. The card is removed immediately

**Tips:**
- Use consistent image sizes for better appearance
- Lower order numbers appear first
- Test links before saving

---

### 3. Nav Buttons Tab

Manage the navigation buttons displayed below the hero section.

#### Features
- Add, edit, and delete navigation buttons
- Control button order and appearance
- Each button requires an image and URL

#### Add Navigation Button
1. Click "Add New Button"
2. Fill in:
   - **Label**: Button text (e.g., "Prophet Stories")
   - **URL**: Where the button links to
   - **Image URL**: Button image/icon
   - **Order**: Display position
3. Click "Create Button"

#### Edit/Delete
- Use the edit and trash icons just like content cards

**Tips:**
- Keep labels short and descriptive
- Use square images for best appearance
- Test all links work correctly

---

### 4. Users Tab

Complete user management system.

#### View Users
- See all registered users
- Each user shows:
  - Email address
  - Admin status (shield icon if admin)
  - Account creation date
  - Last login date

#### Change User Role
1. Find the user in the list
2. Use the "Role" dropdown to select:
   - **User**: Regular user (no admin access)
   - **Admin**: Full admin access to dashboard
3. Role changes immediately

#### Change User Status
1. Use the "Status" dropdown to select:
   - **Active**: User can log in and use the site
   - **Inactive**: User account is disabled
   - **Banned**: User is blocked from the site
2. Changes apply immediately

#### Delete User
1. Click the trash icon
2. Confirm the deletion
3. User account is permanently removed

**Important:**
- Be careful when deleting users - this cannot be undone
- Only promote trusted users to admin
- Use "Banned" status for problematic users instead of deletion

---

### 5. Statistics Tab

Detailed analytics and performance metrics.

#### Key Metrics
- **Total Visitors**: All-time site visits
- **Total Users**: Registered accounts
- **Active Users**: Users who can access the site
- **Admins**: Admin accounts

#### Charts
- **User Status Distribution**: Visual breakdown of user statuses
- **User Role Distribution**: Regular users vs admins
- **Recent Users**: Latest registrations

#### Refresh Statistics
Click "Refresh Stats" to:
- Update visitor counts
- Recalculate user statistics
- Sync all metrics

**Use Cases:**
- Monitor site growth
- Track user engagement
- Identify trends
- Make data-driven decisions

---

### 6. Activity Logs Tab

Complete audit trail of all admin actions.

#### View Activity
Each log entry shows:
- **Action Type**: CREATE, UPDATE, DELETE, UPDATE_ROLE, UPDATE_STATUS
- **Target**: What was modified
- **Admin ID**: Who made the change
- **Details**: Additional information
- **Timestamp**: When it happened

#### Action Colors
- **Green**: CREATE (new items added)
- **Blue**: UPDATE (items modified)
- **Red**: DELETE (items removed)
- **Purple**: UPDATE_ROLE (user role changed)
- **Yellow**: UPDATE_STATUS (user status changed)

#### Use Cases
- Track who made what changes
- Audit content modifications
- Monitor user management actions
- Compliance and record-keeping

---

## Common Tasks

### Add a New Learning Module

1. Go to **Content Cards** tab
2. Click "Add New Card"
3. Fill in:
   - Title: "Learn Arabic Words!"
   - Subtitle: "Speak the Language of the Quran"
   - Image URL: (paste image URL)
   - Link URL: https://islamic-learning-center.abcofislam.com/
   - Order: 10
4. Click "Create Card"
5. New card appears on homepage

### Make Someone an Admin

1. Go to **Users** tab
2. Find the user
3. Click the Role dropdown
4. Select "Admin"
5. They can now access the dashboard

### Ban a Problematic User

1. Go to **Users** tab
2. Find the user
3. Click the Status dropdown
4. Select "Banned"
5. User cannot log in anymore

### Check Site Statistics

1. Go to **Statistics** tab
2. View key metrics
3. Click "Refresh Stats" to update
4. Analyze charts and trends

### Track Admin Actions

1. Go to **Activity Logs** tab
2. Review recent actions
3. See who did what and when
4. Use for auditing and compliance

---

## Best Practices

### Content Management
- ✅ Keep titles concise and descriptive
- ✅ Use high-quality images
- ✅ Test all links before publishing
- ✅ Organize cards with logical ordering
- ✅ Regularly update outdated content

### User Management
- ✅ Only promote trusted users to admin
- ✅ Regularly review user list
- ✅ Ban problematic users instead of deleting
- ✅ Monitor admin activity logs
- ✅ Keep admin count minimal

### Site Maintenance
- ✅ Refresh statistics regularly
- ✅ Review activity logs weekly
- ✅ Update content seasonally
- ✅ Monitor user growth
- ✅ Backup data regularly

---

## Troubleshooting

### Can't see the Admin Dashboard

**Problem**: You're logged in but can't access `/admin`

**Solutions**:
1. Check that your user role is "admin" in the Users tab
2. Log out and log back in
3. Clear browser cache
4. Try a different browser

### Changes not appearing

**Problem**: You made changes but they don't show up

**Solutions**:
1. Refresh the page
2. Check browser console for errors (F12)
3. Verify you have admin permissions
4. Try again in a few seconds

### Can't add content

**Problem**: "Add New Card" button doesn't work

**Solutions**:
1. Make sure all fields are filled
2. Check that image URLs are valid
3. Verify you're connected to the internet
4. Try a different browser

### Firebase errors

**Problem**: "Failed to load..." or Firebase errors

**Solutions**:
1. Check that Firebase is configured correctly
2. Verify environment variables are set
3. Check Firestore security rules
4. Ensure collections exist in Firestore

---

## Advanced Features

### Bulk Actions

For managing multiple items:
1. Currently, items are managed individually
2. Use the order field to reorganize
3. Delete and recreate for bulk changes

### Data Export

To backup your data:
1. Go to Firebase Console
2. Click Firestore Database
3. Click the menu (three dots)
4. Select "Export"
5. Download your data

### Data Import

To restore from backup:
1. Go to Firebase Console
2. Click Firestore Database
3. Click the menu (three dots)
4. Select "Import"
5. Choose your backup file

---

## Security Notes

### Admin Access
- Admin accounts have full control over the site
- Only give admin access to trusted people
- Regularly review who has admin access
- Monitor activity logs for suspicious activity

### Data Protection
- All data is stored in Firebase
- Firestore rules control who can access what
- User passwords are securely hashed
- Never share your admin credentials

### Backups
- Regularly backup your data
- Keep backups in a secure location
- Test restore procedures
- Document your backup schedule

---

## Support & Help

### Getting Help

1. **Check this guide** - Most questions are answered here
2. **Check ADMIN_SETUP.md** - For initial setup issues
3. **Browser console** - Press F12 to see error messages
4. **Firebase Console** - Check Firestore and Auth status

### Common Error Messages

| Error | Solution |
|-------|----------|
| "Failed to load users" | Check Firebase connection and permissions |
| "Failed to save card" | Ensure all fields are filled correctly |
| "User not found" | Refresh the page and try again |
| "Permission denied" | Check your admin role in Firestore |

---

## Keyboard Shortcuts

- `F12` - Open browser developer tools
- `Ctrl+R` / `Cmd+R` - Refresh page
- `Ctrl+Shift+Delete` - Clear cache

---

**Last Updated**: June 2026

For the latest updates and features, check the GitHub repository.
