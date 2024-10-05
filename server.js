// importing the necessary dependancies
const express = require('express')
const mysql = require('mysql2')
const dotenv = require ('dotenv')


const app = express ()
dotenv.config()

// create a connection object
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

// Test the connection
db.connect((err)=> {
    // connection not sucessful
    if(err)
        return console.log("Error connectiong to Mysql, err")

    //connection sucessful
    console.log("Mysql connection sucessful")
})

1. // Define the /get-patients route
app.get('/get-patients', (req, res) => {
  // Logic to retrieve patients from your database or data source
  res.json(patients); // Assuming patients is an array of patient data
});

    db.query(getPatients, (err, data) => {
        // have an error
        if (err) {
            return res.status(400).send("Failed to fetch the patients", err)
        }

        // get back the data/ results
        res.status(200).send(results)
        })

2. // GET endpoint to retrieve all providers with specified fields
app.get('/providers', (req, res) => {
  // Map through providers to return only the specified fields
  const providerInfo = providers.map(provider => ({
    first_name: provider.first_name,
    last_name: provider.last_name,
    provider_specialty: provider.provider_specialty
  }));

  // Respond with the filtered provider information
  res.json(providerInfo);
});


3. // GET endpoint to retrieve patients by first name
app.get('/patients', (req, res) => {
  const firstName = req.query.first_name; // Get the first_name from the query string

  if (firstName) {
    // Filter patients by first name if the query parameter exists
    const filteredPatients = patients.filter(patient => patient.first_name.toLowerCase() === firstName.toLowerCase());
    
    if (filteredPatients.length > 0) {
      // Respond with filtered patients if any match the first name
      res.json(filteredPatients);
    } else {
      // If no patients match the first name, return a message
      res.status(404).json({ message: `No patients found with first name: ${firstName}` });
    }
  } else {
    // If no first name is provided, return all patients
    res.json(patients);
  }
});

4. // GET endpoint to retrieve providers by specialty
app.get('/providers', (req, res) => {
  const specialty = req.query.specialty; // Get the specialty from the query string

  if (specialty) {
    // Filter providers by specialty if the query parameter exists
    const filteredProviders = providers.filter(provider => provider.provider_specialty.toLowerCase() === specialty.toLowerCase());
    
    if (filteredProviders.length > 0) {
      // Respond with filtered providers if any match the specialty
      res.json(filteredProviders);
    } else {
      // If no providers match the specialty, return a message
      res.status(404).json({ message: `No providers found for specialty: ${specialty}` });
    }
  } else {
    // If no specialty is provided, return all providers
    res.json(providers);
  }
});


 
//THIS IS FOR TESTING PURPOSES
app.get('', (req,res) => {
    res.send('Hello Everybody, How are you today?, Hope you are feeling Okay.')
})
// THE TEST ENDS HERE


//declare the port and listen to the server
const PORT = 3300;
app.listen(PORT, ()=> {
    console.log('server is running on PORT ${PORT}')
})