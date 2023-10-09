# Personal Markdown Editor - MERN Stack
## Overview

This is a personal Markdown editor I created using the MERN (MongoDB, Express.js, React, Node.js) stack. It provides a user-friendly interface for creating and editing Markdown documents. Markdown is a lightweight markup language that allows you to format plain text using easy-to-read and easy-to-write syntax. This project enables you to write and preview Markdown content in real-time.

### Features

- Real-time Markdown preview
- Rich text editor with syntax highlighting
- Document management with Create, Read, Update, and Delete (CRUD) operations
- Responsive design for various devices

## Getting Started

To get started with your personal Markdown editor, follow the steps below:

### Prerequisites

- Node.js and npm installed on your machine
- MongoDB database (local or cloud-based)

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/your-username/markdown-editor.git
   ```

2. Navigate to the project directory:

   ```bash
   cd markdown-editor
   ```

3. Install server dependencies:

   ```bash
   npm install
   ```

4. Navigate to the client directory:

   ```bash
   cd client
   ```

5. Install client dependencies:

   ```bash
   npm install
   ```

6. Return to the root project directory:

   ```bash
   cd ..
   ```

7. Create a `.env` file in the project root and set your environment variables. You can use `.env.example` as a template.

8. Start the development server:

   ```bash
   npm run dev
   ```

Your personal Markdown editor should now be running. You can access it in your web browser at `http://localhost:3000`.

## Configuration

### Environment Variables

Make sure to configure the following environment variables in your `.env` file:

- `MONGO_URI`: The connection URL for your MongoDB database.
- `PORT`: The port on which the server will run (default is 5000).
- `CLIENT_URL`: The URL of your client application (e.g., `http://localhost:3000` in development).

## Usage
2. Create a new document by clicking "New Document."
3. Write or edit your Markdown content in the editor.
4. Your changes will be automatically previewed on the right side of the editor.
5. Save or update your document.
6. View, edit, or delete your documents from the home screen.

## License

This personal project is licensed under the MIT License. You have full control over how you choose to use and share it.

## Acknowledgments

- Thanks to the MERN stack and open-source contributors for the tools and libraries used in this project.

Enjoy using your personal Markdown editor! 📝✨
