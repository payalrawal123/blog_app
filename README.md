# Blog-Application

This project is a full-featured blog application built using the MERN stack. It demonstrates advanced features such as user authentication, role-based access control, CRUD operations, comments moderation, search and filtering, and more.

## Features

### 1. User Authentication and Authorization
JWT Authentication: Secure login and registration using JSON Web Tokens.
User Roles:
Admin: Can manage all content and users.
Author: Can create, edit, and delete their own posts.
Reader: Can read posts and comment on them.

### 2. Blog Posts
Schema: Includes fields such as title, content, author, created_at, updated_at, and status (draft, published).
CRUD Operations: Full functionality to create, read, update, and delete blog posts.
Pagination: Efficient navigation through lists of blog posts.
React Form Validation: Ensure data integrity with form validation in the frontend.

### 3. Comments
Schema: Fields include post, author, content, and created_at.
Commenting: Readers can comment on blog posts.
Moderation: Admin must approve comments before they are visible.

### 4. Search and Filtering
Search Functionality: Find blog posts by title or content.
Filtering: Filter posts by author and status (draft, published).

### 5. Advanced MongoDB Queries
Top 5 Most Commented Posts: Identify the most engaged posts.
Author Post Counts: Track the number of posts each author has written.

### 6. REST API
Express API: CRUD operations for blog posts and comments.
Authentication: Secure API endpoints using JWT.

## Technology Stack
Frontend: React.js
Backend: Node.js, Express.js
Database: MongoDB
Authentication: JWT (JSON Web Tokens)
## Requirements
Node.js: v14.x or later
MongoDB: Local or Atlas
npm: v6.x or later

## Run the Backend Server
#### npm run server
#### npm start

##  Run the Frontend Server
#### npm run dev

<!-- ## Screenshot
![alt text](image.png) -->