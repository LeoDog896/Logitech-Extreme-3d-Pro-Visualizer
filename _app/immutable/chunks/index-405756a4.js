function v(){}function F(t,n){for(const e in n)t[e]=n[e];return t}function B(t){return t()}function C(){return Object.create(null)}function p(t){t.forEach(B)}function O(t){return typeof t=="function"}function rt(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function H(t){return Object.keys(t).length===0}function ct(t,n,e,i){if(t){const c=P(t,n,e,i);return t[0](c)}}function P(t,n,e,i){return t[1]&&i?F(e.ctx.slice(),t[1](i(n))):e.ctx}function ot(t,n,e,i){if(t[2]&&i){const c=t[2](i(e));if(n.dirty===void 0)return c;if(typeof c=="object"){const u=[],o=Math.max(n.dirty.length,c.length);for(let l=0;l<o;l+=1)u[l]=n.dirty[l]|c[l];return u}return n.dirty|c}return n.dirty}function lt(t,n,e,i,c,u){if(c){const o=P(n,e,i,u);t.p(o,c)}}function st(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function ut(t){return t&&O(t.destroy)?t.destroy:v}let w=!1;function I(){w=!0}function G(){w=!1}function J(t,n,e,i){for(;t<n;){const c=t+(n-t>>1);e(c)<=i?t=c+1:n=c}return t}function K(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const r=[];for(let s=0;s<n.length;s++){const f=n[s];f.claim_order!==void 0&&r.push(f)}n=r}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let c=0;for(let r=0;r<n.length;r++){const s=n[r].claim_order,f=(c>0&&n[e[c]].claim_order<=s?c+1:J(1,c,g=>n[e[g]].claim_order,s))-1;i[r]=e[f]+1;const a=f+1;e[a]=r,c=Math.max(a,c)}const u=[],o=[];let l=n.length-1;for(let r=e[c]+1;r!=0;r=i[r-1]){for(u.push(n[r-1]);l>=r;l--)o.push(n[l]);l--}for(;l>=0;l--)o.push(n[l]);u.reverse(),o.sort((r,s)=>r.claim_order-s.claim_order);for(let r=0,s=0;r<o.length;r++){for(;s<u.length&&o[r].claim_order>=u[s].claim_order;)s++;const f=s<u.length?u[s]:null;t.insertBefore(o[r],f)}}function Q(t,n){if(w){for(K(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function at(t,n,e){w&&!e?Q(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function R(t){t.parentNode.removeChild(t)}function W(t){return document.createElement(t)}function N(t){return document.createTextNode(t)}function ft(){return N(" ")}function dt(){return N("")}function _t(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function ht(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function U(t){return Array.from(t.childNodes)}function V(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function T(t,n,e,i,c=!1){V(t);const u=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const l=t[o];if(n(l)){const r=e(l);return r===void 0?t.splice(o,1):t[o]=r,c||(t.claim_info.last_index=o),l}}for(let o=t.claim_info.last_index-1;o>=0;o--){const l=t[o];if(n(l)){const r=e(l);return r===void 0?t.splice(o,1):t[o]=r,c?r===void 0&&t.claim_info.last_index--:t.claim_info.last_index=o,l}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function X(t,n,e,i){return T(t,c=>c.nodeName===n,c=>{const u=[];for(let o=0;o<c.attributes.length;o++){const l=c.attributes[o];e[l.name]||u.push(l.name)}u.forEach(o=>c.removeAttribute(o))},()=>i(n))}function mt(t,n,e){return X(t,n,e,W)}function Y(t,n){return T(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>N(n),!0)}function pt(t){return Y(t," ")}function yt(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function gt(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function xt(t,n,e){t.classList[e?"add":"remove"](n)}let m;function h(t){m=t}function y(){if(!m)throw new Error("Function called outside component initialization");return m}function bt(t){y().$$.on_mount.push(t)}function $t(t){y().$$.after_update.push(t)}function wt(t){y().$$.on_destroy.push(t)}function Et(t,n){return y().$$.context.set(t,n),n}function kt(t){return y().$$.context.get(t)}function jt(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach(i=>i.call(this,n))}const _=[],M=[],b=[],L=[],D=Promise.resolve();let k=!1;function q(){k||(k=!0,D.then(z))}function vt(){return q(),D}function j(t){b.push(t)}const E=new Set;let x=0;function z(){const t=m;do{for(;x<_.length;){const n=_[x];x++,h(n),Z(n.$$)}for(h(null),_.length=0,x=0;M.length;)M.pop()();for(let n=0;n<b.length;n+=1){const e=b[n];E.has(e)||(E.add(e),e())}b.length=0}while(_.length);for(;L.length;)L.pop()();k=!1,E.clear(),h(t)}function Z(t){if(t.fragment!==null){t.update(),p(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(j)}}const $=new Set;let d;function Nt(){d={r:0,c:[],p:d}}function At(){d.r||p(d.c),d=d.p}function tt(t,n){t&&t.i&&($.delete(t),t.i(n))}function St(t,n,e,i){if(t&&t.o){if($.has(t))return;$.add(t),d.c.push(()=>{$.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}}function Ct(t,n){const e={},i={},c={$$scope:1};let u=t.length;for(;u--;){const o=t[u],l=n[u];if(l){for(const r in o)r in l||(i[r]=1);for(const r in l)c[r]||(e[r]=l[r],c[r]=1);t[u]=l}else for(const r in o)c[r]=1}for(const o in i)o in e||(e[o]=void 0);return e}function Mt(t){return typeof t=="object"&&t!==null?t:{}}function Lt(t){t&&t.c()}function Bt(t,n){t&&t.l(n)}function nt(t,n,e,i){const{fragment:c,on_mount:u,on_destroy:o,after_update:l}=t.$$;c&&c.m(n,e),i||j(()=>{const r=u.map(B).filter(O);o?o.push(...r):p(r),t.$$.on_mount=[]}),l.forEach(j)}function et(t,n){const e=t.$$;e.fragment!==null&&(p(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function it(t,n){t.$$.dirty[0]===-1&&(_.push(t),q(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Ot(t,n,e,i,c,u,o,l=[-1]){const r=m;h(t);const s=t.$$={fragment:null,ctx:null,props:u,update:v,not_equal:c,bound:C(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(r?r.$$.context:[])),callbacks:C(),dirty:l,skip_bound:!1,root:n.target||r.$$.root};o&&o(s.root);let f=!1;if(s.ctx=e?e(t,n.props||{},(a,g,...A)=>{const S=A.length?A[0]:g;return s.ctx&&c(s.ctx[a],s.ctx[a]=S)&&(!s.skip_bound&&s.bound[a]&&s.bound[a](S),f&&it(t,a)),g}):[],s.update(),f=!0,p(s.before_update),s.fragment=i?i(s.ctx):!1,n.target){if(n.hydrate){I();const a=U(n.target);s.fragment&&s.fragment.l(a),a.forEach(R)}else s.fragment&&s.fragment.c();n.intro&&tt(t.$$.fragment),nt(t,n.target,n.anchor,n.customElement),G(),z()}h(r)}class Pt{$destroy(){et(this,1),this.$destroy=v}$on(n,e){const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const c=i.indexOf(e);c!==-1&&i.splice(c,1)}}$set(n){this.$$set&&!H(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{Mt as A,et as B,F as C,vt as D,v as E,ct as F,lt as G,st as H,ot as I,Q as J,xt as K,y as L,_t as M,jt as N,ut as O,wt as P,M as Q,kt as R,Pt as S,U as a,ht as b,mt as c,R as d,W as e,gt as f,at as g,Y as h,Ot as i,yt as j,ft as k,dt as l,pt as m,Nt as n,St as o,At as p,tt as q,Et as r,rt as s,N as t,$t as u,bt as v,Lt as w,Bt as x,nt as y,Ct as z};