"use strict";(self.webpackChunksampleapp=self.webpackChunksampleapp||[]).push([[394],{9059:(e,n,l)=>{l.d(n,{A:()=>d});var o=l(5043),i=l(7392),s=l(1906),t=l(8729),a=l(4802),r=l(579);const d=e=>{let{code:n}=e;const[l,d]=(0,o.useState)(!1),c=()=>{d(!0)},x=(e,n)=>{"slickaway"!==n&&d(!1)},m=(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(i.A,{size:"small","aria-label":"close",color:"inherit",onClick:x,children:(0,r.jsx)(a.A,{fontSize:"small"})})});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.A,{variant:"contained",size:"small",sx:{position:"absolute",right:"1px",bottom:"1px",backgroundColor:"#000",color:"#fff",boxShadow:"none",borderTopLeftRadius:"5px",borderTopRightRadius:"0px",borderBottomRightRadius:"4px",borderBottomleftRadius:"0px",textTransform:"initial","&:hover":{backgroundColor:"#000"}},onClick:()=>{try{if(navigator.clipboard)navigator.clipboard.writeText(n).then((function(){console.log("https\uc5d0\uc11c \ud074\ub9bd\ubcf4\ub4dc \ubcf5\uc0ac \uc131\uacf5!!!")})),c();else{if(!document.queryCommandSupported("copy"))return alert("\ucf54\ub4dc\ubcf5\uc0ac \uae30\ub2a5\uc774 \uc9c0\uc6d0\ub418\uc9c0 \uc54a\ub294 \ube0c\ub77c\uc6b0\uc800 \uc785\ub2c8\ub2e4!");const e=document.createElement("textarea");e.value=n,e.style.top=0,e.style.left=0,e.style.position="fixed",document.body.appendChild(e),e.focus(),e.select(),document.execCommand("copy"),document.body.removeChild(e),console.log("http\uc5d0\uc11c \ud074\ub9bd\ubcf4\ub4dc \ubcf5\uc0ac \uc131\uacf5"),c()}}catch(e){console.error("error",e)}},children:"Copy"}),(0,r.jsx)(t.A,{open:l,autoHideDuration:4e3,onClose:x,message:"\ucf54\ub4dc\ubcf5\uc0ac!! [Ctrl + V]\ub85c \uc6d0\ud558\ub294 \uacf3\uc5d0 \ubd99\uc5ec\ub123\uae30 \ud558\uc138\uc694.",action:m})]})}},8394:(e,n,l)=>{l.r(n),l.d(n,{default:()=>He});var o=l(5043),i=l(4535),s=l(3336),t=l(6446),a=l(1906),r=l(5263),d=l(8903),c=l(9869),x=l(4056),m=l(8911),h=l(1962),p=l(9413),u=l(4605),A=l(3193),j=l(1292),b=l(4256),g=l(8492),T=l(8356),v=l(2143),y=l(1673),C=l(4225),w=l(7784),I=l(5721),L=l(681),f=l(8968),k=l(2050),B=l(8734),F=l(9425),S=l(3460),D=l(2420),M=l(9650),N=l(4882),G=l(8076),P=l(7392),z=l(7739),R=l(44),H=l(7254),E=l(3462),O=l(6600),Q=l(5316),q=l(8533),W=l(9347),V=l(5865),Y=l(3766),U=l(6605),$=l(710),J=l(3691),K=l(3368),X=l(2016),Z=l(5710),_=l(6506),ee=l(9302),ne=l(8390),le=l(4080),oe=l(7285),ie=l(9059),se=l(9336),te=l(8029),ae=l(3724),re=l(3471),de=l(1337),ce=l(579);const xe=(0,i.Ay)(s.A)((e=>{let{theme:n}=e;return{backgroundColor:"dark"===n.palette.mode?"#1A2027":"#fff",...n.typography.body2,padding:n.spacing(1),color:n.palette.text.secondary}})),me={Box:t.A,Button:a.A,Toolbar:r.A,Grid:d.Ay,Paper:s.A,Tabs:c.A,Tab:x.A,Stack:m.A,Checkbox:h.A,FormGroup:p.A,FormControlLabel:u.A,FormControl:A.A,FormLabel:j.A,Radio:b.A,RadioGroup:g.A,InputLabel:T.A,MenuItem:v.A,FormHelperText:y.A,Select:C.A,TextField:w.A,AdapterDayjs:ee.R,LocalizationProvider:ne.$,DatePicker:le.l,Divider:se.A,InboxIcon:te.A,DraftsIcon:ae.A,List:I.A,ListItem:L.Ay,ListItemButton:f.A,ListItemIcon:k.A,ListItemText:B.A,Table:F.A,TableBody:S.A,TableCell:D.A,TableContainer:M.A,TableHead:N.A,TableRow:G.A,createData:Se,IconButton:P.A,Tooltip:z.A,ClickAwayListener:R.x,DeleteIcon:re.A,Alert:H.A,Dialog:E.A,DialogTitle:O.A,DialogContent:Q.A,DialogContentText:q.A,DialogActions:W.A,Typography:V.A,Accordion:Y.A,AccordionSummary:U.A,AccordionDetails:$.A,ExpandMoreIcon:de.A,Pagination:J.A,TabContext:X.Ay,TabList:Z.A,TabPanel:_.A,Modal:K.A},he={border:"1px solid #ddd",boxShadow:"none",height:"400px",overflowY:"auto",display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center",backgroundColor:"rgb(243, 246, 249)"},pe={border:"1px solid #ddd",boxShadow:"none",height:"400px",backgroundColor:"rgb(29, 31, 33)",overflowY:"auto",textAlign:"left"},ue=' <Box sx={{ \'& button\': { m: 1 } }}>\n<div>\n<Button size="small">Small</Button>\n<Button size="medium">Medium</Button>\n<Button size="large">Large</Button>\n</div>\n<div>\n<Button variant="outlined" size="small">\n    Small\n</Button>\n<Button variant="outlined" size="medium">\n    Medium\n</Button>\n<Button variant="outlined" size="large">\n    Large\n</Button>\n</div>\n<div>\n<Button variant="contained" size="small">\n    Small\n</Button>\n<Button variant="contained" size="medium">\n    Medium\n</Button>\n<Button variant="contained" size="large">\n    Large\n</Button>\n</div>\n</Box>\n',Ae='<Box \nsx={{\ndisplay: \'flex\', \njustifyContent: \'center\'}}\n>\n<FormGroup>\n<FormControlLabel \ncontrol={<Checkbox defaultChecked />} \nlabel="Label" \n/>\n<FormControlLabel \nrequired \ncontrol={<Checkbox />} \nlabel="Required" \n/>\n<FormControlLabel \ndisabled \ncontrol={<Checkbox />} \nlabel="Disabled" \n/>\n</FormGroup>\n</Box>\n',je='<FormControl>\n<FormLabel \nid="demo-radio-buttons-group-label"\n>\nGender\n</FormLabel>\n<RadioGroup\naria-labelledby=\n"demo-radio-buttons-group-label"\ndefaultValue="female"\nname="radio-buttons-group"\n>\n<FormControlLabel \nvalue="female" \ncontrol={<Radio />} \nlabel="Female" \n/>\n<FormControlLabel \nvalue="male" \ncontrol={<Radio />} \nlabel="Male" \n/>\n<FormControlLabel \nvalue="other" \ncontrol={<Radio />} \nlabel="Other" \n/>\n</RadioGroup>\n</FormControl>\n',be='const Selectbox = () => {\nconst [\n    age, \n    setAge\n] = React.useState(\'\');\n\nconst handleChange = (event) => {\n    setAge(event.target.value);\n};\nreturn (\n<div>\n<FormControl \nsx={{ m: 1, minWidth: 120 }}\n disabled>\n<InputLabel \nid="demo-simple-select-disabled-label"\n>\nAge\n</InputLabel>\n<Select\nlabelId=\n"demo-simple-select-disabled-label"\nid="demo-simple-select-disabled"\nvalue={age}\nlabel="Age"\nonChange={handleChange}\n>\n<MenuItem value="">\n<em>None</em>\n</MenuItem>\n<MenuItem value={10}>Ten</MenuItem>\n<MenuItem value={20}>Twenty</MenuItem>\n<MenuItem value={30}>Thirty</MenuItem>\n</Select>\n<FormHelperText>\nDisabled\n</FormHelperText>\n</FormControl>\n<FormControl \nsx={{ m: 1, minWidth: 120 }} \nerror>\n<InputLabel \nid="demo-simple-select-error-label">\nAge\n</InputLabel>\n<Select\nlabelId="demo-simple-select-error-label"\nid="demo-simple-select-error"\nvalue={age}\nlabel="Age"\nonChange={handleChange}\nrenderValue={value}\n>\n<MenuItem value="">\n<em>None</em>\n</MenuItem>\n<MenuItem value={10}>Ten</MenuItem>\n<MenuItem value={20}>Twenty</MenuItem>\n<MenuItem value={30}>Thirty</MenuItem>\n</Select>\n<FormHelperText>Error</FormHelperText>\n</FormControl>\n<FormControl sx={{ \n    m: 1, \n    minWidth: 120 }}>\n<InputLabel \nid="demo-simple-select-readonly-label"\n>\nAge\n</InputLabel>\n<Select\nlabelId=\n"demo-simple-select-readonly-label"\nid="demo-simple-select-readonly"\nvalue={age}\nlabel="Age"\nonChange={handleChange}\ninputProps={{ readOnly: true }}\n>\n<MenuItem value="">\n<em>None</em>\n</MenuItem>\n<MenuItem value={10}>Ten</MenuItem>\n<MenuItem value={20}>Twenty</MenuItem>\n<MenuItem value={30}>Thirty</MenuItem>\n</Select>\n<FormHelperText>\nRead only\n</FormHelperText>\n</FormControl>\n<FormControl \nrequired \nsx={{ m: 1, minWidth: 120 }}>\n<InputLabel \nid="demo-simple-select-required-label">\nAge\n</InputLabel>\n<Select\nlabelId=\n"demo-simple-select-required-label"\nid="demo-simple-select-required"\nvalue={age}\nlabel="Age *"\nonChange={handleChange}\n>\n<MenuItem value="">\n<em>None</em>\n</MenuItem>\n<MenuItem value={10}>Ten</MenuItem>\n<MenuItem value={20}>Twenty</MenuItem>\n<MenuItem value={30}>Thirty</MenuItem>\n</Select>\n<FormHelperText>\nRequired\n</FormHelperText>\n</FormControl>\n</div>\n)\n}\n',ge='<Box\ncomponent="form"\nsx={{\n  \'& .MuiTextField-root\': { \n    m: 1, width: \'33ch\' \n},\n}}\nnoValidate\nautoComplete="off"\n>\n    <div>\n    <TextField\n        label="Size"\n        id="outlined-size-small"\n        defaultValue="Small"\n        size="small"\n    />\n    <TextField label="Size" \n    id="outlined-size-normal" \n    defaultValue="Normal" />\n    </div>\n    <div>\n    <TextField\n        label="Size"\n        id="filled-size-small"\n        defaultValue="Small"\n        variant="filled"\n        size="small"\n    />\n    <TextField\n        label="Size"\n        id="filled-size-normal"\n        defaultValue="Normal"\n        variant="filled"\n    />\n    </div>\n    <div>\n    <TextField\n        label="Size"\n        id="standard-size-small"\n        defaultValue="Small"\n        size="small"\n        variant="standard"\n    />\n    <TextField\n        label="Size"\n        id="standard-size-normal"\n        defaultValue="Normal"\n        variant="standard"\n    />\n    </div>\n</Box>\n',Te='<Box \nsx={{ \n    width: \'100%\', \n    maxWidth: 300, \n    bgcolor: \'background.paper\',\n    display: \'inline-block\'\n}}>\n<nav aria-label="main mailbox folders">\n<List>\n<ListItem disablePadding>\n<ListItemButton>\n<ListItemIcon>\n<InboxIcon />\n</ListItemIcon>\n<ListItemText primary="Inbox" />\n</ListItemButton>\n</ListItem>\n<ListItem disablePadding>\n<ListItemButton>\n<ListItemIcon>\n<DraftsIcon />\n</ListItemIcon>\n<ListItemText primary="Drafts" />\n</ListItemButton>\n</ListItem>\n</List>\n</nav>\n<Divider />\n<nav \naria-label="secondary \nmailbox \nfolders">\n<List>\n<ListItem disablePadding>\n<ListItemButton>\n<ListItemText primary="Trash" />\n</ListItemButton>\n</ListItem>\n<ListItem disablePadding>\n<ListItemButton \ncomponent="a" \nhref="#simple-list">\n<ListItemText primary="Spam" />\n</ListItemButton>\n</ListItem>\n</List>\n</nav>\n</Box>',ve='<TableContainer \ncomponent={Paper}>\n<Table \nsx={{ minWidth: 650 }} \naria-label="simple table"\n>\n<TableHead>\n<TableRow>\n<TableCell>\nDessert (100g serving)\n</TableCell>\n<TableCell \nalign="right"\n>Calories\n</TableCell>\n<TableCell align="right">\nFat&nbsp;(g)\n</TableCell>\n<TableCell align="right">\nCarbs&nbsp;(g)\n</TableCell>\n<TableCell align="right">\nProtein&nbsp;(g)\n</TableCell>\n</TableRow>\n</TableHead>\n<TableBody>\n{rows.map((row) => (\n<TableRow\nkey={row.name}\nsx={{ \'&:last-child td, \n&:last-child th\': { border: 0 } \n}}>\n<TableCell component="th" scope="row">\n{row.name}\n</TableCell>\n<TableCell align="right">\n{row.calories}\n</TableCell>\n<TableCell align="right">\n{row.fat}\n</TableCell>\n<TableCell align="right">\n{row.carbs}\n</TableCell>\n<TableCell align="right">\n{row.protein}\n</TableCell>\n</TableRow>\n))}\n</TableBody>\n</Table>\n</TableContainer>',ye='<div>\n<Grid container justifyContent="center">\n<Grid item>\n<Tooltip disableFocusListener title="Add">\n<Button>Hover or touch</Button>\n</Tooltip>\n</Grid>\n<Grid item>\n<Tooltip disableHoverListener title="Add">\n<Button>Focus or touch</Button>\n</Tooltip>\n</Grid>\n<Grid item>\n<Tooltip \ndisableFocusListener \ndisableTouchListener title="Add">\n<Button>Hover</Button>\n</Tooltip>\n</Grid>\n<Grid item>\n<ClickAwayListener \nonClickAway={handleTooltipClose}>\n<div>\n<Tooltip\nPopperProps={{\ndisablePortal: true,\n}}\nonClose={handleTooltipClose}\nopen={open}\ndisableFocusListener\ndisableHoverListener\ndisableTouchListener\ntitle="Add"\n>\n<Button \nonClick={handleTooltipOpen}>\nClick</Button>\n</Tooltip>\n</div>\n</ClickAwayListener>\n</Grid>\n</Grid>\n</div>\n',Ce='<Stack \nsx={{ width: \'100%\' }} \nspacing={2}>\n<Alert \nseverity="error"\n>\nThis is an error alert \u2014 check it out!\n</Alert>\n<Alert \nseverity="warning"\n>\nThis is a warning alert \u2014 check it out!\n</Alert>\n<Alert \nseverity="info"\n>\nThis is an info alert \u2014 check it out!\n</Alert>\n<Alert \nseverity="success"\n>\nThis is a success alert \u2014 check it out!\n</Alert>\n</Stack>',we='\n<div>\n<Button \nvariant="outlined" \nonClick={handleClickOpen}>\nOpen alert dialog\n</Button>\n<Dialog\nopen={open}\nonClose={handleClose}\naria-labelledby=\n"alert-dialog-title"\naria-describedby=\n"alert-dialog-description"\n>\n<DialogTitle \nid="alert-dialog-title"\n>\n{"Use Google\'s location service?"}\n</DialogTitle>\n<DialogContent>\n<DialogContentText \nid="alert-dialog-description">\nLet Google \nhelp apps determine location. \nThis means sending anonymous\nlocation data to Google, \neven when no apps are running.\n</DialogContentText>\n</DialogContent>\n<DialogActions>\n<Button onClick={handleClose}>\nDisagree\n</Button>\n<Button \nonClick={handleClose} \nautoFocus>\nAgree\n</Button>\n</DialogActions>\n</Dialog>\n</div>\n);\n}',Ie='<div style={{textAlign: \'left\'}}>\n<Accordion>\n<AccordionSummary\nexpandIcon={<ExpandMoreIcon />}\naria-controls="panel1a-content"\nid="panel1a-header"\n>\n<Typography>Accordion 1</Typography>\n</AccordionSummary>\n<AccordionDetails>\n<Typography>\nLorem ipsum dolor sit amet, \nconsectetur adipiscing elit. \nSuspendisse\nmalesuada lacus ex, \nsit amet blandit leo lobortis eget.\n</Typography>\n</AccordionDetails>\n</Accordion>\n<Accordion>\n<AccordionSummary\nexpandIcon={<ExpandMoreIcon />}\naria-controls="panel2a-content"\nid="panel2a-header"\n>\n<Typography>Accordion 2</Typography>\n</AccordionSummary>\n<AccordionDetails>\n<Typography>\nLorem ipsum dolor sit amet, \nconsectetur adipiscing elit. \nSuspendisse\nmalesuada lacus ex, \nsit amet blandit leo lobortis eget.\n</Typography>\n</AccordionDetails>\n</Accordion>\n<Accordion disabled>\n<AccordionSummary\nexpandIcon={<ExpandMoreIcon />}\naria-controls="panel3a-content"\nid="panel3a-header"\n>\n<Typography>\nDisabled Accordion\n</Typography>\n</AccordionSummary>\n</Accordion>\n</div>',Le='<Stack \nspacing={2} \nsx={{alignItems: \'center\'}}>\n<Pagination count={6} />\n<Pagination count={6} color="primary" />\n<Pagination count={6} color="secondary" />\n<Pagination count={6} disabled />\n</Stack>',fe='<Box \nsx={{ \n    width: \'100%\', \n    typography: \'body1\' \n}}>\n<TabContext value={value}>\n<Box sx={{ \n    borderBottom: 1, \n    borderColor: \'divider\' \n}}>\n<TabList \nonChange={handleChange} \naria-label="lab API tabs example">\n    <Tab label="Item One" value="1" />\n    <Tab label="Item Two" value="2" />\n    <Tab label="Item Three" value="3" />\n</TabList>\n</Box>\n<TabPanel value="1">Item One</TabPanel>\n<TabPanel value="2">Item Two</TabPanel>\n<TabPanel value="3">Item Three</TabPanel>\n</TabContext>\n</Box>',ke='<Button \nonClick={handleOpen}>\nOpen modal\n</Button>\n<Modal\nopen={open}\nonClose={handleClose}\naria-labelledby=\n"modal-modal-title"\naria-describedby=\n"modal-modal-description"\n>\n<Box sx={style}>\n<Typography \nid="modal-modal-title" \nvariant="h6" \ncomponent="h2">\n    Text in a modal\n</Typography>\n<Typography \nid="modal-modal-description" \nsx={{ mt: 2 }}>\n    Duis mollis, \n    est non commodo luctus, \n    nisi erat porttitor ligula.\n</Typography>\n</Box>\n</Modal>',Be="<LocalizationProvider \ndateAdapter={AdapterDayjs}>\n<DatePicker />\n</LocalizationProvider>",Fe=()=>{const[e,n]=o.useState(""),l=e=>{n(e.target.value)};return(0,ce.jsxs)("div",{children:[(0,ce.jsxs)(A.A,{sx:{m:1,minWidth:120},disabled:!0,children:[(0,ce.jsx)(T.A,{id:"demo-simple-select-disabled-label",children:"Age"}),(0,ce.jsxs)(C.A,{labelId:"demo-simple-select-disabled-label",id:"demo-simple-select-disabled",value:e,label:"Age",onChange:l,children:[(0,ce.jsx)(v.A,{value:"",children:(0,ce.jsx)("em",{children:"None"})}),(0,ce.jsx)(v.A,{value:10,children:"Ten"}),(0,ce.jsx)(v.A,{value:20,children:"Twenty"}),(0,ce.jsx)(v.A,{value:30,children:"Thirty"})]}),(0,ce.jsx)(y.A,{children:"Disabled"})]}),(0,ce.jsxs)(A.A,{sx:{m:1,minWidth:120},error:!0,children:[(0,ce.jsx)(T.A,{id:"demo-simple-select-error-label",children:"Age"}),(0,ce.jsxs)(C.A,{labelId:"demo-simple-select-error-label",id:"demo-simple-select-error",value:e,label:"Age",onChange:l,renderValue:e=>"\u26a0\ufe0f  - ".concat(e),children:[(0,ce.jsx)(v.A,{value:"",children:(0,ce.jsx)("em",{children:"None"})}),(0,ce.jsx)(v.A,{value:10,children:"Ten"}),(0,ce.jsx)(v.A,{value:20,children:"Twenty"}),(0,ce.jsx)(v.A,{value:30,children:"Thirty"})]}),(0,ce.jsx)(y.A,{children:"Error"})]}),(0,ce.jsxs)(A.A,{sx:{m:1,minWidth:120},children:[(0,ce.jsx)(T.A,{id:"demo-simple-select-readonly-label",children:"Age"}),(0,ce.jsxs)(C.A,{labelId:"demo-simple-select-readonly-label",id:"demo-simple-select-readonly",value:e,label:"Age",onChange:l,inputProps:{readOnly:!0},children:[(0,ce.jsx)(v.A,{value:"",children:(0,ce.jsx)("em",{children:"None"})}),(0,ce.jsx)(v.A,{value:10,children:"Ten"}),(0,ce.jsx)(v.A,{value:20,children:"Twenty"}),(0,ce.jsx)(v.A,{value:30,children:"Thirty"})]}),(0,ce.jsx)(y.A,{children:"Read only"})]}),(0,ce.jsxs)(A.A,{required:!0,sx:{m:1,minWidth:120},children:[(0,ce.jsx)(T.A,{id:"demo-simple-select-required-label",children:"Age"}),(0,ce.jsxs)(C.A,{labelId:"demo-simple-select-required-label",id:"demo-simple-select-required",value:e,label:"Age *",onChange:l,children:[(0,ce.jsx)(v.A,{value:"",children:(0,ce.jsx)("em",{children:"None"})}),(0,ce.jsx)(v.A,{value:10,children:"Ten"}),(0,ce.jsx)(v.A,{value:20,children:"Twenty"}),(0,ce.jsx)(v.A,{value:30,children:"Thirty"})]}),(0,ce.jsx)(y.A,{children:"Required"})]})]})};function Se(e,n,l){return{name:e,calories:n,fat:l}}const De=[Se("Frozen yoghurt",159,6),Se("Eclair",262,16),Se("Cupcake",305,3.7),Se("Gingerbread",356,16)],Me=()=>(0,ce.jsx)(M.A,{component:s.A,children:(0,ce.jsxs)(F.A,{sx:{minWidth:200},"aria-label":"simple table",children:[(0,ce.jsx)(N.A,{children:(0,ce.jsxs)(G.A,{children:[(0,ce.jsx)(D.A,{children:"Dessert (100g serving)"}),(0,ce.jsx)(D.A,{align:"right",children:"Calories"}),(0,ce.jsx)(D.A,{align:"right",children:"Fat\xa0(g)"})]})}),(0,ce.jsx)(S.A,{children:De.map((e=>(0,ce.jsxs)(G.A,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,ce.jsx)(D.A,{component:"th",scope:"row",children:e.name}),(0,ce.jsx)(D.A,{align:"right",children:e.calories}),(0,ce.jsx)(D.A,{align:"right",children:e.fat})]},e.name)))})]})}),Ne=()=>{const[e,n]=o.useState(!1),l=()=>{n(!1)};return(0,ce.jsxs)("div",{children:[(0,ce.jsx)(a.A,{variant:"outlined",onClick:()=>{n(!0)},children:"Open alert dialog"}),(0,ce.jsxs)(E.A,{open:e,onClose:l,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[(0,ce.jsx)(O.A,{id:"alert-dialog-title",children:"Use Google's location service?"}),(0,ce.jsx)(Q.A,{children:(0,ce.jsx)(q.A,{id:"alert-dialog-description",children:"Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."})}),(0,ce.jsxs)(W.A,{children:[(0,ce.jsx)(a.A,{onClick:l,children:"Disagree"}),(0,ce.jsx)(a.A,{onClick:l,autoFocus:!0,children:"Agree"})]})]})]})},Ge=()=>{const[e,n]=o.useState("1");return(0,ce.jsx)(t.A,{sx:{width:"100%",typography:"body1"},children:(0,ce.jsxs)(X.Ay,{value:e,children:[(0,ce.jsx)(t.A,{sx:{borderBottom:1,borderColor:"divider"},children:(0,ce.jsxs)(Z.A,{onChange:(e,l)=>{n(l)},"aria-label":"lab API tabs example",children:[(0,ce.jsx)(x.A,{label:"Item One",value:"1"}),(0,ce.jsx)(x.A,{label:"Item Two",value:"2"}),(0,ce.jsx)(x.A,{label:"Item Three",value:"3"})]})}),(0,ce.jsx)(_.A,{value:"1",children:"Item One"}),(0,ce.jsx)(_.A,{value:"2",children:"Item Two"}),(0,ce.jsx)(_.A,{value:"3",children:"Item Three"})]})})},Pe={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4,"@media(max-width: 600px)":{width:"calc(100vw - 20px)"}},ze=()=>{const[e,n]=o.useState(!1);return(0,ce.jsxs)("div",{children:[(0,ce.jsx)(a.A,{onClick:()=>n(!0),children:"Open modal"}),(0,ce.jsx)(K.A,{open:e,onClose:()=>n(!1),"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,ce.jsxs)(t.A,{sx:Pe,children:[(0,ce.jsx)(V.A,{id:"modal-modal-title",variant:"h6",component:"h2",children:"Text in a modal"}),(0,ce.jsx)(V.A,{id:"modal-modal-description",sx:{mt:2},children:"Duis mollis, est non commodo luctus, nisi erat porttitor ligula."})]})})]})},Re=()=>{const[e,n]=o.useState(!1),l=()=>{n(!1)};return(0,ce.jsx)("div",{children:(0,ce.jsxs)(d.Ay,{container:!0,justifyContent:"center",children:[(0,ce.jsx)(d.Ay,{item:!0,children:(0,ce.jsx)(z.A,{disableFocusListener:!0,title:"Add",children:(0,ce.jsx)(a.A,{children:"Hover or touch"})})}),(0,ce.jsx)(d.Ay,{item:!0,children:(0,ce.jsx)(z.A,{disableHoverListener:!0,title:"Add",children:(0,ce.jsx)(a.A,{children:"Focus or touch"})})}),(0,ce.jsx)(d.Ay,{item:!0,children:(0,ce.jsx)(z.A,{disableFocusListener:!0,disableTouchListener:!0,title:"Add",children:(0,ce.jsx)(a.A,{children:"Hover"})})}),(0,ce.jsx)(d.Ay,{item:!0,children:(0,ce.jsx)(R.x,{onClickAway:l,children:(0,ce.jsx)("div",{children:(0,ce.jsx)(z.A,{PopperProps:{disablePortal:!0},onClose:l,open:e,disableFocusListener:!0,disableHoverListener:!0,disableTouchListener:!0,title:"Add",children:(0,ce.jsx)(a.A,{onClick:()=>{n(!0)},children:"Click"})})})})})]})})},He=e=>{o.useEffect((()=>{window.scrollTo({top:0,behavior:"smooth"})}),[]);const[n,l]=o.useState(!1),i=()=>{l(!n)},[s,a]=o.useState(0),m=document.body.offsetWidth;console.log("\uac00\ub85c\uc0ac\uc774\uc988",m);const h=m>900?526:939,p=m>900?1053:1878,u=m>900?1578:2808,A=m>900?2092:3768,j=m>900?2619:4708,b=m>900?3133:5633,g=m>900?3659:6572,T=m>900?4185:7511,v=m>900?4699:8450,y=m>900?5226:9388,C=m>900?5739:10328,w=m>900?6277:11267,I=m>900?6790:12205,L=m>900?7318:13144,f=o.useRef(null),k=()=>{let e=window.scrollY;console.log("\ud604\uc7ac\uc88c\ud45c"+e),0===e?document.getElementsByClassName("top-button")[0].classList.remove("show"):document.getElementsByClassName("top-button")[0].classList.add("show"),e>90?(f.current.classList.add("fixed"),e>0&&e<h?a(0):e>h&&e<p?a(1):e>p&&e<u?a(2):e>u&&e<A?a(3):e>A&&e<j?a(4):e>j&&e<b?a(5):e>b&&e<g?a(6):e>g&&e<T?a(7):e>T&&e<v?a(8):e>v&&e<y?a(9):e>y&&e<C?a(10):e>C&&e<w?a(11):e>w&&e<I?a(12):e>I&&e<L?a(13):e>L&&a(14)):e<90&&f.current&&f.current.classList.remove("fixed")};o.useEffect((()=>{const e=setInterval((()=>{window.addEventListener("scroll",k)}),100);return()=>{clearInterval(e),window.removeEventListener("scroll",k)}}),[]);return(0,ce.jsx)(ce.Fragment,{children:(0,ce.jsxs)(t.A,{className:"contentboxwrap",children:[(0,ce.jsx)(r.A,{}),(0,ce.jsxs)(t.A,{children:[(0,ce.jsx)("h1",{children:"\ucef4\ud3ec\ub10c\ud2b8"}),(0,ce.jsx)(c.A,{className:"contentTab",ref:f,value:s,variant:"scrollable",scrollButtons:"auto",onChange:(e,n)=>{0===n?window.scrollTo({top:1,behavior:"smooth"}):1===n?window.scrollTo({top:h+1,behavior:"smooth"}):2===n?window.scrollTo({top:p+1,behavior:"smooth"}):3===n?window.scrollTo({top:u+1,behavior:"smooth"}):4===n?window.scrollTo({top:A+1,behavior:"smooth"}):5===n?window.scrollTo({top:j+1,behavior:"smooth"}):6===n?window.scrollTo({top:b+1,behavior:"smooth"}):7===n?window.scrollTo({top:g+1,behavior:"smooth"}):8===n?window.scrollTo({top:T+1,behavior:"smooth"}):9===n?window.scrollTo({top:v+1,behavior:"smooth"}):10===n?window.scrollTo({top:y+1,behavior:"smooth"}):11===n?window.scrollTo({top:C+1,behavior:"smooth"}):12===n?window.scrollTo({top:w+1,behavior:"smooth"}):13===n?window.scrollTo({top:I+1,behavior:"smooth"}):14===n&&window.scrollTo({top:L+1,behavior:"smooth"})},sx:{backgroundColor:"rgb(255 255 255 / 60%)"},children:["Button","Checkbox","Radio Group","Select","Text Field","List","Table","Tooltip","Alert","Dialog","Accordion","Pagination","Tabs","Modal","Date Pickers"].map((e=>(0,ce.jsx)(x.A,{label:e},e)))}),(0,ce.jsxs)(t.A,{className:"tab-item",children:[(0,ce.jsx)("h2",{children:"\ubc84\ud2bc"}),(0,ce.jsx)("p",{className:"contText",children:"\ubc84\ud2bc \ucef4\ud3ec\ub10c\ud2b8"}),(0,ce.jsx)(t.A,{sx:{flexGrow:1},children:(0,ce.jsx)(d.Ay,{container:!0,spacing:2,children:(0,ce.jsxs)(oe.Q,{code:ue,scope:me,children:[(0,ce.jsx)(d.Ay,{item:!0,xs:12,md:6,children:(0,ce.jsxs)(xe,{sx:he,children:[(0,ce.jsx)(oe.pA,{}),(0,ce.jsx)(oe.p1,{})]})}),(0,ce.jsxs)(d.Ay,{item:!0,xs:12,md:6,sx:{position:"relative"},children:[(0,ce.jsx)(xe,{sx:pe,children:(0,ce.jsx)(oe.w,{})}),(0,ce.jsx)(ie.A,{onClick:i,code:ue})]})]})})})]}),(0,ce.jsxs)(t.A,{className:"tab-item",children:[(0,ce.jsx)("h2",{children:"\uccb4\ud06c\ubc15\uc2a4"}),(0,ce.jsx)("p",{className:"contText",children:"\uccb4\ud06c\ubc15\uc2a4 \ucef4\ud3ec\ub10c\ud2b8"}),(0,ce.jsx)(t.A,{sx:{flexGrow:1},children:(0,ce.jsx)(d.Ay,{container:!0,spacing:2,children:(0,ce.jsxs)(oe.Q,{code:Ae,scope:me,children:[(0,ce.jsx)(d.Ay,{item:!0,xs:12,md:6,children:(0,ce.jsxs)(xe,{sx:he,children:[(0,ce.jsx)(oe.pA,{}),(0,ce.jsx)(oe.p1,{})]})}),(0,ce.jsxs)(d.Ay,{item:!0,xs:12,md:6,sx:{position:"relative"},children:[(0,ce.jsx)(xe,{sx:pe,children:(0,ce.jsx)(oe.w,{})}),(0,ce.jsx)(ie.A,{onClick:i,code:Ae})]})]})})})]}),(0,ce.jsxs)(t.A,{className:"tab-item",children:[(0,ce.jsx)("h2",{children:"\ub77c\ub514\uc624"}),(0,ce.jsx)("p",{className:"contText",children:"\ub77c\ub514\uc624 \ucef4\ud3ec\ub10c\ud2b8"}),(0,ce.jsx)(t.A,{sx:{flexGrow:1},children:(0,ce.jsx)(d.Ay,{container:!0,spacing:2,children:(0,ce.jsxs)(oe.Q,{code:je,scope:me,children:[(0,ce.jsx)(d.Ay,{item:!0,xs:12,md:6,children:(0,ce.jsxs)(xe,{sx:he,children:[(0,ce.jsx)(oe.pA,{}),(0,ce.jsx)(oe.p1,{})]})}),(0,ce.jsxs)(d.Ay,{item:!0,xs:12,md:6,sx:{position:"relative"},children:[(0,ce.jsx)(xe,{sx:pe,children:(0,ce.jsx)(oe.w,{})}),(0,ce.jsx)(ie.A,{onClick:i,code:je})]})]})})})]}),(0,ce.jsxs)(t.A,{className:"tab-item",children:[(0,ce.jsx)("h2",{children:"\uc140\ub809\ud2b8"}),(0,ce.jsx)("p",{className:"contText",children:"\uc140\ub809\ud2b8 \ucef4\ud3ec\ub10c\ud2b8"}),(0,ce.jsx)(t.A,{sx:{flexGrow:1},children:(0,ce.jsx)(d.Ay,{container:!0,spacing:2,children:(0,ce.jsxs)(oe.Q,{code:be,scope:me,children:[(0,ce.jsx)(d.Ay,{item:!0,xs:12,md:6,children:(0,ce.jsx)(xe,{sx:he,children:(0,ce.jsx)(Fe,{})})}),(0,ce.jsxs)(d.Ay,{item:!0,xs:12,md:6,sx:{position:"relative"},children:[(0,ce.jsx)(xe,{sx:pe,children:(0,ce.jsx)(oe.w,{disabled:!0})}),(0,ce.jsx)(ie.A,{onClick:i,code:be})]})]})})})]}),(0,ce.jsxs)(t.A,{className:"tab-item",children:[(0,ce.jsx)("h2",{children:"TextField"}),(0,ce.jsx)("p",{className:"contText",children:"TextField \ucef4\ud3ec\ub10c\ud2b8"}),(0,ce.jsx)(t.A,{sx:{flexGrow:1},children:(0,ce.jsx)(d.Ay,{container:!0,spacing:2,children:(0,ce.jsxs)(oe.Q,{code:ge,scope:me,children:[(0,ce.jsx)(d.Ay,{item:!0,xs:12,md:6,children:(0,ce.jsxs)(xe,{sx:he,children:[(0,ce.jsx)(oe.pA,{}),(0,ce.jsx)(oe.p1,{})]})}),(0,ce.jsxs)(d.Ay,{item:!0,xs:12,md:6,sx:{position:"relative"},children:[(0,ce.jsx)(xe,{sx:pe,children:(0,ce.jsx)(oe.w,{})}),(0,ce.jsx)(ie.A,{onClick:i,code:ge})]})]})})})]}),(0,ce.jsxs)(t.A,{className:"tab-item",children:[(0,ce.jsx)("h2",{children:"LIST"}),(0,ce.jsx)("p",{className:"contText",children:"LIST \ucef4\ud3ec\ub10c\ud2b8"}),(0,ce.jsx)(t.A,{sx:{flexGrow:1},children:(0,ce.jsx)(d.Ay,{container:!0,spacing:2,children:(0,ce.jsxs)(oe.Q,{code:Te,scope:me,children:[(0,ce.jsx)(d.Ay,{item:!0,xs:12,md:6,children:(0,ce.jsxs)(xe,{sx:he,children:[(0,ce.jsx)(oe.pA,{}),(0,ce.jsx)(oe.p1,{})]})}),(0,ce.jsxs)(d.Ay,{item:!0,xs:12,md:6,sx:{position:"relative"},children:[(0,ce.jsx)(xe,{sx:pe,children:(0,ce.jsx)(oe.w,{})}),(0,ce.jsx)(ie.A,{onClick:i,code:Te})]})]})})})]}),(0,ce.jsxs)(t.A,{className:"tab-item",children:[(0,ce.jsx)("h2",{children:"TABLE"}),(0,ce.jsx)("p",{className:"contText",children:"TABLE \ucef4\ud3ec\ub10c\ud2b8"}),(0,ce.jsx)(t.A,{sx:{flexGrow:1},children:(0,ce.jsx)(d.Ay,{container:!0,spacing:2,children:(0,ce.jsxs)(oe.Q,{code:ve,scope:me,children:[(0,ce.jsx)(d.Ay,{item:!0,xs:12,md:6,children:(0,ce.jsx)(xe,{sx:he,children:(0,ce.jsx)(Me,{})})}),(0,ce.jsxs)(d.Ay,{item:!0,xs:12,md:6,sx:{position:"relative"},children:[(0,ce.jsx)(xe,{sx:pe,children:(0,ce.jsx)(oe.w,{disabled:!0})}),(0,ce.jsx)(ie.A,{onClick:i,code:ve})]})]})})})]}),(0,ce.jsxs)(t.A,{className:"tab-item",children:[(0,ce.jsx)("h2",{children:"ToolTip"}),(0,ce.jsx)("p",{className:"contText",children:"ToolTip \ucef4\ud3ec\ub10c\ud2b8"}),(0,ce.jsx)(t.A,{sx:{flexGrow:1},children:(0,ce.jsx)(d.Ay,{container:!0,spacing:2,children:(0,ce.jsxs)(oe.Q,{code:ye,scope:me,children:[(0,ce.jsx)(d.Ay,{item:!0,xs:12,md:6,children:(0,ce.jsx)(xe,{sx:he,children:(0,ce.jsx)(Re,{})})}),(0,ce.jsxs)(d.Ay,{item:!0,xs:12,md:6,sx:{position:"relative"},children:[(0,ce.jsx)(xe,{sx:pe,children:(0,ce.jsx)(oe.w,{disabled:!0})}),(0,ce.jsx)(ie.A,{onClick:i,code:ye})]})]})})})]}),(0,ce.jsxs)(t.A,{className:"tab-item",children:[(0,ce.jsx)("h2",{children:"Alert"}),(0,ce.jsx)("p",{className:"contText",children:"Alert \ucef4\ud3ec\ub10c\ud2b8"}),(0,ce.jsx)(t.A,{sx:{flexGrow:1},children:(0,ce.jsx)(d.Ay,{container:!0,spacing:2,children:(0,ce.jsxs)(oe.Q,{code:Ce,scope:me,children:[(0,ce.jsx)(d.Ay,{item:!0,xs:12,md:6,children:(0,ce.jsxs)(xe,{sx:he,children:[(0,ce.jsx)(oe.pA,{}),(0,ce.jsx)(oe.p1,{})]})}),(0,ce.jsxs)(d.Ay,{item:!0,xs:12,md:6,sx:{position:"relative"},children:[(0,ce.jsx)(xe,{sx:pe,children:(0,ce.jsx)(oe.w,{})}),(0,ce.jsx)(ie.A,{onClick:i,code:Ce})]})]})})})]}),(0,ce.jsxs)(t.A,{className:"tab-item",children:[(0,ce.jsx)("h2",{children:"Dialog"}),(0,ce.jsx)("p",{className:"contText",children:"Dialog \ucef4\ud3ec\ub10c\ud2b8"}),(0,ce.jsx)(t.A,{sx:{flexGrow:1},children:(0,ce.jsx)(d.Ay,{container:!0,spacing:2,children:(0,ce.jsxs)(oe.Q,{code:we,scope:me,children:[(0,ce.jsx)(d.Ay,{item:!0,xs:12,md:6,children:(0,ce.jsx)(xe,{sx:he,children:(0,ce.jsx)(Ne,{})})}),(0,ce.jsxs)(d.Ay,{item:!0,xs:12,md:6,sx:{position:"relative"},children:[(0,ce.jsx)(xe,{sx:pe,children:(0,ce.jsx)(oe.w,{disabled:!0})}),(0,ce.jsx)(ie.A,{onClick:i,code:we})]})]})})})]}),(0,ce.jsxs)(t.A,{className:"tab-item",children:[(0,ce.jsx)("h2",{children:"Accordion"}),(0,ce.jsx)("p",{className:"contText",children:"Accordion \ucef4\ud3ec\ub10c\ud2b8"}),(0,ce.jsx)(t.A,{sx:{flexGrow:1},children:(0,ce.jsx)(d.Ay,{container:!0,spacing:2,children:(0,ce.jsxs)(oe.Q,{code:Ie,scope:me,children:[(0,ce.jsx)(d.Ay,{item:!0,xs:12,md:6,children:(0,ce.jsxs)(xe,{sx:he,children:[(0,ce.jsx)(oe.pA,{}),(0,ce.jsx)(oe.p1,{})]})}),(0,ce.jsxs)(d.Ay,{item:!0,xs:12,md:6,sx:{position:"relative"},children:[(0,ce.jsx)(xe,{sx:pe,children:(0,ce.jsx)(oe.w,{})}),(0,ce.jsx)(ie.A,{onClick:i,code:Ie})]})]})})})]}),(0,ce.jsxs)(t.A,{className:"tab-item",children:[(0,ce.jsx)("h2",{children:"Pagination"}),(0,ce.jsx)("p",{className:"contText",children:"Pagination \ucef4\ud3ec\ub10c\ud2b8"}),(0,ce.jsx)(t.A,{sx:{flexGrow:1},children:(0,ce.jsx)(d.Ay,{container:!0,spacing:2,children:(0,ce.jsxs)(oe.Q,{code:Le,scope:me,children:[(0,ce.jsx)(d.Ay,{item:!0,xs:12,md:6,children:(0,ce.jsxs)(xe,{sx:he,children:[(0,ce.jsx)(oe.pA,{}),(0,ce.jsx)(oe.p1,{})]})}),(0,ce.jsxs)(d.Ay,{item:!0,xs:12,md:6,sx:{position:"relative"},children:[(0,ce.jsx)(xe,{sx:pe,children:(0,ce.jsx)(oe.w,{})}),(0,ce.jsx)(ie.A,{onClick:i,code:Le})]})]})})})]}),(0,ce.jsxs)(t.A,{className:"tab-item",children:[(0,ce.jsx)("h2",{children:"Tabs"}),(0,ce.jsx)("p",{className:"contText",children:"Tabs \ucef4\ud3ec\ub10c\ud2b8"}),(0,ce.jsx)(t.A,{sx:{flexGrow:1},children:(0,ce.jsx)(d.Ay,{container:!0,spacing:2,children:(0,ce.jsxs)(oe.Q,{code:fe,scope:me,children:[(0,ce.jsx)(d.Ay,{item:!0,xs:12,md:6,children:(0,ce.jsx)(xe,{sx:he,children:(0,ce.jsx)(Ge,{})})}),(0,ce.jsxs)(d.Ay,{item:!0,xs:12,md:6,sx:{position:"relative"},children:[(0,ce.jsx)(xe,{sx:pe,children:(0,ce.jsx)(oe.w,{disabled:!0})}),(0,ce.jsx)(ie.A,{onClick:i,code:fe})]})]})})})]}),(0,ce.jsxs)(t.A,{className:"tab-item",children:[(0,ce.jsx)("h2",{children:"Modal"}),(0,ce.jsx)("p",{className:"contText",children:"Modal \ucef4\ud3ec\ub10c\ud2b8"}),(0,ce.jsx)(t.A,{sx:{flexGrow:1},children:(0,ce.jsx)(d.Ay,{container:!0,spacing:2,children:(0,ce.jsxs)(oe.Q,{code:ke,scope:me,children:[(0,ce.jsx)(d.Ay,{item:!0,xs:12,md:6,children:(0,ce.jsx)(xe,{sx:he,children:(0,ce.jsx)(ze,{})})}),(0,ce.jsxs)(d.Ay,{item:!0,xs:12,md:6,sx:{position:"relative"},children:[(0,ce.jsx)(xe,{sx:pe,children:(0,ce.jsx)(oe.w,{disabled:!0})}),(0,ce.jsx)(ie.A,{onClick:i,code:ke})]})]})})})]}),(0,ce.jsxs)(t.A,{className:"tab-item",children:[(0,ce.jsx)("h2",{children:"Date Pickers"}),(0,ce.jsx)("p",{className:"contText",children:"Date Pickers \ucef4\ud3ec\ub10c\ud2b8"}),(0,ce.jsx)(t.A,{sx:{flexGrow:1},children:(0,ce.jsx)(d.Ay,{container:!0,spacing:2,children:(0,ce.jsxs)(oe.Q,{code:Be,scope:me,children:[(0,ce.jsx)(d.Ay,{item:!0,xs:12,md:6,children:(0,ce.jsxs)(xe,{sx:he,children:[(0,ce.jsx)(oe.pA,{}),(0,ce.jsx)(oe.p1,{})]})}),(0,ce.jsxs)(d.Ay,{item:!0,xs:12,md:6,sx:{position:"relative"},children:[(0,ce.jsx)(xe,{sx:pe,children:(0,ce.jsx)(oe.w,{})}),(0,ce.jsx)(ie.A,{onClick:i,code:Be})]})]})})})]}),(0,ce.jsx)(t.A,{className:"bottom-last"})]}),(0,ce.jsx)(t.A,{className:"top-button",onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})},children:"TOP"})]})})}}}]);
//# sourceMappingURL=394.1bdc7b5e.chunk.js.map