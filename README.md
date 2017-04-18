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
1. Updating  `babel-compiler@6.18.1` to `babel-compiler@6.18.2` did not resolve the bug. See `git checkout d64969ebb35e823059b4fda78ca8f21bf099a732`
1. Running `meteor update --all-packages` did not resolve the bug as well. You can use this commit: `git checkout f079dadf1a424e5a2c912d4acc18947abfb2e3b5`. The packages updated are:
```
blaze                  upgraded from 2.3.0 to 2.3.2
blaze-html-templates   upgraded from 1.1.0 to 1.1.2
caching-html-compiler  upgraded from 1.1.0 to 1.1.2
ecmascript             upgraded from 0.7.2 to 0.7.3
modules                upgraded from 0.8.1 to 0.8.2
spacebars              upgraded from 1.0.13 to 1.0.15
spacebars-compiler     upgraded from 1.1.1 to 1.1.2
templating             upgraded from 1.3.0 to 1.3.2
templating-compiler    upgraded from 1.3.0 to 1.3.2
templating-runtime     upgraded from 1.3.0 to 1.3.2
templating-tools       upgraded from 1.1.1 to 1.1.2
ui                     upgraded from 1.0.12 to 1.0.13
```
