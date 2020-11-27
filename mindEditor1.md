---
title: 1Mind Editor
layout: default2
tags:
- mind editor
active: "mind-editor1"
order: 1
libjs:
permalink: "mind-editor1"
published: true

---
<script src="https://cdn.jsdelivr.net/npm/regenerator-runtime"></script>
<script src="{{ " /js/MindElixir.js " | prepend: site.baseurl }}"></script>

<div class="post">
  <article class="post-content">
    <div id="map"></div>
    <style>
      #map {
        height: 800px;
        width: 100%;
      }
    </style>
  </article>

</div>

<script>
let mind = new MindElixir({
  el: '#map',
  direction: MindElixir.SIDE,
  // create new map data
  // or set as data that is return from `.getAllData()`
  //data: MindElixir.new('new topic'),
  data: localStorage.getItem("nodeData1")? JSON.parse(localStorage.getItem("nodeData1"))  : MindElixir.new('new topic') ,
  draggable: true, // default true
  contextMenu: true, // default true
  toolBar: true, // default true
  nodeMenu: true, // default true
  keypress: true, // default true
  locale: 'en', // [zh_CN,zh_TW,en,ja]
  contextMenuOption: {
    focus: true,
    link: true,
    editor: true,
  },
  allowUndo: false,
  before: {
    insertSibling(el, obj) {
      return true
    },
    async addChild(el, obj) {
      return true
    },
  },
})
mind.init()
function timeout() {
setTimeout(function () {
        // Do Something Here
        // Then recall the parent function to
        // create a recursive loop.
        localStorage.setItem("nodeData1", JSON.stringify(mind.getAllData()));
        //MathJax.typeset()
        //mind.linkDiv()
        timeout();
    }, 1000);
}
timeout();
</script>



