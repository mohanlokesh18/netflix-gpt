# Netflix GPT

-create react app
-configure tailwind
-Routing of app
-Header
-Login form
-sign up form
-Form validation
-useRef Hook
-Firebase setup
-Deployment our app in production
-Create signup user account and add user to firebase
-signIn registered user
-Created redux toolkit with userSlice
-user pushed to store on signin or signup and removed used from store on signout
-added sigout features
-redirected user
-Bugfix for the navigation, shifter the onAuthStateChanged from body to header
-Bugfix as the onAuthStateChanged is moved to header this will call every time the header is loaded hence make use of unsubscribe to stop onAuthStateChanged listening on the component unmount
-add hardcode values to constant.js
-also updated store with user name
-Regiter TMDB API & create an app & get access token
-Get Data from TMDB now playing movies list API
-Custom Hook for Now Playing Movies
-Create movieSlice
-Update Store with movies Data
-Planning for MainContauiner & secondary container
-Fetch Data for Trailer Video
-Update Store with Trailer Video Data
-Embedded the Yotube video and make it autoplay and mute
-Tailwind Classes to make Main Container look awesome
-Build Secondary Component
-Build Movie List
-build Movie Card
-TMDB Image CDN URL
-Made the Browsre page amazing with Tailwind CSS
-usePopularMovies Custom hook
-GPT Search Page
-GPT Search Bar
-(BONUS) Multi-language Feature in our App)
-Get Open AI Api Key
-Gpt Search API Call
-fetched gptMoviesSuggestions from TMDB
-created gptSlice added data
-Resused Movie List component to make movie suggestion container
-Memoization
-Added .env file
-Adding .env file to gitignore
-Made our Site Responsive

# Features

    -login/signup
        -sign in / sign up form
        - redirect to Browse page

    -Browse(after authontication)
        -Header
        -Main Movie
            -Trailer in BG
            - title and discription
            -Movie suggestions
                -Movie list * N

    -Netflix GPT
        -Searchbar
        -Movie suggestions

---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
