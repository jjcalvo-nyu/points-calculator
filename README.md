To run using bash terminal: 
npm install //installs dependencies
npm start //runs web app on localhost 3000
npm test //runs tests

Function overview:
App.js is rendered comtaining Main.js, which renders user information using Users.js and User.js. Each user links to a seperate page which displays more reward and transaction info with UserPage.js. 

Data is mocked with js files under the api folder. GET.js exports an object with dummy data similar to what would be received as an HTTP data object. GetByID.js exports a function find() which when given a dataset and id returns the object with the given id, which is meant to mock a database query at a GET by id endpoint. 

In Main.js, Users.js calculates total points for each user using the data imported from the mock api. Further data manipulation occurs in UserPage.js, which calculates rewards gained per transaction in addition to total points. Additionally on UserPage logic is executed to attribute points to a given month. The code is written in such a way that monthly points will be sorted based on the current date of the server. This makes the logic independent of the dummy data and capable of easily accepting any date range in an indentical format. 

Additionally simple tests are ran to ensure proper rendering and validate data is rendered properly.


Ways to improve this app would be better styling, more rigorous testing, and more features such as data filters or functionality surrounding transaction/point history extending beyond the 3-month range.