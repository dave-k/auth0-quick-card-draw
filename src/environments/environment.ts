// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  auth: {
    CLIENT_ID: "E4mXHeR95pNqfFqzl66vOCrFi9yoMvG5",
    CLIENT_DOMAIN: "auth0ng-cloud.auth0.com", // e.g., 'you.auth0.com'
    //REDIRECT: "https://ng-cloud.stackblitz.io/callback",
    //REDIRECT: "http://localhost:4200/callback",
    REDIRECT: "https://pariaqwb.github.stackblitz.io/callback",
    //LOGOUT_URL: "https://ng-cloud.stackblitz.io"
    //LOGOUT_URL: "http://localhost:4200",
    LOGOUT_URL: "https://pariaqwb.github.stackblitz.io"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
