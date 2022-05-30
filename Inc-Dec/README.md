## Redux Increment & Decrement :-

## What is Redux ? 

Redux is a state container for JavaScript apps. It is most commonly paired with React, where it takes control of state away from React components and gives it to a centralised place called a ‘store’.

## Redux Flow :-

<img align="center" alt="png" src="https://github.com/gamitej/Redux-Projects/blob/master/Inc-Dec/public/redux.png" width="900" height="400" />

## 1. UI 
This is where a change is triggered. For example, a user clicking a ‘+’ button in a simple counter app.

## 2. Acions 
The actual action we want to take place, for example, “increment”.

In Redux, actions are plain JavaScript objects, and they must have a type property (e.g. 'INC','DEC' ).

## Installation :

```
npm i redux react-redux
```