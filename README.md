graphviz-objects - create graphviz documents via an API
================================================================================

`graphviz-objects` is a library that creates readable [Graphviz][] `dot` format
text via JavaScript APIs.  Aren't you tired of generating that [`dot` format
text][dot] manually?  You can use this library and the awesome [viz.js][]
package to create Graphviz images right from JavaScript, without having to have
any native Graphviz executables installed.

[Graphviz]: http://www.graphviz.org/
[dot]: http://www.graphviz.org/content/dot-language
[viz.js]: https://www.npmjs.com/package/viz.js

As an example, here's a program from the `test/gallery` directory,
[`cluster.js`][cluster.js], which will render the
["cluster" sample from the Graphviz Gallery][cluster-gallery].

```js
const gvo = require('graphviz-objects')

const g = gvo.createDigraph('G')

const cluster0 = g.addSubgraph('cluster_0', {
  style: 'filled',
  color: 'lightgrey',
  label: 'process #1'
})

const cluster0Attrs = { style: 'filled', color: 'white' }

cluster0.addNode('a0', cluster0Attrs)
cluster0.addNode('a1', cluster0Attrs)
cluster0.addNode('a2', cluster0Attrs)
cluster0.addNode('a3', cluster0Attrs)

cluster0.addEdge('a0', 'a1')
cluster0.addEdge('a1', 'a2')
cluster0.addEdge('a2', 'a3')

const cluster1 = g.addSubgraph('cluster_1', {color: 'blue', label: 'process #2'})

const cluster1Attrs = { style: 'filled' }

cluster1.addNode('b0', cluster1Attrs)
cluster1.addNode('b1', cluster1Attrs)
cluster1.addNode('b2', cluster1Attrs)
cluster1.addNode('b3', cluster1Attrs)

cluster1.addEdge('b0', 'b1')
cluster1.addEdge('b1', 'b2')
cluster1.addEdge('b2', 'b3')

g.addNode('start', { shape: 'Mdiamond' })
g.addNode('end', { shape: 'Msquare' })

g.addEdge('start', 'a0')
g.addEdge('start', 'b0')
g.addEdge('a1', 'b3')
g.addEdge('b2', 'a3')
g.addEdge('a3', 'a0')
g.addEdge('a3', 'end')
g.addEdge('b3', 'end')

const lines = g.render()
```

[cluster.js]: https://github.com/pmuellr/graphviz-objects/blob/master/test/gallery/cluster.js

[cluster-gallery]: http://www.graphviz.org/content/cluster


usage
================================================================================

This package should ease the creation of Graphviz dot content, compared to doing
it by hand.  But it won't really make it easier to construct your graphs -
you will have to be familiar with [Graphviz `dot`][dot] language constructs
to use this library.

If you're not already familiar with Graphviz, you should check out their
[documentation page][gv-doc] and the [gallery page][gv-gallery] for examples.
Some of the gallery samples are reimplemented with this library in the
`test/gallery` directory.

[gv-doc]: http://www.graphviz.org/Documentation.php
[gv-gallery]: http://www.graphviz.org/Gallery.php

One piece of functionality not supported by this library is the ability to set
default attributes for `node`, `edge`, and `graph` objects via the respective
attribute statements.  Current thinking is that this isn't needed, since you can
get the same effect by storing default values in a JavaScript variable and
making use of that.  Some of the samples in the `test/gallery` directory use the
following pattern of applying default attributes:

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

The exports of the `graphviz-objects` package, and the API of the objects
returned by those functions, are described below.

Many functions in the API take `name` and optional `attrs` parameters.  Name is
the `name` of the object being created, and `attrs` is a JavaScript object with
the attributes of the object.

The `attrs` parameter object will be used to create attribute lists.  The
property names in the object are [Graphviz attribute names][gv-attrs]. The
property values can be numbers or strings, or objects returned by the
`htmlString()` API (described below) which creates HTML-like label attributes.

[gv-attrs]: http://www.graphviz.org/content/attrs

properties
--------------------------------------------------------------------------------

### `version` 

The version of the package.


functions
--------------------------------------------------------------------------------

### `createGraph(name[, attrs])`

Returns a newly created top-level graph with the specified name and attributes.

Example:

```js
const gvo = require('graphviz-objects')

const g = gvo.createGraph('ER', {
  label: '\n\nEntity Relation Diagram\ndrawn by NEATO',
  fontsize: 20
})
```

### `createDigraph(name[, attrs])`

Returns a newly created top-level digraph with the specified name and attributes.

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

See [HTML-Like Labels][] in the Graphviz documentation for more information on
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

Graph objects returned from the `createGraph()` and `createDigraph()` functions
support the following methods:

### `addSubgraph(name[, attrs])`

Returns a newly created subgraph object, which supports all the graph object
methods, except the `render()` method.

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
