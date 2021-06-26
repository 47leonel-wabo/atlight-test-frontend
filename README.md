# React Frontend Application (`Atlight`)

Skill test validation with [React Js](https://github.com/facebook/create-react-app). This is the frontend part of the test.


## Technology stack
* [React Js 17](https://github.com/facebook/create-react-app)
* [Bootstrap 4.5](https://getbootstrap.com/docs/4.5/getting-started/introduction/)
* [Bootstrap icons](https://getbootstrap.com/docs/5.0/extend/icons/)
* [antd 4.16.5](https://ant.design/)
* [axios 0.21.1](https://www.npmjs.com/package/axios)
* [Formik 2.2.9](https://formik.org/docs/overview)
* [Google Maps API 2.2.0](https://www.npmjs.com/package/@react-google-maps/api)

## App Interaction
Because it's just a prototype, interactions with the backend service is shown to user through notification.

## Procedure to test locally
Found here, all procedure for local application testing.
- First you need a google maps api key
- Next, in the root folder create ".env.local" file, which will holds an entry for your key named:
`REACT_APP_GOOGLE_MAP_API_KEY = "your_google_maps_api_key_here"`
- Next, run `npm install` in order to fetch all libraries
- Finally, run `npm start`
    
## Credit 
Happy coding 🔥, feel free!
Deployed on Heroku

## Remaining tasks
* Refactor components' code
* Improve google rendering ...
