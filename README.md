# React Cutie

React Cutie is a library of cute SVG illustrations (react components). Ideal if you want to give some cuteness and personality to your react application.

[![Version](https://img.shields.io/npm/v/react-cutie.svg?style=flat-square)](https://www.npmjs.com/package/react-cutie)
![npm](https://img.shields.io/npm/dt/react-cutie.svg)

## Example

# ![React Cutie Example](https://github.com/magnetoasher/react-cutie/blob/master/docs/images/react-cutie-example.gif?raw=true)

## Install

With npm:

```sh
npm install --save react-cutie
```

With yarn:

```sh
yarn add react-cutie
```

### How to use

```javascript
import { Planet } from 'react-cutie';

const Example = () => <Planet size={200} mood="blissful" color="#FDA7DC" />;
```

### How to use with React Native

```javascript
import { Planet } from 'react-cutie/lib/native/';

const Example = () => <Planet size={200} mood="blissful" color="#FDA7DC" />;
```

Depending on your `react` and `react-native` version, you might need to to install the package
[react-native-svg](https://github.com/react-native-community/react-native-svg):

With npm:

```sh
npm install react-native-svg
```

With yarn:

```sh
yarn add react-native-svg
```

Link react-native:

```sh
react-native link react-native-svg
```

Read the react-native-svg [documentation](https://github.com/react-native-community/react-native-svg) in case you need help.

## Development

So you want to help developing some cute UI components?

If you want to develop a component

- `npm i`

- `npm run styleguide`

If you want to build

- `npm run styleguide:build`

### Components

All the components are SVG illustrations. You can pick different moods: sad, shocked, happy, blissful and lovestruck. You can also choose a color to your Kawaii and the size.

Available components:

- [x] Backpack - A cute backpack
- [x] Browser - A cute browser
- [x] Cat - A cute cat
- [x] Chocolate - A cute chocolate
- [x] CreditCard - A cute credit card
- [x] File - A cute file
- [x] Folder - A cute folder
- [x] Ghost - A cute ghost
- [x] IceCream - A cute ice-cream
- [x] Mug - A cute mug
- [x] Planet - A cute planet
- [x] SpeechBubble - A cute speech bubble
- [x] More Cutie components coming soon...
