"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[926],{4765:function(e,t,n){n.d(t,{F:function(){return h},Z:function(){return b}});var a=n(6459),r=n(7294),o=n(977),i=n(9935),l=n(1131),c=n(6799),s=n(8871),m=function(e){e.post;return null},u=n(9706),d=n(3494),p=["16px","8px","4px"].map((function(e){return"rgba(0, 0, 0, 0.1) 0px "+e+" "+e+" 0px"})),g=function(e){var t=e.data.post,n=e.children;return(0,o.tZ)(l.Z,null,(0,o.tZ)(i.X6,{as:"h1",variant:"styles.h1"},t.title),(0,o.tZ)("p",{sx:{color:"secondary",mt:3,a:{color:"secondary"},fontSize:[1,1,2]}},(0,o.tZ)("time",null,t.date),t.tags&&(0,o.tZ)(r.Fragment,null," — ",(0,o.tZ)(c.Z,{tags:t.tags})),t.timeToRead&&" — ",t.timeToRead&&(0,o.tZ)("span",null,t.timeToRead," min read")),(0,o.tZ)("section",{sx:{my:5,".gatsby-resp-image-wrapper":{my:[4,4,5],borderRadius:"4px",boxShadow:p.join(", "),".gatsby-resp-image-image":{borderRadius:"4px"}},variant:"layout.content"}},n),(0,o.tZ)(m,{post:t}))},h=function(e){var t,n,a,r=e.data.post,i=(0,d.Z)(),l=i.basePath,c=i.blogPath;return(0,o.tZ)(s.Z,{title:r.title,description:r.description?r.description:r.excerpt,image:r.banner?null===(t=r.banner)||void 0===t||null===(n=t.childImageSharp)||void 0===n||null===(a=n.resize)||void 0===a?void 0:a.src:void 0,pathname:(0,u.Z)("/"+l+"/"+c+"/"+r.slug),canonicalUrl:r.canonicalUrl})};function b(e){var t=Object.assign({},((0,a.Z)(e),e));return r.createElement(g,t)}},6799:function(e,t,n){var a=n(977),r=n(7294),o=n(1082),i=n(3494),l=n(9706);t.Z=function(e){var t=e.tags,n=(0,i.Z)(),c=n.tagsPath,s=n.basePath;return(0,a.tZ)(r.Fragment,null,t.map((function(e,t){return(0,a.tZ)(r.Fragment,{key:e.slug},!!t&&", ",(0,a.tZ)(o.Link,{sx:function(e){var t;return Object.assign({},null===(t=e.styles)||void 0===t?void 0:t.a)},to:(0,l.Z)("/"+s+"/"+c+"/"+e.slug)},e.name))})))}},8871:function(e,t,n){var a=n(7294),r=n(1082),o=n(4232);t.Z=function(e){var t=e.title,n=void 0===t?"":t,i=e.description,l=void 0===i?"":i,c=e.pathname,s=void 0===c?"":c,m=e.image,u=void 0===m?"":m,d=e.children,p=void 0===d?null:d,g=e.canonicalUrl,h=void 0===g?"":g,b=(0,o.Z)(),v=b.siteTitle,f=b.siteTitleAlt,E=b.siteUrl,y=b.siteDescription,w=b.siteImage,x=b.author,Z={title:n?n+" | "+v:f,description:l||y,url:""+E+(s||""),image:""+E+(u||w)};return a.createElement(a.Fragment,null,a.createElement("title",null,Z.title),a.createElement("meta",{name:"description",content:Z.description}),a.createElement("meta",{name:"image",content:Z.image}),a.createElement("meta",{property:"og:title",content:Z.title}),a.createElement("meta",{property:"og:url",content:Z.url}),a.createElement("meta",{property:"og:description",content:Z.description}),a.createElement("meta",{property:"og:image",content:Z.image}),a.createElement("meta",{property:"og:type",content:"website"}),a.createElement("meta",{property:"og:image:alt",content:Z.description}),a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),a.createElement("meta",{name:"twitter:title",content:Z.title}),a.createElement("meta",{name:"twitter:url",content:Z.url}),a.createElement("meta",{name:"twitter:description",content:Z.description}),a.createElement("meta",{name:"twitter:image",content:Z.image}),a.createElement("meta",{name:"twitter:image:alt",content:Z.description}),a.createElement("meta",{name:"twitter:creator",content:x}),a.createElement("meta",{name:"gatsby-theme",content:"@lekoarts/gatsby-theme-minimal-blog"}),a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,r.withPrefix)("/favicon-32x32.png")}),a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:(0,r.withPrefix)("/favicon-16x16.png")}),a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:(0,r.withPrefix)("/apple-touch-icon.png")}),h?a.createElement("link",{rel:"canonical",href:h}):null,p)}},5609:function(e,t,n){n.r(t),n.d(t,{Head:function(){return l.F},default:function(){return c}});var a=n(7294),r=n(9626);function o(e){var t=Object.assign({p:"p",em:"em",a:"a",code:"code",pre:"pre",ul:"ul",li:"li"},(0,r.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(t.p,null,"If you're a Gmail user, but want a native app like experience, you might be using the ",a.createElement(t.em,null,"Create shortcut...")," feature available in Chrome and Chrome-based browsers, such as ",a.createElement(t.a,{href:"https://vivaldi.com/download/"},"Vivaldi"),". This feature opens a specific URL, such as ",a.createElement(t.code,null,"https://gmail.com/"),", in a dedicated browser window and provides a separate icon on the dock (MacOS) or taskbar (Windows). But by default there's no badge counter for unread emails."),"\n",a.createElement(t.p,null,"Fortunately, it is possible to add a badge by using the experimental ",a.createElement(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Navigator/setAppBadge"},a.createElement(t.code,null,"Navigator.setAppBadge()")," API"),". This experimental API is available only in Chrome as of this writing. Here I am going to combine the badge API with ",a.createElement(t.a,{href:"https://violentmonkey.github.io/get-it/"},"Violentmonkey"),", a browser extension that uses the ",a.createElement(t.a,{href:"https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions"},"WebExtension")," APIs."),"\n",a.createElement(t.p,null,"If you want to use the script, it is available from a ",a.createElement(t.a,{href:"https://github.com/jboxman/gmail-badge"},"GitHub repository")," in the ",a.createElement(t.code,null,"gmail-badge/dist/index.user.js")," file."),"\n",a.createElement(t.p,null,"Most of the work is performed by a ",a.createElement(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver"},"MutationObserver"),". The API is wrapped by ",a.createElement(t.code,null,"VM.observe")," for convenience, and so we only need to provide a DOM element to monitor for mutations and a callback function:"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-js",title:"Mutation callback function"},"import * as VM from '@violentmonkey/dom';\n\nVM.observe(document.head, () => {\n  const $el = document.querySelector('title');\n  // https://github.com/developit/Gmail-unread-count-badge/blob/main/src/content.js\n  let m = String($el.innerText).match(/Inbox(?: \\((\\d+)\\))? -/);\n  if (m) navigator.setAppBadge(m[1] | 0 || null);\n});\n")),"\n",a.createElement(t.p,null,"In the preceding code, we do the following:"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"Observe the ",a.createElement(t.code,null,"<head>")," DOM element for any changes."),"\n",a.createElement(t.li,null,"React to a change by querying the ",a.createElement(t.code,null,"<title>")," DOM element, extracting the unread message count, and calling ",a.createElement(t.code,null,"navigator.setAppBadge")," to set the badge number."),"\n"),"\n",a.createElement(t.p,null,"By using a MutationObserver, we ensure that whenever Google updates the unread message count in the page title, we can update our unread messages icon badge."),"\n",a.createElement(t.p,null,"For reference, ",a.createElement(t.code,null,"VM.observe")," wraps the ",a.createElement(t.code,null,"MutationObserver.observe")," method in the ",a.createElement(t.a,{href:"https://github.com/violentmonkey/vm-dom"},"following way"),":"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-ts",title:"VM.observe() function"},"export function observe(\n  node: Node,\n  callback: (\n    mutations: MutationRecord[],\n    observer: MutationObserver\n  ) => boolean | void,\n  options?: MutationObserverInit\n): () => void {\n  const observer = new MutationObserver((mutations, ob) => {\n    const result = callback(mutations, ob);\n    if (result) disconnect();\n  });\n  observer.observe(\n    node,\n    Object.assign(\n      {\n        childList: true,\n        subtree: true,\n      },\n      options\n    )\n  );\n  const disconnect = () => observer.disconnect();\n  return disconnect;\n}\n")),"\n",a.createElement(t.p,null,"The ",a.createElement(t.a,{href:"https://github.com/jboxman/gmail-badge"},"source is available on GitHub")," and the userscript lives at: ",a.createElement(t.code,null,"gmail-badge/dist/index.user.js"),"."))}var i=function(e){void 0===e&&(e={});var t=Object.assign({},(0,r.ah)(),e.components).wrapper;return t?a.createElement(t,e,a.createElement(o,e)):o(e)},l=n(4765);function c(e){return a.createElement(l.Z,e,a.createElement(i,e))}l.Z},6459:function(e,t,n){function a(e){if(null==e)throw new TypeError("Cannot destructure "+e)}n.d(t,{Z:function(){return a}})}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-users-jasonb-self-repos-blog-content-posts-20221220-gmail-badge-index-mdx-43a3d121469704a2ed35.js.map