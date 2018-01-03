// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCh7Te4uFxhxsCCNliM6Cx6vEYdkWol0aU',
    // authDomain: 'portfolio-website-data.firebaseapp.com',
    databaseURL: 'https://portfolio-website-data.firebaseio.com',
    projectId: 'portfolio-website-data',
    // storageBucket: '',
    // messagingSenderId: '37826052258'
  }
};
