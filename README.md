# Page-Fetcher Challenge

Implement a node app called fetcher.js.

It should take two command line arguments:

a URL
a local file path
It should download the resource at the URL to the local path on your machine. Upon completion, it should print out a message like Downloaded and saved 1235 bytes to ./index.html.

> node fetcher.js http://www.example.edu/ ./index.html
Downloaded and saved 3261 bytes to ./index.html


## Tips
   - Install and use the request library to make the HTTP request (We know this library is deprecated but it is still ok to use for our purposes.)
   - Use Node's fs (file system) module to write the file
   - Use the callback based approach we've been learning so far
   - Do not use the pipe function
   - Do not use synchronous functions (see warning above)

