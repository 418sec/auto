(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{"0oBi":function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.isDarkMode=function(){if(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches)return!0;return!1},t.useDarkMode=function(){var e=o.default.useState(!1),t=(0,c.default)(e,2),a=t[0],n=t[1];return(0,r.default)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)"),t=function(){n(window.matchMedia("(prefers-color-scheme: dark)").matches)};return t(),e.addListener(t),function(){e.removeListener(t)}}),[]),a};var c=n(a("nxTg")),o=n(a("mXGw")),r=n(a("YO29"))},"63Ad":function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},"6f/q":function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=n(a("RiSW")),o=n(a("mXGw")),r=n(a("9fEB")),d=a("GDok"),s=a("nZpd"),m=a("AFBu"),l=a("0oBi");t.default=function(){return function(e){var t=e.children,a=(0,c.default)(e,["children"]),n=o.default.useState(!1);o.default.useEffect((function(){if("undefined"!==typeof document)return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)};function e(e){"/"===e.key&&(document.getElementById("search").focus(),e.preventDefault())}}),[]);var u=(0,l.useDarkMode)();return o.default.createElement(s.MobileMenuContext.Provider,{value:a.menuState||n},o.default.createElement(r.default,null,o.default.createElement("link",{rel:"shortcut icon",media:"(prefers-color-scheme:dark)",href:(0,m.formatPath)(u?"favicon-dark.png":"favicon.png")})),o.default.createElement("div",{id:"ignite",className:"min-h-screen flex flex-col dark:bg-gray-1000"},o.default.createElement(d.NavBar,{sections:["docs","blog"],hasHomePage:!0}),t))}}},"6ymM":function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return p}));var n=a("Fcif"),c=a("dV/x"),o=a("mXGw"),r=a.n(o),d=a("/FXl"),s=a("pu0P"),m=a.n(s);for(var l in s)["default","default"].indexOf(l)<0&&function(e){a.d(t,e,(function(){return s[e]}))}(l);r.a.createElement;var u={},i=m()({title:"Brew Plugin",layout:"docs",date:null,author:"",email:"",__resourcePath:"docs/generated/brew.mdx",__scans:{}});function p(e){var t=e.components,a=Object(c.a)(e,["components"]);return Object(d.mdx)(i,Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(d.mdx)("p",null,"Automate the creation of Homebrew formulae.\nThis plugin can be use with any other package manager plugin."),Object(d.mdx)("blockquote",null,Object(d.mdx)("p",{parentName:"blockquote"},"NOTE: This plugin does not work in ",Object(d.mdx)("inlineCode",{parentName:"p"},"lerna")," monorepos that use ",Object(d.mdx)("inlineCode",{parentName:"p"},"independent")," versioning.")),Object(d.mdx)("h2",{id:"installation"},Object(d.mdx)("a",Object(n.a)({parentName:"h2"},{className:'header-link no-underline text-gray-900" hover:underline',href:"#installation"}),"Installation")),Object(d.mdx)("p",null,"This plugin is not included with the ",Object(d.mdx)("inlineCode",{parentName:"p"},"auto")," CLI installed via NPM. To install:"),Object(d.mdx)("pre",{className:"language-bash"},Object(d.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token function"}),"npm")," i --save-dev @auto-it/brew\n",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"# or"),"\n",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token function"}),"yarn")," ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token function"}),"add")," -D @auto-it/brew\n")),Object(d.mdx)("h2",{id:"usage"},Object(d.mdx)("a",Object(n.a)({parentName:"h2"},{className:'header-link no-underline text-gray-900" hover:underline',href:"#usage"}),"Usage")),Object(d.mdx)("p",null,"To use this plugin you will need to add the required configuration and a template file."),Object(d.mdx)("ul",null,Object(d.mdx)("li",{parentName:"ul"},Object(d.mdx)("inlineCode",{parentName:"li"},"executable")," - REQUIRED: The executable to create a formula for"),Object(d.mdx)("li",{parentName:"ul"},Object(d.mdx)("inlineCode",{parentName:"li"},"name")," - REQUIRED: The name of the formula to create"),Object(d.mdx)("li",{parentName:"ul"},Object(d.mdx)("inlineCode",{parentName:"li"},"formula")," - A path to the formula template. Default is './formula-template.rb'")),Object(d.mdx)("pre",{className:"language-json"},Object(d.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token property"}),'"plugins"'),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"["),"\n    ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"["),"\n      ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"brew"'),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n      ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n        ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token property"}),'"executable"'),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"path/to/some/executable"'),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n        ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token property"}),'"name"'),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"name-of-formula"'),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n        ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token property"}),'"formula"'),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"path/to/formula/template"'),"\n      ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n    ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"]"),"\n  ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"]"),"\n",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n")),Object(d.mdx)("p",null,"Create a template name ",Object(d.mdx)("inlineCode",{parentName:"p"},"./formula-template.rb")," at the root of the project (or use the ",Object(d.mdx)("inlineCode",{parentName:"p"},"formula")," option to customize the location)/\nThe template file must be a valid homebrew ruby file."),Object(d.mdx)("p",null,Object(d.mdx)("inlineCode",{parentName:"p"},"auto")," will replace the following tokens in the template file:"),Object(d.mdx)("ul",null,Object(d.mdx)("li",{parentName:"ul"},Object(d.mdx)("inlineCode",{parentName:"li"},"$VERSION")," - The version being published"),Object(d.mdx)("li",{parentName:"ul"},Object(d.mdx)("inlineCode",{parentName:"li"},"$SHA")," - The sha of the executable being included in the formula")),Object(d.mdx)("p",null,"Here is the template ",Object(d.mdx)("inlineCode",{parentName:"p"},"auto")," uses to publish it's own ",Object(d.mdx)("inlineCode",{parentName:"p"},"brew")," formula:"),Object(d.mdx)("pre",{className:"language-ruby"},Object(d.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-ruby"}),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token keyword"}),"class")," ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token class-name"}),"Auto")," ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),"<")," ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token constant"}),"Formula"),"\n  desc ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"Generate releases based on semantic version labels on pull requests."'),"\n  homepage ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"https://intuit.github.io/auto/home.html"'),"\n  url ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"https://github.com/intuit/auto/releases/download/$VERSION/auto-macos.gz"'),"\n  version ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"$VERSION"'),"\n  sha256 ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"$SHA"'),"\n\n  ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token keyword"}),"def")," ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token method-definition"}),Object(d.mdx)("span",Object(n.a)({parentName:"span"},{className:"token function"}),"install")),"\n    libexec",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"."),"install ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token builtin"}),"Dir"),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"["),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"*"'),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"]"),"\n    bin",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"."),"install libexec",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),"/"),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"auto-macos"'),"\n    mv bin",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),"/"),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"auto-macos"'),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),",")," bin",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),"/"),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"auto"'),"\n  ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token keyword"}),"end"),"\n\n  test ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token keyword"}),"do"),"\n    system bin",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),"/"),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"auto"'),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),",")," ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"--version"'),"\n  ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token keyword"}),"end"),"\n",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token keyword"}),"end"),"\n")),Object(d.mdx)("h3",{id:"multiple-formulae"},Object(d.mdx)("a",Object(n.a)({parentName:"h3"},{className:'header-link no-underline text-gray-900" hover:underline',href:"#multiple-formulae"}),"Multiple Formulae")),Object(d.mdx)("p",null,"You can also use this to create multiple ",Object(d.mdx)("inlineCode",{parentName:"p"},"brew")," formulae."),Object(d.mdx)("pre",{className:"language-json"},Object(d.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token property"}),'"plugins"'),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"["),"\n    ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"["),"\n      ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"brew"'),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n      ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"["),"\n        ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n          ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token property"}),'"executable"'),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"path/to/some/executable"'),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n          ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token property"}),'"name"'),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"name-of-formula"'),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n          ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token property"}),'"formula"'),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"path/to/formula/template"'),"\n        ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n        ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n          ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token property"}),'"executable"'),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"path/to/another/executable"'),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n          ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token property"}),'"name"'),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"another-formula"'),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n          ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token property"}),'"formula"'),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"path/to/formula/another"'),"\n        ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n      ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"]"),"\n    ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"]"),"\n  ",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"]"),"\n",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n")))}p.isMDXComponent=!0},AFBu:function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.formatPath=function(e){return c.default.join("/auto","/".concat(e.replace(/\.mdx$/,"")))};var c=n(a("R8iU"))},C3pV:function(e,t,a){"use strict";(function(e){var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.Sidebar=t.SidebarActiveItem=void 0;var c=n(a("OvAC")),o=n(a("RiSW")),r=n(a("nxTg")),d=n(a("mXGw")),s=n(a("5dyF")),m=n(a("9fEB")),l=n(a("R8iU")),u=n(a("PDtE")),i=a("/FXl"),p=a("bBV7"),b=a("nZpd"),f=a("AFBu");function O(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function j(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?O(Object(a),!0).forEach((function(t){(0,c.default)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):O(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var x=d.default.createContext({pathname:"",sidebarFileLocation:""});t.SidebarActiveItem=x;var N=function(e){var t=e.href,a=e.children,n=d.default.useContext(x),c=(0,i.useMDXComponents)().SidebarLink,o=l.default.join("/auto",n.sidebarFileLocation,t),r=t;return n.sidebarFileLocation&&((r=o).endsWith("/index")&&(r=r.replace("/index","")),r.endsWith("/")&&(r=r.slice(0,-1))),d.default.createElement(s.default,{passHref:!0,href:r},d.default.createElement(c,{isActive:n.pathname.replace("/index","")===r},a))};t.Sidebar=function(t){var n=t.links,c=t.folder,s=d.default.useContext(b.MobileMenuContext),O=(0,r.default)(s,1)[0],g="/".concat(c),h=function(e){try{return a("f+ue")("./pages"+e+"/_sidebar.mdx").default}catch(t){try{return a("NDOZ")("./pages"+e+"/_sidebar.js").default}catch(t){}}}(g),k=function(t){var a=(0,p.useRouter)(),n="phase-production-build"!==e.env.NEXT_PHASE&&a.pathname.includes("/auto")?l.default.relative("/auto",a.pathname):l.default.relative("/",a.pathname),c=t.find((function(e){return e.__resourcePath.replace(".mdx","")===n}));return c||(c=t.find((function(e){var t=e.__resourcePath.replace(".mdx","");return t.endsWith("index")&&a.pathname.includes(t.replace("/index",""))}))),{title:c.title||"auto",pathname:(0,f.formatPath)(c.__resourcePath)}}(n),v=(0,i.useMDXComponents)(),w=v.SidebarItemWrapper,E=(v.SidebarLink,v.SidebarTitle),y=v.SidebarDivider,_=v.SidebarList,P=v.Sidebar,M=(0,o.default)(v,["SidebarItemWrapper","SidebarLink","SidebarTitle","SidebarDivider","SidebarList","Sidebar"]);return d.default.createElement(x.Provider,{value:j({},k,{sidebarFileLocation:h?g:""})},d.default.createElement(i.MDXProvider,{components:j({},M,{li:w,ul:_,a:N,p:E,hr:y})},d.default.createElement(m.default,null,d.default.createElement("title",null,k.title.replace(/\\`/g,"`"))),d.default.createElement(P,{className:(0,u.default)(!O&&"hidden","lg:block")},h?d.default.createElement(h,null):d.default.createElement(_,null,n.map((function(e){return d.default.createElement(w,{key:e.__resourcePath},d.default.createElement(N,{href:(0,f.formatPath)(e.__resourcePath)},e.title))}))))))}}).call(this,a("5IsQ"))},GDok:function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.NavBar=void 0;var c=n(a("nxTg")),o=n(a("8VmE")),r=n(a("RiSW")),d=n(a("mXGw")),s=n(a("5dyF")),m=a("V5Fo"),l=a("/FXl"),u=n(a("PDtE")),i=a("AFBu"),p=a("nZpd"),b=function(e){var t=e.className,a=(0,r.default)(e,["className"]);return d.default.createElement("svg",(0,o.default)({className:(0,u.default)("fill-current w-5 h-5",t),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},a),d.default.createElement("path",{d:"M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 10 0"}))},f=function(){var e=(0,l.useMDXComponents)().SearchInput;return d.default.createElement("div",{className:"relative h-full flex items-center w-full lg:w-auto lg:flex-1 lg:mr-4 px-4"},d.default.createElement(e,null))};t.NavBar=function(e){var t=e.sections,a=e.hasHomePage,n=d.default.useContext(p.MobileMenuContext),o=(0,c.default)(n,2),r=o[0],u=o[1],O=(0,l.useMDXComponents)(),j=O.Logo,x=O.NavBarWrapper,N=O.NavBar,g=O.NavBarItem,h=O.MobileMenuButton;return d.default.createElement(d.default.Fragment,null,d.default.createElement(x,null,d.default.createElement(N,null,a?d.default.createElement(s.default,{passHref:!0,href:"/"},d.default.createElement(j,null)):d.default.createElement(j,null),d.default.createElement("div",{className:"w-full h-full flex items-center lg:flex flex-1 lg:max-w-screen-md lg:mx-auto"},d.default.createElement(f,null),d.default.createElement(h,{open:r,setOpen:u,className:"lg:hidden"}),d.default.createElement("div",{className:"hidden lg:flex h-full"},t.map((function(e){return d.default.createElement(s.default,{passHref:!0,key:e,href:(0,i.formatPath)("/".concat(e))},d.default.createElement(g,null,(0,m.titleCase)(e)))})),d.default.createElement(g,{href:"https://github.com/intuit/auto",target:"_blank","aria-label":"Open on GitHub"},d.default.createElement(b,null)))))),r&&d.default.createElement("div",{className:"lg:hidden"},t.map((function(e){return d.default.createElement(s.default,{passHref:!0,key:e,href:(0,i.formatPath)("/".concat(e))},d.default.createElement(g,null,(0,m.titleCase)(e)))})),d.default.createElement(g,{href:"https://github.com/intuit/auto",target:"_blank"},d.default.createElement(b,{className:"mr-2"}),"Open on GitHub")))}},KYsp:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/generated/brew",function(){return a("6ymM")}])},nZpd:function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.MobileMenuContext=void 0;var c=n(a("mXGw")).default.createContext([!1,function(){}]);t.MobileMenuContext=c},pu0P:function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=n(a("nxTg")),o=n(a("mXGw")),r=n(a("R8iU")),d=a("/FXl"),s=n(a("PDtE")),m=a("C3pV"),l=n(a("6f/q")),u=n(a("x3GE")),i=(0,l.default)(),p=/([^`]*)`([^`]*)`(.*)/m;t.default=function(e){return function(t){var a=t.children,n=o.default.useState(!1),l=(0,c.default)(n,2),b=l[0],f=l[1],O=(0,d.useMDXComponents)(),j=e.__resourcePath.split("/")[0],x=(0,u.default)(),N=["index.mdx","blog/both-worlds.mdx","blog/npm-canary-scope.mdx","blog/pr-in-progress.mdx","blog/using-shipit.mdx","blog/v8.mdx","blog/why.mdx","docs/_sidebar.mdx","docs/index.mdx","docs/build-platforms/circleci.mdx","docs/build-platforms/github-actions.mdx","docs/build-platforms/jenkins.mdx","docs/build-platforms/travis.mdx","docs/configuration/autorc.mdx","docs/configuration/non-npm.mdx","docs/configuration/plugins.mdx","docs/configuration/troubleshooting.mdx","docs/generated/all-contributors.mdx","docs/generated/brew.mdx","docs/generated/canary.mdx","docs/generated/changelog.mdx","docs/generated/chrome.mdx","docs/generated/cocoapods.mdx","docs/generated/comment.mdx","docs/generated/conventional-commits.mdx","docs/generated/crates.mdx","docs/generated/create-labels.mdx","docs/generated/exec.mdx","docs/generated/first-time-contributor.mdx","docs/generated/gem.mdx","docs/generated/gh-pages.mdx","docs/generated/git-tag.mdx","docs/generated/gradle.mdx","docs/generated/info.mdx","docs/generated/init.mdx","docs/generated/jira.mdx","docs/generated/label.mdx","docs/generated/latest.mdx","docs/generated/maven.mdx","docs/generated/next.mdx","docs/generated/npm.mdx","docs/generated/omit-commits.mdx","docs/generated/omit-release-notes.mdx","docs/generated/pr-body.mdx","docs/generated/pr-check.mdx","docs/generated/pr-status.mdx","docs/generated/release.mdx","docs/generated/released.mdx","docs/generated/s3.mdx","docs/generated/shipit.mdx","docs/generated/slack.mdx","docs/generated/twitter.mdx","docs/generated/upload-assets.mdx","docs/generated/version.mdx","docs/plugins/changelog-hooks.mdx","docs/plugins/configuration-hooks.mdx","docs/plugins/hook-api-docs.mdx","docs/plugins/init-hooks.mdx","docs/plugins/log-parse-hooks.mdx","docs/plugins/release-lifecycle-hooks.mdx","docs/plugins/writing-plugins.mdx","docs/plugins/writing-publishing-plugins.mdx","docs/welcome/getting-started.mdx","docs/welcome/quick-merge.mdx"].map((function(e){return r.default.relative("./",e)})).filter((function(e){return e.startsWith(j)})).map((function(e){return x.find((function(t){return t.__resourcePath===e}))}));return o.default.createElement(i,{menuState:[b,f]},o.default.createElement("div",{className:"flex flex-1 w-full max-w-screen-sm lg:max-w-screen-xl mx-auto"},o.default.createElement(m.Sidebar,{links:N,folder:j}),o.default.createElement("main",{className:(0,s.default)("DocSearch-content","pt-8 pb-32 px-4 lg:mx-auto max-w-full md:max-w-screen-sm lg:max-w-screen-md","flex-1","lg:block",b&&"hidden")},o.default.createElement(O.h1,null,function(e,t){if(t){for(var a=[],n=t.replace(/\\`/g,"`");p.test(n);){var r=n.match(p),d=(0,c.default)(r,4),s=d[1],m=d[2],l=d[3];a.push(s),a.push(o.default.createElement(e.inlineCode,null,m)),n=l}return a.push(n),o.default.createElement("div",null,a)}}(O,e.title)),a)))}}},x3GE:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a("jmz1");t.default=function(){try{return n.keys().map(n)}catch(e){return[]}}}},[["KYsp",0,1,2,3,4]]]);