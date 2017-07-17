graphviz-objects - create graphviz documents via an API
================================================================================

`graphviz-objects` is a library that creates [GraphViz][] `.dot` file content
via JavaScript APIs.  Aren't you tired of generating those `.dot` files
manually?  You can use this library and the awesome [viz.js][] package
to create GraphViz images right from JavaScript, without having to have
the GraphViz executables installed.

[GraphViz]: http://www.graphviz.org/
[viz.js]: https://www.npmjs.com/package/viz.js


usage
================================================================================

This package should ease the creation of GraphViz dot content, compared to doing
it by hand.  But it won't make it easier to use GraphViz itself.  If you're not
already familiar with GraphViz, you should check out their
[documentation page][gv-doc] and the [gallery page][gv-gallery] for examples.
Some of the gallery samples are reimplemented with this library in the
`test/gallery` directory.

[gv-doc]: http://www.graphviz.org/Documentation.php
[gv-gallery]: http://www.graphviz.org/Gallery.php

One piece of functionality not supported by this library is the ability to set
default attributes for `node`, `edge`, and `graph` objects via the respective
statements.  Current thinking is that this isn't needed, since you can get the
same effect by storing default values in a JavaScript variable and making use
of that.  Some of the samples in the `test/gallery` directory use the following
pattern of applying default attributes:

```js
const gvo = require('graphviz-objects')

const g = gvo.createDigraph('g', {
  rankdir: 'LR'
})

const nodeAttrs = {
  fontsize: 16,
  shape: 'ellipse'
}

g.addNode('node0', Object.assign({}, nodeAttrs, {
  label: '<f0> 0x10ba8| <f1>',
  shape: 'record'
}))
```

That's still a bit of a mouthful, perhaps there's a better approach ...

install
================================================================================

    npm install pmuellr/graphviz-object


api
================================================================================

The exports of the `graphviz-objects` package are described below.

Many functions in the API take `name` and optional `attrs` parameters.  Name is
the `name` of the object being created, and `attrs` is a JavaScript object with
the attributes of the object.


properties
--------------------------------------------------------------------------------

### `version` 

The version of the package.


functions
--------------------------------------------------------------------------------

### `createGraph(name[, attrs])`

Creates a top-level graph with the specified name and attributes.

Example:

```js
const gvo = require('graphviz-objects')

const g = gvo.createGraph('ER', {
  label: '\n\nEntity Relation Diagram\ndrawn by NEATO',
  fontsize: 20
})
```

### `createDigraph(name[, attrs])`

Creates a top-level digraph with the specified name and attributes.

Example:

```js
const gvo = require('graphviz-objects')

const g = gvo.createDigraph('unix', {
  fontname: 'Helvetica-Oblique',
  fontsize: 36,
  label: '\n\n\n\nObject Oriented Graphs\nStephen North, 3/19/93',
  size: '6,6'
})
```

### `htmlString(string)`

Creates an HTML string to be used as an attribute value.

See [HTML-Like Labels][] in the GraphViz documentation for more information on
using these.

[HTML-Like Labels]: http://www.graphviz.org/content/node-shapes#html

Example:

```js
const gvo = require('graphviz-objects')

const g = gvo.createDigraph('G', {
  bgcolor: 'yellow:red'
})

const a0Label = gvo.htmlString(`
  <TABLE border="10" cellspacing="10" cellpadding="10" style="rounded">
    <TR><TD border="3"  bgcolor="/rdylgn11/1:/rdylgn11/2">00</TD>
    <TD border="3"  bgcolor="/rdylgn11/2:/rdylgn11/3">01</TD>
    <TD border="3"  bgcolor="/rdylgn11/3:/rdylgn11/4">02</TD>
    <TD border="3"  bgcolor="/rdylgn11/4:/rdylgn11/5">03</TD>
    </TR>
  ...`)

g.addNode('a0', {
  shape: 'diamond',
  fillcolor: 'gold:brown',
  style: 'radial',
  gradientangle: 180,
  label: a0Label
})
```

graph objects
--------------------------------------------------------------------------------

Graph objects created from the `createGraph()` and `createDigraph()` functions
support the following methods:

### `addSubgraph(name[, attrs])`

Creates a new subgraph object, which supports all the graph object methods,
except the `render()` method.

Example:

```js
const gvo = require('graphviz-objects')

const g = gvo.createDigraph('G')

const cluster0 = g.addSubgraph('cluster_0', {
  style: 'filled',
  color: 'lightgrey',
  label: 'process #1'
})
```

### `addNode(name[, attrs])`

Creates a new node object.

Example:

```js
const gvo = require('graphviz-objects')

const g = gvo.createDigraph('g', {
  rankdir: 'LR'
})

const nodeAttrs = {
  fontsize: 16,
  shape: 'ellipse'
}

g.addNode('node0', Object.assign({}, nodeAttrs, {
  label: '<f0> 0x10ba8| <f1>',
  shape: 'record'
}))
```

### `addEdge(source, target[, attrs])`

Creates a new edge object.  The `source` and `target` parameters should be
the names of nodes to connect.

Example:

```js
const gvo = require('graphviz-objects')

const g = gvo.createGraph('ER', {
  label: '\n\nEntity Relation Diagram\ndrawn by NEATO',
  fontsize: 20
})

g.addNode('course', { shape: 'box' })
g.addNode('name0', { shape: 'ellipse', label: 'name' })
g.addNode('code', { shape: 'ellipse' })

g.addEdge('name0', 'course')
g.addEdge('code', 'course')
```

### `addEdgeWithPorts(source, sourcePort, target, targetPort[, attrs])`

Creates a new edge object, using ports in addition to the `source` and `target`
names.  The `sourcePort` and `targetPort` parameters may be null, and if
not null should be the string form of the port to connect to.

Example:

```js
const gvo = require('graphviz-objects')

const g = gvo.createDigraph('g', {
  rankdir: 'LR'
})

const nodeAttrs = {
  fontsize: 16,
  shape: 'ellipse'
}

g.addNode('node0', Object.assign({}, nodeAttrs, {
  label: '<f0> 0x10ba8| <f1>',
  shape: 'record'
}))

g.addNode('node1', Object.assign({}, nodeAttrs, {
  label: '<f0> 0xf7fc4380| <f1> | <f2> |-1',
  shape: 'record'
}))

g.addEdgeWithPorts('node0', 'f0', 'node1', 'f0', { id: 0 })
```

### `render()`

Returns a string which is the `.dot` file content of the specified top-level
graph.

Example:

```js
'use strict'

const gvo = require('graphviz-objects')

const g = gvo.createDigraph('G')

g.addEdge('Hello', 'World')

console.log(g.render())
// prints:
// digraph G {
//   Hello -> World
// }
```


license
================================================================================

This package is licensed under the MIT license.  See the
[LICENSE.md](LICENSE.md) file for more information.


contributing
================================================================================

Awesome!  We're happy that you want to contribute.

Please read the [CONTRIBUTING.md](CONTRIBUTING.md) file for more information.
