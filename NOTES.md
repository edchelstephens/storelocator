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