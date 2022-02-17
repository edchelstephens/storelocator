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

