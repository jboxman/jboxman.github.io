"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[430],{1873:function(e,t,n){n.d(t,{F:function(){return m},Z:function(){return u}});var a=n(6459),l=n(7294),i=n(977),r=n(9935),c=n(1131),o=n(8871),s=function(e){var t=e.data.page,n=e.children;return(0,i.tZ)(c.Z,null,(0,i.tZ)(r.X6,{as:"h1",variant:"styles.h1"},t.title),(0,i.tZ)("section",{sx:{my:5,variant:"layout.content"}},n))},m=function(e){var t=e.data.page;return(0,i.tZ)(o.Z,{title:t.title,description:t.excerpt})};function u(e){var t=Object.assign({},((0,a.Z)(e),e));return l.createElement(s,t)}},8871:function(e,t,n){var a=n(7294),l=n(1082),i=n(4232);t.Z=function(e){var t=e.title,n=void 0===t?"":t,r=e.description,c=void 0===r?"":r,o=e.pathname,s=void 0===o?"":o,m=e.image,u=void 0===m?"":m,p=e.children,d=void 0===p?null:p,g=e.canonicalUrl,h=void 0===g?"":g,f=(0,i.Z)(),E=f.siteTitle,v=f.siteTitleAlt,y=f.siteUrl,w=f.siteDescription,b=f.siteImage,k=f.author,x={title:n?n+" | "+E:v,description:c||w,url:""+y+(s||""),image:""+y+(u||b)};return a.createElement(a.Fragment,null,a.createElement("title",null,x.title),a.createElement("meta",{name:"description",content:x.description}),a.createElement("meta",{name:"image",content:x.image}),a.createElement("meta",{property:"og:title",content:x.title}),a.createElement("meta",{property:"og:url",content:x.url}),a.createElement("meta",{property:"og:description",content:x.description}),a.createElement("meta",{property:"og:image",content:x.image}),a.createElement("meta",{property:"og:type",content:"website"}),a.createElement("meta",{property:"og:image:alt",content:x.description}),a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),a.createElement("meta",{name:"twitter:title",content:x.title}),a.createElement("meta",{name:"twitter:url",content:x.url}),a.createElement("meta",{name:"twitter:description",content:x.description}),a.createElement("meta",{name:"twitter:image",content:x.image}),a.createElement("meta",{name:"twitter:image:alt",content:x.description}),a.createElement("meta",{name:"twitter:creator",content:k}),a.createElement("meta",{name:"gatsby-theme",content:"@lekoarts/gatsby-theme-minimal-blog"}),a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,l.withPrefix)("/favicon-32x32.png")}),a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:(0,l.withPrefix)("/favicon-16x16.png")}),a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:(0,l.withPrefix)("/apple-touch-icon.png")}),h?a.createElement("link",{rel:"canonical",href:h}):null,d)}},9678:function(e,t,n){n.r(t),n.d(t,{Head:function(){return c.F},default:function(){return o}});var a=n(7294),l=n(9626);function i(e){var t=Object.assign({p:"p",h2:"h2",ul:"ul",li:"li",a:"a",code:"code",pre:"pre"},(0,l.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(t.p,null,"This tool validates the syntax of YAML in AsciiDoc files."),"\n",a.createElement(t.h2,null,"Motivation"),"\n",a.createElement(t.p,null,"When writing documentation, it is vital that any YAML samples presented to a user are valid.\nBecause AsciiDoc is a structured, plain text documentation format, it is possible to extract and validate YAML."),"\n",a.createElement(t.h2,null,"Prerequisites"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"https://nodejs.org/en/download/"},"Node.js")," >= 10.x"),"\n"),"\n",a.createElement(t.p,null,"Or you might want to install Node.js using ",a.createElement(t.a,{href:"https://github.com/nvm-sh/nvm/blob/master/README.md"},"nvm")," or some other version manager."),"\n",a.createElement(t.h2,null,"Installation"),"\n",a.createElement(t.p,null,"To install the application, complete the following step:"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,a.createElement(t.code,null,"npm i -g @jboxman/asciidoc-validate-yaml")),"\n"),"\n",a.createElement(t.h2,null,"Requirements"),"\n",a.createElement(t.p,null,"The YAML source must be placed within a listing block with ",a.createElement(t.code,null,"yaml")," syntax highlighting."),"\n",a.createElement(t.pre,null,a.createElement(t.code,null,"[source,yaml]\n----\nkey1:\n- alpha\n- delta\nkey2:\n  key3: true\n  key4: abc\n----\n")),"\n",a.createElement(t.p,null,"Each YAML block can use call outs if necessary."),"\n",a.createElement(t.pre,null,a.createElement(t.code,null,"[source,yaml]\n----\nbigKey: some text <1>\n----\n<1> This describes the key\n")),"\n",a.createElement(t.h2,null,"Usage"),"\n",a.createElement(t.p,null,"The help output describes the available options."),"\n",a.createElement(t.pre,null,a.createElement(t.code,null,"Usage: asciidoc-validate-yaml [options]\n\nValidate YAML listing blocks in Asciidoc files\n\nOptions:\n  -a, --attributes [attributes...]  Optional: Attributes such as product-version=1\n  --pass                            Always succeed regardless of any validation failures (default: false)\n  --stdin                           Read file list from stdin instead of _topic_map.yml (default: false)\n  --topic <path>                    Optional: Path to ascii_binder _topic_map.yml file\n  -h, --help                        display help for command\n")),"\n",a.createElement(t.p,null,"For example, the following is the most common usage:"),"\n",a.createElement(t.pre,null,a.createElement(t.code,null,"$ find . -type f -name '*.adoc' | asciidoc-validate-yaml --stdin\n")),"\n",a.createElement(t.p,null,"Example output:"),"\n",a.createElement(t.pre,null,a.createElement(t.code,null,"Scanning .../networking/configuring-ipfailover.adoc\nmodules/nw-ipfailover-configuring-vrrp-preemption.adoc [18]: OK\nmodules/nw-ipfailover-configuring-more-than-254.adoc [28]: OK\nmodules/nw-ipfailover-configuration.adoc [40]: OK\nmodules/nw-ipfailover-configuring-check-notify-scripts.adoc [76]: OK\nScanning .../networking/multiple_networks/assigning-a-secondary-network-to-a-vrf.adoc\nmodules/cnf-assigning-a-secondary-network-to-a-vrf.adoc [39]: OK\nScanning .../networking/multiple_networks/edit-additional-network.adoc\nScanning .../networking/multiple_networks/configuring-multi-network-policy.adoc\nmodules/nw-multi-network-policy-differences.adoc [6]: OK\nmodules/nw-multi-network-policy-differences.adoc [16]: OK\n")),"\n",a.createElement(t.h2,null,"Alternatives"),"\n",a.createElement(t.p,null,"You can use the AsciiDoc ",a.createElement(t.code,null,"include")," directive to include YAML files instead of including\nYAML content directly in an AsciiDoc file. In such cases, you can validate the YAML\ndirectly without having to parse the AsciiDoc first."),"\n",a.createElement(t.h2,null,"Known issues"),"\n",a.createElement(t.p,null,"For known issues, see ",a.createElement(t.a,{href:"https://github.com/jboxman/asciidoc-validate-yaml/issues"},"GitHub"),"."))}var r=function(e){void 0===e&&(e={});var t=Object.assign({},(0,l.ah)(),e.components).wrapper;return t?a.createElement(t,e,a.createElement(i,e)):i(e)},c=n(1873);function o(e){return a.createElement(c.Z,e,a.createElement(r,e))}c.Z},6459:function(e,t,n){function a(e){if(null==e)throw new TypeError("Cannot destructure "+e)}n.d(t,{Z:function(){return a}})}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-page-query-tsx-content-file-path-users-jasonb-self-repos-blog-content-pages-docs-projects-asciidoc-validate-yaml-index-mdx-e8625755e783629f0030.js.map