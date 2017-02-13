# Scripting HTTP Requests with the Request Package

## Exercise
Please read the entire content of the exercise before you start coding!

In this exercise you will write a HTTPS client using request to download an image from the internet.

If you followed the instructions above, you should already have your working directory with a git repo, package.json, and node_modules folder.

- If you don't, please ensure these steps are complete before proceeding.
- Create a new .js file and using request, make a 'GET' request to 'https://sytantris.github.io/http-examples/future.jpg' using chaining. The chain should:
- Use .on('error') to handle any errors
- Use .on('response') to log the HTTPS response code, response message (response.statusMessage) and content type (response.headers['content-type'])
- Use piping and fs.createWriteStream to save the file to your working directory ('./future.jpg')

### Considerations:

- If you wanted to improve user experience, you might wish to let the user know what is happening, perhaps with two console.log statements:
- console.log('Downloading image...');
- console.log('Download complete.');
- Since we know request is asynchronous, where would you insert those console.log statements to ensure they occur in order and at the right time? Give it a try!
- Although you have a good spot to place the 'downloading' statement, if you tried logging 'complete' after the .pipe, what did you notice?
- How could you solve this? We know request is a stream, and streams generally respond to a certain four functions (see the previous exercise if you don't remember) - which function could you chain to mark the end of a writable stream?
