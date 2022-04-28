"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[306],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return p}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(a),p=r,f=d["".concat(c,".").concat(p)]||d[p]||m[p]||l;return a?n.createElement(f,o(o({ref:t},u),{},{components:a})):n.createElement(f,o({ref:t},u))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6669:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return m}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),o=["components"],i={sidebar_position:1},c="Data Cleaning",s={unversionedId:"reference/macros/data_cleaning",id:"reference/macros/data_cleaning",title:"Data Cleaning",description:"Data cleaning refers to fixing incorrect, corrupted, incorrectly formatted data within a dataset. They sometime come up and there could be a need to further clean up the data before it could be used by downstream systems.",source:"@site/docs/reference/macros/data_cleaning.md",sourceDirName:"reference/macros",slug:"/reference/macros/data_cleaning",permalink:"/fix-normalize-tables-exported-by-dbt/docs/reference/macros/data_cleaning",editUrl:"https://github.com/re-data/re-data/edit/master/docs/docs/reference/macros/data_cleaning.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Testing metrics",permalink:"/fix-normalize-tables-exported-by-dbt/docs/reference/tests/metrics"},next:{title:"Data Filtering",permalink:"/fix-normalize-tables-exported-by-dbt/docs/reference/macros/data_filtering"}},u={},m=[{value:"clean_additional_whitespaces",id:"clean_additional_whitespaces",level:3},{value:"(source code)",id:"source-code",level:4},{value:"clean_blacklist",id:"clean_blacklist",level:3},{value:"(source code)",id:"source-code-1",level:4},{value:"clean_capitalize_words",id:"clean_capitalize_words",level:3},{value:"(source code)",id:"source-code-2",level:4},{value:"Your ideas",id:"your-ideas",level:2}],d={toc:m};function p(e){var t=e.components,a=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"data-cleaning"},"Data Cleaning"),(0,l.kt)("p",null,"Data cleaning refers to fixing incorrect, corrupted, incorrectly formatted data within a dataset. They sometime come up and there could be a need to further clean up the data before it could be used by downstream systems."),(0,l.kt)("p",null,"re_data provides the fol macros to help reduce the time required to clean up a dataset. Check out the list of data cleaning macros available and let us know if you could use some different ones on ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"https://www.getre.io/slack"},"Slack \ud83d\ude0a"))," or ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"https://github.com/re-data/re-data/issues/new?assignees=&labels=&template=macro_request.md&title=%5BMACRO%5D"},"Github")),"."),(0,l.kt)("h3",{id:"clean_additional_whitespaces"},"clean_additional_whitespaces"),(0,l.kt)("h4",{id:"source-code"},(0,l.kt)("a",{parentName:"h4",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.clean_additional_whitespaces"},"(source code)")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Arguments:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"column: The column name or column expression to perform the cleaning operation on."))),(0,l.kt)("p",null,"Returns: text with removed whitespaces"),(0,l.kt)("p",null,"This macro helps clean additional whitespaces between words ensuring that the maximum whitespace character between two words is one. Trailing and leading whitespaces are also removed using the ",(0,l.kt)("inlineCode",{parentName:"p"},"trim")," function."),(0,l.kt)("p",null,"The example below shows how the macro can be used to fix incorrectly formatted names in a sample user table."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"=> select\n    full_name,\n    {{ re_data.clean_additional_whitespaces('full_name') }} as corrected_full_name\nfrom {{ ref('sample_user_data') }}\n\n  full_name             |   corrected_full_name  |   \n-------------------------------------------------+\n  lizzie effertz        |  lizzie effertz        |\n  orlando abbott        |  orlando abbott        |\n kelley     harann      |  kelley harann         |\n ruth   langworth       |  ruth langworth        |\n lane swift             |  lane swift            |\n")),(0,l.kt)("h3",{id:"clean_blacklist"},"clean_blacklist"),(0,l.kt)("h4",{id:"source-code-1"},(0,l.kt)("a",{parentName:"h4",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.clean_blacklist"},"(source code)")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Arguments:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"column: The column name or column expression to perform the cleaning operation on.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"chars_to_blacklist: List of words or regex patterns to match in the column.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"replacement: a string that will replace each occurrence of the word or regex pattern."))),(0,l.kt)("p",null,"Returns: text with blacklisted characters replaced with ",(0,l.kt)("em",{parentName:"p"},"replacement")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'=> select \n    email,\n    {{ re_data.clean_blacklist("email", ["^[a-zA-Z0-9_.+-]+"], "*****") }} as redacted_email \nfrom {{ ref("sample_user_data") }}\n\n  email                          |   redacted_email        |   \n-----------------------------------------------------------+\n torp.trisha@fakemail.com        |  *****@fakemail.com     |\n dayton.hermiston@fakemail.com   |  *****@fakemail.com     |\n borer.blake@fakemail.com        |  *****@fakemail.com     |\n garett66@fakemail.com           |  *****@fakemail.com     |\n nienow.coralie@fakemail.com     |  *****@fakemail.com     |\n')),(0,l.kt)("p",null,"This macro helps find certain words or regex pattern in a given column and replace it with the given replacement value."),(0,l.kt)("h3",{id:"clean_capitalize_words"},"clean_capitalize_words"),(0,l.kt)("h4",{id:"source-code-2"},(0,l.kt)("a",{parentName:"h4",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.clean_capitalize_words"},"(source code)")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Arguments:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("em",{parentName:"p"},"column: The column name or column expression to perform the cleaning operation on.")),(0,l.kt)("p",{parentName:"li"},"  This macro helps capitalize the first letter of each word in a string."))),(0,l.kt)("p",null,"Returns: text with capitalized words"),(0,l.kt)("p",null,"Below shows a sample table that contains badly formatted full names. We would like to clean up the extra whitespaces and capitalize the names. Also we want to redact the username part of the email addresses."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"=> select\n        full_name,\n        {{ re_data.clean_capitalize_words('full_name') }} as capitalized_full_name\n    from {{ ref('sample_user_data') }}\n\n   full_name            |  capitalized_full_name    |\n----------------------------------------------------+\n  lizzie effertz        |   Lizzie Effertz          |\n  orlando abbott        |   Orlando Abbott          |\n  kelley harann         |   Kelly Harann            |\n  ruth langworth        |   Ruth Langworth          |\n  lane swift            |   Lane Swift              |\n")),(0,l.kt)("p",null,"If you have any suggesstions please feel free to raise an issue ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/re-data/re-data/issues"},"here"),"."),(0,l.kt)("h2",{id:"your-ideas"},"Your ideas"),(0,l.kt)("p",null,"If you have other suggestions of cleaning data which you would like to be supported\n",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"https://www.getre.io/slack"},"let us know on Slack! \ud83d\ude0a"))))}p.isMDXComponent=!0}}]);