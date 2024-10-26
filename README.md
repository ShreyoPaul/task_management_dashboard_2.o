# Task/Bug Management App

A task and bug management app built using **Next.js** and **Tailwind CSS**. This application allows users to create, manage, and track tasks and bugs in an organized, efficient, and visually appealing interface. With user authentication, a centralized dashboard, and time-tracking features, users can maintain effective project management with ease.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Project Locally](#running-the-project-locally)
- [Technologies Used](#technologies-used)
- [License](#license)

---

## Features

### User Authentication
- **Sign Up / Log In:** Users can create an account or log in to an existing account.
- **Role-based Access Control:** Allows role-specific permissions to access certain functionalities.

### Dashboard
- **Overview of Tasks & Bugs:** Summarized view of all tasks and bugs in progress, pending, or completed.
- **User-Specific Data:** Personalized view for each user based on their roles and permissions.

### Task/Bug Creation
- **Easy Creation Interface:** Users can create new tasks or bug reports with relevant details such as title, description, priority, status, and assignee.
- **Categorization and Labeling:** Allows categorization of tasks and bugs for easier filtering and management.

### Task/Bug Management
- **Delete, and Update:** Manage tasks and bugs, update their status, or delete entries as needed by drag n drop feature.
- **Priority Update with Drag-and-Drop:** Update task priority by dragging and dropping tasks into designated priority sections for quick prioritization.
- **Assignee Management:** Assign tasks to specific team members and track task ownership.

### Time Tracking
- **Duration:** Track time spent on each task or bug with duration of the tasks or bug in the particular status section.

---

## Prerequisites

Ensure you have the following installed on your system:

- **Node.js** (v16.x or higher)
- **npm** or **yarn** (npm comes bundled with Node.js)
- **Git** (for cloning the repository)

---

## Installation & Running the Project Locally

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/task-bug-management-app.git
   cd task-bug-management-app
   ```

2. **Install Dependencies and Start the Development Server**

   ```bash
   npm install
   npm run dev
   ```

3. **Access the App**

   Once the server is up, open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

---

## Technologies Used

- **Next.js**: For building the frontend with server-side rendering and static site generation.
- **Tailwind CSS**: For styling the application in a flexible and responsive manner.
- **React**: Utilized within Next.js for UI components and state management.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
