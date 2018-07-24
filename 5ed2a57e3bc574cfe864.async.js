webpackJsonp([58],{1572:function(t,s,a){t.exports=a(3401)},3401:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a(3402),r=a(67),n=r(null,e.a,!1,null,null,null);s.default=n.exports},3402:function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("h1",[t._v("Getting Started")]),t._v(" "),a("p",[t._v("Ant Design Vue is dedicated to providing a "),a("strong",[t._v("good development experience")]),t._v(" for programmers. Make sure that you had installed "),a("a",{attrs:{href:"https://nodejs.org/"}},[t._v("Node.js")]),t._v("(> v6.5) correctly.")]),t._v(" "),a("blockquote",[a("p",[t._v("Before delving into Ant Design Vue, a good knowledge base of "),a("a",{attrs:{href:"https://cn.vuejs.org/"}},[t._v("Vue")]),t._v(" and "),a("a",{attrs:{href:"http://babeljs.io/docs/learn-es2015/"}},[t._v("JavaScript ES2015")]),t._v(" is needed.")])]),t._v(" "),a("h2",{attrs:{id:"Playground"}},[t._v("Playground "),a("a",{staticClass:"anchor",attrs:{href:"#Playground","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),a("p",[t._v("The following CodeSandbox demo is the simplest use case, and it's also a good habit to fork this demo to provide a re-producible demo while reporting a bug.")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://codesandbox.io/s/2wpk21kzvr"}},[a("img",{attrs:{src:"https://codesandbox.io/static/img/play-codesandbox.svg",alt:"Vue Antd Template"}})])])]),t._v(" "),a("h2",{attrs:{id:"Import-vue-antd-ui"}},[t._v("Import vue-antd-ui "),a("a",{staticClass:"anchor",attrs:{href:"#Import-vue-antd-ui","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),a("h3",{attrs:{id:"1.-Installation"}},[t._v("1. Installation "),a("a",{staticClass:"anchor",attrs:{href:"#1.-Installation","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/vuejs/vue-cli"}},[t._v("vue-cli")])]),t._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-bash"}},[t._v("$ npm install vue-cli -g\n")])]),t._v(" "),a("h3",{attrs:{id:"2.-Create-a-New-Project"}},[t._v("2. Create a New Project "),a("a",{staticClass:"anchor",attrs:{href:"#2.-Create-a-New-Project","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),a("p",[t._v("A new project can be created using CLI tools.")]),t._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-bash"}},[t._v("$ vue init webpack antd-demo\n")])]),t._v(" "),a("h3",{attrs:{id:"3.-Use-antd's-Components"}},[t._v("3. Use antd's Components "),a("a",{staticClass:"anchor",attrs:{href:"#3.-Use-antd's-Components","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-bash"}},[t._v("$ npm i --save vue-antd-ui\n")])]),t._v(" "),a("p",[a("strong",[t._v("Fully import")])]),t._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-jsx"}},[a("span",{attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" Vue "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"hljs-string"}},[t._v("'vue'")]),t._v("\n"),a("span",{attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" Antd "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"hljs-string"}},[t._v("'vue-antd-ui'")]),t._v("\n"),a("span",{attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" App "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"hljs-string"}},[t._v("'./App'")]),t._v("\n"),a("span",{attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" "),a("span",{attrs:{class:"hljs-string"}},[t._v("'vue-antd-ui/dist/antd.css'")]),t._v("\nVue.config.productionTip = "),a("span",{attrs:{class:"hljs-literal"}},[t._v("false")]),t._v("\n\nVue.use(Antd)\n\n"),a("span",{attrs:{class:"hljs-comment"}},[t._v("/* eslint-disable no-new */")]),t._v("\n"),a("span",{attrs:{class:"hljs-keyword"}},[t._v("new")]),t._v(" Vue({\n  "),a("span",{attrs:{class:"hljs-attr"}},[t._v("el")]),t._v(": "),a("span",{attrs:{class:"hljs-string"}},[t._v("'#app'")]),t._v(",\n  "),a("span",{attrs:{class:"hljs-attr"}},[t._v("components")]),t._v(": { App },\n  "),a("span",{attrs:{class:"hljs-attr"}},[t._v("template")]),t._v(": "),a("span",{attrs:{class:"hljs-string"}},[t._v("'<App/>'")]),t._v("\n})\n")])]),t._v(" "),a("p",[t._v("The above imports Antd entirely. Note that CSS file needs to be imported separately.")]),t._v(" "),a("p",[a("strong",[t._v("Only import the components you need")])]),t._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-jsx"}},[a("span",{attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" Vue "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"hljs-string"}},[t._v("'vue'")]),t._v("\n"),a("span",{attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" { Button, message } "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"hljs-string"}},[t._v("'vue-antd-ui'")]),t._v("\n"),a("span",{attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" App "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"hljs-string"}},[t._v("'./App'")]),t._v("\n\nVue.config.productionTip = "),a("span",{attrs:{class:"hljs-literal"}},[t._v("false")]),t._v("\n\nVue.component(Button.name, Button)\nVue.prototype.$message = message\n\n"),a("span",{attrs:{class:"hljs-comment"}},[t._v("/* eslint-disable no-new */")]),t._v("\n"),a("span",{attrs:{class:"hljs-keyword"}},[t._v("new")]),t._v(" Vue({\n  "),a("span",{attrs:{class:"hljs-attr"}},[t._v("el")]),t._v(": "),a("span",{attrs:{class:"hljs-string"}},[t._v("'#app'")]),t._v(",\n  "),a("span",{attrs:{class:"hljs-attr"}},[t._v("components")]),t._v(": { App },\n  "),a("span",{attrs:{class:"hljs-attr"}},[t._v("template")]),t._v(": "),a("span",{attrs:{class:"hljs-string"}},[t._v("'<App/>'")]),t._v("\n})\n")])]),t._v(" "),a("blockquote",[a("p",[t._v("All the components in antd are listed in the sidebar.")])]),t._v(" "),a("h3",{attrs:{id:"4.-Component-list"}},[t._v("4. Component list "),a("a",{staticClass:"anchor",attrs:{href:"#4.-Component-list","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/vueComponent/ant-design/blob/master/site/components.js"}},[t._v("Component list")])]),t._v(" "),a("h2",{attrs:{id:"Compatibility"}},[t._v("Compatibility "),a("a",{staticClass:"anchor",attrs:{href:"#Compatibility","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),a("p",[t._v("Ant Design Vue supports all the modern browsers and IE9+.")]),t._v(" "),a("p",[t._v("You need to provide "),a("a",{attrs:{href:"https://github.com/es-shims/es5-shim"}},[t._v("es5-shim")]),t._v(" and "),a("a",{attrs:{href:"https://github.com/paulmillr/es6-shim"}},[t._v("es6-shim")]),t._v(" and other polyfills for IE browsers.")]),t._v(" "),a("p",[t._v("If you are using babel, we strongly recommend using "),a("a",{attrs:{href:"https://babeljs.io/docs/usage/polyfill/"}},[t._v("babel-polyfill")]),t._v(" and "),a("a",{attrs:{href:"https://babeljs.io/docs/plugins/transform-runtime/"}},[t._v("babel-plugin-transform-runtime")]),t._v(" instead of those two shims.")]),t._v(" "),a("blockquote",[a("p",[t._v("Please avoid using both the babel and shim methods at the same time.")])]),t._v(" "),a("h2",{attrs:{id:"Import-on-Demand"}},[t._v("Import on Demand "),a("a",{staticClass:"anchor",attrs:{href:"#Import-on-Demand","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),a("p",[t._v("If you see logs like below screenshot, you might be importing all components by writing "),a("code",{pre:!0},[t._v("import { Button } from 'vue-antd-ui';")]),t._v(". This will affect your app's network performance.")]),t._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":""}},[t._v("You are using a whole package of antd, please use https://www.npmjs.com/package/babel-plugin-import to reduce app bundle size.\n")])]),t._v(" "),a("blockquote",[a("p",[a("img",{attrs:{src:"https://zos.alipayobjects.com/rmsportal/GHIRszVcmjccgZRakJDQ.png",alt:""}})])]),t._v(" "),a("p",[t._v("However, we can import individual components on demand:")]),t._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-jsx"}},[a("span",{attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" Button "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"hljs-string"}},[t._v("'vue-antd-ui/lib/button'")]),t._v(";\n"),a("span",{attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" "),a("span",{attrs:{class:"hljs-string"}},[t._v("'vue-antd-ui/lib/button/style'")]),t._v("; "),a("span",{attrs:{class:"hljs-comment"}},[t._v("// or vue-antd-ui/lib/button/style/css for css format file")]),t._v("\n")])]),t._v(" "),a("p",[t._v("We strongly recommend using "),a("a",{attrs:{href:"https://github.com/ant-design/babel-plugin-import"}},[t._v("babel-plugin-import")]),t._v(", which can convert the following code to the 'antd/lib/xxx' way:")]),t._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-jsx"}},[a("span",{attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" { Button } "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"hljs-string"}},[t._v("'vue-antd-ui'")]),t._v(";\n")])]),t._v(" "),a("p",[t._v("And this plugin can load styles too, read "),a("a",{attrs:{href:"https://github.com/ant-design/babel-plugin-import#usage"}},[t._v("usage")]),t._v(" for more details.")]),t._v(" "),a("blockquote",[a("p",[t._v("FYI, babel-plugin-import's "),a("code",{pre:!0},[t._v("style")]),t._v(" option will importing some global reset styles, don't use it if you don't need those styles. You can import styles manually via "),a("code",{pre:!0},[t._v("import 'vue-antd-ui/dist/antd.css'")]),t._v(" and override the global reset styles.")])]),t._v(" "),a("h2",{attrs:{id:"Customization"}},[t._v("Customization "),a("a",{staticClass:"anchor",attrs:{href:"#Customization","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"/ant-design/docs/vue/customize-theme"}},[t._v("Customize Theme")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/ant-design/antd-init/tree/master/examples/local-iconfont"}},[t._v("Local Iconfont")])])]),t._v(" "),a("h2",{attrs:{id:"Tips"}},[t._v("Tips "),a("a",{staticClass:"anchor",attrs:{href:"#Tips","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),a("ul",[a("li",[t._v("You can use any "),a("code",{pre:!0},[t._v("npm")]),t._v(" modules.")]),t._v(" "),a("li",[t._v("Although Vue's official recommended template to write components, JSX is a better choice for complex components.")])])])}],n={render:e,staticRenderFns:r};s.a=n}});