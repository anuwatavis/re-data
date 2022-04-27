"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[382],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,h=d["".concat(c,".").concat(f)]||d[f]||u[f]||r;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6180:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],s={sidebar_position:4},c="Notifications",l={unversionedId:"getting_started/toy_shop/notifications",id:"getting_started/toy_shop/notifications",title:"Notifications",description:"Notifications are a great way to stay up to date with activities in your warehouse. You can let re_data send you notifications for alerts that occured within a specified date range.",source:"@site/docs/getting_started/toy_shop/notifications.md",sourceDirName:"getting_started/toy_shop",slug:"/getting_started/toy_shop/notifications",permalink:"/0.7.1/docs/getting_started/toy_shop/notifications",editUrl:"https://github.com/re-data/re-data/edit/master/docs/docs/getting_started/toy_shop/notifications.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Reliability UI \ud83d\udc40",permalink:"/0.7.1/docs/getting_started/toy_shop/generate_ui"},next:{title:"Configuration \u2699\ufe0f",permalink:"/0.7.1/docs/reference/config"}},p={},u=[{value:"Slack",id:"slack",level:2}],d={toc:u};function f(e){var t=e.components,s=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"notifications"},"Notifications"),(0,r.kt)("p",null,"Notifications are a great way to stay up to date with activities in your warehouse. You can let re_data send you notifications for alerts that occured within a specified date range."),(0,r.kt)("p",null,"re_data currently supports the following channels for notifications."),(0,r.kt)("h2",{id:"slack"},"Slack"),(0,r.kt)("p",null,"To send alerts to a slack channel, we make use of ",(0,r.kt)("a",{parentName:"p",href:"https://api.slack.com/messaging/webhooks"},"incoming webhooks")," which is a simple way to post messages from apps into Slack."),(0,r.kt)("p",null,"The steps required to enable incoming webhooks and get started can be found in the slack ",(0,r.kt)("a",{parentName:"p",href:"https://api.slack.com/messaging/webhooks#enable_webhooks"},"API docs"),". Once you have created an incoming webhook successfully, you should see a new entry under Webhook URLs for Your Workspace section, with a Webhook URL that'll look something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX\n")),(0,r.kt)("p",null,"The webhook url can now be used with the re_data notify command as shown below,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'re_data notify slack \\\n--start-date 2021-01-01 \\\n--end-date 2021-01-31 \\\n--webhook-url https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX \\\n--subtitle="[Optional] Markdown text to be added as a subtitle in the slack message generated"\n')),(0,r.kt)("p",null,"Below is a sample alert notification message sent by a slack app created."),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"SlackMessage",src:n(5162).Z,width:"2338",height:"670"})),(0,r.kt)("p",null,"By default, the most recent 20 alerts are shown and you can generate the Observability UI to show more details relating to alerts."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("h3",{parentName:"div",id:"having-issues"},"Having issues?"),(0,r.kt)("p",{parentName:"div"},"If you have more questions, got stuck anywhere, or something is not working as expected, please let us know on ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://www.getre.io/slack"},"Slack! \ud83d\ude0a")),", we will help you asap, and it will help us improve this quick start guide."))))}f.isMDXComponent=!0},5162:function(e,t,n){t.Z=n.p+"assets/images/slack_notification_message-48fbf9a81b6f967596a8304e5467e09e.png"}}]);