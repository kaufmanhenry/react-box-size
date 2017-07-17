# 📦 react-box-size [![Build Status](https://travis-ci.org/hcjk/react-box-size.svg?branch=master)](https://travis-ci.org/hcjk/react-box-size)
A basic react-wrapper component for sizing a box.

## Install

```shell
$ yarn add react-box-size
```

## Usage

```jsx
import React from 'react'
import Box from 'react-box-size'

const App = () => {
  <Box mv={3} mh={5} pv={3} ph={5}>
    Hi!
  </Box>
}

export default App
```

## API

#### `mv`, `mh`, `mt`, `mb`, `ml`, `mr`

Controls the margin for a given box. Can be an integer between `1` and `6`. The larger the number, the greater the scale of margin.

##### Example

```jsx
<Box mt={3} ml={1} mr={3} mb={4} />
// Creates a box with a top margin of 1, bottom margin of 4, left margin of 1, and right margin of 3
<Box mh={3} mv={1} />
// Creates a box with a horizontal margin of 3 and a vertical margin of 1
```

#### `pv`, `ph`, `pt`, `pb`, `pl`, `pr`

Controls the padding for a given box. Can be an integer between `1` and `6`. The larger the number, the greater the scale of padding.

##### Example

```jsx
<Box pt={3} pl={1} pr={3} pb={4} />
// Creates a box with a top padding of 1, bottom padding of 4, left padding of 1, and right padding of 3
<Box ph={3} pv={1} />
// Creates a box with a horizontal padding of 3 and a vertical padding of 1
```

## License

MIT © [Henry Kaufman](http://github.com/hcjk)