### Conceptual Exercise

Answer the following questions below:

- What is Redux? Why might you use it?
A state management library, useful for large applications that have a lot of state and solves the issue of prop drilling.

- What are three features of the Redux developer tool in Chrome?
Lets you inspect state and action payloads, lets you go back in time and undo actions, if a reducer throws an error, shows which one threw the error and what the error was.

- What is a store?
The centralized place where state is stored.

- What is a reducer?
A function that accepts a state and an action, uses the action to produce a new state object, reducers must be pure.

- What is an action?
Objects with a key of type, when the action is called using the dispatch function on the store, it triggers a reducer which then does the action.

- What is an action creator?
A function that that holds the action object to abstract it away from the dispatch call to the store rather than having to specify the action within the dispatch call.

- How does data flow in a React/Redux application?
You call dispatch on the store with an action, Redux calls the reducer associated with that action, and then Redux saves the result from that reducer as the new state.

- What is the purpose of the `<Provider>` component?
To connect a Redux store to a React app.

- What is the purpose of the `useSelector` hook? What does it return?
Accesses values from react-redux store, returns the data from the store indicated in the return value.

- Describe the `useDispatch` hook. What do you use it for?
Connects to the react-redux dispatch which allows you to trigger actions to change the state.

- What is redux-thunk and why would you use it?
An action that is a function rather than an object like a standard action. Used to make asynchronous requests and when the request completes it dispatches itself with the object data
since by default dispatch does not support asynchronous functions.

- What are propTypes?
You can identify what types you expect your react props to be and it will verify whether or not the props passed into the component match.

- Describe the `useCallback` hook.  What is it used for?
Turns a function into one that won't be redeclared on subsequent renders as long as the dependencies of the function don't change. Allows you to create functions outside of useEffect and call them within useEffect without them rerendering infinitely.

- Compare and contrast the `useReducer` hook with Redux (including react-redux).  Why would you choose one over the other?
They both accept a reducer function and initial state and return the new state. However, useReducer returns the dispatch function along with the state whereas with Redux the dispatch is attached to the store. useReducer by itself also doesn't allow for global state like Redux does however if you combine it with useContext you can achieve global state and not have to use prop drilling. Redux is more user friendly in terms of implementing the concept of having a global state (a store) but using useReducer and useContext will work if you want to keep your package size small.