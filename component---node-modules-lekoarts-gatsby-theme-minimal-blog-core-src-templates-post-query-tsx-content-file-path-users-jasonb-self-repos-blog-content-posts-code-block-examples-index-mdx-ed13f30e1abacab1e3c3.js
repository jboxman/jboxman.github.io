"use strict";(self.webpackChunkminimal_blog=self.webpackChunkminimal_blog||[]).push([[706],{4765:function(e,t,n){n.d(t,{F:function(){return g},Z:function(){return h}});var a=n(6459),r=n(7294),l=n(977),i=n(9935),o=n(1131),c=n(6799),s=n(8871),m=function(e){e.post;return null},u=["16px","8px","4px"].map((function(e){return"rgba(0, 0, 0, 0.1) 0px "+e+" "+e+" 0px"})),p=function(e){var t=e.data.post,n=e.children;return(0,l.tZ)(o.Z,null,(0,l.tZ)(i.X6,{as:"h1",variant:"styles.h1"},t.title),(0,l.tZ)("p",{sx:{color:"secondary",mt:3,a:{color:"secondary"},fontSize:[1,1,2]}},(0,l.tZ)("time",null,t.date),t.tags&&(0,l.tZ)(r.Fragment,null," — ",(0,l.tZ)(c.Z,{tags:t.tags})),t.timeToRead&&" — ",t.timeToRead&&(0,l.tZ)("span",null,t.timeToRead," min read")),(0,l.tZ)("section",{sx:{my:5,".gatsby-resp-image-wrapper":{my:[4,4,5],borderRadius:"4px",boxShadow:u.join(", "),".gatsby-resp-image-image":{borderRadius:"4px"}},variant:"layout.content"}},n),(0,l.tZ)(m,{post:t}))},g=function(e){var t,n,a,r=e.data.post;return(0,l.tZ)(s.Z,{title:r.title,description:r.description?r.description:r.excerpt,image:r.banner?null===(t=r.banner)||void 0===t||null===(n=t.childImageSharp)||void 0===n||null===(a=n.resize)||void 0===a?void 0:a.src:void 0,pathname:r.slug,canonicalUrl:r.canonicalUrl})};function h(e){var t=Object.assign({},((0,a.Z)(e),e));return r.createElement(p,t)}},6799:function(e,t,n){var a=n(977),r=n(7294),l=n(1082),i=n(3494),o=n(9706);t.Z=function(e){var t=e.tags,n=(0,i.Z)(),c=n.tagsPath,s=n.basePath;return(0,a.tZ)(r.Fragment,null,t.map((function(e,t){return(0,a.tZ)(r.Fragment,{key:e.slug},!!t&&", ",(0,a.tZ)(l.Link,{sx:function(e){var t;return Object.assign({},null===(t=e.styles)||void 0===t?void 0:t.a)},to:(0,o.Z)("/"+s+"/"+c+"/"+e.slug)},e.name))})))}},8871:function(e,t,n){var a=n(7294),r=n(1082),l=n(4232);t.Z=function(e){var t=e.title,n=void 0===t?"":t,i=e.description,o=void 0===i?"":i,c=e.pathname,s=void 0===c?"":c,m=e.image,u=void 0===m?"":m,p=e.children,g=void 0===p?null:p,h=e.canonicalUrl,d=void 0===h?"":h,f=(0,l.Z)(),E=f.siteTitle,b=f.siteTitleAlt,w=f.siteUrl,y=f.siteDescription,v=f.siteImage,x=f.author,k={title:n?n+" | "+E:b,description:o||y,url:""+w+(s||""),image:""+w+(u||v)};return a.createElement(a.Fragment,null,a.createElement("title",null,k.title),a.createElement("meta",{name:"description",content:k.description}),a.createElement("meta",{name:"image",content:k.image}),a.createElement("meta",{property:"og:title",content:k.title}),a.createElement("meta",{property:"og:url",content:k.url}),a.createElement("meta",{property:"og:description",content:k.description}),a.createElement("meta",{property:"og:image",content:k.image}),a.createElement("meta",{property:"og:type",content:"website"}),a.createElement("meta",{property:"og:image:alt",content:k.description}),a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),a.createElement("meta",{name:"twitter:title",content:k.title}),a.createElement("meta",{name:"twitter:url",content:k.url}),a.createElement("meta",{name:"twitter:description",content:k.description}),a.createElement("meta",{name:"twitter:image",content:k.image}),a.createElement("meta",{name:"twitter:image:alt",content:k.description}),a.createElement("meta",{name:"twitter:creator",content:x}),a.createElement("meta",{name:"gatsby-theme",content:"@lekoarts/gatsby-theme-minimal-blog"}),a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,r.withPrefix)("/favicon-32x32.png")}),a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:(0,r.withPrefix)("/favicon-16x16.png")}),a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:(0,r.withPrefix)("/apple-touch-icon.png")}),d?a.createElement("link",{rel:"canonical",href:d}):null,g)}},3836:function(e,t,n){n.r(t),n.d(t,{Head:function(){return s.F},default:function(){return m}});var a=n(7294),r=n(9626),l={large:{width:300,height:380},compact:{width:300,height:80}};var i=function(e){var t=e.uri,n=e.view,r=e.theme,i=e.size;return a.createElement("iframe",{title:"Spotify",className:"SpotifyPlayer",src:"https://embed.spotify.com/?uri="+t+"&view="+n+"&theme="+r,width:l[i].width,height:l[i].height,frameBorder:"0",allowtransparency:"true"})};function o(e){var t=Object.assign({p:"p",pre:"pre",code:"code"},(0,r.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(t.p,null,"Here will a React component go:"),"\n",a.createElement(i,{uri:"spotify:user:bbcamerica:playlist:3w18u69NplCpXVG4fQG726",size:"large",theme:"black",view:"list"}),"\n",a.createElement(t.p,null,"Here will a normal code block go:"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-js"},"(function() {\n\nvar cache = {};\nvar form = $('form');\nvar minified = true;\n\nvar dependencies = {};\n\nvar treeURL = 'https://api.github.com/repos/PrismJS/prism/git/trees/gh-pages?recursive=1';\nvar treePromise = new Promise(function(resolve) {\n  $u.xhr({\n    url: treeURL,\n    callback: function(xhr) {\n      if (xhr.status < 400) {\n        resolve(JSON.parse(xhr.responseText).tree);\n      }\n    }\n  });\n});\n")),"\n",a.createElement(t.p,null,"A code block with a JSDoc comment, short, and long comment:"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-js"},"/**\n * Get value out of string (e.g. rem => px)\n * If value is px strip the px part\n * If the input is already a number only return that value\n * @param {string | number} input\n * @param {number} [rootFontSize]\n * @return {number} Number without last three characters\n * @example removeLastThree('6rem') => 6\n */\nconst getValue = (input, rootFontSize = 16) => {\n  if (typeof input === `number`) {\n    return input / rootFontSize;\n  }\n\n  const isPxValue = input.slice(-2) === `px`;\n\n  if (isPxValue) {\n    return parseFloat(input.slice(0, -2));\n  }\n\n  return parseFloat(input.slice(0, -3));\n};\n\n// This is a little helper function\nconst helper = (a, b) => a + b;\n\n// This is also a little helper function but this time with a really long one-line comment that should show some more details\nconst morehelper = (a, b) => a * b;\n\nexport { getValue, helper, morehelper };\n")),"\n",a.createElement(t.p,null,"Normal block without language:"),"\n",a.createElement(t.pre,null,a.createElement(t.code,null,'import Test from "../components/test"\n\nconst Layout = ({ children }) => (\n  <Test>\n    {children}\n  </Test>\n)\n\nexport default Layout\n')),"\n",a.createElement(t.p,null,"Code block with code highlighting:"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-jsx",title:"src/components/post.jsx",highlight:"5-7,10"},'import * as React from "react";\n\nconst Post = ({ data: { post } }) => (\n  <Layout>\n    <Heading variant="h2" as="h2">\n      {post.title}\n    </Heading>\n    <p\n      sx={{\n        color: `secondary`,\n        mt: 3,\n        a: { color: `secondary` },\n        fontSize: [1, 1, 2],\n      }}\n    >\n      <span>{post.date}</span>\n      {post.tags && (\n        <React.Fragment>\n          {` — `}\n          <ItemTags tags={post.tags} />\n        </React.Fragment>\n      )}\n    </p>\n    <section\n      sx={{\n        ...CodeStyles,\n        my: 5,\n        ".gatsby-resp-image-wrapper": { my: 5, boxShadow: `lg` },\n      }}\n    >\n      <MDXRenderer>{post.body}</MDXRenderer>\n    </section>\n  </Layout>\n);\n\nexport default Post;\n')),"\n",a.createElement(t.p,null,"Code block without title:"),"\n",a.createElement(t.pre,null,a.createElement(t.code,null,"Harry Potter and the Philosopher's Stone\n")),"\n",a.createElement(t.p,null,"Code block with lineNumbers (and lang):"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-text",withLineNumbers:!0},"Harry Potter and the Chamber of Secrets\n")),"\n",a.createElement(t.p,null,"Code block with lineNumbers (and without lang):"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-none",withLineNumbers:!0},"Harry Potter and the Chamber of Secrets\n")),"\n",a.createElement(t.p,null,"Code block with only the title:"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-none",title:"src/utils/scream.js"},"const scream = (input) => window.alert(input)\n")),"\n",a.createElement(t.p,null,"Code block with only the title and with lineNumbers:"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-none",title:"src/utils/scream.js",withLineNumbers:!0},"const scream = (input) => window.alert(input)\n")),"\n",a.createElement(t.p,null,"Line highlighting without code title:"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-js",highlight:"2,4-5"},'const test = 3;\nconst foo = "bar";\nconst harry = "potter";\nconst hermione = "granger";\nconst ron = "weasley";\n')),"\n",a.createElement(t.p,null,"Here will ",a.createElement(t.code,null,"inline code")," go, just inside the text. Wow!"),"\n",a.createElement(t.p,null,"Code block with line numbers, highlighting, language, and title:"),"\n",a.createElement("div",{"data-testid":"code-block"},a.createElement(t.pre,null,a.createElement(t.code,{className:"language-tsx",title:"src/components/blog.tsx",highlight:"7-9,16",withLineNumbers:!0},'import * as React from "react";\n\nconst Blog = ({ posts }: PostsProps) => {\n  const { tagsPath, basePath } = useSiteMetadata();\n\n  return (\n    <Layout>\n      <Flex sx={{ alignItems: `center`, justifyContent: `space-between` }}>\n        <Heading variant="h2" as="h2">\n          Blog\n        </Heading>\n        <Styled.a\n          as={Link}\n          sx={{ variant: `links.secondary` }}\n          to={`/${basePath}/${tagsPath}`.replace(/\\/\\/+/g, `/`)}\n        >\n          View all tags\n        </Styled.a>\n      </Flex>\n      <Listing posts={posts} sx={{ mt: [4, 5] }} />\n    </Layout>\n  );\n};\n\nexport default Blog;\n'))))}var c=function(e){void 0===e&&(e={});var t=Object.assign({},(0,r.ah)(),e.components).wrapper;return t?a.createElement(t,e,a.createElement(o,e)):o(e)},s=n(4765);function m(e){return a.createElement(s.Z,e,a.createElement(c,e))}s.Z},6459:function(e,t,n){function a(e){if(null==e)throw new TypeError("Cannot destructure "+e)}n.d(t,{Z:function(){return a}})}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-users-jasonb-self-repos-blog-content-posts-code-block-examples-index-mdx-ed13f30e1abacab1e3c3.js.map