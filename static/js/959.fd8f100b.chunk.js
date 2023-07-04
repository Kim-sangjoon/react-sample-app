"use strict";(self.webpackChunksampleapp=self.webpackChunksampleapp||[]).push([[959],{9959:function(e,s,n){n.r(s),n.d(s,{default:function(){return k}});var o=n(9439),t=n(1413),i=n(2791),r=n(6934),l=n(4554),c=n(6151),a=n(4663),d=n(1889),x=n(5527),h=n(9124),j=n(3896),u=n(6314),p=n(3594),m=n(3400),f=n(5351),b=n(9823),Z=n(184),v=function(e){var s=e.code,n=(0,i.useState)(!1),t=(0,o.Z)(n,2),r=t[0],l=t[1],a=function(){l(!0)},d=function(e,s){"slickaway"!==s&&l(!1)},x=(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsx)(m.Z,{size:"small","aria-label":"close",color:"inherit",onClick:d,children:(0,Z.jsx)(b.Z,{fontSize:"small"})})});return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(c.Z,{variant:"contained",size:"small",sx:{position:"absolute",right:"1px",bottom:"1px",backgroundColor:"#000",color:"#fff",boxShadow:"none",borderTopLeftRadius:"5px",borderTopRightRadius:"0px",borderBottomRightRadius:"4px",borderBottomleftRadius:"0px",textTransform:"initial","&:hover":{backgroundColor:"#000"}},onClick:function(){try{if(navigator.clipboard)navigator.clipboard.writeText(s).then((function(){console.log("https\uc5d0\uc11c \ud074\ub9bd\ubcf4\ub4dc \ubcf5\uc0ac \uc131\uacf5!!!")})),a();else{if(!document.queryCommandSupported("copy"))return alert("\ucf54\ub4dc\ubcf5\uc0ac \uae30\ub2a5\uc774 \uc9c0\uc6d0\ub418\uc9c0 \uc54a\ub294 \ube0c\ub77c\uc6b0\uc800 \uc785\ub2c8\ub2e4!");var e=document.createElement("textarea");e.value=s,e.style.top=0,e.style.left=0,e.style.position="fixed",document.body.appendChild(e),e.focus(),e.select(),document.execCommand("copy"),document.body.removeChild(e),console.log("http\uc5d0\uc11c \ud074\ub9bd\ubcf4\ub4dc \ubcf5\uc0ac \uc131\uacf5"),a()}}catch(n){console.error("error",n)}},children:"Copy"}),(0,Z.jsx)(f.Z,{open:r,autoHideDuration:4e3,onClose:d,message:"\ucf54\ub4dc\ubcf5\uc0ac \uc131\uacf5!! [Ctrl + V]\ub85c \uc6d0\ud558\ub294 \uacf3\uc5d0 \ubd99\uc5ec\ub123\uae30 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",action:x})]})},g={Box:l.Z,Button:c.Z,Toolbar:a.Z,Grid:d.ZP,Paper:x.Z,Tabs:h.Z,Tab:j.Z,Stack:u.Z},w=(0,r.ZP)(x.Z)((function(e){var s=e.theme;return(0,t.Z)((0,t.Z)({backgroundColor:"dark"===s.palette.mode?"#1A2027":"#fff"},s.typography.body2),{},{padding:s.spacing(0),color:s.palette.text.secondary})})),C={border:"1px solid #ddd",boxShadow:"none",height:"300px",overflowY:"auto",display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center"},P={border:"1px solid #ddd",boxShadow:"none",height:"300px",backgroundColor:"rgb(29, 31, 33)",overflowY:"auto"},T='<div className=\'code-sample\'>\n    <Stack spacing={2} direction="row" justifyContent="center">\n        <Button variant="text" disableRipple>Hello World</Button>\n        <Button variant="contained" disableRipple>Hello World</Button>\n        <Button variant="outlined" disableRipple>Hello World</Button>\n    </Stack>\n</div>\n',k=function(e){i.useEffect((function(){y()}),[]);var s=i.useState(!1),n=(0,o.Z)(s,2),t=n[0],r=n[1],c=i.useState(0),x=(0,o.Z)(c,2),u=x[0],m=x[1],f=1080,b=i.useRef(null),k=function(){var e=window.scrollY;console.log("\ud604\uc7ac\uc88c\ud45c"+e),e>90?(b.current.classList.add("fixed"),e>0&&e<475?m(0):e>475&&e<895?m(1):e>895&&e<f?m(2):e>f&&m(3)):e<90&&b.current&&b.current.classList.remove("fixed")};i.useEffect((function(){var e=setInterval((function(){window.addEventListener("scroll",k)}),100);return function(){clearInterval(e),window.removeEventListener("scroll",k)}}),[]);var y=function(){window.scrollTo({top:0,behavior:"smooth"})};return(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsxs)(l.Z,{className:"contentboxwrap",children:[(0,Z.jsx)(a.Z,{}),(0,Z.jsxs)(l.Z,{children:[(0,Z.jsx)("h1",{children:"\ub808\uc774\uc544\uc6c3"}),(0,Z.jsxs)(h.Z,{className:"contentTab",ref:b,value:u,onChange:function(e,s){0===s?window.scrollTo({top:1,behavior:"smooth"}):1===s?window.scrollTo({top:476,behavior:"smooth"}):2===s?window.scrollTo({top:896,behavior:"smooth"}):3===s&&window.scrollTo({top:1081,behavior:"smooth"})},sx:{backgroundColor:"rgb(255 255 255 / 60%)"},children:[(0,Z.jsx)(j.Z,{label:"\ubd84\ud560 \uc0d8\ud50c"}),(0,Z.jsx)(j.Z,{label:"2\ubd84\ud560"}),(0,Z.jsx)(j.Z,{label:"3\ubd84\ud560"}),(0,Z.jsx)(j.Z,{label:"4\ubd84\ud560"})]}),(0,Z.jsxs)("div",{className:"tab-item",children:[(0,Z.jsx)("h2",{children:"\ubd84\ud560 \uc0d8\ud50c(\ubc18\uc751\ud615)"}),(0,Z.jsx)("p",{className:"contText",children:"\ub808\uc544\uc544\uc6c3 \ucef4\ud3ec\ub10c\ud2b8"}),(0,Z.jsx)(l.Z,{sx:{flexGrow:1},children:(0,Z.jsx)(d.ZP,{container:!0,spacing:2,children:(0,Z.jsxs)(p.nu,{code:T,scope:g,children:[(0,Z.jsx)(d.ZP,{item:!0,xs:12,md:6,children:(0,Z.jsxs)(w,{sx:C,children:[(0,Z.jsx)(p.i5,{}),(0,Z.jsx)(p.IF,{})]})}),(0,Z.jsxs)(d.ZP,{item:!0,xs:12,md:6,sx:{position:"relative"},children:[(0,Z.jsx)(w,{sx:P,children:(0,Z.jsx)(p.uz,{})}),(0,Z.jsx)(v,{onClick:function(){r(!t)},code:T})]})]})})})]}),(0,Z.jsxs)("div",{className:"tab-item",children:[(0,Z.jsx)("h2",{children:"\ubd84\ud560 \uc0d8\ud50c(\ubc18\uc751\ud615)"}),(0,Z.jsx)("p",{className:"contText",children:"\ub808\uc544\uc544\uc6c3 \ucef4\ud3ec\ub10c\ud2b8"}),(0,Z.jsx)(l.Z,{sx:{flexGrow:1},children:(0,Z.jsx)(d.ZP,{container:!0,spacing:2,children:(0,Z.jsxs)(p.nu,{code:T,scope:g,children:[(0,Z.jsx)(d.ZP,{item:!0,xs:12,md:6,children:(0,Z.jsxs)(w,{sx:C,children:[(0,Z.jsx)(p.i5,{}),(0,Z.jsx)(p.IF,{})]})}),(0,Z.jsx)(d.ZP,{item:!0,xs:12,md:6,children:(0,Z.jsx)(w,{sx:P,children:(0,Z.jsx)(p.uz,{})})})]})})})]}),(0,Z.jsxs)("div",{className:"tab-item",children:[(0,Z.jsx)("h2",{children:"\ubd84\ud560 \uc0d8\ud50c(\ubc18\uc751\ud615)"}),(0,Z.jsx)("p",{className:"contText",children:"\ub808\uc544\uc544\uc6c3 \ucef4\ud3ec\ub10c\ud2b8"}),(0,Z.jsx)(l.Z,{sx:{flexGrow:1},children:(0,Z.jsx)(d.ZP,{container:!0,spacing:2,children:(0,Z.jsxs)(p.nu,{code:T,scope:g,children:[(0,Z.jsx)(d.ZP,{item:!0,xs:12,md:6,children:(0,Z.jsxs)(w,{sx:C,children:[(0,Z.jsx)(p.i5,{}),(0,Z.jsx)(p.IF,{})]})}),(0,Z.jsx)(d.ZP,{item:!0,xs:12,md:6,children:(0,Z.jsx)(w,{sx:P,children:(0,Z.jsx)(p.uz,{})})})]})})})]}),(0,Z.jsxs)("div",{className:"tab-item",children:[(0,Z.jsx)("h2",{children:"\ubd84\ud560 \uc0d8\ud50c(\ubc18\uc751\ud615)"}),(0,Z.jsx)("p",{className:"contText",children:"\ub808\uc544\uc544\uc6c3 \ucef4\ud3ec\ub10c\ud2b8"}),(0,Z.jsx)(l.Z,{sx:{flexGrow:1},children:(0,Z.jsx)(d.ZP,{container:!0,spacing:2,children:(0,Z.jsxs)(p.nu,{code:T,scope:g,children:[(0,Z.jsx)(d.ZP,{item:!0,xs:12,md:6,children:(0,Z.jsxs)(w,{sx:C,children:[(0,Z.jsx)(p.i5,{}),(0,Z.jsx)(p.IF,{})]})}),(0,Z.jsx)(d.ZP,{item:!0,xs:12,md:6,children:(0,Z.jsx)(w,{sx:P,children:(0,Z.jsx)(p.uz,{})})})]})})})]}),(0,Z.jsxs)("div",{className:"tab-item",children:[(0,Z.jsx)("h2",{children:"\ubd84\ud560 \uc0d8\ud50c(\ubc18\uc751\ud615)"}),(0,Z.jsx)("p",{className:"contText",children:"\ub808\uc544\uc544\uc6c3 \ucef4\ud3ec\ub10c\ud2b8"}),(0,Z.jsx)(l.Z,{sx:{flexGrow:1},children:(0,Z.jsx)(d.ZP,{container:!0,spacing:2,children:(0,Z.jsxs)(p.nu,{code:T,scope:g,children:[(0,Z.jsx)(d.ZP,{item:!0,xs:12,md:6,children:(0,Z.jsxs)(w,{sx:C,children:[(0,Z.jsx)(p.i5,{}),(0,Z.jsx)(p.IF,{})]})}),(0,Z.jsx)(d.ZP,{item:!0,xs:12,md:6,children:(0,Z.jsx)(w,{sx:P,children:(0,Z.jsx)(p.uz,{})})})]})})})]}),(0,Z.jsx)("p",{className:"bottom-last"})]}),(0,Z.jsx)("p",{className:"top-button",onClick:y,children:"TOP"})]})})}}}]);
//# sourceMappingURL=959.fd8f100b.chunk.js.map