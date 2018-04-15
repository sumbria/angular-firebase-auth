// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAImtaB69JUHe16qPPCTHZdIXstGU-PTJ4',
    authDomain: 'auth-app-8390a.firebaseapp.com',
    databaseURL: 'https://auth-app-8390a.firebaseio.com',
    projectId: 'auth-app-8390a',
    storageBucket: '',
    messagingSenderId: '719905398282'
  }
};
