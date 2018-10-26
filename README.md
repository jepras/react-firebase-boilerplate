This boiler plate is based on TheNetNinjas tutorial on [React/Firestore](https://www.youtube.com/playlist?list=PL4cUxeGkcC9iWstfXntcj8f-dFZ4UtlN3)

## Step by step setup

- Clone repository
- npm install
- [Create project in firebase](https://console.firebase.google.com/). Add script to fbConfig.js in src/config
- Enable Email/Password authentication in firebase.
- Setup firestore in test mode.
- npm run build
- Setup firebase hosting. Firebase login -> firebase init.
- Move build files to chosen firebase deploy folder
- firebase deploy
- Go to Hosting URL. If not showing correctly, try empty cache and refresh url. If not, build, move & deploy again.
- Enjoy your new app!
