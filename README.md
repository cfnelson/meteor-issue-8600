# meteor-issue-8600
Small reproduction of meteor issue [#8600](https://github.com/meteor/meteor/issues/8600) with React & React Router.

## Installed Packages
- [Meteor packages](./.meteor/packages)
- [npm packages](./package.json)

## Setup & Run Instructions

1. Clone this repo
```
  git clone https://github.com/cfnelson/meteor-issue-8600.git
  cd meteor-issue-8600
```
1. `meteor npm install`
1. `meteor npm start`

To view the bug, please navigate to `http://localhost:3000/` and open up your browsers console. You will see a thrown ReferenceError in the below format.

```js
index.js:6 Uncaught ReferenceError: React is not defined
    at index.js:6
    at maybeReady (meteor.js?hash=27829e9…:809)
    at HTMLDocument.loadingCompleted (meteor.js?hash=27829e9…:821)
```

The cause for the thrown error can be found in `/imports/startup/client/index.js`.

## Notes on bug:

1. To run the working Meteor app at v1.4.3.2 you can use this commit: `git checkout d64969ebb35e823059b4fda78ca8f21bf099a732`.
1. To see the upgrade commit from v1.4.3.2 to Meteor v1.4.4.1 which introduced the bug, you can use this commit: `git checkout c5eb1f052754e97b4402ba06c2d19f5b695429fb`.

Updating the version of babel-compiler from babel-compiler@6.18.1 to babel-compiler@6.18.2 in meteor/.versions did not help resolve the issue. I may be doing something incorrectly.
