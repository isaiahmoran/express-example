# Express Example API
Test microservice using ExpressJS

## Local Setup

1. Ensure you have GIT installed locally.
2. Ensure you have Node 16.15.1 LTS installed
3. Ensure you have Brew installed (for MacOS only)
4. Clone the repository with the following command: `git clone https://github.com/isaiah-moran/express-example.git`
5. Navigate to the newly cloned repository
6. Install dependencies with `npm install`
7. Start the app with `npm run dev`
8. Run the local test using the command `npm test`
9. Run the Test Driven Happiness report using the command `npm happy`

## Building Docker & Running Image

1. Ensure you have Docker Desktop installed and running
2. CD to the root of the `express-example` directory
3. Run the following in your terminal: `docker build -t express-example-docker .`
4. Run the following in your terminal: `docker run -p 3000:3000 express-example-docker`

## Flexing the API

Once you've either set yourself up for local development or
started running a built docker image of the website use postman or CURL and run 
GET request against the following endpoint: http://localhost:3000/express-example/v1/ping

## Notes
### Hot Reload with Nodemon

This API has been instrumented with Nodemon when running in DEV mode which will trigger a re-compile and re-run. This is extremely helpful when dealing wth static assets like translations.

### Swagger
This API has been instrumented with Swagger, when running the API locally or via Docker the docs may be found by navigating to http://localhost:3000/api-docs. These docs are automatically generated on API start via syntax that can be found in the routes files.

## Tips

### Switching Node Versions

If you're actively developing against multiple versions of Node it
can be useful to install Node Version Manager (referred to as NVM).
This can be found at the following site: https://github.com/nvm-sh/nvm




