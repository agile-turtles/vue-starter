[![dependencies Status](https://david-dm.org/pegiadise/vue-bleeding-edge-starter/status.svg)](https://david-dm.org/pegiadise/vue-bleeding-edge-starter)
[![devDependencies Status](https://david-dm.org/pegiadise/vue-bleeding-edge-starter/dev-status.svg)](https://david-dm.org/pegiadise/vue-bleeding-edge-starter?type=dev)

## Concept

This is a starter boilerplate for Vue.js applications which was built mainly for my personal projects starter as well as for developers that do not like the black box approach of `@vue/cli`.

### Bundling

- an understandable and as simple as possible `webpack.config.js` in 120 LoC

- code splitting in production for `node_modules` and app code (`vendor~app-bundle` and `app-bundle` respectively)

### Styling

- `SCSS` and `Stylus` files importing in js out of the box

- autoprefixing for `SCSS` and `Stylus` files as defined in `postcss.config.js`

### File resolving

- font and image resolving in `js` and `scss`, `css` (test)

### HTML file with hashed imports generation

- `html-webpack-plugin` with automatic imports of the generated files

### Development server with hot reload

- `webpack-dev-server` to serve the frontend app (this will need configuration according to your current backend stack)

- latest `vue-loader` running when `NODE_ENV===development`

## How to use

1. Clone or download the repo to where you want to use for development

1. `yarn && yarn build` to install dependencies and to create the public folder that contains the font assets (you don't need to run `yarn build` if you don't want the fonts yet)

1. `yarn dev` to develop

## License [MIT](https://oss.ninja/mit)
