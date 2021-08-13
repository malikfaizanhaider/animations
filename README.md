# Animations

## Installation

```bash
npm i @i2cinc/animations
```

## Usage

Importing all animations:

```js
import * as animations from '@i2cinc/animations';
```

Importing individual animations:

```js
import { bounce } from '@i2cinc/animations';
```

Importing easings:

```js
import { easings } from '@i2cinc/animations';
```

Animating an element:

```html
<div style="display: block; width: 100px; height: 100px; background: tomato; margin: 2rem;"></div>

<script type="module">
  import { easings, flip } from 'https://cdn.jsdelivr.net/npm/@i2cinc/animations@1/dist/index.js';

  const box = document.querySelector('div');

  box.animate(flip, {
    duration: 1500,
    iterations: Infinity,
    easing: easings.easeInSine
  });
</script>
```


This example uses the [jsDelivr CDN](https://www.jsdelivr.com/). To import the library locally, install it and make `node_modules/@i2cinc/animations/dist` available to your app or bundler.

## Developers

To build the project, run:

```bash
npm run build
```
