(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{"0oBi":function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.isDarkMode=function(){if(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches)return!0;return!1},t.useDarkMode=function(){var e=o.default.useState(!1),t=(0,r.default)(e,2),a=t[0],n=t[1];return(0,c.default)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)"),t=function(){n(window.matchMedia("(prefers-color-scheme: dark)").matches)};return t(),e.addListener(t),function(){e.removeListener(t)}}),[]),a};var r=n(a("nxTg")),o=n(a("mXGw")),c=n(a("YO29"))},"2dEL":function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/generated/cocoapods",function(){return a("UrRA")}])},"63Ad":function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},"6f/q":function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("RiSW")),o=n(a("mXGw")),c=n(a("9fEB")),d=a("GDok"),s=a("nZpd"),l=a("AFBu"),i=a("0oBi");t.default=function(){return function(e){var t=e.children,a=(0,r.default)(e,["children"]),n=o.default.useState(!1);o.default.useEffect((function(){if("undefined"!==typeof document)return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)};function e(e){"/"===e.key&&(document.getElementById("search").focus(),e.preventDefault())}}),[]);var u=(0,i.useDarkMode)();return o.default.createElement(s.MobileMenuContext.Provider,{value:a.menuState||n},o.default.createElement(c.default,null,o.default.createElement("link",{rel:"shortcut icon",media:"(prefers-color-scheme:dark)",href:(0,l.formatPath)(u?"favicon-dark.png":"favicon.png")})),o.default.createElement("div",{id:"ignite",className:"min-h-screen flex flex-col dark:bg-gray-1000"},o.default.createElement(d.NavBar,{sections:["docs","blog"],hasHomePage:!0}),t))}}},AFBu:function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.formatPath=function(e){return r.default.join("/auto","/".concat(e.replace(/\.mdx$/,"")))};var r=n(a("R8iU"))},C3pV:function(e,t,a){"use strict";(function(e){var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.Sidebar=t.SidebarActiveItem=void 0;var r=n(a("OvAC")),o=n(a("RiSW")),c=n(a("nxTg")),d=n(a("mXGw")),s=n(a("5dyF")),l=n(a("9fEB")),i=n(a("R8iU")),u=n(a("PDtE")),m=a("/FXl"),p=a("bBV7"),f=a("nZpd"),b=a("AFBu");function h(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function x(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?h(Object(a),!0).forEach((function(t){(0,r.default)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):h(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var g=d.default.createContext({pathname:"",sidebarFileLocation:""});t.SidebarActiveItem=g;var O=function(e){var t=e.href,a=e.children,n=d.default.useContext(g),r=(0,m.useMDXComponents)().SidebarLink,o=i.default.join("/auto",n.sidebarFileLocation,t),c=t;return n.sidebarFileLocation&&((c=o).endsWith("/index")&&(c=c.replace("/index","")),c.endsWith("/")&&(c=c.slice(0,-1))),d.default.createElement(s.default,{passHref:!0,href:c},d.default.createElement(r,{isActive:n.pathname.replace("/index","")===c},a))};t.Sidebar=function(t){var n=t.links,r=t.folder,s=d.default.useContext(f.MobileMenuContext),h=(0,c.default)(s,1)[0],j="/".concat(r),N=function(e){try{return a("f+ue")("./pages"+e+"/_sidebar.mdx").default}catch(t){try{return a("NDOZ")("./pages"+e+"/_sidebar.js").default}catch(t){}}}(j),v=function(t){var a=(0,p.useRouter)(),n="phase-production-build"!==e.env.NEXT_PHASE&&a.pathname.includes("/auto")?i.default.relative("/auto",a.pathname):i.default.relative("/",a.pathname),r=t.find((function(e){return e.__resourcePath.replace(".mdx","")===n}));return r||(r=t.find((function(e){var t=e.__resourcePath.replace(".mdx","");return t.endsWith("index")&&a.pathname.includes(t.replace("/index",""))}))),{title:r.title||"auto",pathname:(0,b.formatPath)(r.__resourcePath)}}(n),k=(0,m.useMDXComponents)(),y=k.SidebarItemWrapper,w=(k.SidebarLink,k.SidebarTitle),E=k.SidebarDivider,P=k.SidebarList,_=k.Sidebar,C=(0,o.default)(k,["SidebarItemWrapper","SidebarLink","SidebarTitle","SidebarDivider","SidebarList","Sidebar"]);return d.default.createElement(g.Provider,{value:x({},v,{sidebarFileLocation:N?j:""})},d.default.createElement(m.MDXProvider,{components:x({},C,{li:y,ul:P,a:O,p:w,hr:E})},d.default.createElement(l.default,null,d.default.createElement("title",null,v.title.replace(/\\`/g,"`"))),d.default.createElement(_,{className:(0,u.default)(!h&&"hidden","lg:block")},N?d.default.createElement(N,null):d.default.createElement(P,null,n.map((function(e){return d.default.createElement(y,{key:e.__resourcePath},d.default.createElement(O,{href:(0,b.formatPath)(e.__resourcePath)},e.title))}))))))}}).call(this,a("5IsQ"))},GDok:function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.NavBar=void 0;var r=n(a("nxTg")),o=n(a("8VmE")),c=n(a("RiSW")),d=n(a("mXGw")),s=n(a("5dyF")),l=a("V5Fo"),i=a("/FXl"),u=n(a("PDtE")),m=a("AFBu"),p=a("nZpd"),f=function(e){var t=e.className,a=(0,c.default)(e,["className"]);return d.default.createElement("svg",(0,o.default)({className:(0,u.default)("fill-current w-5 h-5",t),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},a),d.default.createElement("path",{d:"M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 10 0"}))},b=function(){var e=(0,i.useMDXComponents)().SearchInput;return d.default.createElement("div",{className:"relative h-full flex items-center w-full lg:w-auto lg:flex-1 lg:mr-4 px-4"},d.default.createElement(e,null))};t.NavBar=function(e){var t=e.sections,a=e.hasHomePage,n=d.default.useContext(p.MobileMenuContext),o=(0,r.default)(n,2),c=o[0],u=o[1],h=(0,i.useMDXComponents)(),x=h.Logo,g=h.NavBarWrapper,O=h.NavBar,j=h.NavBarItem,N=h.MobileMenuButton;return d.default.createElement(d.default.Fragment,null,d.default.createElement(g,null,d.default.createElement(O,null,a?d.default.createElement(s.default,{passHref:!0,href:"/"},d.default.createElement(x,null)):d.default.createElement(x,null),d.default.createElement("div",{className:"w-full h-full flex items-center lg:flex flex-1 lg:max-w-screen-md lg:mx-auto"},d.default.createElement(b,null),d.default.createElement(N,{open:c,setOpen:u,className:"lg:hidden"}),d.default.createElement("div",{className:"hidden lg:flex h-full"},t.map((function(e){return d.default.createElement(s.default,{passHref:!0,key:e,href:(0,m.formatPath)("/".concat(e))},d.default.createElement(j,null,(0,l.titleCase)(e)))})),d.default.createElement(j,{href:"https://github.com/intuit/auto",target:"_blank","aria-label":"Open on GitHub"},d.default.createElement(f,null)))))),c&&d.default.createElement("div",{className:"lg:hidden"},t.map((function(e){return d.default.createElement(s.default,{passHref:!0,key:e,href:(0,m.formatPath)("/".concat(e))},d.default.createElement(j,null,(0,l.titleCase)(e)))})),d.default.createElement(j,{href:"https://github.com/intuit/auto",target:"_blank"},d.default.createElement(f,{className:"mr-2"}),"Open on GitHub")))}},UrRA:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return p}));var n=a("Fcif"),r=a("dV/x"),o=a("mXGw"),c=a.n(o),d=a("/FXl"),s=a("pu0P"),l=a.n(s);for(var i in s)["default","default"].indexOf(i)<0&&function(e){a.d(t,e,(function(){return s[e]}))}(i);c.a.createElement;var u={},m=l()({title:"CocoaPods Plugin",layout:"docs",date:null,author:"",email:"",__resourcePath:"docs/generated/cocoapods.mdx",__scans:{}});function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(d.mdx)(m,Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(d.mdx)("p",null,"Use ",Object(d.mdx)("inlineCode",{parentName:"p"},"auto")," to version your ",Object(d.mdx)("a",Object(n.a)({parentName:"p"},{href:"https://cocoapods.org/"}),"CocoaPod"),", and push to your specs repository!"),Object(d.mdx)("h2",{id:"installation"},Object(d.mdx)("a",Object(n.a)({parentName:"h2"},{className:'header-link no-underline text-gray-900" hover:underline',href:"#installation"}),"Installation")),Object(d.mdx)("p",null,"This plugin is not included with the ",Object(d.mdx)("inlineCode",{parentName:"p"},"auto")," CLI installed via NPM. To install:"),Object(d.mdx)("pre",{className:"language-bash"},Object(d.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token function"}),"npm")," i --save-dev @auto-it/cocoapods\n",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"# or"),"\n",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token function"}),"yarn")," ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token function"}),"add")," -D @auto-it/cocoapods\n")),Object(d.mdx)("blockquote",null,Object(d.mdx)("p",{parentName:"blockquote"},'WARNING: You can only use one "package manager" at a time!\nMixing them will lead to undesired results.')),Object(d.mdx)("h2",{id:"usage"},Object(d.mdx)("a",Object(n.a)({parentName:"h2"},{className:'header-link no-underline text-gray-900" hover:underline',href:"#usage"}),"Usage")),Object(d.mdx)("pre",{className:"language-json"},Object(d.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token property"}),'"plugins"'),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"["),"\n    ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"["),"\n      ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"cocoapods"'),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n      ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n        ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"// Required, the relative path to your podspec file"),"\n        ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token property"}),'"podspecPath"'),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"./Test.podspec"'),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n        ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"// Optional, the specs repo to push to"),"\n        ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token property"}),'"specsRepo"'),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"https://github.com/intuit/TestSpecs.git"'),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n        ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"// Optional, flags to pass to the `pod repo push` command"),"\n        ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token property"}),'"flags"'),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"["),"\n          ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"--sources=https://github.com/SpecRepo.git"'),"\n        ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"]"),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n        ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"// Optional, specify a different executable for `pod`"),"\n        ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token property"}),'"podCommand"'),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"bundle exec pod"'),"\n      ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n    ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"]"),"\n    ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"// other plugins"),"\n  ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"]"),"\n",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n")),Object(d.mdx)("h2",{id:"requirements"},Object(d.mdx)("a",Object(n.a)({parentName:"h2"},{className:'header-link no-underline text-gray-900" hover:underline',href:"#requirements"}),"Requirements")),Object(d.mdx)("h3",{id:"general"},Object(d.mdx)("a",Object(n.a)({parentName:"h3"},{className:'header-link no-underline text-gray-900" hover:underline',href:"#general"}),"General")),Object(d.mdx)("ul",null,Object(d.mdx)("li",{parentName:"ul"},"The machine running this plugin must have the ",Object(d.mdx)("a",Object(n.a)({parentName:"li"},{href:"https://cocoapods.org/"}),"CocoaPods")," ",Object(d.mdx)("inlineCode",{parentName:"li"},"pod")," CLI installed already, or ",Object(d.mdx)("inlineCode",{parentName:"li"},"podCommand")," specified in your plugin configuration."),Object(d.mdx)("li",{parentName:"ul"},"Your ",Object(d.mdx)("inlineCode",{parentName:"li"},"podspec")," file must pass ",Object(d.mdx)("inlineCode",{parentName:"li"},"pod lib lint")," in order for publishing to a Specs repository to work.",Object(d.mdx)("ul",{parentName:"li"},Object(d.mdx)("li",{parentName:"ul"},"All warnings and errors must be addressed before attempting to push to a Specs repository.")))),Object(d.mdx)("h3",{id:"pushing-to-the-cocoapods-trunk"},Object(d.mdx)("a",Object(n.a)({parentName:"h3"},{className:'header-link no-underline text-gray-900" hover:underline',href:"#pushing-to-the-cocoapods-trunk"}),"Pushing to the CocoaPods Trunk")),Object(d.mdx)("p",null,"If a ",Object(d.mdx)("inlineCode",{parentName:"p"},"specsRepo")," is not provided in the plugin options, this plugin will push to the CocoaPods trunk repository. This requires that the machine running this has followed the steps for pushing to trunk, the guide for that can be found ",Object(d.mdx)("a",Object(n.a)({parentName:"p"},{href:"https://guides.cocoapods.org/making/getting-setup-with-trunk.html#getting-started"}),"here"),"."),Object(d.mdx)("h3",{id:"pushing-to-a-private-specs-repo"},Object(d.mdx)("a",Object(n.a)({parentName:"h3"},{className:'header-link no-underline text-gray-900" hover:underline',href:"#pushing-to-a-private-specs-repo"}),"Pushing to a private specs repo")),Object(d.mdx)("p",null,"If ",Object(d.mdx)("inlineCode",{parentName:"p"},"specsRepo")," is provided in the configuration, this plugin will add that repo under a temporary name, push to it, and remove the repo from the CocoaPods installation on the machine. The machine that is running the plugin must have the appropriate git credentials to push to that repository."),Object(d.mdx)("h4",{id:"note"},Object(d.mdx)("a",Object(n.a)({parentName:"h4"},{className:'header-link no-underline text-gray-900" hover:underline',href:"#note"}),"Note")),Object(d.mdx)("p",null,"When pushing to a private Specs repo, this plugin will temporarily create a repository with the name ",Object(d.mdx)("inlineCode",{parentName:"p"},"autoPublishRepo")," using ",Object(d.mdx)("inlineCode",{parentName:"p"},"pod repo add"),", and will remove it when the release has completed."))}p.isMDXComponent=!0},nZpd:function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.MobileMenuContext=void 0;var r=n(a("mXGw")).default.createContext([!1,function(){}]);t.MobileMenuContext=r},pu0P:function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("nxTg")),o=n(a("mXGw")),c=n(a("R8iU")),d=a("/FXl"),s=n(a("PDtE")),l=a("C3pV"),i=n(a("6f/q")),u=n(a("x3GE")),m=(0,i.default)(),p=/([^`]*)`([^`]*)`(.*)/m;t.default=function(e){return function(t){var a=t.children,n=o.default.useState(!1),i=(0,r.default)(n,2),f=i[0],b=i[1],h=(0,d.useMDXComponents)(),x=e.__resourcePath.split("/")[0],g=(0,u.default)(),O=["index.mdx","blog/both-worlds.mdx","blog/npm-canary-scope.mdx","blog/pr-in-progress.mdx","blog/using-shipit.mdx","blog/v8.mdx","blog/why.mdx","docs/_sidebar.mdx","docs/index.mdx","docs/build-platforms/circleci.mdx","docs/build-platforms/github-actions.mdx","docs/build-platforms/jenkins.mdx","docs/build-platforms/travis.mdx","docs/configuration/autorc.mdx","docs/configuration/non-npm.mdx","docs/configuration/plugins.mdx","docs/configuration/troubleshooting.mdx","docs/generated/all-contributors.mdx","docs/generated/brew.mdx","docs/generated/canary.mdx","docs/generated/changelog.mdx","docs/generated/chrome.mdx","docs/generated/cocoapods.mdx","docs/generated/comment.mdx","docs/generated/conventional-commits.mdx","docs/generated/crates.mdx","docs/generated/create-labels.mdx","docs/generated/exec.mdx","docs/generated/first-time-contributor.mdx","docs/generated/gem.mdx","docs/generated/gh-pages.mdx","docs/generated/git-tag.mdx","docs/generated/gradle.mdx","docs/generated/info.mdx","docs/generated/init.mdx","docs/generated/jira.mdx","docs/generated/label.mdx","docs/generated/latest.mdx","docs/generated/maven.mdx","docs/generated/next.mdx","docs/generated/npm.mdx","docs/generated/omit-commits.mdx","docs/generated/omit-release-notes.mdx","docs/generated/pr-body.mdx","docs/generated/pr-check.mdx","docs/generated/pr-status.mdx","docs/generated/release.mdx","docs/generated/released.mdx","docs/generated/s3.mdx","docs/generated/shipit.mdx","docs/generated/slack.mdx","docs/generated/twitter.mdx","docs/generated/upload-assets.mdx","docs/generated/version.mdx","docs/plugins/changelog-hooks.mdx","docs/plugins/configuration-hooks.mdx","docs/plugins/hook-api-docs.mdx","docs/plugins/init-hooks.mdx","docs/plugins/log-parse-hooks.mdx","docs/plugins/release-lifecycle-hooks.mdx","docs/plugins/writing-plugins.mdx","docs/plugins/writing-publishing-plugins.mdx","docs/welcome/getting-started.mdx","docs/welcome/quick-merge.mdx"].map((function(e){return c.default.relative("./",e)})).filter((function(e){return e.startsWith(x)})).map((function(e){return g.find((function(t){return t.__resourcePath===e}))}));return o.default.createElement(m,{menuState:[f,b]},o.default.createElement("div",{className:"flex flex-1 w-full max-w-screen-sm lg:max-w-screen-xl mx-auto"},o.default.createElement(l.Sidebar,{links:O,folder:x}),o.default.createElement("main",{className:(0,s.default)("DocSearch-content","pt-8 pb-32 px-4 lg:mx-auto max-w-full md:max-w-screen-sm lg:max-w-screen-md","flex-1","lg:block",f&&"hidden")},o.default.createElement(h.h1,null,function(e,t){if(t){for(var a=[],n=t.replace(/\\`/g,"`");p.test(n);){var c=n.match(p),d=(0,r.default)(c,4),s=d[1],l=d[2],i=d[3];a.push(s),a.push(o.default.createElement(e.inlineCode,null,l)),n=i}return a.push(n),o.default.createElement("div",null,a)}}(h,e.title)),a)))}}},x3GE:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a("jmz1");t.default=function(){try{return n.keys().map(n)}catch(e){return[]}}}},[["2dEL",0,1,2,3,4]]]);