# L4 - Rules as Code - Legal language syntax highlighting for [Highlight.js](https://highlightjs.org/)

L4 is a functional programming language created by [Legalese](https://l4.legalese.com/) to help write digital-first policies, contracts and legislation.


## Usage

Simply include the Highlight.js library in your webpage or Node app, then load this module.

### Static website or simple usage

Simply load the module after loading Highlight.js. You'll use the minified version found in the `dist` directory. This module is just a CDN build of the language, so it will register itself as the Javascript is loaded.

```html
<script type="text/javascript" src="/path/to/highlight.min.js"></script>
<script type="text/javascript" charset="UTF-8"
  src="/path/to/highlightjs-l4/dist/l4.min.js"></script>
<script type="text/javascript">
  hljs.highlightAll();
</script>
```

### Using directly from the UNPKG CDN

```html
<script type="text/javascript"
  src="https://unpkg.com/highlightjs-l4/dist/l4.min.js"></script>
```

- More info: <https://unpkg.com>

### With Node or another build system

If you're using Node / Webpack / Rollup / Browserify, etc, simply require the language module, then register it with Highlight.js.

```javascript
var hljs = require('highlightjs');
var hljsL4 = require('highlightjs-l4');

hljs.registerLanguage("l4", hljsL4);
hljs.highlightAll();
```

### React

You need to import both Highlight.js and third-party language highlighter like this one for L4:

```js
import React, {Component} from 'react'
import 'highlight.js/src/styles/atom-one-dark.css' # or your favourite theme
import hljsL4 from 'l4.js'
import hljs from 'highlight.js'
hljs.registerLanguage('l4', hljsL4);

class Highlighter extends Component
{
  constructor(props)
  {
    super(props);
    hljs.highlightAll();
  }

  render()
  {
    let {children} = this.props;
    return
    {
      <pre ref={(node) => this.node = node}>
        <code className="l4">
          {children}
        </code>
      </pre>
    }
  }
}

export default Highlighter;
```

## License

Highlight.js is released under the BSD 3-Clause License. See [LICENSE][1] file
for details.
highlightjs-l4 is released under the Apache-2.0 License. See [LICENSE][2] file
for details.

### Author

Thomas Gorissen <thomas@legalese.com>

## Links

- The official site for the Highlight.js library is <https://highlightjs.org/>.
- The Highlight.js GitHub project: <https://github.com/highlightjs/highlight.js>
- Learn more about L4: <https://l4.legalese.com>

[1]: https://github.com/highlightjs/highlight.js/blob/main/LICENSE
[2]: https://github.com/legalese/highlightjs-l4/blob/master/LICENSE