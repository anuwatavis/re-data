"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[606],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(r),f=a,g=p["".concat(l,".").concat(f)]||p[f]||c[f]||o;return r?n.createElement(g,i(i({ref:t},d),{},{components:r})):n.createElement(g,i({ref:t},d))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},2246:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return d},default:function(){return p}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],s={sidebar_position:1},l="Installation for dbt users",u={unversionedId:"getting_started/installation/for_dbt_users",id:"getting_started/installation/for_dbt_users",isDocsHomePage:!1,title:"Installation for dbt users",description:"If you are already using dbt in your company, you can install re_data by adding our dbthub package to your project.",source:"@site/docs/getting_started/installation/for_dbt_users.md",sourceDirName:"getting_started/installation",slug:"/getting_started/installation/for_dbt_users",permalink:"/feature-update-ui-build/docs/getting_started/installation/for_dbt_users",editUrl:"https://github.com/re-data/re-data/edit/master/docs/docs/getting_started/installation/for_dbt_users.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Supported data warehouses",permalink:"/feature-update-ui-build/docs/introduction/supported_warehouses"},next:{title:"Installation for starters",permalink:"/feature-update-ui-build/docs/getting_started/installation/new_to_dbt"}},d=[{value:"Adding re_data to packages used",id:"adding-re_data-to-packages-used",children:[]},{value:"Adding re_data python package for observability UI",id:"adding-re_data-python-package-for-observability-ui",children:[]}],c={toc:d};function p(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"installation-for-dbt-users"},"Installation for dbt users"),(0,o.kt)("p",null,"If you are already using dbt in your company, you can install re_data by adding our dbthub package to your project."),(0,o.kt)("h2",{id:"adding-re_data-to-packages-used"},"Adding re_data to packages used"),(0,o.kt)("p",null,"Simply update your ",(0,o.kt)("inlineCode",{parentName:"p"},"packages.yml")," file with re_data package"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title="packages.yml"',title:'"packages.yml"'},'\npackages:\n    ***\n    \n    - package: re-data/re_data\n      version: [">=0.5.0", "<0.6.0"]\n\n')),(0,o.kt)("p",null,"And run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"dbt deps\n")),(0,o.kt)("h2",{id:"adding-re_data-python-package-for-observability-ui"},"Adding re_data python package for observability UI"),(0,o.kt)("p",null,"To generate re_data observability UI you need to install re_data python packge. You can do it simply like that:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pip install re_data\n")))}p.isMDXComponent=!0}}]);