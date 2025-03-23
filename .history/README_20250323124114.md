# Instructions on how to use JobFlow

## 1. Set Up PostgreSQL Database in pgAdmin

1. ***Open pgAdmin*** and log in to your PostgreSQL server.
2. Create a new database:
    * In pgAdmin, right-click ***Databases > Create > Database…***
    * Name it: job_tracker
    * Click Save.

## 2.  Create the Applications Table

1. Create the Applications Table
2. Open the Query Tool in pgAdmin.
    * Copy and run the following SQL command:  
    CREATE TABLE applications (  
    id SERIAL PRIMARY KEY,  
    company TEXT NOT NULL,  
    position TEXT NOT NULL,  
    status TEXT NOT NULL,  
    applied_on DATE NOT NULL  
);
3. Click Execute (▶️) to create the table.

## 3.  Import the CSV File into the Database

1. Right-click on the newly-made applications table in pgAdmin.
2. Select Import/Export Data.
3. Set Import Options:
    * Choose Import.
    * Select the provided CSV file (inside the project folder).
    * Format: CSV
    * Ensure the columns are mapped correctly:
        * company → company
        * position → position
        * status → status
        * applied_on → applied_on
    * Make sure ***Header*** is turned on in the options tab.
    * In the columns tag, remove the id column.
4. Click ok to import.

## 4. Verify the Database was Imported

1. Open the Query Tool in pgAdmin.
    * Run the following command:  
    ***SELECT * FROM applications;***
2. If successful, the table should display the imported job applications.

## 5. Set Up the Backend Server

1. Open the project folder on your computer.
    * Open the .env file in the project and update PostgreSQL credentials:
2. Replace your_password with your PostgreSQL credentials.
3. Open the db.js file in the project (database > db.js) and update PostgreSQL credentials.
4. Save the files.

## 6.  Install Dependencies

1. Open Terminal or Command Prompt and navigate to the project folder
2. Install required Node.js packages:
    * npm install

## 7. Start the Backend Server

1. Run the backend:
    * npm start
2. If everything is set up correctly, you should see:
    * Server running on http://localhost:3000

## 8. Open the Job Tracker in a Browser

1. Open a web browser and go to: http://localhost:3000

You should now see the Job Application Tracker with the imported data.