# Problem description

In a CRA project, I was always getting the error `unexpected token issue` when rendering a component with React-testing-library. The component was loading an external dependency which didn't get transpiled correctly. As can be seen in the package.json and described [here](https://github.com/facebook/create-react-app/issues/2537), the fix was to use the `--transformIgnorePattern` as a CLI option. Hardcoding the option into the `jest` config of the `package.json` or inside an external `jest.config.js` file, didn't work for me.
