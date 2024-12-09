// Import the built-in HTTP module
const http = require('http');

// Define the port number
const PORT = 3000;

// Create the server
const server = http.createServer((req, res) => {
  // Set the response headers
  res.setHeader('Content-Type', 'application/json');
  res.statusCode = 200;

  // Prepare the JSON response
  const responseObject = {
    message: "Hello, this is your API response!",
    status: "success",
    timestamp: new Date().toISOString(),
  };

  // Send the JSON response
  res.end(JSON.stringify(responseObject));
});

// Start the server and listen on the specified port
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
