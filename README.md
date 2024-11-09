# Meal Mind

The AI-Powered Meal Planner is a web-based application designed to simplify meal planning for users with diverse dietary preferences. 

## Description

This intuitive platform allows users to create personalized meal plans for the week by inputting their dietary restrictions, favorite cuisines, and nutritional goals. The application leverages a straightforward algorithm to suggest meals categorized as Breakfast, Lunch, and Dinner, ensuring that users receive tailored recommendations that suit their tastes and dietary needs.

### Project Summary
[UML Design Document](https://docs.google.com/document/d/1auRsjRdIdvwAuIPG5tRWkqadqgolu8DQojapdjMqAYE/edit?tab=t.0) 

* Backend: A Java Spring Boot server exposing a REST API.
* Frontend: A Next.js app that fetches and displays data from the backend.

## Getting Started

Follow these steps to get the application running on your computer. This guide is for those who may not be familiar with technical tools, so don’t worry—just follow each step, and you'll be able to get the app running!

### 1. Install the Software You Need

Before you start, make sure you have these installed:

- **Java**: [Download Java](https://www.oracle.com/java/technologies/javase-downloads.html) and follow the instructions to install it.
- **Node.js**: [Download Node.js](https://nodejs.org/) and follow the setup instructions.

If you’re unsure whether they’re installed, you can move to the next steps, and we'll guide you through checking.

### 2. Download the Project

1. Go to the project's repository page (where you found this README).
2. Look for the **Code** button (usually green) and select **Download ZIP**.
3. Once downloaded, unzip the file to a folder on your computer.

### 3. Open a Terminal or Command Prompt

1. On **Windows**: Press `Windows Key + R`, type `cmd`, and press Enter.
2. On **Mac**: Press `Cmd + Space`, type `Terminal`, and press Enter.

Navigate to the project folder by typing `cd` followed by the path to the folder. For example:

```bash
cd mealMind
```
### 4. Install Required Packages
In your terminal, make sure you're in the main project folder (the folder with README.md in it). Then, type:

```bash
npm install
```
then do the same for the frontend 
```bash
cd frontend
npm install
```
go back to the main directory
```bash
cd ..
```
### 5. Start the Application
Once everything is set up, you can start both the backend and frontend of the application with one command. In the terminal, type:
```bash
npm run dev
```
* This command will start both parts of the app:

* Backend: Runs the Java server.
* Frontend: Runs the web app that connects to the Java server.
### 6. Open the Application in Your Browser
##### 1. Once you see a message that both the backend and frontend are running, open your browser.
##### 2. Go to http://localhost:3000.
##### 3. You should now see the application running!

## Accessing the Application 
You can also access just the backed or frontend separately
in the root directory 
```bash
cd backend
./mvnw spring-boot:run
```
in the root directory 

```bash
cd frontend
npm run dev
```
Frontend: http://localhost:3000
Backend: http://localhost:8080/api/hello
When you access the frontend, you should see the message from the backend API displayed on the page.




### Installing

* How/where to download your program
* Any modifications needed to be made to files/folders

### Executing program

* How to run the program

```
./mvnw spring-boot:run 
```

## Help

Any advise for common problems or issues.
```
command to run if program contains helper info
```

## Authors

Contributors names and contact info

 Richard Durazo  
ex. [@richdurazo](https://github.com/richdurazo)


## License

This project is licensed under the [NAME HERE] License - see the LICENSE.md file for details

## Acknowledgments

