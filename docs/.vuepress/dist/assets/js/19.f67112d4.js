(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{258:function(t,a,s){"use strict";s.r(a);var n=s(259),o=s.n(n);for(var c in n)"default"!==c&&function(t){s.d(a,t,function(){return n[t]})}(c);a.default=o.a},259:function(t,a){t.exports={data:function(){return{type:["","info","success","warning","danger"],notifications:{topCenter:!1}}},methods:{notifyVue:function(t,a){var s=Math.floor(4*Math.random()+1);this.$notify({message:"Welcome to <b>Material Dashboard</b> - a beautiful freebie for every web developer.",icon:"add_alert",horizontalAlign:a,verticalAlign:t,type:this.type[s]})}}}},290:function(t,a,s){"use strict";var n=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._m(5),t._v(" "),s("demo-block",{staticClass:"demo-box",attrs:{jsfiddle:{html:'<template>\n\n  <div class="md-layout">\n    <div class="md-layout-item">\n      <notifications/>\n      <md-card>\n        <md-card-header class="md-card-header-text md-card-header-green">\n          <div class="card-text">\n            <h4 class="title">Notifications</h4>\n          </div>\n        </md-card-header>\n        <md-card-content>\n          <div class="md-layout">\n            <div class="md-layout-item md-size-100">\n              <div class="places-buttons text-center">\n                <h5 class="text-center">Notifications Places\n                  <p class="category">Click to view notifications</p>\n                </h5>\n                <md-button class="md-primary" @click="notifyVue(\'top\',\'left\')">Top Left</md-button>\n                <md-button class="md-primary" @click="notifyVue(\'top\',\'center\')">Top Center</md-button>\n                <md-button class="md-primary" @click="notifyVue(\'top\',\'right\')">Top Right</md-button>\n                <md-button class="md-primary" @click="notifyVue(\'bottom\',\'left\')">Bottom Left</md-button>\n                <md-button class="md-primary" @click="notifyVue(\'bottom\',\'center\')">Bottom Center</md-button>\n                <md-button class="md-primary" @click="notifyVue(\'bottom\',\'right\')">Bottom Right</md-button>\n              </div>\n            </div>\n          </div>\n        </md-card-content>\n      </md-card>\n    </div>\n  </div>\n</template>\n\n\n\n',script:"\nexport default {\n  data () {\n    return {\n      type: ['', 'info', 'success', 'warning', 'danger'],\n      notifications: {\n        topCenter: false\n      }\n    }\n  },\n  methods: {\n    notifyVue (verticalAlign, horizontalAlign) {\n      var color = Math.floor((Math.random() * 4) + 1)\n      this.$notify(\n        {\n          message: 'Welcome to <b>Material Dashboard</b> - a beautiful freebie for every web developer.',\n          icon: 'add_alert',\n          horizontalAlign: horizontalAlign,\n          verticalAlign: verticalAlign,\n          type: this.type[color]\n        })\n    }\n  }\n}\n\n",style:null}}},[s("div",{staticClass:"source",attrs:{slot:"source"},slot:"source"},[[s("div",{staticClass:"md-layout"},[s("div",{staticClass:"md-layout-item"},[s("notifications"),t._v(" "),s("md-card",[s("md-card-header",{staticClass:"md-card-header-text md-card-header-green"},[s("div",{staticClass:"card-text"},[s("h4",{staticClass:"title"},[t._v("Notifications")])])]),t._v(" "),s("md-card-content",[s("div",{staticClass:"md-layout"},[s("div",{staticClass:"md-layout-item md-size-100"},[s("div",{staticClass:"places-buttons text-center"},[s("h5",{staticClass:"text-center"},[t._v("Notifications Places\n                  "),s("p",{staticClass:"category"},[t._v("Click to view notifications")])]),t._v(" "),s("md-button",{staticClass:"md-primary",on:{click:function(a){t.notifyVue("top","left")}}},[t._v("Top Left")]),t._v(" "),s("md-button",{staticClass:"md-primary",on:{click:function(a){t.notifyVue("top","center")}}},[t._v("Top Center")]),t._v(" "),s("md-button",{staticClass:"md-primary",on:{click:function(a){t.notifyVue("top","right")}}},[t._v("Top Right")]),t._v(" "),s("md-button",{staticClass:"md-primary",on:{click:function(a){t.notifyVue("bottom","left")}}},[t._v("Bottom Left")]),t._v(" "),s("md-button",{staticClass:"md-primary",on:{click:function(a){t.notifyVue("bottom","center")}}},[t._v("Bottom Center")]),t._v(" "),s("md-button",{staticClass:"md-primary",on:{click:function(a){t.notifyVue("bottom","right")}}},[t._v("Bottom Right")])],1)])])])],1)],1)])]],2),t._v(" "),s("div",{staticClass:"highlight",attrs:{slot:"highlight"},slot:"highlight"},[s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n  "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("md-layout"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("md-layout-item"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("notifications")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("notifications")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("md-card")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("md-card-header")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("md-card-header-text md-card-header-green"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n          "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("card-text"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h4")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("title"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Notifications"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h4")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n          "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("md-card-header")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("md-card-content")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n          "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("md-layout"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("md-layout-item md-size-100"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n              "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("places-buttons text-center"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h5")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text-center"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Notifications Places\n                  "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("category"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Click to view notifications"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h5")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("md-button")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("md-primary"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("@click")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("notifyVue("),s("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v("top"),s("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v(","),s("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v("left"),s("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v(")"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Top Left"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("md-button")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("md-button")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("md-primary"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("@click")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("notifyVue("),s("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v("top"),s("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v(","),s("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v("center"),s("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v(")"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Top Center"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("md-button")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("md-button")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("md-primary"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("@click")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("notifyVue("),s("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v("top"),s("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v(","),s("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v("right"),s("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v(")"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Top Right"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("md-button")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("md-button")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("md-primary"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("@click")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("notifyVue("),s("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v("bottom"),s("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v(","),s("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v("left"),s("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v(")"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Bottom Left"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("md-button")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("md-button")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("md-primary"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("@click")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("notifyVue("),s("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v("bottom"),s("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v(","),s("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v("center"),s("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v(")"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Bottom Center"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("md-button")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("md-button")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("md-primary"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("@click")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("notifyVue("),s("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v("bottom"),s("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v(","),s("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v("right"),s("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v(")"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Bottom Right"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("md-button")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n              "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n          "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("md-card-content")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("md-card")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token script language-javascript"}},[t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token function"}},[t._v("data")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      type"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token string"}},[t._v("''")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'info'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'success'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'warning'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'danger'")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      notifications"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        topCenter"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n      "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  methods"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token function"}},[t._v("notifyVue")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("verticalAlign"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" horizontalAlign"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" color "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Math"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("floor")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Math"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("random")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("4")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),s("span",{attrs:{class:"token keyword"}},[t._v("this")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("$notify")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          message"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'Welcome to <b>Material Dashboard</b> - a beautiful freebie for every web developer.'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          icon"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'add_alert'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          horizontalAlign"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" horizontalAlign"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          verticalAlign"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" verticalAlign"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          type"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("this")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("type"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("color"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")]),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n")])])])])]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11)],1)},o=[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"notifications"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#notifications","aria-hidden":"true"}},[this._v("#")]),this._v(" Notifications")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("We crafted a custom plugin inspired by "),a("strong",[this._v("vue-notifyjs")]),this._v(" which is simple yet effective.")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage","aria-hidden":"true"}},[this._v("#")]),this._v(" Usage")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("To use the notification plugin, import it from the components folder. Note that this is already done in "),a("strong",[this._v("src/main.js")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Notifications "),s("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'./components/NotificationPlugin'")]),t._v("\nVue"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("use")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Notifications"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"trigger-notifications"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#trigger-notifications","aria-hidden":"true"}},[this._v("#")]),this._v(" Trigger Notifications")])},function(){var t=this.$createElement,a=this._self._c||t;return a("blockquote",[a("p",[this._v("Note: "),a("code",[this._v("<notifications></notifications>")]),this._v(" can be declared only once anywhere in your app, preferably in your root component so the notification component is alive inside any other components.")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"notification-options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#notification-options","aria-hidden":"true"}},[this._v("#")]),this._v(" Notification options")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("this")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("$notify")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    message"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'Welcome to <b>Material Dashboard</b> - a beautiful freebie for every web developer.'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    icon"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'add_alert'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    horizontalAlign"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" horizontalAlign"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    verticalAlign"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" verticalAlign"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    type"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("this")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("type"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("color"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"props"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#props","aria-hidden":"true"}},[this._v("#")]),this._v(" Props")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h4",{attrs:{id:"notification-passed-through-the-object-sent-to-notify-method"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#notification-passed-through-the-object-sent-to-notify-method","aria-hidden":"true"}},[this._v("#")]),this._v(" Notification (passed through the object sent to "),a("strong",[this._v("$notify")]),this._v(" method)")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("props"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  message"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" String"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  icon"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" String"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  verticalAlign"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    type"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" String"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("default")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'top'")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  horizontalAlign"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    type"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" String"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("default")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'center'")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  type"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    type"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" String"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("default")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'info'")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  timeout"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    type"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Number"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("default")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("1200")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  timestamp"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    type"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Date"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("default")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("Date")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}];s.d(a,"a",function(){return n}),s.d(a,"b",function(){return o})},301:function(t,a,s){"use strict";s.r(a);var n=s(290),o=s(258);for(var c in o)"default"!==c&&function(t){s.d(a,t,function(){return o[t]})}(c);var e=s(0),r=Object(e.a)(o.default,n.a,n.b,!1,null,null,null);r.options.__file="notifications.md",a.default=r.exports}}]);