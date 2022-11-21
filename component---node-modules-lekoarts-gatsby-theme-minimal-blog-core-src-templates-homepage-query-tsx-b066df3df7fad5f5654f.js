"use strict";(self.webpackChunkminimal_blog=self.webpackChunkminimal_blog||[]).push([[366],{8556:function(e,t,n){n.r(t),n.d(t,{Head:function(){return y},default:function(){return x}});var a=n(6459),r=n(7294),o=n(977),i=n(1082),l=n(1131),c=n(5221),s=n(4372),m=function(e){var t=e.children;return(0,o.tZ)("section",{sx:{mb:[5,5,6],ul:{margin:0,padding:0},li:{listStyle:"none",mb:3,a:{variant:"links.listItem"}},variant:"section_bottom"}},t)},u=n(3494),p=n(4232),g=n(9706),d=n(8170),f=n(8871),h=n(9626);function E(e){var t=Object.assign({p:"p",ul:"ul",li:"li"},(0,h.ah)(),e.components),n=t.Text;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Text",!0),r.createElement(r.Fragment,null,r.createElement(n,{children:"Hi.",sx:{fontSize:[4,5,6],fontWeight:"bold",color:"heading"}}),"\n",r.createElement(t.p,null,"These pages contain the following types of content:"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"Posts about software development related to JavaScript, containers, and other technology adjacent topics."),"\n",r.createElement(t.li,null,"Documentation for Open Source software that I have published."),"\n"),"\n",r.createElement(t.p,null,"Thanks for reading."))}var v=function(e){void 0===e&&(e={});var t=Object.assign({},(0,h.ah)(),e.components).wrapper;return t?r.createElement(t,e,r.createElement(E,e)):E(e)};function Z(e){var t=Object.assign({ul:"ul",li:"li",a:"a"},(0,h.ah)(),e.components),n=t.Title;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Title",!0),r.createElement(r.Fragment,null,r.createElement(n,{text:"Projects"}),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,r.createElement(t.a,{href:"/docs/projects/asciidoc-aware-link-check/"},"asciidoc-aware-link-check")),"\n",r.createElement(t.li,null,r.createElement(t.a,{href:"/docs/projects/asciidoc-validate-yaml/"},"asciidoc-validate-yaml")),"\n",r.createElement(t.li,null,r.createElement(t.a,{href:"/docs/projects/openshift-apidocs-gen/"},"OpenShift OpenAPI documentation generator")),"\n",r.createElement(t.li,null,r.createElement(t.a,{href:"/docs/projects/dam/"},"Digital asset management")),"\n"))}var b=function(e){void 0===e&&(e={});var t=Object.assign({},(0,h.ah)(),e.components).wrapper;return t?r.createElement(t,e,r.createElement(Z,e)):Z(e)};var w=function(e){var t=e.posts,n=(0,u.Z)(),a=n.basePath,r=n.blogPath,f=(0,p.Z)().siteTitle;return(0,o.tZ)(l.Z,null,(0,o.tZ)("h1",{sx:d.j},f),(0,o.tZ)("section",{sx:{mb:[5,6,7],p:{fontSize:[1,2,3],mt:2},variant:"section_hero"}},(0,o.tZ)(v,null)),(0,o.tZ)(c.Z,{text:"Latest Posts"},(0,o.tZ)(i.Link,{to:(0,g.Z)("/"+a+"/"+r)},"Read all posts")),(0,o.tZ)(s.Z,{posts:t,showTags:!1}),(0,o.tZ)(m,null,(0,o.tZ)(b,null)))},y=function(){return(0,o.tZ)(f.Z,null)};var x=function(e){var t=Object.assign({},((0,a.Z)(e),e)),n=t.data.allPost;return r.createElement(w,Object.assign({posts:n.nodes},t))}},6799:function(e,t,n){var a=n(977),r=n(7294),o=n(1082),i=n(3494),l=n(9706);t.Z=function(e){var t=e.tags,n=(0,i.Z)(),c=n.tagsPath,s=n.basePath;return(0,a.tZ)(r.Fragment,null,t.map((function(e,t){return(0,a.tZ)(r.Fragment,{key:e.slug},!!t&&", ",(0,a.tZ)(o.Link,{sx:function(e){var t;return Object.assign({},null===(t=e.styles)||void 0===t?void 0:t.a)},to:(0,l.Z)("/"+s+"/"+c+"/"+e.slug)},e.name))})))}},4372:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(977),r=n(7294),o=n(9935),i=n(1082),l=n(6799),c=n(9706),s=n(3494),m=function(e){var t=e.post,n=e.showTags,m=void 0===n||n,u=(0,s.Z)(),p=u.basePath,g=u.blogPath;return(0,a.tZ)(o.xu,{mb:4},(0,a.tZ)(i.Link,{to:(0,c.Z)("/"+p+"/"+g+"/"+t.slug),sx:function(e){var t;return Object.assign({},null===(t=e.styles)||void 0===t?void 0:t.a,{fontSize:[1,2,3],color:"text"})}},t.title),(0,a.tZ)("p",{sx:{color:"secondary",mt:1,a:{color:"secondary"},fontSize:[1,1,2]}},(0,a.tZ)("time",null,t.date),t.tags&&m&&(0,a.tZ)(r.Fragment,null," — ",(0,a.tZ)(l.Z,{tags:t.tags}))))},u=function(e){var t=e.posts,n=e.className,r=void 0===n?"":n,o=e.showTags,i=void 0===o||o;return(0,a.tZ)("section",{sx:{mb:[5,6,7]},className:r},t.map((function(e){return(0,a.tZ)(m,{key:e.slug,post:e,showTags:i})})))}},8871:function(e,t,n){var a=n(7294),r=n(1082),o=n(4232);t.Z=function(e){var t=e.title,n=void 0===t?"":t,i=e.description,l=void 0===i?"":i,c=e.pathname,s=void 0===c?"":c,m=e.image,u=void 0===m?"":m,p=e.children,g=void 0===p?null:p,d=e.canonicalUrl,f=void 0===d?"":d,h=(0,o.Z)(),E=h.siteTitle,v=h.siteTitleAlt,Z=h.siteUrl,b=h.siteDescription,w=h.siteImage,y=h.author,x={title:n?n+" | "+E:v,description:l||b,url:""+Z+(s||""),image:""+Z+(u||w)};return a.createElement(a.Fragment,null,a.createElement("title",null,x.title),a.createElement("meta",{name:"description",content:x.description}),a.createElement("meta",{name:"image",content:x.image}),a.createElement("meta",{property:"og:title",content:x.title}),a.createElement("meta",{property:"og:url",content:x.url}),a.createElement("meta",{property:"og:description",content:x.description}),a.createElement("meta",{property:"og:image",content:x.image}),a.createElement("meta",{property:"og:type",content:"website"}),a.createElement("meta",{property:"og:image:alt",content:x.description}),a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),a.createElement("meta",{name:"twitter:title",content:x.title}),a.createElement("meta",{name:"twitter:url",content:x.url}),a.createElement("meta",{name:"twitter:description",content:x.description}),a.createElement("meta",{name:"twitter:image",content:x.image}),a.createElement("meta",{name:"twitter:image:alt",content:x.description}),a.createElement("meta",{name:"twitter:creator",content:y}),a.createElement("meta",{name:"gatsby-theme",content:"@lekoarts/gatsby-theme-minimal-blog"}),a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,r.withPrefix)("/favicon-32x32.png")}),a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:(0,r.withPrefix)("/favicon-16x16.png")}),a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:(0,r.withPrefix)("/apple-touch-icon.png")}),f?a.createElement("link",{rel:"canonical",href:f}):null,g)}},6459:function(e,t,n){function a(e){if(null==e)throw new TypeError("Cannot destructure "+e)}n.d(t,{Z:function(){return a}})}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-homepage-query-tsx-b066df3df7fad5f5654f.js.map