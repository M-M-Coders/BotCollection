# Live Link
To access the app, visit https://bot-collection.vercel.app/

# Instructions
For this project, you’ll be building out a React application that displays a
list of available bots, among other features. Try your best to find the right
places to insert code into the established code base.

Part of what this code challenge is testing is your ability to follow given
instructions. While you will definitely have a significant amount of freedom in
how you implement the features, be sure to carefully read the directions for
setting up the application.

# Project Setup
Once you have the plan in place for the application you want to build take the following steps:

Create a new project folder.
Create a new GitHub repository.
Add your TM as a contributor to the project. (This is only for grading purposes. We promise we Once you have the plan in place for the application you want to build take the following steps:

Create a new project folder.
Create a new GitHub repository.
Add your TM as a contributor to the project. (This is only for grading purposes. We promise we won't steal your code)
Please make sure you regularly commit to the repository.
In your project directory, create a db.json file and use this dataLinks to an external site. for your server DB.
Run this command to get the backend started: json-server --watch db.json
Test your server by visiting this route in the browser: http://localhost:8001/botswon't steal your code)
Please make sure you regularly commit to the repository.
In your project directory, create a db.json file and use this dataLinks to an external site. for your server DB.
Run this command to get the backend started: json-server --watch db.json
Test your server by visiting this route in the browser: http://localhost:8001/bots

# Project Guidelines
Your project should conform to the following set of guidelines:

# Core Deliverables
As a user, I should be able to:

- See profiles of all bots rendered in `BotCollection`.
- Add an individual bot to my army by clicking on it. The selected bot should
  render in the `YourBotArmy` component. The bot can be enlisted only **once**.
  The bot **does not** disappear from the `BotCollection`.
- Release a bot from my army by clicking on it. The bot disappears from the
  `YourBotArmy` component.
- Discharge a bot from their service forever, by clicking the red button marked
  "x", which would delete the bot both from the backend and from the
  `YourBotArmy` on the frontend.