"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[606],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return u}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=d(a),u=r,g=m["".concat(l,".").concat(u)]||m[u]||c[u]||i;return a?n.createElement(g,o(o({ref:t},p),{},{components:a})):n.createElement(g,o({ref:t},p))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var d=2;d<i;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8362:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return c}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),o=["components"],s={sidebar_position:1},l="Quickstart - dbt users",d={unversionedId:"getting_started/installation/for_dbt_users",id:"getting_started/installation/for_dbt_users",title:"Quickstart - dbt users",description:"This introduction assumes you are already using dbt in your company and tables you would like to monitor are managed by dbt.",source:"@site/docs/getting_started/installation/for_dbt_users.md",sourceDirName:"getting_started/installation",slug:"/getting_started/installation/for_dbt_users",permalink:"/0.7.1/docs/getting_started/installation/for_dbt_users",editUrl:"https://github.com/re-data/re-data/edit/master/docs/docs/getting_started/installation/for_dbt_users.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Integrations",permalink:"/0.7.1/docs/introduction/integrations"},next:{title:"Quickstart - new to dbt",permalink:"/0.7.1/docs/getting_started/installation/new_to_dbt"}},p={},c=[{value:"Installing re_data dbt package",id:"installing-re_data-dbt-package",level:2},{value:"Configuring tables",id:"configuring-tables",level:3},{value:"dbt package functionality",id:"dbt-package-functionality",level:3},{value:"Computing first metrics",id:"computing-first-metrics",level:3},{value:"Installing re_data python package",id:"installing-re_data-python-package",level:2},{value:"Python package functionality",id:"python-package-functionality",level:3},{value:"Generate &amp; Serve UI",id:"generate--serve-ui",level:3},{value:"Learning more",id:"learning-more",level:2}],m={toc:c};function u(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"quickstart---dbt-users"},"Quickstart - dbt users"),(0,i.kt)("p",null,"This introduction assumes you are already using dbt in your company and tables you would like to monitor are managed by dbt.\nTo fully use re_data you would need to install both:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"#installing-re_data-dbt-package"},"re_data dbt package"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"#installing-re_data-python-package"},"re_data python package")))),(0,i.kt)("p",null,"We'll go over the steps required to do that & explain what possibilities those packages create for you."),(0,i.kt)("h2",{id:"installing-re_data-dbt-package"},"Installing re_data dbt package"),(0,i.kt)("p",null,"Add the re_data dbt package to your main dbt repo project.\nYou need to update your ",(0,i.kt)("inlineCode",{parentName:"p"},"packages.yml")," file with re_data package like that:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title="packages.yml"',title:'"packages.yml"'},'\npackages:\n    ***\n    \n    - package: re-data/re_data\n      version: [">=0.7.0", "<0.8.0"]\n\n')),(0,i.kt)("p",null,"And then install dbt packages dependencies by running:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"dbt deps\n")),(0,i.kt)("p",null,"You can do that locally, in your dbt cloud environment, or Airflow etc. scheduler enviornment."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"On production, you most likely are already running ",(0,i.kt)("inlineCode",{parentName:"p"},"dbt deps")," as part of dbt models computation. So this step maybe only necessary for your local environment."))),(0,i.kt)("h3",{id:"configuring-tables"},"Configuring tables"),(0,i.kt)("p",null,"Computing metrics & anomalies for your dbt models & sources requires configuring them to be observed by re_data. You can do it in a couple of ways, all of them described in ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/docs/reference/config"},"re_data configuration"))," reference part. A simple configuration for a single model contains just information that the model should be monitored & timestamp expression (usually column name) to be used when computing re_data time-based stats."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="<model_name>.sql"',title:'"<model_name>.sql"'},"{{\n    config(\n      re_data_monitored=true,\n      re_data_time_filter='time_column_name',\n    )\n}}\nselect ...\n")),(0,i.kt)("h3",{id:"dbt-package-functionality"},"dbt package functionality"),(0,i.kt)("p",null,"Let's go over some of the things you already can use with re_data dbt package."),(0,i.kt)("p",null,"For specifics look into reference section:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/docs/reference/models"},"re_data dbt models"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/docs/reference/metrics/overview_metric"},"re_data metrics"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/docs/reference/tests/history"},"re_data tests history & custom tests"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/docs/reference/macros/data_cleaning"},"re_data data cleaning, filtering, normalization, validation macros")))),(0,i.kt)("p",null,"dbt auto generated documentation, together with our models graph is also available: ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://re-data.github.io/dbt-re-data/#!/model/model.re_data.re_data_monitored"},"here"))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"re_data macros don't require any configuration and can be just used after you add re_data into your environment."))),(0,i.kt)("h3",{id:"computing-first-metrics"},"Computing first metrics"),(0,i.kt)("p",null,"To compute re_data models containing metrics & anomalies you can just run standard dbt command."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"dbt run --models package:re_data\n")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"single re_data run produces single data points about your tables for a time window. The default time window when you run re_data without parameters is yesterday. (from yesterday's 00:00 AM up until today 00:00 AM) To compare tables over time you would need to run the re_data dbt package multiple times (by some scheduler, re_data python package or manually)."))),(0,i.kt)("p",null,"The following would create tables inside your ",(0,i.kt)("inlineCode",{parentName:"p"},"{default_schema}_re")," schema of your database. This is configured in dbt and can be overwritten in your ",(0,i.kt)("inlineCode",{parentName:"p"},"dbt_project.yml"),"."),(0,i.kt)("h2",{id:"installing-re_data-python-package"},"Installing re_data python package"),(0,i.kt)("p",null,"To generate re_data reliability UI, send re_data alerts to Slack and easily backfill re_data models you will need to install the re_data python library. For this step, you need to have a python environment (with dbt installation) setup. Install re_data by executing:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"pip install re_data\n")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"re_data python library should be installed in the same python environment where your dbt is installed. re_data makes use of dbt to run queries against your database. Because of that, you don't need to pass any DB credentials to re_data configuration. re_data by default will run dbt with the same credentials & profiles which you have in your ",(0,i.kt)("inlineCode",{parentName:"p"},"dbt_project.yml")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.dbt/profiles.yml")," files. You can also change this behaviour by passing options to the re_data command."))),(0,i.kt)("h3",{id:"python-package-functionality"},"Python package functionality"),(0,i.kt)("p",null,"Python package add enabled you to use this functionality:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/docs/reference/cli/overview"},"re_data overview UI"))," - for generating & displaying re_data UI"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/docs/reference/cli/notify"},"re_data notify"))," - for notifying external services about alerts (currently Slack)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/docs/reference/cli/run"},"re_data run"))," - for easily backfilling re_data dbt data")),(0,i.kt)("h3",{id:"generate--serve-ui"},"Generate & Serve UI"),(0,i.kt)("p",null,"Let's go over 2 commands for generating & serving UI. It works quite similarly to dbt docs. First you create files by calling ",(0,i.kt)("inlineCode",{parentName:"p"},"re_data overview generate")," and then serving already existing files by ",(0,i.kt)("inlineCode",{parentName:"p"},"re_data overview serve"),". For more details on paramters accepted by this & other re_data commands check ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/docs/reference/cli/overview"},"re_data CLI reference"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"re_data overview generate\nre_data overview serve\n")),(0,i.kt)("h2",{id:"learning-more"},"Learning more"),(0,i.kt)("p",null,"More detailed instrutions on running re_data are described in out toy_shop ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/docs/getting_started/toy_shop/toy_shop_data"},"example tutorial \ud83d\ude0a"))," "),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("h3",{parentName:"div",id:"got-stuck-anywhere"},"Got stuck anywhere?"),(0,i.kt)("p",{parentName:"div"},"If you have more questions, got stuck anywhere, or something is not working as expected, please let us know on ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://www.getre.io/slack"},"Slack! \ud83d\ude0a")),", we will help you asap, and it will help us improve this quick start guide."))))}u.isMDXComponent=!0}}]);