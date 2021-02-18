[![dependencies Status](https://david-dm.org/pegiadise/vue-bleeding-edge-starter/status.svg)](https://david-dm.org/pegiadise/vue-bleeding-edge-starter)
[![devDependencies Status](https://david-dm.org/pegiadise/vue-bleeding-edge-starter/dev-status.svg)](https://david-dm.org/pegiadise/vue-bleeding-edge-starter?type=dev)

## Concept

This is a starter boilerplate for Vue.js applications for developers that prefer a white box / customizable approach in favor of `@vue/cli`.

## Prerequisites

- Node.js >= 14

### Bundling

- an understandable and as simple as possible `webpack.config.js` in 120 LoC

- bundle splitting in production for `node_modules` and app code (`vendor~app-bundle` and `app-bundle` respectively)

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

1. `npm install && npm run build` to install dependencies and to create the public folder that contains the font assets (you don't need to run `npm run build` if you don't want the fonts yet)

1. `npm run dev` to develop

## License [MIT](https://oss.ninja/mit)
