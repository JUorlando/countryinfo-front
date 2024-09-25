Country Info Front-End
This project is a frontend application that displays population data for various countries over time.

Features

Country List: Displays a list of countries in responsive columns.
Population Chart: Shows the population trend of selected countries over time using a graph.
Technologies Used
React: For building the user interface.
Styled Components: For styling components.
Rechart.js: For creating the population charts.
HTML5/CSS3: For structure and layout.
Installation
Prerequisites
Node.js (version >= 12.x)
npm or yarn
Steps
Clone the repository:

bash

git clone https://github.com/JUorlando/countryinfo-front
cd country-info
Install dependencies:

bash

npm install
# or
yarn install
Start the development server:

bash

npm start
# or
yarn start
The app will run at http://localhost:3000.

Scripts
npm start: Runs the development server.
npm run build: Builds the app for production.
npm test: Runs tests (if any are set up).
Folder Structure
php

/
├── public/             # Public files (e.g., index.html)
├── src/
│   ├── components/     # React components
│   ├── styles/         # Global styles (e.g., GlobalStyles)
│   ├── App.jsx         # Main component
│   ├── index.jsx       # Entry point for React
└── package.json        # Project dependencies
