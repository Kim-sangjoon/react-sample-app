"use strict";(self.webpackChunksampleapp=self.webpackChunksampleapp||[]).push([[897],{9059:(e,s,o)=>{o.d(s,{A:()=>d});var n=o(5043),t=o(7392),r=o(1906),i=o(8729),l=o(4802),c=o(579);const d=e=>{let{code:s}=e;const[o,d]=(0,n.useState)(!1),x=()=>{d(!0)},a=(e,s)=>{"slickaway"!==s&&d(!1)},m=(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(t.A,{size:"small","aria-label":"close",color:"inherit",onClick:a,children:(0,c.jsx)(l.A,{fontSize:"small"})})});return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r.A,{variant:"contained",size:"small",sx:{position:"absolute",right:"1px",bottom:"1px",backgroundColor:"#000",color:"#fff",boxShadow:"none",borderTopLeftRadius:"5px",borderTopRightRadius:"0px",borderBottomRightRadius:"4px",borderBottomleftRadius:"0px",textTransform:"initial","&:hover":{backgroundColor:"#000"}},onClick:()=>{try{if(navigator.clipboard)navigator.clipboard.writeText(s).then((function(){console.log("https\uc5d0\uc11c \ud074\ub9bd\ubcf4\ub4dc \ubcf5\uc0ac \uc131\uacf5!!!")})),x();else{if(!document.queryCommandSupported("copy"))return alert("\ucf54\ub4dc\ubcf5\uc0ac \uae30\ub2a5\uc774 \uc9c0\uc6d0\ub418\uc9c0 \uc54a\ub294 \ube0c\ub77c\uc6b0\uc800 \uc785\ub2c8\ub2e4!");const e=document.createElement("textarea");e.value=s,e.style.top=0,e.style.left=0,e.style.position="fixed",document.body.appendChild(e),e.focus(),e.select(),document.execCommand("copy"),document.body.removeChild(e),console.log("http\uc5d0\uc11c \ud074\ub9bd\ubcf4\ub4dc \ubcf5\uc0ac \uc131\uacf5"),x()}}catch(e){console.error("error",e)}},children:"Copy"}),(0,c.jsx)(i.A,{open:o,autoHideDuration:4e3,onClose:a,message:"\ucf54\ub4dc\ubcf5\uc0ac!! [Ctrl + V]\ub85c \uc6d0\ud558\ub294 \uacf3\uc5d0 \ubd99\uc5ec\ub123\uae30 \ud558\uc138\uc694.",action:m})]})}},6897:(e,s,o)=>{o.r(s),o.d(s,{default:()=>v});var n=o(5043),t=o(4535),r=o(3336),i=o(6446),l=o(1906),c=o(5263),d=o(8903),x=o(9869),a=o(4056),m=o(8911),h=o(7285),p=o(9059),j=o(579);const u=(0,t.Ay)(r.A)((e=>{let{theme:s}=e;return{backgroundColor:"dark"===s.palette.mode?"#1A2027":"#fff",...s.typography.body2,padding:s.spacing(1),color:s.palette.text.secondary}})),A={border:"1px solid #ddd",boxShadow:"none",height:"400px",overflowY:"auto",display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center",backgroundColor:"rgb(243, 246, 249)"},b={border:"1px solid #ddd",boxShadow:"none",height:"400px",backgroundColor:"rgb(29, 31, 33)",overflowY:"auto"},f={Box:i.A,Button:l.A,Toolbar:c.A,Grid:d.Ay,Paper:r.A,Tabs:x.A,Tab:a.A,Stack:m.A,Item:u},w="<Box sx={{ flexGrow: 1 }}>\n    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>\n    {Array.from(Array(6)).map((_, index) => (\n        <Grid item xs={2} sm={4} md={4} key={index}>\n            <Item>xs=2</Item>\n        </Grid>\n    ))}\n    </Grid>\n</Box>\n",g="<Box sx={{ flexGrow: 1 }}>\n    <Grid container spacing={2}>\n        <Grid item xs={6}>\n            <Item>xs=6</Item>\n        </Grid>\n        <Grid item xs={6}>\n            <Item>xs=6</Item>\n        </Grid>\n    </Grid>\n</Box>\n",y="<Box sx={{ flexGrow: 1 }}>\n    <Grid container spacing={2}>\n        <Grid item xs={4}>\n            <Item>xs=4</Item>\n        </Grid>\n        <Grid item xs={4}>\n            <Item>xs=4</Item>\n        </Grid>\n        <Grid item xs={4}>\n            <Item>xs=4</Item>\n        </Grid>\n    </Grid>\n</Box>\n",G="<Box sx={{ flexGrow: 1 }}>\n    <Grid container spacing={2}>\n        <Grid item xs={3}>\n            <Item>xs=3</Item>\n        </Grid>\n        <Grid item xs={3}>\n            <Item>xs=3</Item>\n        </Grid>\n        <Grid item xs={3}>\n            <Item>xs=3</Item>\n        </Grid>\n        <Grid item xs={3}>\n            <Item>xs=3</Item>\n        </Grid>\n    </Grid>\n</Box>\n",v=e=>{n.useEffect((()=>{window.scrollTo({top:0,behavior:"smooth"})}),[]);const[s,o]=n.useState(!1),t=()=>{o(!s)},[r,l]=n.useState(0),m=document.body.offsetWidth;console.log("\uac00\ub85c\uc0ac\uc774\uc988",m);const v=m>900?520:933,C=m>900?1053:1882,I=m>900?1567:2816,k=n.useRef(null),T=()=>{let e=window.scrollY;console.log("\ud604\uc7ac\uc88c\ud45c"+e),0===e?document.getElementsByClassName("top-button")[0].classList.remove("show"):document.getElementsByClassName("top-button")[0].classList.add("show"),e>90?(k.current.classList.add("fixed"),e>0&&e<v?l(0):e>v&&e<C?l(1):e>C&&e<I?l(2):e>I&&l(3)):e<90&&k.current&&k.current.classList.remove("fixed")};return n.useEffect((()=>{const e=setInterval((()=>{window.addEventListener("scroll",T)}),100);return()=>{clearInterval(e),window.removeEventListener("scroll",T)}}),[]),(0,j.jsx)(j.Fragment,{children:(0,j.jsxs)(i.A,{className:"contentboxwrap",children:[(0,j.jsx)(c.A,{}),(0,j.jsxs)(i.A,{children:[(0,j.jsx)("h1",{children:"\ub808\uc774\uc544\uc6c3"}),(0,j.jsxs)(x.A,{className:"contentTab",ref:k,value:r,variant:"scrollable",scrollButtons:"auto",onChange:(e,s)=>{0===s?window.scrollTo({top:1,behavior:"smooth"}):1===s?window.scrollTo({top:v+1,behavior:"smooth"}):2===s?window.scrollTo({top:C+1,behavior:"smooth"}):3===s&&window.scrollTo({top:I+1,behavior:"smooth"})},sx:{backgroundColor:"rgb(255 255 255 / 60%)"},children:[(0,j.jsx)(a.A,{label:"\ubd84\ud560 \uc0d8\ud50c"}),(0,j.jsx)(a.A,{label:"2\ubd84\ud560"}),(0,j.jsx)(a.A,{label:"3\ubd84\ud560"}),(0,j.jsx)(a.A,{label:"4\ubd84\ud560"})]}),(0,j.jsxs)(i.A,{className:"tab-item",children:[(0,j.jsx)("h2",{children:"\ubd84\ud560 \uc0d8\ud50c(\ubc18\uc751\ud615)"}),(0,j.jsx)("p",{className:"contText",children:"\ub808\uc544\uc544\uc6c3 \ucef4\ud3ec\ub10c\ud2b8"}),(0,j.jsx)(i.A,{sx:{flexGrow:1},children:(0,j.jsx)(d.Ay,{container:!0,spacing:2,children:(0,j.jsxs)(h.Q,{code:w,scope:f,children:[(0,j.jsx)(d.Ay,{item:!0,xs:12,md:6,children:(0,j.jsxs)(u,{sx:A,children:[(0,j.jsx)(h.pA,{}),(0,j.jsx)(h.p1,{})]})}),(0,j.jsxs)(d.Ay,{item:!0,xs:12,md:6,sx:{position:"relative"},children:[(0,j.jsx)(u,{sx:b,children:(0,j.jsx)(h.w,{})}),(0,j.jsx)(p.A,{onClick:t,code:w})]})]})})})]}),(0,j.jsxs)(i.A,{className:"tab-item",children:[(0,j.jsx)("h2",{children:"2\ubd84\ud560"}),(0,j.jsx)("p",{className:"contText",children:"2\ubd84\ud560 \ub808\uc774\uc544\uc6c3"}),(0,j.jsx)(i.A,{sx:{flexGrow:1},children:(0,j.jsx)(d.Ay,{container:!0,spacing:2,children:(0,j.jsxs)(h.Q,{code:g,scope:f,children:[(0,j.jsx)(d.Ay,{item:!0,xs:12,md:6,children:(0,j.jsxs)(u,{sx:A,children:[(0,j.jsx)(h.pA,{}),(0,j.jsx)(h.p1,{})]})}),(0,j.jsxs)(d.Ay,{item:!0,xs:12,md:6,sx:{position:"relative"},children:[(0,j.jsx)(u,{sx:b,children:(0,j.jsx)(h.w,{})}),(0,j.jsx)(p.A,{onClick:t,code:g})]})]})})})]}),(0,j.jsxs)(i.A,{className:"tab-item",children:[(0,j.jsx)("h2",{children:"3\ubd84\ud560"}),(0,j.jsx)("p",{className:"contText",children:"3\ubd84\ud560 \ub808\uc774\uc544\uc6c3"}),(0,j.jsx)(i.A,{sx:{flexGrow:1},children:(0,j.jsx)(d.Ay,{container:!0,spacing:2,children:(0,j.jsxs)(h.Q,{code:y,scope:f,children:[(0,j.jsx)(d.Ay,{item:!0,xs:12,md:6,children:(0,j.jsxs)(u,{sx:A,children:[(0,j.jsx)(h.pA,{}),(0,j.jsx)(h.p1,{})]})}),(0,j.jsxs)(d.Ay,{item:!0,xs:12,md:6,sx:{position:"relative"},children:[(0,j.jsx)(u,{sx:b,children:(0,j.jsx)(h.w,{})}),(0,j.jsx)(p.A,{onClick:t,code:y})]})]})})})]}),(0,j.jsxs)(i.A,{className:"tab-item",children:[(0,j.jsx)("h2",{children:"4\ubd84\ud560"}),(0,j.jsx)("p",{className:"contText",children:"4\ubd84\ud560 \ub808\uc774\uc544\uc6c3"}),(0,j.jsx)(i.A,{sx:{flexGrow:1},children:(0,j.jsx)(d.Ay,{container:!0,spacing:2,children:(0,j.jsxs)(h.Q,{code:G,scope:f,children:[(0,j.jsx)(d.Ay,{item:!0,xs:12,md:6,children:(0,j.jsxs)(u,{sx:A,children:[(0,j.jsx)(h.pA,{}),(0,j.jsx)(h.p1,{})]})}),(0,j.jsxs)(d.Ay,{item:!0,xs:12,md:6,sx:{position:"relative"},children:[(0,j.jsx)(u,{sx:b,children:(0,j.jsx)(h.w,{})}),(0,j.jsx)(p.A,{onClick:t,code:G})]})]})})})]}),(0,j.jsx)(i.A,{className:"bottom-last"})]}),(0,j.jsx)(i.A,{className:"top-button",onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},children:"TOP"})]})})}}}]);
//# sourceMappingURL=897.abb90679.chunk.js.map