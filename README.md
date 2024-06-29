# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
## StencilJS Web component integration localhost into React Application

https://medium.com/@sanketsatishchavan/how-to-create-web-components-for-react-using-stencil-a58b7dcd6c55

## Typescript .tsx for React component
npx create-react-app my-app --template typescript
https://create-react-app.dev/docs/adding-typescript/
https://react.dev/learn/typescript

React Hook "useEffect" cannot be called at the top level. React Hooks must be called in a React function component or a custom React Hook function  react-hooks/rules-of-hooks

# how to use custom Elements (web components)
in React:
initialValue={'My Initial Value'}

in Angular:
initial-value="My Initial Value"

In Angular, variable properties use camelCase  or kebab-case
[initalValue]="myVariable"   should work


In Angular, use camelCase when it's a complex variable(and wrapped in [ ])
You should use kebab-case for primitive properties per the Custom Element Spec.
display-stepper-buttons="false"

For simple props, you should just be able to use interpolation.


React doesn't support web components natively (yet in React v18.3), so it doesn't support camelCase for Prop names-
instead React use dash-case for Primitive type Props

auto-focus={true}


for complex/reference type Props(e.g. objects,arrays,etc.), but can also be used for primitive types as well

The inline properties won't work without a ref as React doesn't support complex props on web components without them. Only primitives can be passed to web components as inline props (in React)

const inputRef = useCustomElementRef({},
{label: 'Prop Format 3 (Complex/Reference Types)', autofocus:true}
);

<fluid-input-field ref={inputRef}></fluid-input-field>
(or)
return(
<fluid-form ref={useCustomElementRef({
valueChanged: (event) => handleValueChanged(event.detail)
},{
config: formConfig,
})}/>

FLUID React utils package, which provide wrappers around the runtime components to make it easier for React development.

in React, circled props won't work
