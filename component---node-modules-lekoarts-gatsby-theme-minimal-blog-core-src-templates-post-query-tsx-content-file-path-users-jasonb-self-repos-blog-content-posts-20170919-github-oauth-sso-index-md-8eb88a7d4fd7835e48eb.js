"use strict";(self.webpackChunkminimal_blog=self.webpackChunkminimal_blog||[]).push([[21],{4765:function(e,t,n){n.d(t,{F:function(){return d},Z:function(){return p}});var r=n(6459),a=n(7294),l=n(977),o=n(9935),i=n(1131),s=n(6799),c=n(8871),u=function(e){e.post;return null},h=["16px","8px","4px"].map((function(e){return"rgba(0, 0, 0, 0.1) 0px "+e+" "+e+" 0px"})),m=function(e){var t=e.data.post,n=e.children;return(0,l.tZ)(i.Z,null,(0,l.tZ)(o.X6,{as:"h1",variant:"styles.h1"},t.title),(0,l.tZ)("p",{sx:{color:"secondary",mt:3,a:{color:"secondary"},fontSize:[1,1,2]}},(0,l.tZ)("time",null,t.date),t.tags&&(0,l.tZ)(a.Fragment,null," — ",(0,l.tZ)(s.Z,{tags:t.tags})),t.timeToRead&&" — ",t.timeToRead&&(0,l.tZ)("span",null,t.timeToRead," min read")),(0,l.tZ)("section",{sx:{my:5,".gatsby-resp-image-wrapper":{my:[4,4,5],borderRadius:"4px",boxShadow:h.join(", "),".gatsby-resp-image-image":{borderRadius:"4px"}},variant:"layout.content"}},n),(0,l.tZ)(u,{post:t}))},d=function(e){var t,n,r,a=e.data.post;return(0,l.tZ)(c.Z,{title:a.title,description:a.description?a.description:a.excerpt,image:a.banner?null===(t=a.banner)||void 0===t||null===(n=t.childImageSharp)||void 0===n||null===(r=n.resize)||void 0===r?void 0:r.src:void 0,pathname:a.slug,canonicalUrl:a.canonicalUrl})};function p(e){var t=Object.assign({},((0,r.Z)(e),e));return a.createElement(m,t)}},6799:function(e,t,n){var r=n(977),a=n(7294),l=n(1082),o=n(3494),i=n(9706);t.Z=function(e){var t=e.tags,n=(0,o.Z)(),s=n.tagsPath,c=n.basePath;return(0,r.tZ)(a.Fragment,null,t.map((function(e,t){return(0,r.tZ)(a.Fragment,{key:e.slug},!!t&&", ",(0,r.tZ)(l.Link,{sx:function(e){var t;return Object.assign({},null===(t=e.styles)||void 0===t?void 0:t.a)},to:(0,i.Z)("/"+c+"/"+s+"/"+e.slug)},e.name))})))}},8871:function(e,t,n){var r=n(7294),a=n(1082),l=n(4232);t.Z=function(e){var t=e.title,n=void 0===t?"":t,o=e.description,i=void 0===o?"":o,s=e.pathname,c=void 0===s?"":s,u=e.image,h=void 0===u?"":u,m=e.children,d=void 0===m?null:m,p=e.canonicalUrl,g=void 0===p?"":p,E=(0,l.Z)(),w=E.siteTitle,f=E.siteTitleAlt,b=E.siteUrl,v=E.siteDescription,y=E.siteImage,A=E.author,T={title:n?n+" | "+w:f,description:i||v,url:""+b+(c||""),image:""+b+(h||y)};return r.createElement(r.Fragment,null,r.createElement("title",null,T.title),r.createElement("meta",{name:"description",content:T.description}),r.createElement("meta",{name:"image",content:T.image}),r.createElement("meta",{property:"og:title",content:T.title}),r.createElement("meta",{property:"og:url",content:T.url}),r.createElement("meta",{property:"og:description",content:T.description}),r.createElement("meta",{property:"og:image",content:T.image}),r.createElement("meta",{property:"og:type",content:"website"}),r.createElement("meta",{property:"og:image:alt",content:T.description}),r.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.createElement("meta",{name:"twitter:title",content:T.title}),r.createElement("meta",{name:"twitter:url",content:T.url}),r.createElement("meta",{name:"twitter:description",content:T.description}),r.createElement("meta",{name:"twitter:image",content:T.image}),r.createElement("meta",{name:"twitter:image:alt",content:T.description}),r.createElement("meta",{name:"twitter:creator",content:A}),r.createElement("meta",{name:"gatsby-theme",content:"@lekoarts/gatsby-theme-minimal-blog"}),r.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,a.withPrefix)("/favicon-32x32.png")}),r.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:(0,a.withPrefix)("/favicon-16x16.png")}),r.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:(0,a.withPrefix)("/apple-touch-icon.png")}),g?r.createElement("link",{rel:"canonical",href:g}):null,d)}},7635:function(e,t,n){n.r(t),n.d(t,{Head:function(){return i.F},default:function(){return s}});var r=n(7294),a=n(9626);function l(e){var t=Object.assign({h2:"h2",p:"p",a:"a",ol:"ol",li:"li",code:"code",em:"em",h3:"h3",pre:"pre",ul:"ul"},(0,a.ah)(),e.components);return r.createElement(r.Fragment,null,r.createElement(t.h2,null,"Use Github OAuth as your SSO provider with React"),"\n",r.createElement(t.p,null,"This guide describes how to use ",r.createElement(t.a,{href:"https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/"},"Github as an OAuth single sign-on (SSO) provider")," for a Single Page Application (SPA) that is written in JavaScript by using the React library. The authorization code grant flow is used. (To learn more about the grant types in OAuth, read ",r.createElement(t.a,{href:"https://alexbilbie.com/guide-to-oauth-2-grants/"},"A Guide To OAuth 2.0 Grants"),".)"),"\n",r.createElement(t.h2,null,"Audience"),"\n",r.createElement(t.p,null,"To get the most from this guide, you should be familiar with JavaScript, ",r.createElement(t.a,{href:"https://reactjs.org/"},"React"),", ",r.createElement(t.a,{href:"https://redux.js.org/"},"Redux"),", ",r.createElement(t.a,{href:"https://nodejs.org/en/"},"Node.js"),", ",r.createElement(t.a,{href:"https://koajs.com/"},"Koa"),", ",r.createElement(t.a,{href:"http://www.passportjs.org/"},"Passport"),", and OAuth grants."),"\n",r.createElement(t.h2,null,"Problem"),"\n",r.createElement(t.p,null,"In the OAuth authorization grant flow, the user is redirected to another page to complete the sign-in process. The flow sequence described below uses Github as the SSO provider. The server refers to the backend server for the SPA."),"\n",r.createElement(t.ol,null,"\n",r.createElement(t.li,null,"User visits ",r.createElement(t.code,null,"https://example.com/")," and the SPA loads in the browser."),"\n",r.createElement(t.li,null,"User clicks a link to sign in that opens ",r.createElement(t.code,null,"https://example.com/auth/login")," in the browser."),"\n",r.createElement(t.li,null,"Server redirects the browser to ",r.createElement(t.code,null,"https://github.com/login/oauth/authorize"),". The Github OAuth sign-in page is displayed."),"\n",r.createElement(t.li,null,"User signs in."),"\n",r.createElement(t.li,null,"Github redirects the browser to ",r.createElement(t.code,null,"https://example.com/login/oauth/callback"),"."),"\n",r.createElement(t.li,null,"Server sends a HTTP ",r.createElement(t.code,null,"POST")," to Github."),"\n",r.createElement(t.li,null,"Github replies with a JSON payload that contains an access token, token type, token expiration, and refresh token."),"\n",r.createElement(t.li,null,"Server uses access token to request the Github user profile."),"\n",r.createElement(t.li,null,"Server populates the user session."),"\n",r.createElement(t.li,null,"Server redirects the browser to the success page."),"\n"),"\n",r.createElement(t.h2,null,"Solution"),"\n",r.createElement(t.p,null,"By using a new browser tab and the window.postMessage() method, you can avoid redirecting the user to a different page to complete the sign-in process. In the following modified flow sequence, the ",r.createElement(t.em,null,"server")," refers to the backend server for the SPA. The ",r.createElement(t.em,null,"client")," refers to the user’s browser."),"\n",r.createElement(t.ol,null,"\n",r.createElement(t.li,null,"User visits ",r.createElement(t.code,null,"https://example.com/")," and the SPA loads in the browser."),"\n",r.createElement(t.li,null,"User clicks a sign-in button in the SPA. A new browser tab opens and displays ",r.createElement(t.code,null,"https://example.com/auth/login"),"."),"\n",r.createElement(t.li,null,"Server redirects the browser to ",r.createElement(t.code,null,"https://github.com/login/oauth/authorize"),"."),"\n",r.createElement(t.li,null,"User is presented with the Github OAuth sign-in page and signs in."),"\n",r.createElement(t.li,null,"Github redirects the browser to ",r.createElement(t.code,null,"https://example.com/login/oauth/callback"),"."),"\n",r.createElement(t.li,null,"Server sends a HTTP ",r.createElement(t.code,null,"POST")," to Github."),"\n",r.createElement(t.li,null,"Github sends back a JSON response that contains the access token, token type, token expiration, and refresh token."),"\n",r.createElement(t.li,null,"Server uses the access token to send a HTTP ",r.createElement(t.code,null,"GET")," request for the Github user profile."),"\n",r.createElement(t.li,null,"Github sends back a JSON response with the user profile."),"\n",r.createElement(t.li,null,"Server populates the user session and returns a HTML success page with a JavaScript payload containing a call to ",r.createElement(t.code,null,"window.postMessage()")," with the user object."),"\n",r.createElement(t.li,null,"Client executes JavaScript payload in the open browser tab. The call to ",r.createElement(t.code,null,"window.postMessage()")," passes the user object to the original browser tab that is running the SPA."),"\n"),"\n",r.createElement(t.p,null,"After the flow sequence completes, the SPA in the original browser tab has a copy of the user object."),"\n",r.createElement(t.h2,null,"Implementation"),"\n",r.createElement(t.p,null,"In the following code, the modified flow sequence is shown for both the SPA and server."),"\n",r.createElement(t.h3,null,"SPA"),"\n",r.createElement(t.p,null,"The following files define the SPA."),"\n",r.createElement(t.p,null,r.createElement(t.em,null,"App.js")),"\n",r.createElement(t.p,null,"In ",r.createElement(t.code,null,"App.js"),", two handler functions are defined: ",r.createElement(t.code,null,"handleLogIn")," and ",r.createElement(t.code,null,"handleLogOut"),". In ",r.createElement(t.code,null,"handleLogIn"),", a call to ",r.createElement(t.code,null,"loginTab")," creates a new tab. In the returned promise, the ",r.createElement(t.code,null,"user")," object is passed to injectUser, which is the Redux action creator. The ",r.createElement(t.code,null,"handleLogOut")," function dispatches the ",r.createElement(t.code,null,"logoutUser")," action."),"\n",r.createElement(t.p,null,"In the ",r.createElement(t.code,null,"render()")," function, ",r.createElement(t.code,null,"isAuthenticated")," and ",r.createElement(t.code,null,"currentUser")," provide access to the authentication status of the user and, if the user is signed in, the user object. A sign-in button is displayed only if the user is not signed in. Otherwise, the sign-out button is presented."),"\n",r.createElement(t.p,null,"The ",r.createElement(t.code,null,"mapStateToProps")," and ",r.createElement(t.code,null,"mapDispatchToProps")," functions define what state is passed in the props for this component and what actions can be dispatched."),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-js"},"import React from 'react';\nimport propTypes from 'prop-types';\nimport { connect } from 'react-redux';\nimport { bindActionCreators } from 'redux';\n\nimport loginTab from '../../util/openWindow';\nimport * as userActions from '../redux/userActions';\nimport { STATE_KEY as USER_STATE_KEY } from '../redux/userReducer';\n\nclass AppMenu extends React.Component {\n\n  handleLogIn(e, {name}) {\n    const msg = loginTab('/auth/github');\n    msg.then(user => {\n      this.props.userActions.injectUser(user);\n    });\n  }\n\n  handleLogOut(e, {name}) {\n    this.props.userActions.logoutUser();\n  }\n\n  render() {\n    const {isAuthenticated, currentUser} = this.props;\n\n    const loginButton =  isAuthenticated ?\n      <button onClick={this.handleLogOut.bind(this)}>Sign out ({currentUser.username})</button>\n      : \n      <button onClick={this.handleLogIn.bind(this)}>Sign in</button>\n\n    return (\n      <div>\n      {loginButton}\n      </div>\n    )\n  }\n}\n\nAppMenu.PropTypes = {\n  isAuthenticated: propTypes.bool,\n  currentUser: propTypes.object\n};\n\nconst mapStateToProps = state => ({\n  isAuthenticated: state[USER_STATE_KEY].isAuthenticated,\n  currentUser: state[USER_STATE_KEY].user\n});\nconst mapDispatchToProps = dispatch => ({\n  userActions: bindActionCreators(userActions, dispatch)\n});\n\nexport default connect(mapStateToProps, mapDispatchToProps)(AppMenu);\n")),"\n",r.createElement(t.p,null,r.createElement(t.em,null,"userActions.js, userActionTypes.js, userReducer.js")),"\n",r.createElement(t.p,null,"The Redux state is configured in the following files:"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,r.createElement(t.code,null,"userActions.js"),": Defines injectUser and logoutUser"),"\n",r.createElement(t.li,null,r.createElement(t.code,null,"userActionTypes.js"),": Defines Redux action constants"),"\n",r.createElement(t.li,null,r.createElement(t.code,null,"userReducer.js"),": Defines the reducer for the user object"),"\n"),"\n",r.createElement(t.p,null,r.createElement(t.em,null,"userActions.js")),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-js"},"import * as ActionTypes from './userActionTypes';\n\nexport function injectUser(user = {}) {\n  return {\n    type: ActionTypes.INJECT,\n    payload: {\n      user\n    }\n  };\n};\n\nexport function logoutUser() {\n  return {\n    type: ActionTypes.LOGOUT\n  }\n};\n")),"\n",r.createElement(t.p,null,r.createElement(t.em,null,"userActionTypes.js")),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-js"},"export const INJECT = 'INJECT_USER';\nexport const LOGOUT = 'LOGOUT_USER';\n")),"\n",r.createElement(t.p,null,r.createElement(t.em,null,"userReducer.js")),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-js"},"import * as actionTypes from './userActionTypes';\n\nexport const STATE_KEY = 'currentUser';\n\nexport const initialState = {\n  isAuthenticated: false,\n  user: {}\n};\n\nexport default function userReducer(state = initialState, action = {}) {\n  const {type, payload} = action;\n\n  switch(type) {\n    case actionTypes.INJECT:\n      return {\n        ...state,\n        isAuthenticated: true,\n        user: payload.user\n      };\n\n    case actionTypes.LOGOUT:\n      return {\n        ...initialState\n      };\n\n    default:\n      return state;\n  }\n};\n")),"\n",r.createElement(t.p,null,r.createElement(t.em,null,"openWindow.js")),"\n",r.createElement(t.p,null,"The function defined in ",r.createElement(t.code,null,"loginTab()")," opens a new tab with ",r.createElement(t.code,null,"myUrl")," as the target and returns a promise. The promise resolves to the value that is passed from ",r.createElement(t.code,null,"window.postMessage()"),"."),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-js"},"// From https://gist.github.com/gauravtiwari/2ae9f44aee281c759fe5a66d5c2721a2\n// By https://gist.github.com/gauravtiwari\n\n/* global window */\n\nconst loginTab = (myUrl) => {\n  const windowArea = {\n    width: Math.floor(window.outerWidth * 0.8),\n    height: Math.floor(window.outerHeight * 0.5),\n  };\n\n  if (windowArea.width < 1000) { windowArea.width = 1000; }\n  if (windowArea.height < 630) { windowArea.height = 630; }\n  windowArea.left = Math.floor(window.screenX + ((window.outerWidth - windowArea.width) / 2));\n  windowArea.top = Math.floor(window.screenY + ((window.outerHeight - windowArea.height) / 8));\n\n  const sep = (myUrl.indexOf('?') !== -1) ? '&' : '?';\n  const url = `${myUrl}${sep}`;\n  const windowOpts = `toolbar=0,scrollbars=1,status=1,resizable=1,location=1,menuBar=0,\n    width=${windowArea.width},height=${windowArea.height},\n    left=${windowArea.left},top=${windowArea.top}`;\n\n  const authWindow = window.open(url, '_blank', windowOpts);\n  // Create IE + others compatible event handler\n  const eventMethod = window.addEventListener ? 'addEventListener' : 'attachEvent';\n  const eventer = window[eventMethod];\n  const messageEvent = eventMethod === 'attachEvent' ? 'onmessage' : 'message';\n\n  // Listen to message from child window\n  const authPromise = new Promise((resolve, reject) => {\n    eventer(messageEvent, (msg) => {\n      if (!~msg.origin.indexOf(`${window.location.protocol}//${window.location.host}`)) {\n        authWindow.close();\n        reject('Not allowed');\n      }\n\n      if (msg.data.payload) {\n        try {\n          resolve(JSON.parse(msg.data.payload));\n        }\n        catch(e) {\n          resolve(msg.data.payload);\n        }\n        finally {\n          authWindow.close();\n        }\n      } else {\n        authWindow.close();\n        reject('Unauthorised');\n      }\n    }, false);\n  });\n\n  return authPromise;\n};\n\nexport default loginTab;\n")),"\n",r.createElement(t.h3,null,"Server"),"\n",r.createElement(t.p,null,"The following files define the application server for the SPA."),"\n",r.createElement(t.p,null,r.createElement(t.em,null,"userRoutes.js")),"\n",r.createElement(t.p,null,"The server must define several routes for the OAuth authorization code grant flow. For the ",r.createElement(t.a,{href:"http://www.passportjs.org/"},"Passport")," module, the following endpoints must be defined:"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,r.createElement(t.code,null,"/auth/github"),": Requested by the client to begin the OAuth flow"),"\n",r.createElement(t.li,null,r.createElement(t.code,null,"/auth/github/callback"),": Requested by Github during the OAuth flow"),"\n"),"\n",r.createElement(t.p,null,"In the callback function for the ",r.createElement(t.code,null,"/auth/github/callback")," route, ",r.createElement(t.code,null,"ctx.render()")," is called to return the success page."),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-js"},"const Router = require('koa-router');\nconst passport = require('koa-passport');\n  \nconst isAuthenticated = (ctx, next) => {\n  return ctx.isAuthenticated() ? next() : ctx.status = 403;\n};\n\nconst router = new Router();\n\nrouter.get('/auth/github',\n  passport.authenticate('github')\n);\n\n// Custom handler that returns the authenticated user object\nrouter.get('/auth/github/callback', function(ctx) {\n  return passport.authenticate('github', async function(err, user, info) {\n    await ctx.logIn(user);\n    await ctx.render('success', {user: JSON.stringify(ctx.state.user)});\n  })(ctx);\n});\n\nmodule.exports = router;\n")),"\n",r.createElement(t.p,null,r.createElement(t.em,null,"success.html")),"\n",r.createElement(t.p,null,"When the ",r.createElement(t.code,null,"success.html")," page loads, it calls ",r.createElement(t.code,null,"window.postMessage()")," with the injected user object."),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-html"},"<!doctype html>\n<html lang=\"en\">\n<head>\n  <title>Login successful</title>\n</head>\n<body>\n  <h1>Success</h1>\n  <p>You are authenticated...</p>\n</body>\n<script>\n  document.body.onload = function() {\n    var injectedUser = <%- JSON.stringify(user) %>;\n    window.opener.postMessage(\n      {\n        payload: injectedUser,\n        status: 'success'\n      },\n      window.opener.location\n    );\n  };\n<\/script>\n</html>\n")),"\n",r.createElement(t.h2,null,"Conclusion"),"\n",r.createElement(t.p,null,"The approach described in this guide shows how to use the authorization code grant flow offered by Github OAuth while avoiding HTTP redirects."))}var o=function(e){void 0===e&&(e={});var t=Object.assign({},(0,a.ah)(),e.components).wrapper;return t?r.createElement(t,e,r.createElement(l,e)):l(e)},i=n(4765);function s(e){return r.createElement(i.Z,e,r.createElement(o,e))}i.Z},6459:function(e,t,n){function r(e){if(null==e)throw new TypeError("Cannot destructure "+e)}n.d(t,{Z:function(){return r}})}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-users-jasonb-self-repos-blog-content-posts-20170919-github-oauth-sso-index-md-8eb88a7d4fd7835e48eb.js.map