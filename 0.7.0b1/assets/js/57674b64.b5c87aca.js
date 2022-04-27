"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[776],{3905:function(e,a,t){t.d(a,{Zo:function(){return c},kt:function(){return p}});var r=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function d(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var o=r.createContext({}),u=function(e){var a=r.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},c=function(e){var a=u(e.components);return r.createElement(o.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},s=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),s=u(t),p=n,_=s["".concat(o,".").concat(p)]||s[p]||m[p]||i;return t?r.createElement(_,l(l({ref:a},c),{},{components:t})):r.createElement(_,l({ref:a},c))}));function p(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=t.length,l=new Array(i);l[0]=s;var d={};for(var o in a)hasOwnProperty.call(a,o)&&(d[o]=a[o]);d.originalType=e,d.mdxType="string"==typeof e?e:n,l[1]=d;for(var u=2;u<i;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},7084:function(e,a,t){t.r(a),t.d(a,{assets:function(){return c},contentTitle:function(){return o},default:function(){return p},frontMatter:function(){return d},metadata:function(){return u},toc:function(){return m}});var r=t(7462),n=t(3366),i=(t(7294),t(3905)),l=["components"],d={sidebar_position:4},o="Data Validation",u={unversionedId:"reference/macros/data_validation",id:"reference/macros/data_validation",title:"Data Validation",description:"Data validation refers to checking if data within your dataset, meet certain criteria. Validation often needs to be done on data that comes as text but represents something specific like number identifier, email, date, ip_address.",source:"@site/docs/reference/macros/data_validation.md",sourceDirName:"reference/macros",slug:"/reference/macros/data_validation",permalink:"/0.7.0b1/docs/reference/macros/data_validation",editUrl:"https://github.com/re-data/re-data/edit/master/docs/docs/reference/macros/data_validation.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Data Normalization",permalink:"/0.7.0b1/docs/reference/macros/data_normalization"},next:{title:"Models",permalink:"/0.7.0b1/docs/reference/models"}},c={},m=[{value:"Date &amp; Time",id:"date--time",level:2},{value:"valid_date_eu",id:"valid_date_eu",level:3},{value:"(source code)",id:"source-code",level:4},{value:"valid_date_us",id:"valid_date_us",level:3},{value:"(source code)",id:"source-code-1",level:4},{value:"valid_date_inverse",id:"valid_date_inverse",level:3},{value:"(source code)",id:"source-code-2",level:4},{value:"valid_date_iso_8601",id:"valid_date_iso_8601",level:3},{value:"(source code)",id:"source-code-3",level:4},{value:"valid_time_12h",id:"valid_time_12h",level:3},{value:"(source code)",id:"source-code-4",level:4},{value:"valid_time_24h",id:"valid_time_24h",level:3},{value:"(source code)",id:"source-code-5",level:4},{value:"valid_time",id:"valid_time",level:3},{value:"(source code)",id:"source-code-6",level:4},{value:"Numbers",id:"numbers",level:2},{value:"valid_number",id:"valid_number",level:3},{value:"(source code)",id:"source-code-7",level:4},{value:"is_number_decimal_point",id:"is_number_decimal_point",level:3},{value:"(source code)",id:"source-code-8",level:4},{value:"valid_number_decimal_comma",id:"valid_number_decimal_comma",level:3},{value:"(source code)",id:"source-code-9",level:4},{value:"valid_number_percentage",id:"valid_number_percentage",level:3},{value:"(source code)",id:"source-code-10",level:4},{value:"valid_number_percentage_point",id:"valid_number_percentage_point",level:3},{value:"(source code)",id:"source-code-11",level:4},{value:"valid_number_percentage_comma",id:"valid_number_percentage_comma",level:3},{value:"(source code)",id:"source-code-12",level:4},{value:"IP",id:"ip",level:2},{value:"valid_ip_v4",id:"valid_ip_v4",level:3},{value:"(source code)",id:"source-code-13",level:4},{value:"valid_ip_v6",id:"valid_ip_v6",level:3},{value:"(source code)",id:"source-code-14",level:4},{value:"valid_ip",id:"valid_ip",level:3},{value:"(source code)",id:"source-code-15",level:4},{value:"Email",id:"email",level:2},{value:"valid_email",id:"valid_email",level:3},{value:"(source code)",id:"source-code-16",level:4},{value:"UUID",id:"uuid",level:2},{value:"valid_uuid",id:"valid_uuid",level:3},{value:"(source code)",id:"source-code-17",level:4},{value:"Your ideas",id:"your-ideas",level:2}],s={toc:m};function p(e){var a=e.components,t=(0,n.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},s,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"data-validation"},"Data Validation"),(0,i.kt)("p",null,"Data validation refers to checking if data within your dataset, meet certain criteria. Validation often needs to be done on data that comes as text but represents something specific like number identifier, email, date, ip_address."),(0,i.kt)("p",null,"Check out the list of currently available validations and let us know if you could use some different ones on ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://www.getre.io/slack"},"Slack \ud83d\ude0a"))," or ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/re-data/re-data/issues/new?assignees=&labels=&template=macro_request.md&title=%5BMACRO%5D"},"Github")),"."),(0,i.kt)("h2",{id:"date--time"},"Date & Time"),(0,i.kt)("h3",{id:"valid_date_eu"},"valid_date_eu"),(0,i.kt)("h4",{id:"source-code"},(0,i.kt)("a",{parentName:"h4",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.valid_date_eu"},"(source code)")),(0,i.kt)("p",null,"Arguments:\n",(0,i.kt)("em",{parentName:"p"},"column: The column to perform validation on.")),(0,i.kt)("p",null,"Return type: boolean"),(0,i.kt)("p",null,"This macro checks if data meets european date format. (-./) allowed as separators."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"=> select date_time, {{ re_data.valid_date_eu('date_time')}} as valid_date_eu\n\n  date_time  | valid_date_eu\n------------+---------------\n 31-01-2020 |          true\n 01/31/2020 |         false\n 05.05.2020 |          true\n\n")),(0,i.kt)("h3",{id:"valid_date_us"},"valid_date_us"),(0,i.kt)("h4",{id:"source-code-1"},(0,i.kt)("a",{parentName:"h4",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.valid_date_us"},"(source code)")),(0,i.kt)("p",null,"Arguments:\n",(0,i.kt)("em",{parentName:"p"},"column: The column to perform validation on.")),(0,i.kt)("p",null,"Return type: boolean"),(0,i.kt)("p",null,"This macro checks if data meets us date format."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"=> select date_time, {{ re_data.valid_date_us('date_time')}} as valid_date_us\n\n  date_time  | valid_date_us\n------------+---------------\n 31-01-2020 |         false\n 01/31/2020 |          true\n 05.05.2020 |          true\n\n")),(0,i.kt)("h3",{id:"valid_date_inverse"},"valid_date_inverse"),(0,i.kt)("h4",{id:"source-code-2"},(0,i.kt)("a",{parentName:"h4",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.valid_date_inverse"},"(source code)")),(0,i.kt)("p",null,"Arguments:\n",(0,i.kt)("em",{parentName:"p"},"column: The column to perform validation on.")),(0,i.kt)("p",null,"Return type: boolean"),(0,i.kt)("p",null,"This macro checks if data is in inversed date format."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"=> select date_time, {{ re_data.valid_date_inverse('date_time')}} as valid_date_inverse\n\n date_time  | valid_date_inverse\n------------+--------------------\n 31-01-2020 |              false\n 01/31/2020 |              false\n 05.05.2020 |              false\n 2020-01-31 |               true\n")),(0,i.kt)("h3",{id:"valid_date_iso_8601"},"valid_date_iso_8601"),(0,i.kt)("h4",{id:"source-code-3"},(0,i.kt)("a",{parentName:"h4",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.valid_date_iso_8601"},"(source code)")),(0,i.kt)("p",null,"Arguments:\n",(0,i.kt)("em",{parentName:"p"},"column: The column to perform validation on.")),(0,i.kt)("p",null,"Return type: boolean"),(0,i.kt)("p",null,"This macro checks if data is valid is time format."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"=> select date_time, {{ re_data.valid_date_iso_8601('date_time')}} as valid_date_iso_8601\n\n         date_time         | valid_date_iso_8601\n---------------------------+---------------------\n 31-01-2020                |               false\n 2020-01-31T12:59:00+02:00 |                true\n 2020-01-31T12:59:00       |                true\n")),(0,i.kt)("h3",{id:"valid_time_12h"},"valid_time_12h"),(0,i.kt)("h4",{id:"source-code-4"},(0,i.kt)("a",{parentName:"h4",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.valid_time_12h"},"(source code)")),(0,i.kt)("p",null,"Arguments:\n",(0,i.kt)("em",{parentName:"p"},"column: The column to perform validation on.")),(0,i.kt)("p",null,"Return type: boolean"),(0,i.kt)("p",null,"This macro checks if data is valid 12h time (HH:MM) format."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"=> select date_time, {{ re_data.valid_time_12h('date_time')}} as valid_time_12h\n\n         date_time         | valid_time_12h\n---------------------------+----------------\n 23:59                     |          false\n 12:59                     |           true\n 13:59:01                  |          false\n")),(0,i.kt)("h3",{id:"valid_time_24h"},"valid_time_24h"),(0,i.kt)("h4",{id:"source-code-5"},(0,i.kt)("a",{parentName:"h4",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.valid_time_24h"},"(source code)")),(0,i.kt)("p",null,"Arguments:\n",(0,i.kt)("em",{parentName:"p"},"column: The column to perform validation on.")),(0,i.kt)("p",null,"Return type: boolean"),(0,i.kt)("p",null,"This macro checks if data is valid 24h time (HH:MM) format."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"=> select date_time, {{ re_data.valid_time_24h('date_time')}} as valid_time_24h\n\n         date_time         | valid_time_24h\n---------------------------+----------------\n 23:59                     |           true\n 12:59                     |           true\n 13:59:01                  |          false\n")),(0,i.kt)("h3",{id:"valid_time"},"valid_time"),(0,i.kt)("h4",{id:"source-code-6"},(0,i.kt)("a",{parentName:"h4",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.valid_time"},"(source code)")),(0,i.kt)("p",null,"Arguments:\n",(0,i.kt)("em",{parentName:"p"},"column: The column to perform validation on.")),(0,i.kt)("p",null,"Return type: boolean"),(0,i.kt)("p",null,"This macro checks if data is valid time, see examples:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"=> select date_time, {{ re_data.valid_time('date_time')}} as valid_time\n\n         date_time         | valid_time\n---------------------------+------------\n 2020-01-31                |      false\n 23:59                     |       true\n 12:59                     |       true\n 13:59:01                  |       true\n 12:59:01,55               |       true\n 11:59:00                  |       true\n")),(0,i.kt)("h2",{id:"numbers"},"Numbers"),(0,i.kt)("h3",{id:"valid_number"},"valid_number"),(0,i.kt)("h4",{id:"source-code-7"},(0,i.kt)("a",{parentName:"h4",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.valid_number"},"(source code)")),(0,i.kt)("p",null,"Arguments:\n",(0,i.kt)("em",{parentName:"p"},"column: The column to perform validation on.")),(0,i.kt)("p",null,"Return type: boolean"),(0,i.kt)("p",null,"This macro checks if data is valid integer number."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"=> select date_time, {{ re_data.valid_number('number')}} as is_number\n\n    number    | is_number\n--------------+-----------\n 133          |      true\n 1232.232     |     false\n")),(0,i.kt)("h3",{id:"is_number_decimal_point"},"is_number_decimal_point"),(0,i.kt)("h4",{id:"source-code-8"},(0,i.kt)("a",{parentName:"h4",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.is_number_decimal_point"},"(source code)")),(0,i.kt)("p",null,"Arguments:\n",(0,i.kt)("em",{parentName:"p"},"column: The column to perform validation on.")),(0,i.kt)("p",null,"Return type: boolean"),(0,i.kt)("p",null,"This macro checks if data is valid number with deciaml point."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"=> select date_time, {{ re_data.is_number_decimal_point_decimal_point('number')}} as is_number\n\n    number    | is_number_decimal_point\n--------------+-------------------------\n 133          |                   false\n 1232.232     |                    true\n")),(0,i.kt)("h3",{id:"valid_number_decimal_comma"},"valid_number_decimal_comma"),(0,i.kt)("h4",{id:"source-code-9"},(0,i.kt)("a",{parentName:"h4",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.valid_number_decimal_comma"},"(source code)")),(0,i.kt)("p",null,"Arguments:\n",(0,i.kt)("em",{parentName:"p"},"column: The column to perform validation on.")),(0,i.kt)("p",null,"Return type: boolean"),(0,i.kt)("p",null,"This macro checks if data is valid number with deciaml comma."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"=> select date_time, {{ re_data.valid_number_decimal_comma('number')}} as is_number_decimal_comma\n\n    number    | is_number_decimal_comma\n--------------+-------------------------\n 133          |                   false\n 1232.232     |                   false\n 2332,123     |                    true\n")),(0,i.kt)("h3",{id:"valid_number_percentage"},"valid_number_percentage"),(0,i.kt)("h4",{id:"source-code-10"},(0,i.kt)("a",{parentName:"h4",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.valid_number_percentage"},"(source code)")),(0,i.kt)("p",null,"Arguments:\n",(0,i.kt)("em",{parentName:"p"},"column: The column to perform validation on.")),(0,i.kt)("p",null,"Return type: boolean"),(0,i.kt)("p",null,"This macro checks if data is in percentage format."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"=> select date_time, {{ re_data.valid_number_percentage('number')}} as number_percentage\n\n    number    | is_percentage\n--------------+---------------\n 1,3%         |          true\n 123%         |          true\n 13  %        |         false\n 76.234%      |          true\n")),(0,i.kt)("h3",{id:"valid_number_percentage_point"},"valid_number_percentage_point"),(0,i.kt)("h4",{id:"source-code-11"},(0,i.kt)("a",{parentName:"h4",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.valid_number_percentage_point"},"(source code)")),(0,i.kt)("p",null,"Arguments:\n",(0,i.kt)("em",{parentName:"p"},"column: The column to perform validation on.")),(0,i.kt)("p",null,"Return type: boolean"),(0,i.kt)("p",null,"This macro checks if data in percentage format (using point for decimals)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"=> select date_time, {{ re_data.valid_number_percentage_point('number')}} as is_percentage_decimal_point\n\n    number    | is_percentage_decimal_point\n--------------+-----------------------------\n 1,3%         |                       false\n 123%         |                        true\n 13  %        |                       false\n 76.234%      |                        true\n")),(0,i.kt)("h3",{id:"valid_number_percentage_comma"},"valid_number_percentage_comma"),(0,i.kt)("h4",{id:"source-code-12"},(0,i.kt)("a",{parentName:"h4",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.valid_number_percentage_comma"},"(source code)")),(0,i.kt)("p",null,"Arguments:\n",(0,i.kt)("em",{parentName:"p"},"column: The column to perform validation on.")),(0,i.kt)("p",null,"Return type: boolean"),(0,i.kt)("p",null,"This macro checks if data in percentage format (using comma for decimals)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"=> select date_time, {{ re_data.valid_number_percentage_comma('number')}} as is_percentage_decimal_comma\n\n    number    | is_percentage_decimal_comma\n--------------+-----------------------------\n 1,3%         |                        true\n 123%         |                        true\n 13  %        |                       false\n 76.234%      |                       false\n")),(0,i.kt)("h2",{id:"ip"},"IP"),(0,i.kt)("h3",{id:"valid_ip_v4"},"valid_ip_v4"),(0,i.kt)("h4",{id:"source-code-13"},(0,i.kt)("a",{parentName:"h4",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.valid_ip_v4"},"(source code)")),(0,i.kt)("p",null,"Arguments:\n",(0,i.kt)("em",{parentName:"p"},"column: The column to perform validation on.")),(0,i.kt)("p",null,"Return type: boolean"),(0,i.kt)("p",null,"This macro checks if data is valid ip_v4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"=> select ip_address, {{ re_data.valid_ip_v4('ip_address')}} as valid_ip_v4\n               ip_address               | valid_ip_v4\n----------------------------------------+-------------\n 1.2.3.4                                |        true\n 01.102.103.104                         |        true\n 124.171.228.4                          |        true\n 192.168.1.35                           |        true\n 01.1.1                                 |       false\n")),(0,i.kt)("h3",{id:"valid_ip_v6"},"valid_ip_v6"),(0,i.kt)("h4",{id:"source-code-14"},(0,i.kt)("a",{parentName:"h4",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.valid_ip_v6"},"(source code)")),(0,i.kt)("p",null,"Arguments:\n",(0,i.kt)("em",{parentName:"p"},"column: The column to perform validation on.")),(0,i.kt)("p",null,"Return type: boolean"),(0,i.kt)("p",null,"This macro checks if data is valid ip_v6."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"=> select ip_address, {{ re_data.valid_ip_v6('ip_address')}} as valid_ip_v6\n               ip_address               | valid_ip_v6\n----------------------------------------+-------------\n 1.2.3.4                                |       false\n 2001:db8:3333:4444:5555:6666:7777:8888 |        true\n 2001:db8::                             |        true\n ::1234:5678                            |        true\n 2001:db8::1234:5678                    |        true\n ::11.22.33.44                          |        true\n 2001:db8::123.123.123.123              |        true\n 2001:db8::1234:5678:5.6.7.8            |        true\n 2001:db8:3333:4444:5555:6666:1.2.3.4   |        true\n ::11.22.33.44                          |        true\n 2001:db8::123.123.123.123              |        true\n ::1234:5678:91.123.4.56                |        true\n ::1234:5678:1.2.3.4                    |        true\n 2001:db8::1234:5678:5.6.7.8            |        true\n")),(0,i.kt)("h3",{id:"valid_ip"},"valid_ip"),(0,i.kt)("h4",{id:"source-code-15"},(0,i.kt)("a",{parentName:"h4",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.valid_ip"},"(source code)")),(0,i.kt)("p",null,"Arguments:\n",(0,i.kt)("em",{parentName:"p"},"column: The column to perform validation on.")),(0,i.kt)("p",null,"Return type: boolean"),(0,i.kt)("p",null,"This macro checks if data is valid ip either ipv4 or ipv6."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"=> select ip_address, {{ re_data.valid_ip('ip_address')}} as valid_ip\n               ip_address               | valid_ip\n----------------------------------------+----------\n 1.2.3.4                                |     true\n 232.232.33                             |    false\n 232.3232.232.232+2312                  |    false\n ::::erwerwe                            |    false\n 2001:db8:3333:4444:5555:6666:7777:8888 |     true\n")),(0,i.kt)("h2",{id:"email"},"Email"),(0,i.kt)("h3",{id:"valid_email"},"valid_email"),(0,i.kt)("h4",{id:"source-code-16"},(0,i.kt)("a",{parentName:"h4",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.valid_email"},"(source code)")),(0,i.kt)("p",null,"Arguments:\n",(0,i.kt)("em",{parentName:"p"},"column: The column to perform validation on.")),(0,i.kt)("p",null,"Return type: boolean"),(0,i.kt)("p",null,"This macro checks if data is valid email, using plus sign is not allowed (treated are error)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"=> select email, {{ re_data.valid_email('email')}} as valid_email\n              email              | valid_email\n---------------------------------+-------------\n test@fakemail.com               |        true\n novalidemail@                   |       false\n novalidemail@com                |       false\n test+alovalidemail@fakemail.com |       false\n")),(0,i.kt)("h2",{id:"uuid"},"UUID"),(0,i.kt)("h3",{id:"valid_uuid"},"valid_uuid"),(0,i.kt)("h4",{id:"source-code-17"},(0,i.kt)("a",{parentName:"h4",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.valid_uuid"},"(source code)")),(0,i.kt)("p",null,"Arguments:\n",(0,i.kt)("em",{parentName:"p"},"column: The column to perform validation on.")),(0,i.kt)("p",null,"Return type: boolean"),(0,i.kt)("p",null,"This macro checks if data is valid universally unique identifier (UUID)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"=> select uuid, {{ re_data.valid_uuid('uuid')}} as valid_uuid\n                 uuid                  | valid_uuid\n---------------------------------------+------------\n ace1245c-3af5-11ec-8d3d-0242ac130003  |       true\n notanuid                              |      false\n d0d61836-3af5-11ec-8d3d-0242ac130003  |       true\n 343422-234324-234234-4234234-23432    |      false\n 343422-234324-234234-4234234-234xxx32 |      false\n")),(0,i.kt)("h2",{id:"your-ideas"},"Your ideas"),(0,i.kt)("p",null,"If you have other suggestions of validations you would like to be supported (or you would like to add one),\n",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://www.getre.io/slack"},"let us know on Slack! \ud83d\ude0a"))))}p.isMDXComponent=!0}}]);