"use strict";(self.webpackChunkminimal_blog=self.webpackChunkminimal_blog||[]).push([[973],{1873:function(e,t,n){n.d(t,{F:function(){return m},Z:function(){return u}});var a=n(6459),l=n(7294),r=n(977),i=n(9935),o=n(1131),c=n(8871),s=function(e){var t=e.data.page,n=e.children;return(0,r.tZ)(o.Z,null,(0,r.tZ)(i.X6,{as:"h1",variant:"styles.h1"},t.title),(0,r.tZ)("section",{sx:{my:5,variant:"layout.content"}},n))},m=function(e){var t=e.data.page;return(0,r.tZ)(c.Z,{title:t.title,description:t.excerpt})};function u(e){var t=Object.assign({},((0,a.Z)(e),e));return l.createElement(s,t)}},8871:function(e,t,n){var a=n(7294),l=n(1082),r=n(4232);t.Z=function(e){var t=e.title,n=void 0===t?"":t,i=e.description,o=void 0===i?"":i,c=e.pathname,s=void 0===c?"":c,m=e.image,u=void 0===m?"":m,p=e.children,d=void 0===p?null:p,g=e.canonicalUrl,h=void 0===g?"":g,E=(0,r.Z)(),f=E.siteTitle,v=E.siteTitleAlt,y=E.siteUrl,b=E.siteDescription,k=E.siteImage,w=E.author,P={title:n?n+" | "+f:v,description:o||b,url:""+y+(s||""),image:""+y+(u||k)};return a.createElement(a.Fragment,null,a.createElement("title",null,P.title),a.createElement("meta",{name:"description",content:P.description}),a.createElement("meta",{name:"image",content:P.image}),a.createElement("meta",{property:"og:title",content:P.title}),a.createElement("meta",{property:"og:url",content:P.url}),a.createElement("meta",{property:"og:description",content:P.description}),a.createElement("meta",{property:"og:image",content:P.image}),a.createElement("meta",{property:"og:type",content:"website"}),a.createElement("meta",{property:"og:image:alt",content:P.description}),a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),a.createElement("meta",{name:"twitter:title",content:P.title}),a.createElement("meta",{name:"twitter:url",content:P.url}),a.createElement("meta",{name:"twitter:description",content:P.description}),a.createElement("meta",{name:"twitter:image",content:P.image}),a.createElement("meta",{name:"twitter:image:alt",content:P.description}),a.createElement("meta",{name:"twitter:creator",content:w}),a.createElement("meta",{name:"gatsby-theme",content:"@lekoarts/gatsby-theme-minimal-blog"}),a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,l.withPrefix)("/favicon-32x32.png")}),a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:(0,l.withPrefix)("/favicon-16x16.png")}),a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:(0,l.withPrefix)("/apple-touch-icon.png")}),h?a.createElement("link",{rel:"canonical",href:h}):null,d)}},6573:function(e,t,n){n.r(t),n.d(t,{Head:function(){return o.F},default:function(){return c}});var a=n(7294),l=n(9626);function r(e){var t=Object.assign({p:"p",h2:"h2",ul:"ul",li:"li",a:"a",em:"em",code:"code",pre:"pre"},(0,l.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(t.p,null,"The Kubernetes API Schema Viewer (KASV) provides a dynamic view of your cluster's APIs. You deploy the application to your cluster as you would any other application."),"\n",a.createElement(t.h2,null,"Features"),"\n",a.createElement(t.p,null,"Enjoy the following features:"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"Locate any API available on your cluster, including Kubernetes built-ins and APIs provided through a custom resource definition (CRD)"),"\n",a.createElement(t.li,null,"Vizualize and explore an API schema with the ",a.createElement(t.a,{href:"https://github.com/stoplightio/json-schema-viewer"},"Stoplight JSON schema viewer")),"\n",a.createElement(t.li,null,"Bookmark any API's schema page for quick reference"),"\n"),"\n",a.createElement(t.h2,null,"Implementation"),"\n",a.createElement(t.p,null,"KASV queries the Kubernetes API server to determine what APIs are available on your cluster. The following endpoints are consulted:"),"\n",a.createElement(t.p,null,a.createElement(t.em,null,"Discovery endpoints")),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,a.createElement(t.code,null,"/api/v1"),": An ",a.createElement(t.code,null,"APIResourceList")," object with Kubernetes built-in APIs"),"\n",a.createElement(t.li,null,a.createElement(t.code,null,"/apis"),": An ",a.createElement(t.code,null,"APIGroupList")," object with all API groups available for all of an API group's versions"),"\n",a.createElement(t.li,null,a.createElement(t.code,null,"/apis/<group>/<version>"),": An ",a.createElement(t.code,null,"APIResourceList")," object with all resources for an API group version"),"\n"),"\n",a.createElement(t.p,null,a.createElement(t.em,null,"OpenAPI spec emitters")),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,a.createElement(t.code,null,"/openapi/v3/api/v1"),": OpenAPI v3 spec for Kubernetes built-in APIs"),"\n",a.createElement(t.li,null,a.createElement(t.code,null,"/openapi/v3/apis/<group>/<version>"),": OpenAPI v3 spec for a specific API group"),"\n"),"\n",a.createElement(t.h2,null,"Installation"),"\n",a.createElement(t.p,null,"You can install KASV as a deployment to your Kubernetes cluster. For example, the following configuration works on an OpenShift cluster. You need to expose the application in whatever way is most appropriate for your cluster. On OpenShift, specifying an ",a.createElement(t.code,null,"Ingress")," object creates a ",a.createElement(t.code,null,"Route")," object internally."),"\n",a.createElement(t.p,null,"Additionally, you'll need to provide the following values:"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,a.createElement(t.code,null,"<tag>"),": Specify a tag for ",a.createElement(t.code,null,"ghcr.io/jboxman/kasv")," from the ",a.createElement(t.a,{href:"https://github.com/jboxman/kubernetes-api-docs/pkgs/container/kasv/versions"},"available tags")," or use ",a.createElement(t.code,null,"latest")),"\n",a.createElement(t.li,null,a.createElement(t.code,null,"<cluster_domain>"),": Specify the apps domain for your cluster. On OpenShift, enter the following command to retrieve your cluster's domain: ",a.createElement(t.code,null,"oc get -n openshift-config ingresses.config.openshift.io/cluster -o jsonpath='{.spec.domain}'")),"\n"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-yaml"},'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: kasv\n  labels:\n    app: kasv\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: kasv\n  template:\n    metadata:\n      labels:\n        app: kasv\n    spec:\n      containers:\n      - name: kasv\n        image: ghcr.io/jboxman/kasv:<tag>\n        imagePullPolicy: Always\n        ports:\n        - containerPort: 8080\n          protocol: TCP\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: kasv\n  labels:\n    app: kasv\nspec:\n  selector:\n    app: kasv\n  ports:\n  - port: 8080\n    protocol: TCP\n    targetPort: 8080\n  type: ClusterIP\n---\napiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: kasv-ingress\n  # OpenShift-specific\n  annotations:\n    route.openshift.io/termination: "edge"\nspec:\n  tls:\n  # https://docs.openshift.com/container-platform/4.11/networking/routes/route-configuration.html#creating-edge-route-with-default-certificate_route-configuration\n  - {}\n  defaultBackend:\n    service:\n      name: kasv\n      port:\n        number: 8080\n  rules:\n  - host: kasv.<cluster_domain>\n    http:\n      paths:\n      - path: /\n        pathType: Prefix\n        backend:\n          service:\n            name: kasv\n            port:\n              number: 8080\n')))}var i=function(e){void 0===e&&(e={});var t=Object.assign({},(0,l.ah)(),e.components).wrapper;return t?a.createElement(t,e,a.createElement(r,e)):r(e)},o=n(1873);function c(e){return a.createElement(o.Z,e,a.createElement(i,e))}o.Z},6459:function(e,t,n){function a(e){if(null==e)throw new TypeError("Cannot destructure "+e)}n.d(t,{Z:function(){return a}})}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-page-query-tsx-content-file-path-users-jasonb-self-repos-blog-content-pages-docs-projects-kasv-index-mdx-47391b5fa4075fb02261.js.map