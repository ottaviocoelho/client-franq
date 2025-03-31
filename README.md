# Client Franq (Test)

This is a project for a technical test in a selection process for a Front-End Engineer position.

## About the Test

### Functional Requirements

[X] Connect the application to the API https://hgbrasil.com/status/finance/ and fetch data for 10 items (currencies, stocks, etc.);
[X] There must be an initial login screen, and if the user is not registered, they must sign up and have their data persisted in local storage;
[X] To navigate the application, the user must be authenticated. Therefore, the session time should be verified, and if it expires, the user should be logged out and redirected to the login screen;
[X] The user must be able to view all quotations;
[X] If the daily variation is positive, the value should be green; if negative, it should be red;
[X] The user must be able to select an item and track its price evolution in a chart from the moment the application starts;

### Project Requirements

[X] The application must be responsive;
[X] A front-end library or framework must be used. Here we used Vue.js, but feel free to use the one you know best—React, Angular, etc., it doesn’t matter;
[X] The application must be hosted on a cloud service (Heroku, AWS, Azure, or any other infrastructure);

### Delivery Method

Along with the source code link (GitHub, Bitbucket, etc.), a URL of the live project (hosted on Heroku, AWS, Azure, or any other infrastructure) must be provided.

## About the Project

The project was designed to reach an MVP without overengineering. The work was divided into sessions ranging from half an hour to four hours over four to five days. The project was started with a [service](https://github.com/ottaviocoelho/server-franq) to bridge the connection to the provided API.

##### Why wasn’t the visual identity implemented according to the target company?

A banner image was provided for potential use in the project. Since it wasn’t listed in the requirements, I chose not to implement it for prioritization reasons. However, I am interested in adopting the company’s visual identity in this project for aesthetic purposes.

##### Why weren’t the data persisted between sessions?

This part was a bit unclear. The requirement states "from the moment the application starts"—does that mean from when the client renders and mounts the application? Or from when the service that serves the application starts running? Or from when the bridge service (not included in the requirements) initializes?

I believe this also involves a business decision: from what point should we display the data? Should the data be stored indefinitely? Should there be a filter? Without a filter, we would either show only the current day's data or store data indefinitely, which becomes impractical over time.

Additionally, my API key does not support a full day of requests, making persistent storage impractical either way.

That said, based on the current state of the project, persisting data using localStorage or IndexedDB is more straightforward than answering these questions.

##### Why doesn’t "Taxes" have a detailed view and chart like the others?

As far as I tested, "Taxes" only provides daily data, so it falls into the same questions raised in the previous point.

##### Why not use Pinia?

I considered it, but given the simplicity of the project, I found that provide/inject was sufficient for my needs.

Next Steps
[] Unit tests
[] Target company’s visual identity
[] Search for items by symbol
[] Persist data locally\*

\*Maybe
