# vue-mutation-observer
VueJS directive to observe changes in DOM use MutationObserver API

# Install

```Bash
npm install vue-mutation-observer
```
or
```Bash
yarn add vue-mutation-observer
```

### CommonJS

You can use any build tool which supports `commonjs`:

```JavaScript
// register globally
const observer =  require('vue-mutation-observer');
Vue.use(observer)

// or for a single instance
const { observer } = require('vue-mutation-observer');
new Vue({
  directives: { observer }
})

```

Or in ES2015:

```JavaScript
// register globally
import observer from 'vue-mutation-observer'
Vue.use(observer)

// or for a single instance
import { observer } from 'vue-mutation-observer'
new Vue({
  directives: { observer }
})

```

<!-- ### Direct include

You can use the CDN: https://unpkg.com/vue-mutation-observer, `observer` is exposed to `window` and will automatically install itself. It might be useful for [Code Pen](https://codepen.io/PNKBizz/pen/WMRwyM) -->

## Usage

Use `v-observer` directive to observe DOM mutations in node and it's children.

```HTML
<div v-observer:subtree.childList="handler">
  // some content here
</div>
```

```JavaScript

import { observer } from 'vue-mutation-observer'

export default {
  directives: { observer },
  methods: {
    handler (mutations) { console.log(mutations) }
  }
}

```

## Arguments

| Argument | Description |
| ----- | ----- |
| subtree | Extend monitoring to the entire subtree of node. All of the other properties are then extended to all of the nodes in the subtree instead of applying solely to the target node. |

## Modifiers

| Modifier | Description |
| ----- | ----- |
| characterData | Add properties `characterData` and `characterDataOldValue` to observer configuration |
| attributes | Add properties `attributes` and `attributeOldValue` to observer configuration |
| childList | Add property `childList` to observer configuration |

If no modifiers is define - all properties in config will be defines as `true`. <br>
[MutationObserver configuration](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserverInit#Properties)

## Value

Value may be a function, which handle your mutation or an object with two properties: `callback` and `config`. 
