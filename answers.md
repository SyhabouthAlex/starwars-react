- In action creators, like `getFilmFromAPI`, we use a "regular expression" ---
  what is that regular expression, and what is its purpose?

  It checks for a number in the URL, it checks to see if the ID part of the URL is valid.
  

- We're persisting the Redux store, so if you re-visit the app, it will remember
  the topics you've visited. Where is this stored? How is this done?

  Within the redux-persist folder in node-modules, it is done using the redux-persist library.
  

- What does `combineReducers` do? Why are we using it? 
  
  Combines multiple reducers into one reducer, to be able to work on reducers separately as they are for different components but have a store containing all the reducers.


- How does the "Reset to Fresh Exploration" feature work?

  Resets all the states within the store to their initial state values.


- Why are `FilmList.js`, `PlanetList.js`, and 
  `PersonList.js` all simple components that use an `ItemList`?
  Why is this a good design?

  Because it's cutting down on redundant code by having a reusable component that encompasses the shared features of those 3 components.


- In the `HomePage` component we use the `useSelector` hook to save only a single fact---
  whether the first film is loaded, We could instead have selected all the
  films, and had the check for whether the first film is loaded in our
  `render` function. Why is this worse? What would the performance implications
  be?

  Because it uses more resources reading the entire list of films from the state and storing it in a variable compared to just checking one index of the state and storing a boolean in a variable instead of an array.

  
- What good ideas for designing and organizing React apps have you learned from
  studying this code?

  Storing actions and reducers in their own folders, mapping objects to arrays using Object.values().map(), declaring the store in it's own file rather than in index.js.

  
- Which Star Wars character would make the best React developer, and why?
  R2-D2 or C3P0 since robots by this time can probably be programmed to be genius developers.