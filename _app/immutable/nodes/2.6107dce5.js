import{s as T,n as g,o as W,b as X}from"../chunks/scheduler.cbb350b0.js";import{S as j,i as M,g as f,h,j as C,f as v,k as m,a as L,y as I,z as D,A as Y,r as V,s as w,u as E,c as x,x as u,v as J,d as z,t as O,w as P}from"../chunks/index.458ad680.js";import{b as K}from"../chunks/paths.4db95dfa.js";import{w as F}from"../chunks/index.260a9cdc.js";function G(a){let t;return{c(){t=f("div"),this.h()},l(s){t=h(s,"DIV",{class:!0}),C(t).forEach(v),this.h()},h(){m(t,"class","typewriter svelte-1ml3ubb")},m(s,e){L(s,t,e),a[1](t)},p:g,i:g,o:g,d(s){s&&v(t),a[1](null)}}}function Q(a,t,s){let e,i=["self taught developer","random german guy","python user (it good)","public data enjoyer","free life appreciator"],l=0,n=0,c=!1;function d(){const o=i[l];c?(s(0,e.textContent=o.substring(0,n-1),e),n--):(s(0,e.textContent=o.substring(0,n+1),e),n++),n===o.length?(c=!0,setTimeout(d,3e3)):n===0?(c=!1,l=(l+1)%i.length,setTimeout(d,300)):c?setTimeout(d,40):setTimeout(d,Math.random()*180+70)}W(()=>{d()});function k(o){X[o?"unshift":"push"](()=>{e=o,s(0,e)})}return[e,k]}class Z extends j{constructor(t){super(),M(this,t,Q,G,T,{})}}function tt(a){let t,s='<a class="icon svelte-8kg9v1" href="https://dc.jcms.dev" target="_blank"><img class="iconImg" src="icons/discord.svg" alt="Join my discord server!"/></a> <a class="icon svelte-8kg9v1" href="https://github.com/JustCallMeSimon26" target="_blank"><img class="iconImg" src="icons/github.svg" alt="Take a look at what im coding."/></a> <a class="icon svelte-8kg9v1" href="https://twitter.com/JustCallSimon" target="_blank"><img class="iconImg" src="icons/twitter.svg" alt="Read my (rare) twee- ehh i mean X&#39;s"/></a> <a class="icon svelte-8kg9v1" href="https://youtube.com/@JCMS_" target="_blank"><img class="iconImg" src="icons/youtube.svg" alt="Watch my non-existend videos."/></a> <a class="icon svelte-8kg9v1" href="https://twitch.tv/JCMSimon" target="_blank"><img class="iconImg" src="icons/twitch.svg" alt="And my non-existend stream!"/></a> <a class="icon svelte-8kg9v1" href="mailto:contact@jcms.dev" target="_blank"><img class="iconImg" src="icons/email.svg" alt="Or just send me a email i guess."/></a>';return{c(){t=f("div"),t.innerHTML=s,this.h()},l(e){t=h(e,"DIV",{class:!0,"data-svelte-h":!0}),I(t)!=="svelte-1c8192x"&&(t.innerHTML=s),this.h()},h(){m(t,"class","Icons svelte-8kg9v1")},m(e,i){L(e,t,i)},p:g,i:g,o:g,d(e){e&&v(t)}}}class et extends j{constructor(t){super(),M(this,t,null,tt,T,{})}}function st(a){let t,s=`<a href="${K}/projects" class="link svelte-15257jn">Projects</a> <a href="${K}/thoughts" class="link svelte-15257jn">Thoughts</a> <a href="https://discord.gg/jP9Um5rUKR" target="_blank" class="link svelte-15257jn">Todo</a>`;return{c(){t=f("div"),t.innerHTML=s,this.h()},l(e){t=h(e,"DIV",{class:!0,"data-svelte-h":!0}),I(t)!=="svelte-m691l2"&&(t.innerHTML=s),this.h()},h(){m(t,"class","linkContainer svelte-15257jn")},m(e,i){L(e,t,i)},p:g,i:g,o:g,d(e){e&&v(t)}}}class nt extends j{constructor(t){super(),M(this,t,null,st,T,{})}}const N=F(!1);function lt(a){let t,s='<img src="logo.svg" alt="JCMS" class="logoImg svelte-18phk1m"/>',e,i;return{c(){t=f("button"),t.innerHTML=s,this.h()},l(l){t=h(l,"BUTTON",{title:!0,class:!0,"data-svelte-h":!0}),I(t)!=="svelte-194dqo2"&&(t.innerHTML=s),this.h()},h(){m(t,"title","Click me!"),m(t,"class","logo no-select svelte-18phk1m"),D(t,"attention",!a[0]),D(t,"move",a[0])},m(l,n){L(l,t,n),e||(i=Y(t,"click",a[1]),e=!0)},p(l,[n]){n&1&&D(t,"attention",!l[0]),n&1&&D(t,"move",l[0])},i:g,o:g,d(l){l&&v(t),e=!1,i()}}}function at(a,t,s){let e;N.subscribe(l=>{s(0,e=l)});function i(){N.set(!e)}return[e,i]}class it extends j{constructor(t){super(),M(this,t,at,lt,T,{})}}function rt(a){let t,s,e,i,l,n,c,d="Hi, I'm Simon",k,o,U,p,q,$,A,y,B='<img class="arrow svelte-1njf3y2" src="arrow.svg" alt="arrow pointing to the right"/>',S;return e=new it({}),o=new Z({}),p=new nt({}),$=new et({}),{c(){t=f("body"),s=f("div"),V(e.$$.fragment),i=w(),l=f("div"),n=f("div"),c=f("h3"),c.textContent=d,k=w(),V(o.$$.fragment),U=w(),V(p.$$.fragment),q=w(),V($.$$.fragment),A=w(),y=f("div"),y.innerHTML=B,this.h()},l(r){t=h(r,"BODY",{class:!0});var H=C(t);s=h(H,"DIV",{class:!0});var b=C(s);E(e.$$.fragment,b),i=x(b),l=h(b,"DIV",{class:!0});var R=C(l);n=h(R,"DIV",{class:!0});var _=C(n);c=h(_,"H3",{class:!0,"data-svelte-h":!0}),I(c)!=="svelte-1wikdzz"&&(c.textContent=d),k=x(_),E(o.$$.fragment,_),U=x(_),E(p.$$.fragment,_),q=x(_),E($.$$.fragment,_),_.forEach(v),R.forEach(v),A=x(b),y=h(b,"DIV",{class:!0,"data-svelte-h":!0}),I(y)!=="svelte-7ttuf1"&&(y.innerHTML=B),b.forEach(v),H.forEach(v),this.h()},h(){m(c,"class","title svelte-1njf3y2"),m(n,"class","TextSection svelte-1njf3y2"),m(l,"class","slider-left slider-side svelte-1njf3y2"),m(y,"class","slider-right slider-side svelte-1njf3y2"),m(s,"class","slider flex-center svelte-1njf3y2"),m(t,"class","flex-center svelte-1njf3y2")},m(r,H){L(r,t,H),u(t,s),J(e,s,null),u(s,i),u(s,l),u(l,n),u(n,c),u(n,k),J(o,n,null),u(n,U),J(p,n,null),u(n,q),J($,n,null),u(s,A),u(s,y),S=!0},p:g,i(r){S||(z(e.$$.fragment,r),z(o.$$.fragment,r),z(p.$$.fragment,r),z($.$$.fragment,r),S=!0)},o(r){O(e.$$.fragment,r),O(o.$$.fragment,r),O(p.$$.fragment,r),O($.$$.fragment,r),S=!1},d(r){r&&v(t),P(e),P(o),P(p),P($)}}}class ut extends j{constructor(t){super(),M(this,t,null,rt,T,{})}}export{ut as component};
