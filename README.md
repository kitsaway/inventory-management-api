# inventory-management-api

Express server for Inventory management application

## Endpoints

GET /inventories 
POST /inventories - receives JSON body with name, location and price values
DELETE /inventories/{inventoryID} - receives id of inventory to delete

## Available Scripts

In the project directory, you can run:

npm run dev
Runs the app in the development mode.
Open http://localhost:5000/inventories to view it in the browser.
The page will reload if you make edits.

npm run seed
Seeds database with 200 000 dummy data

## ENV Variables

To run server properly, please create .env file with variables:

PORT
DB_USER
DB_NAME
DB_PASS




