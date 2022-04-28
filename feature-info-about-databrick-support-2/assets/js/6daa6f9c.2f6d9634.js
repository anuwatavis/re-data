"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[32],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return p}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),s=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(a),p=r,_=u["".concat(d,".").concat(p)]||u[p]||m[p]||i;return a?n.createElement(_,o(o({ref:t},c),{},{components:a})):n.createElement(_,o({ref:t},c))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7323:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),o=["components"],l={sidebar_position:2},d="Models",s={unversionedId:"reference/data_monitoring/models",id:"reference/data_monitoring/models",isDocsHomePage:!1,title:"Models",description:"All data produced by re_data is saved in dbt models. Let's go over the most important of them:",source:"@site/docs/reference/data_monitoring/models.md",sourceDirName:"reference/data_monitoring",slug:"/reference/data_monitoring/models",permalink:"/re-data/feature-info-about-databrick-support-2/docs/reference/data_monitoring/models",editUrl:"https://github.com/re-data/re-data/edit/master/docs/docs/reference/data_monitoring/models.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Metrics",permalink:"/re-data/feature-info-about-databrick-support-2/docs/reference/data_monitoring/metrics"},next:{title:"Anomalies",permalink:"/re-data/feature-info-about-databrick-support-2/docs/reference/data_monitoring/anomalies"}},c=[{value:"re_data_metrics",id:"re_data_metrics",children:[]},{value:"re_data_schema_changes",id:"re_data_schema_changes",children:[]},{value:"re_data_monitored",id:"re_data_monitored",children:[]},{value:"re_data_tables",id:"re_data_tables",children:[]},{value:"re_data_z_score",id:"re_data_z_score",children:[]},{value:"re_data_alerting",id:"re_data_alerting",children:[]}],m={toc:c};function u(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"models"},"Models"),(0,i.kt)("p",null,"All data produced by re_data is saved in dbt models. Let's go over the most important of them:"),(0,i.kt)("h3",{id:"re_data_metrics"},"re_data_metrics"),(0,i.kt)("p",null,"This models contains (almost all - except schema changes) metrics computed by re_data. Here is how this table looks like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="re_data_metrics"',title:'"re_data_metrics"'},'select * from dq_re.re_data_metrics\n                id                |          table_name          | column_name |   metric    | value |  time_window_start  |   time_window_end   | interval_length_sec\n----------------------------------+------------------------------+-------------+-------------+-------+---------------------+---------------------+--------------------\n 5950d1123559dee165d999c9c85a71ce | "postgres"."dq"."buy_events" | value1      | min         |   107 | 2021-05-01 00:00:00 | 2021-05-02 00:00:00 |               86400\n 4de8037a73b65339e940065968ab53be | "postgres"."dq"."buy_events" | value1      | max         |   107 | 2021-05-01 00:00:00 | 2021-05-02 00:00:00 |               86400\n 5824e152ceb289fd4170e28964781296 | "postgres"."dq"."buy_events" | value1      | avg         |   107 | 2021-05-01 00:00:00 | 2021-05-02 00:00:00 |               86400\n\n')),(0,i.kt)("p",null,"And here is a brief description of what all columns mean:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"id")," - unique id generated for column, generated from table_name, column_name, metric, time_window_start, time_window_end. In the case of these 5 metrics being the same for newly generated data, data for metric will be overwritten. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"table_name")," - full name of the monitored table in your database"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"column_name")," - column name, or empty value in case of table level metrics "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"metric")," - name of metric, are defined in ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/docs/reference/data_monitoring/metrics"},"metrics"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"value")," - value of a metric (curently all re_data metrics are numeric)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"time_window_start")," - timestamp of time window start"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"time_window_end")," - timestamp of time window end"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"interval_length_sec")," - length of time-window in seconds, used internally to compare same length time intervals when computing anomalies")),(0,i.kt)("h3",{id:"re_data_schema_changes"},"re_data_schema_changes"),(0,i.kt)("p",null,"Schema changed are computed separately, this model contains all detected schema changes."),(0,i.kt)("h3",{id:"re_data_monitored"},"re_data_monitored"),(0,i.kt)("p",null,"Model containing:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"table names"),(0,i.kt)("li",{parentName:"ul"},"their time filters columns"),(0,i.kt)("li",{parentName:"ul"},"and additional metrics to be computed for those.")),(0,i.kt)("p",null,"This model refreshes each time re_data runs and describes what re_data computes. It is generated from your ",(0,i.kt)("inlineCode",{parentName:"p"},"dbt_project.yml")," configurations plus the optional ",(0,i.kt)("inlineCode",{parentName:"p"},"re_data_tables")," configuration saved in the data warehouse."),(0,i.kt)("h3",{id:"re_data_tables"},"re_data_tables"),(0,i.kt)("p",null,"This table is an optional way of defining what re_data computes. (apart from dbt_project vars configuration). "),(0,i.kt)("p",null,"2 columns can be edited in this table:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"actively_monitored")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"false")," to start/stop monitoring table and computing stats for it, ",(0,i.kt)("inlineCode",{parentName:"p"},"(default: false)"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"time_filter")," to the name of the column you would like to use as a time filter."),(0,i.kt)("p",{parentName:"li"},"re_data prioritizes code configuration so changes will only affect tables that are not specified in ",(0,i.kt)("inlineCode",{parentName:"p"},"dbt_project.yml"),". "))),(0,i.kt)("p",null,"We strongly advise to not configure the same parameters both in DB and code. DB configuration is meant for people wanting to enable/disable lots of tables on the DB level as opposed to configuring them all in code."),(0,i.kt)("h3",{id:"re_data_z_score"},"re_data_z_score"),(0,i.kt)("p",null,"Computed z_score for metric. ",(0,i.kt)("inlineCode",{parentName:"p"},"re_data")," looks back on what where metrics values in last 30 days and compute z_score for newest value."),(0,i.kt)("h3",{id:"re_data_alerting"},"re_data_alerting"),(0,i.kt)("p",null,"View computed on top of ",(0,i.kt)("inlineCode",{parentName:"p"},"re_data_z_score")," table to contain metrics that look alerting. Alerting threshold is controlled by var ",(0,i.kt)("inlineCode",{parentName:"p"},"re_data:alerting_z_score"),"\nwhich is equal to 3 by default, but can be changed and adjusted."))}u.isMDXComponent=!0}}]);