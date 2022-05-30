## Redux Increment & Decrement :-

## What is Redux ? 

Redux is a state container for JavaScript apps. It is most commonly paired with React, where it takes control of state away from React components and gives it to a centralised place called a ‘store’.

## Redux Flow :-

<img align="center" alt="png" src="https://github.com/gamitej/Redux-Projects/blob/master/Inc-Dec/public/redux.png" width="900" height="400" />

### 1. UI 
This is where a change is triggered. For example, a user clicking a ‘+’ button in a simple counter app.

### 2. Acions 
The actual action we want to take place, for example, “increment”.

In Redux, actions are plain JavaScript objects, and they must have a type property (e.g. 'INC','DEC' ).

### 3. Reducers 
These specify how the application’s state should change in response to each action. For example, our new state should be one integer higher than our old state. (It is reducers which give Redux its name — they share the same Latin root).

### 4. Store

The store brings everything together. It holds application state, and it is where you will find three critical methods:

getState() or useSelector — which allows access to the state object
dispatch(action) — which allows state to be updated
subscribe(listener) — which registers listeners, allowing code to trigger every time a change takes place

## Redux Terms:

### Boilerplate: 
Sections of code that have to be included in many places with little or no alteration. One of the reasons Redux can seem tricky to beginners is because it contains more boilerplate than you’re likely used to for front-end development.

### Payload: 
The conventional name used for the property that holds the actual data in a Redux action object. A payload isn’t necessary, but it’s fairly common to see actions defined like this:

## Installation :

```
npm i redux react-redux
```