# meet
A serverless, progressive web application (PWA) with React utilizing a test-driven improvement (TDD) method. It utilizes the Google Calendar API to get forthcoming occasions.

# Key Features

Filter occasions by city. Show/conceal event information. Determine number of occasions. Utilize the application when disconnected. Add an application alternate way to the home screen. View a diagram showing the quantity of upcoming occasions by city.

# User Stories •
As a client, I might want to have the option to show/conceal occasion details so I can see more/less data about an occasion.
Scenario 1: An event element is collapsed by default Given the main page is open When a user search for a city and the events are loaded Then the event element details will be hidden

Situation 2: User can extend an occasion to see its details Given the rundown of occasions has been stacked When client taps on "Show details" button for an occasion Then the occasion component will be extended to show the occasion details

Scenario 3: User can collapse an event to hide its details Given the “Show details” button for an event has been clicked and the details are expanded When user clicks on “Hide details” button on that event Then the event element will collapse again, hiding the details

• As a user, I would like to be able to specify the number of events I want to view in the app so that I can see more or fewer events in the events list at once

Scenario 1: When user hasn’t specified a number, 32 is the default number Given a user has chosen the city they want to see events for When the user doesn’t specify a number of events they want to view Then the default number will be set to 32

Scenario 2: User can change the number of events they want to see Given a user has chosen the city they want to see events for When they type a number into the box “Number of Events” Then the according number of events will load for the respective city • As a user, I would like to be able to use the app when offline so that I can see the events I viewed the last time I was online.

Scenario 3: Show cached data when there’s no internet connection Given a user has used the app before When they access the website offline Then the events they viewed previously will be shown

Scenario 4: Show error when user changes the settings (city, time range) Given a user accesses the website offline When they change the setting such as city or time range Then an error will be shown • As a user, I would like to be able to see a chart showing the upcoming events in each city so that I know what events are organized in which city.

Scenario 5: Show a chart with the number of upcoming events in each city Given a user has chosen a city When the list of events is shown Then on top of the list a chart that visualizes the type of upcoming events will be shown
# Technologies
React
Jest
Enzyme
jest-cucumber
Puppeteer
Serverless
Googleapis
Axios
Atatus
nprogress
Recharts
gh-pages
