### REACT
using react is super-simple.
15min tutorial to get started [](http://academy.plot.ly/react/1-introduction/)

Main idea is - creating components. And css styles should be written in js directly. 
Without any preprocessors like SASS, SCSS and Stylus.

**Read for more info**
[](https://medium.com/javascript-scene/jsx-looks-like-an-abomination-1c1ec351a918#.dl72pf56m)
[](https://speakerdeck.com/vjeux/react-css-in-js)
We don't use *.jsx extension. Use ordinary *.js extension. But we still can return
html-like components in render method.
So we don't use *.jsx - there is no need in including babel transpiler.

One of Key Concepts of React - Virtual Dom. 
We can have multiple event listeners in our react components. 
But, in fact, we will have only one real event listener at root element of react.
(Should never make <body> a root element. Better use some <div> inside
see [](https://medium.com/@dan_abramov/two-weird-tricks-that-fix-react-7cf9bbdef375#.bmb0i9mca) for more info)

### Simple react boilerplate
get from here [](https://facebook.github.io/react/docs/installation.html)
```bash
npm install -g create-react-app
create-react-app hello-world
cd hello-world
npm start
```
- `npm start` - for starting dev server
- `npm test` for starting test suite (will rerun all tests when we save file(s)) - that's
super comfortable when we write code.

### Why not Angular 1.x
Because it's too overcomplicated, had bad controversial design, lots of restrictions
and magic inside.
React has magic too, but much less. And not forced to learn various symbols which
creators of angular invented.
Angular 2 tooks a lot from React. Angular 2 is a direct proof of the fact that the 
first angular came out not very good. Right now it's seemed not widespread as ReactJS,
and don't have large community and can be a bit raw.

### Why use create-react-app or convention-over-configuration
from [here](https://blog.heroku.com/deploying-react-with-zero-configuration)
```
New, Zero-configuration Experience
Inspired by the cohesive developer experience provided by Ember.js and Elm, 
the folks at Facebook wanted to provide an easy, opinionated way forward. 
They created a new way to develop React apps, create-react-app. 
In the three weeks since initial public release, it has received tremendous 
community awareness (over 8,000 GitHub stargazers) and support (dozens of pull requests).

create-react-app is different than many past attempts with boilerplates and starter kits.
 It targets zero configuration [convention-over-configuration], focusing the developer on 
 what is interesting and different about their application.
A powerful side-effect of zero configuration is that the tools can now evolve in the background. 
Zero configuration lays the foundation for the tools ecosystem to create automation and delight 
developers far beyond React itself.
```