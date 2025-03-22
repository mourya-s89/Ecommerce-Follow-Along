# E-Commerce Application with MERN Stack

Welcome to the E-Commerce Application project! This project is designed to guide you through the process of building a full-fledged e-commerce platform from scratch using the MERN stack (MongoDB, Express.js, React.js, and Node.js).

## Project Overview

In this mentor-led session, you will embark on an exciting journey to develop an e-commerce application that includes key features such as product listings, user authentication, shopping cart functionality, and order processing. By the end of this project, you will have a solid understanding of how to build, deploy, and maintain a scalable web application using the MERN stack.

## Key Features

- **User Authentication:** Secure login and registration system using JSON Web Tokens (JWT).
- **Product Management:** CRUD (Create, Read, Update, Delete) operations for products, including image uploads.
- **Shopping Cart:** Add, update, and remove items in the shopping cart.
- **Order Processing:** Checkout process, order history, and payment integration.
- **Responsive Design:** User-friendly and responsive interface optimized for various devices.
- **Backend API:** RESTful API for managing products, users, and orders.

## Tech Stack

- **MongoDB:** NoSQL database for storing application data.
- **Express.js:** Backend framework for building the RESTful API.
- **React.js:** Frontend library for building the user interface.
- **Node.js:** Runtime environment for executing server-side code.

### ** Milestone 1: Laying the Foundation**

Initialized the project structure for both frontend and backend.

Installed necessary dependencies for React, Node.js, and Express.

Set up a basic server in **Node.js** using **Express.js**.

Configured **environment variables** for secure credentials.

I

### ** Milestone 2: Structuring the Project & UI Setup**

**Separated frontend and backend folders** for modular development.

Created a **functional login page** in the frontend using React.js.

Installed and configured **Tailwind CSS** for responsive UI design.

##

# ** Milestone 3: Backend Configuration & Database Connection**

Organized the **backend folder structure** for scalability.

Connected the **server to MongoDB** using Mongoose.

Implemented **error-handling middleware** for API stability.


### ** Milestone 4: User Management & File Handling**

Created the **User Model** in Mongoose to define user data structure.

Developed the **User Controller** to manage user authentication (signup, login).

Implemented **Multer for file handling**, allowing user profile and product image

uploads.

### ** Milestone 5: User Registration & File Handling**
Created the **sign up page** in React and added code  for signup backend also.
Added the **sign up page** validtion in (signup,login).

### # Milestone 6:

* added the **password encryption** in backend signup page.
* added comparision for checking password is correct or not in login backend.


### **Milestone 7: Password Decrypt By Using Bcryptjs**
added the **Password authentication** in backend login page.
Here we are first getting the hashed password from db searched by email and then comparing the input body password with hashedd password by compare method in bycryptjs.


## **Milestone 8: Product Page In Frontend**
added the **Product Page** in Frontend as a Homepage.

### Milestone 9: Product Input Form
- Built a form for adding products, including fields for product title and description.
- Added functionality for uploading multiple images.

---

## ⚙ Tech Stack
- Frontend: React, Redux, Tailwind CSS
- Backend: Node.js, Express.js
- Database: MongoDB
- Authentication: bcrypt for secure passwords

### **Milestone 10: Created Schema Product Upload**
created **ProductModel** in backend.
Created **productRouter** page in backend.
Handeld file uploads by multer inside middleware multer.

## **Milestone 11: Created Schema Product Upload**
Created **Home Page** for dynamic products presentation.
added the **backend** part for handeling products (created endpoint to get products).

## **MIlestone 12: Showing product according to user**
Created **Product Page** for dynamic products presentatioin according to user mail.
created backend for specific user products.