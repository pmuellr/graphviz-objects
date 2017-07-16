'use strict'

// recreate graph here: http://www.graphviz.org/Gallery/gradient/table.html

const utils = require('../lib/utils')
const gvo = require('../..')

const g = gvo.createGraph('G', { digraph: true }, {
  bgcolor: 'yellow:red'
})

const cluster1 = g.addSubgraph('cluster1', {
  fillcolor: 'blue:green',
  style: 'filled'
})

const a0Label = gvo.htmlString(`
  <TABLE border="10" cellspacing="10" cellpadding="10" style="rounded" bgcolor="/rdylgn11/1:/rdylgn11/11" gradientangle="315">
    <TR><TD border="3"  bgcolor="/rdylgn11/1:/rdylgn11/2">00</TD>
    <TD border="3"  bgcolor="/rdylgn11/2:/rdylgn11/3">01</TD>
    <TD border="3"  bgcolor="/rdylgn11/3:/rdylgn11/4">02</TD>
    <TD border="3"  bgcolor="/rdylgn11/4:/rdylgn11/5">03</TD>
    </TR>

    <TR><TD border="3" bgcolor="/rdylgn11/1:/rdylgn11/6" gradientangle="270">10</TD>
    <TD border="3" rowspan="2"  bgcolor="/rdylgn11/3:/rdylgn11/9" gradientangle="270">11</TD>
    <TD border="3"  bgcolor="/rdylgn11/3:/rdylgn11/8" gradientangle="270">12</TD>
    <TD border="3"  bgcolor="/rdylgn11/4:/rdylgn11/9" gradientangle="270">13</TD>
    </TR>

    <TR><TD border="3"  bgcolor="/rdylgn11/6:/rdylgn11/9" gradientangle="270">20</TD>
    <TD border="3" colspan="2"  bgcolor="/rdylgn11/9:/rdylgn11/11">22</TD>
    </TR>

    <TR><TD border="3" style="radial" bgcolor="/rdylgn11/1:/rdylgn11/8">30</TD>
    <TD border="3" style="radial" bgcolor="/rdylgn11/1:/rdylgn11/8" gradientangle="45">31</TD>
    <TD border="3" style="radial" bgcolor="/rdylgn11/1:/rdylgn11/8" gradientangle="90" >32</TD>
    <TD border="3" style="radial" bgcolor="/rdylgn11/1:/rdylgn11/8" gradientangle="180">33</TD>
    </TR>
  </TABLE>`.trim())

cluster1.addNode('a0', {
  shape: 'diamond',
  fillcolor: 'gold:brown',
  style: 'radial',
  gradientangle: 180,
  label: a0Label
})

const lines = g.render()

utils.dotToDOTfile('gallery/gradient-table', lines)
utils.dotToSVGfile('gallery/gradient-table', lines)
