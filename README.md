<!-- # task-bite-backend

## Steps

1) Installation and configuration 
2) Create a file structure for authentification 
  - controller (auth), model (user), routes (auth), and ??? routes (user)
  - connect file structure to the server 
3) Handle user passwords (bcrypt)
4) Handle user login (passport)
5) Handle user logout 
6) Verifying that a user is authorized to visit specific routes (protecting specific routes)

&

1) Tie this in to the React App
  - creating some components for logging in, registering, logging out
  - making fetch requests to the user/auth related functionality on the server
  - protcting certain components from unauthorized users  -->

# App Details
<!-- Title of Web App -->
Task Bite
<!-- by Kiraah Grandberry-->

## App Overview

Task-Bite is a web application for personal project tracking/management. 

## ERD
![Entity Relationship Diagram](/public/assets/erd/erd.png)

## Wireframes

### Home Page
![Home Page](/public/assets/wireframes/home.png)

### Login/Register Page
![Login/Register Page](/public/assets/wireframes/login.png)

### Silo Page
![Silo Page](/public/assets/wireframes/silo.png)

### Collapsed Projects Page
![Collapsed Projects Page](/public/assets/wireframes/collapse.png)

### Project Focus Page
![Project Focus Page](/public/assets/wireframes/project_focus.png)

## User Stories

- The user arrives at the home page and is able to log-in or register from there
- Onced the user is logged in the user is taken to their project Silo where they can view all of their projects
- From the Silo the user can create/delete projects and from within those projects they can create/delete tasks
- Users will also be able to change the status of their tasks by clicking on them
- From the greater Silo view users will be able to see their progress in a given project based on the status of the tasks that make up that project
- From the greater Silo view users will be able to "focus" on a project, which will blur the other projects in the silo as well as enlarge the project that is in "focus" 
- Users will be able to drag and drop to re-order task inside projects and projects inside their Silo
- Users can log out of the Silo and be redirected to the login page


## Technology Overview

HTML, CSS, JSX, SASS, Bootstrap 5, Javascript, React, bcrypt, Node, MongoDB, Mongoose, and [will be deployed on] Heroku

## Unresolved Issues

- Error with hashing not allowing me to log in as the same user more than once
- Error with the 'New Project" function not allowing me to add a new task from the 'New Project' form -- works in Postman & shows up in Robo 3T
- Error with the 'New Task" function not allowing me to add a new task from the 'New Task' form -- works in Postman & shows up in Robo 3T
- 'Delete Project' button currently just for showing intent, it doesn't actually work yet
- 'Delete Task' button currently not in here but somehow I'm sure it wouldn't be working in this version of the app
- 'SideBar' for Navigating the site still currently under construction