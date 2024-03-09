## [<img width="200" src="https://www.hoppla.ge/_next/static/media/logo.9e1bb4b1.svg">](https://hoppla.ge/)

# Hoppla UI

## A simple and easy to use UI library for React

### Installation

```bash
npm i @hoppla/ui
```

### Usage

```jsx
import React from 'react';
import {Button} from '@hoppla/ui';

const App = () => {
    return (
        <Button
            label="Click Me"
            variant="solid"
            color="primary"
            animation
        />
    );
};

export default App;
```