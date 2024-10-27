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

- **Delete, and Update:** Manage tasks and bugs, edit tasks, update their status, or delete tasks as needed by drag n drop feature.
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

1. **Clone the Repository of client**

   ```bash
   git clone https://github.com/ShreyoPaul/task_management_dashboard_2.o.git
   cd task_management_dashboard_2.o
   ```

2. **Install Dependencies and Start the Development Server**

   ```bash
   npm install
   npm run dev
   ```

3. **Update Base Url**
   To add this instruction to the `README.md`, you can specify it in the setup steps like this:

````markdown
## Additional Setup

1. **Update Base URL for Local Development**

   Go to `src/constants/baseUrl.js` and replace:

   ```javascript
   export const BaseURL = "https://tms2-shreyopauls-projects.vercel.app";
   ```
   with:

   ```javascript
   const BaseURL = "http://localhost:8001";
   ```
   This change sets the base URL to the local server for development.



3. **Access the App**

   Once the server is up, open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

4. **Clone the Repository of server**

   ```bash
   cd Server
   git clone https://github.com/ShreyoPaul/task_management_server_2.o.git .
````

5. **Configure Environment Variables**

   ```bash
   MONGODB_URI=<Your MONGODB_URI>
   JWT_SECRET_KEY=<Your JWT_SECRET_KEY>
   ```

6. **Install Dependencies and Start the Development Server**

   ```bash
   npm install
   node index.js
   ```

---

## Technologies Used

- **Next.js**: For building the frontend with server-side rendering and static site generation.
- **Tailwind CSS**: For styling the application in a flexible and responsive manner.
- **React**: Utilized within Next.js for UI components and state management.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
