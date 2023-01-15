Like all projects this is the first thing you should read.

Starting the project.
In the project files.

server > package.json, there is a script called "start"
To run this go to the server directory by using "cd server" 
Then once you are now in the server, just run "npm start"

Same goes for the front end. 
In your terminal go to the "front" directory by using "cd" then run "npm start"

Check the port the front is running. For example if its in 5000
You can see the project in "localhost:5000"


FRONT END

As for the front end.
Check App.js

There are two states; "prompt" and "aiResponse"

The prompt is the user's entry on the input while aiResponse is the response from chatGPT/openAI

"aiResponse" will update once the user clicks on the submit.

The submit button will call the server with the API at path "/ask-an-ai"
The api will then call on the chatGPT API to give a response on which our server will have to send to the front end.

The whole API is written on index.js on the server directory.
On the body for the request. The API is expecting a "prompt" property on the object.

The prompt would be what the user asked the AI. The OpenAi API would then reply, it is stored in the variable "response"

Use console.log in order to check the API responses for better understanding of the codebase.

The front end would then set it as a state called "aiResponse" and be displayed in the "div" with the class name
'ai-response-box'


