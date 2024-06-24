"use strict";(self.webpackChunksampleapp=self.webpackChunksampleapp||[]).push([[897],{9059:(e,o,t)=>{t.d(o,{A:()=>d});var n=t(5043),s=t(7392),i=t(1906),r=t(8729),l=t(4802),a=t(579);const d=e=>{let{code:o}=e;const[t,d]=(0,n.useState)(!1),c=()=>{d(!0)},m=(e,o)=>{"slickaway"!==o&&d(!1)},x=(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(s.A,{size:"small","aria-label":"close",color:"inherit",onClick:m,children:(0,a.jsx)(l.A,{fontSize:"small"})})});return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.A,{variant:"contained",size:"small",sx:{position:"absolute",right:"1px",bottom:"1px",backgroundColor:"#000",color:"#fff",boxShadow:"none",borderTopLeftRadius:"5px",borderTopRightRadius:"0px",borderBottomRightRadius:"4px",borderBottomleftRadius:"0px",textTransform:"initial","&:hover":{backgroundColor:"#000"}},onClick:()=>{try{if(navigator.clipboard)navigator.clipboard.writeText(o).then((function(){console.log("https\uc5d0\uc11c \ud074\ub9bd\ubcf4\ub4dc \ubcf5\uc0ac \uc131\uacf5!!!")})),c();else{if(!document.queryCommandSupported("copy"))return alert("\ucf54\ub4dc\ubcf5\uc0ac \uae30\ub2a5\uc774 \uc9c0\uc6d0\ub418\uc9c0 \uc54a\ub294 \ube0c\ub77c\uc6b0\uc800 \uc785\ub2c8\ub2e4!");const e=document.createElement("textarea");e.value=o,e.style.top=0,e.style.left=0,e.style.position="fixed",document.body.appendChild(e),e.focus(),e.select(),document.execCommand("copy"),document.body.removeChild(e),console.log("http\uc5d0\uc11c \ud074\ub9bd\ubcf4\ub4dc \ubcf5\uc0ac \uc131\uacf5"),c()}}catch(e){console.error("error",e)}},children:"Copy"}),(0,a.jsx)(r.A,{open:t,autoHideDuration:4e3,onClose:m,message:"\ucf54\ub4dc\ubcf5\uc0ac!! [Ctrl + V]\ub85c \uc6d0\ud558\ub294 \uacf3\uc5d0 \ubd99\uc5ec\ub123\uae30 \ud558\uc138\uc694.",action:x})]})}},6897:(e,o,t)=>{t.r(o),t.d(o,{default:()=>w});var n=t(5043),s=t(4535),i=t(3336),r=t(6446),l=t(1906),a=t(5263),d=t(8903),c=t(9869),m=t(4056),x=t(8911),p=t(7285),u=t(9059),h=t(579);const b=(0,s.Ay)(i.A)((e=>{let{theme:o}=e;return{backgroundColor:"dark"===o.palette.mode?"#1A2027":"#fff",...o.typography.body2,padding:o.spacing(1),color:o.palette.text.secondary}})),g={border:"1px solid #ddd",boxShadow:"none",height:"400px",overflowY:"auto",display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center",backgroundColor:"rgb(243, 246, 249)"},C={border:"1px solid #ddd",boxShadow:"none",height:"400px",backgroundColor:"rgb(29, 31, 33)",overflowY:"auto"},f={Box:r.A,Button:l.A,Toolbar:a.A,Grid:d.Ay,Paper:i.A,Tabs:c.A,Tab:m.A,Stack:x.A,Item:b},w=e=>{n.useEffect((()=>(window.scrollTo({top:0,behavior:"smooth"}),()=>{})),[]);const[o,t]=n.useState(!1),s=()=>{t(!o)},[i,l]=n.useState(0),x=document.body.offsetWidth;console.log("\uac00\ub85c\uc0ac\uc774\uc988",x);const w=x>900?520:933,v=x>900?1053:1882,G=x>900?1567:2816,A=n.useRef(null),j=()=>{let e=window.scrollY;console.log("\ud604\uc7ac\uc88c\ud45c"+e),0===e?document.getElementsByClassName("top-button")[0].classList.remove("show"):document.getElementsByClassName("top-button")[0].classList.add("show"),e>90?(A.current.classList.add("fixed"),e>0&&e<w?l(0):e>w&&e<v?l(1):e>v&&e<G?l(2):e>G&&l(3)):e<90&&A.current&&A.current.classList.remove("fixed")};n.useEffect((()=>{const e=setInterval((()=>{window.addEventListener("scroll",j)}),100);return()=>{clearInterval(e),window.removeEventListener("scroll",j)}}),[]);const y={pageTitle:"\ub808\uc774\uc544\uc6c3",pageItems:[{id:1,tabLabels:"\ubd84\ud560 \uc0d8\ud50c",itemTitle:"\ubd84\ud560 \uc0d8\ud50c(\ubc18\uc751\ud615)",itemContText:"\ub808\uc774\uc544\uc6c3 \ucef4\ud3ec\ub10c\ud2b8",codeName:"<Box sx={{ flexGrow: 1 }}>\n    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>\n    {Array.from(Array(6)).map((_, index) => (\n        <Grid item xs={2} sm={4} md={4} key={index}>\n            <Item>xs=2</Item>\n        </Grid>\n    ))}\n    </Grid>\n</Box>\n",liveCode:!0,useComponent:null},{id:2,tabLabels:"2\ubd84\ud560",itemTitle:"2\ubd84\ud560",itemContText:"2\ubd84\ud560 \ub808\uc774\uc544\uc6c3",codeName:"<Box sx={{ flexGrow: 1 }}>\n    <Grid container spacing={2}>\n        <Grid item xs={6}>\n            <Item>xs=6</Item>\n        </Grid>\n        <Grid item xs={6}>\n            <Item>xs=6</Item>\n        </Grid>\n    </Grid>\n</Box>\n",liveCode:!0,useComponent:null},{id:3,tabLabels:"3\ubd84\ud560",itemTitle:"3\ubd84\ud560",itemContText:"3\ubd84\ud560 \ub808\uc774\uc544\uc6c3",codeName:"<Box sx={{ flexGrow: 1 }}>\n    <Grid container spacing={2}>\n        <Grid item xs={4}>\n            <Item>xs=4</Item>\n        </Grid>\n        <Grid item xs={4}>\n            <Item>xs=4</Item>\n        </Grid>\n        <Grid item xs={4}>\n            <Item>xs=4</Item>\n        </Grid>\n    </Grid>\n</Box>\n",liveCode:!0,useComponent:null},{id:4,tabLabels:"4\ubd84\ud560",itemTitle:"4\ubd84\ud560",itemContText:"4\ubd84\ud560 \ub808\uc774\uc544\uc6c3",codeName:"<Box sx={{ flexGrow: 1 }}>\n    <Grid container spacing={2}>\n        <Grid item xs={3}>\n            <Item>xs=3</Item>\n        </Grid>\n        <Grid item xs={3}>\n            <Item>xs=3</Item>\n        </Grid>\n        <Grid item xs={3}>\n            <Item>xs=3</Item>\n        </Grid>\n        <Grid item xs={3}>\n            <Item>xs=3</Item>\n        </Grid>\n    </Grid>\n</Box>\n",liveCode:!0,useComponent:null}]};return(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)(r.A,{className:"contentboxwrap",children:[(0,h.jsx)(a.A,{}),(0,h.jsxs)(r.A,{children:[(0,h.jsx)("h1",{children:y.pageTitle}),(0,h.jsx)(c.A,{className:"contentTab",ref:A,value:i,variant:"scrollable",scrollButtons:"auto",onChange:(e,o)=>{0===o?window.scrollTo({top:1,behavior:"smooth"}):1===o?window.scrollTo({top:w+1,behavior:"smooth"}):2===o?window.scrollTo({top:v+1,behavior:"smooth"}):3===o&&window.scrollTo({top:G+1,behavior:"smooth"})},sx:{backgroundColor:"rgb(255 255 255 / 60%)"},children:y.pageItems.map((e=>(0,h.jsx)(m.A,{label:e.tabLabels},e.id)))}),y.pageItems.map((e=>(0,h.jsxs)(r.A,{className:"tab-item",children:[(0,h.jsx)("h2",{children:e.itemTitle}),(0,h.jsx)("p",{className:"contText",children:e.itemContText}),(0,h.jsx)(r.A,{sx:{flexGrow:1},children:(0,h.jsx)(d.Ay,{container:!0,spacing:2,children:(0,h.jsxs)(p.Q,{code:e.codeName,scope:f,children:[(0,h.jsx)(d.Ay,{item:!0,xs:12,md:6,children:(0,h.jsxs)(b,{sx:g,children:[e.liveCode?(0,h.jsx)(p.pA,{}):"",e.liveCode?(0,h.jsx)(p.p1,{}):"",e.liveCode?"":e.useComponent]})}),(0,h.jsxs)(d.Ay,{item:!0,xs:12,md:6,sx:{position:"relative"},children:[(0,h.jsx)(b,{sx:{...C,backgroundColor:e.liveCode?"rgb(29, 31, 33)":"#505050"},children:(0,h.jsx)(p.w,{})}),(0,h.jsx)(u.A,{onClick:s,code:e.codeName})]})]})})})]},e.id))),(0,h.jsx)(r.A,{className:"bottom-last"})]}),(0,h.jsx)(r.A,{className:"top-button",onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},children:"TOP"})]})})}}}]);
//# sourceMappingURL=897.13518621.chunk.js.map