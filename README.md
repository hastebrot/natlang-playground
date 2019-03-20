# natlang-playground

## technology stack

- node 10.15.x
- yarn 1.15.x
- react 16.8.x
- storybook 5.0.x

~~~console
$ yarn why webpack
=> Found "webpack@4.29.6"
=> Found "react-scripts#webpack@4.28.3"
~~~

~~~console
$ yarn why @babel/core
=> Found "@babel/core@7.4.0"
=> Found "react-scripts#@babel/core@7.2.2"
~~~

~~~console
$ yarn why core-js
=> Found "core-js@2.6.5"
~~~

## packages

### natlang-ui

preparation. execute in project root directory.

~~~console
$ yarn install
$ yarn bootstrap
~~~

start playground server at http://localhost:9001/.

~~~console
$ yarn start
~~~

build playground into build/natlang-ui/.

~~~console
$ yarn build
~~~
