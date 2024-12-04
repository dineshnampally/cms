# Course Management System (CMS)

The **Course Management System (CMS)** is a web-based application designed to help users manage, view, and interact with their courses. It provides a user-friendly interface for both students and administrators to manage course content, profiles, and other essential features.

## Features

- **Course Management**: View and interact with your courses.
- **User Profile**: Display user profile with name and email.
- **Admin Dashboard**: Admin users can manage courses and users.
- **Responsive Design**: The app is fully responsive and adapts to different screen sizes.
- **Logout**: Users can log out, clearing session data.

## Technologies Used

### Frontend:
- React.js
- Tailwind CSS
- React Router for navigation
- React Icons for UI components

### Backend (Future Plans):
- Node.js / Express (or any backend API to handle course data)
- Database (e.g., MySQL or MongoDB)

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/cms-app.git
2. Install Dependencies
Navigate to the project folder and run the following command to install the required dependencies:

bash
Copy code
cd cms-app
npm install
3. Run the Application
After the dependencies are installed, start the development server with:

bash
Copy code
npm start
The app will be running at http://localhost:3000 by default.

Usage Manual
User Manual
1. Homepage
Upon loading the app, users are greeted with the homepage, which includes the navigation bar at the top, consisting of:

CMS Logo: Clicking the logo will always bring the user back to the homepage.
My Courses Dropdown: A dropdown menu to access course-related options.
User Profile Dropdown: Displays the user's full name and email address, with options for logging out.
Admin Access: An icon/button that redirects admins to the admin page (only visible for users with admin privileges).
2. My Courses
My Courses Dropdown: Clicking on the Graduation Cap icon (located in the top right corner) opens the "My Courses" dropdown.
If the courses are loading, a loading spinner will appear.
Once the courses are loaded, the "View Courses" button will become clickable, allowing users to view their enrolled courses.
View Courses Button: Clicking the "View Courses" button redirects the user to the /mycourses page, where they can see a list of all the courses they are enrolled in.

3. User Profile Dropdown
User Information: Clicking on the user avatar (FaUserCircle icon) opens a dropdown showing the user's full name and email address.
Logout: A Logout button is available in the profile dropdown. Clicking the Logout button will clear the user's session data from localStorage and sessionStorage, and navigate the user to the login page (/register).

4. Admin Features (For Admin Users)
Admin Button: Admin users will see an Admin button (FaUserShield icon). Clicking this button redirects the user to the admin page (/admin), where they can manage courses, users, and other system settings.

5. Responsive Interface
The app is designed to work seamlessly on both mobile and desktop devices:

On small screens, the layout adjusts to provide a clean and accessible interface.
Dropdown menus, buttons, and navigation elements are responsive, ensuring a smooth experience across various screen sizes.
6. Navigation
The React Router handles navigation throughout the app:

Clicking the View Courses button navigates the user to the My Courses page (/mycourses).
Admin users can access the admin panel via the Admin button (/admin).
The Logout button logs the user out and redirects them to the login page (/register).
7. Loading States
The app uses loading spinners to indicate when content (like courses or user data) is being loaded or fetched from the backend.