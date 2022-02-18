# React Development Process

1. Design Mockup
2. Create Component Hierarchy from design
3. Build a Static Version
4. Identify the Minimal UI State
5. Identify Where State Should Live
6. Add Inverse Data Flow

# Types of Data in React

## Props

- Immutable
- Passed down from parent component to child component

## State

- state of a component
- Is modified using setState()
- Calling setState() triggers re-render
- State updates may be asynchronous

# Minimal UI State

- Is it not passed in from a parent?

  > > If passed, then it is a prop

- Does it change over time?

  > > It may be state

- Is it not possible to compute based on other state or props?
  > > If computable then it is prop

# What's the State in our App?

- Button name?

  > > No, it is passed as a prop

- Map Name?

  > > No, it's computed

- Current displayed map?
  > > YES! IT changes based on user input

# Where Should the State Live?

## Identify every component that renders something based on the state

> > Button(will change color wether active or not), Map(change based on which button is currently selected)

## Find a common owner or parent

> > StoreLocator contains both Button and Map
> > Clearly this is where the state should live and do the mutations
> > So those data can be passed down as props to Map and Button

# Inverse Data Flow

- Data in React flows down from parent to child
- Events, on the other hand flow up
- This is what we mean by one way data binding

- React uses one-way data binding
- Which makes data flow explicit and therefore easier to test
- Update state using callbacks

- Components pass props to their children
- Event callbacks modify the parent's state with setState()
- Then the new state is passed to the children as props and triggers a re-render

# Pure Functions

- Always return the same result given the same arguments
- Doesn't depend on the state of the application
- Don't modify the variables outside of their scope(no side effects)

# React Lifecycle Methods

## Mount/Unmount

- constructor()
- render()
- componentDidMount()
- componentWillUnmount()

## Updating

- shouldComponentUpdate()
- render()
- componentDidUpdate()

# Mounting in React refers to the end result of rendering a component and outputting to it's final destination, in the web's case - in the browser