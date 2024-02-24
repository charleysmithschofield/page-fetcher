
/*
Steps:
1. Import the request module
2. Parse Command-Line Arguments:
   extract the vlaues passed to the passed to the program when executed
3: Make an HTTP GET Request to the specified URL
4. Write Received Data to File.
5. Handle Errors and Edge Cases.
*/

// Step 1: Import the request module:
const request = require('request');

// Step 2: Parse Command-Line Arguments:
// Extract command-line arguments
const args = process.argv.slice(2);
const url = args[0];
const filePath = args[1];

// Check if both URL and file path are provided
if (!url || !filePath) {
  console.error('Usage: node fetcher.js http://www.example.edu/ ./index.html');
  // exit process if error occurs
  process.exit(1);
}

// Step 3: Make an HTTP GET Request to the specified URL
request('http://www.example.edu/', (error, response, body) => {
  // Check if an error ocurred
  if (error) {
    // If an error ocurred log the error
    console.log('Error making HTTP request:', error);
    // exit the process
    process.exit(1);
  }
  // Check if the response status code is not 200 (aka everything is OK)
  if (response.statusCode !== 200) {
    // if it is not 200, log the statusCode
    console.log(`Error: HTTP status code ${response.statusCode}`);
    // exit the process
    process.exit(1);
  }
  // If no error, and the status code is 200, log the response status code and if the response was received
  console.log('statusCode', response && response.statusCode);
  // log the HTML for the example.edu homepage
  console.log('body:', body);

  // Step 4: Write Received Data to File

  // Import the fs module
  const fs = require('fs');

  // Check if the file already exists
  if (fs.existsSync(filePath)) {
    // log that the path already exists
    console.log('Error: File already exists at the specified path.');
    // exit the process
    process.exit(1);
  }

  // Write received data to the file
  fs.writeFile(filePath, body, (err) => {
    // Handle errors
    if (err) {
      console.error('Error writing to file:', err);
      process.exit(1);
    }
    
    // Print success message
    console.log(`Downloaded and saved ${body.length} bytes to ${filePath}`);
  });
});