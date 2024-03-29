import React from 'react';
import { styled } from '@mui/material/styles';
import { 
  Box,
  Button,
  Toolbar,
  Grid,
  Paper,
  Tabs,
  Tab,
  Stack
} from '@mui/material';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import CopyButton from '../component/CopyButton';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,  
}));

const leftComponentBox = {border: '1px solid #ddd', boxShadow: 'none', height: '400px', overflowY: 'auto', display:'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', backgroundColor: 'rgb(243, 246, 249)'}
const rightCodeBox = {border: '1px solid #ddd', boxShadow: 'none', height: '400px', backgroundColor: 'rgb(29, 31, 33)', overflowY: 'auto'}
const scope = { 
    Box,
    Button,
    Toolbar,
    Grid,
    Paper,
    Tabs,
    Tab,
    Stack,
    Item
};
const code01=`<Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
    {Array.from(Array(6)).map((_, index) => (
        <Grid item xs={2} sm={4} md={4} key={index}>
            <Item>xs=2</Item>
        </Grid>
    ))}
    </Grid>
</Box>
`;
const code02=`<Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={2}>
        <Grid item xs={6}>
            <Item>xs=6</Item>
        </Grid>
        <Grid item xs={6}>
            <Item>xs=6</Item>
        </Grid>
    </Grid>
</Box>
`;
const code03=`<Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={2}>
        <Grid item xs={4}>
            <Item>xs=4</Item>
        </Grid>
        <Grid item xs={4}>
            <Item>xs=4</Item>
        </Grid>
        <Grid item xs={4}>
            <Item>xs=4</Item>
        </Grid>
    </Grid>
</Box>
`;
const code04=`<Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={2}>
        <Grid item xs={3}>
            <Item>xs=3</Item>
        </Grid>
        <Grid item xs={3}>
            <Item>xs=3</Item>
        </Grid>
        <Grid item xs={3}>
            <Item>xs=3</Item>
        </Grid>
        <Grid item xs={3}>
            <Item>xs=3</Item>
        </Grid>
    </Grid>
</Box>
`;

const MainLayoutPage = (props) => {
    React.useEffect(()=> {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    },[])
    const [toast, setToast] = React.useState(false);
    const handleToast = () => {
        setToast(!toast)
    }

    const [TabValue, setTabValue] = React.useState(0); //탭컨트롤러 상태 0,1,2,3
    const screenWidth = document.body.offsetWidth;
    console.log('가로사이즈',screenWidth);
    const sFix = 90;
    const tab01 = 0;
    const tab02 = screenWidth > 900 ? 520 : 933;
    const tab03 = screenWidth > 900 ? 1053 : 1882;
    const tab04 = screenWidth > 900 ? 1567 : 2816;


    const handleTabChange = (event, newTabValue) => {
        if (newTabValue === 0) {
            window.scrollTo({
                top: tab01 + 1,
                behavior: "smooth"
            });
        } else if (newTabValue === 1) {
            window.scrollTo({
                top: tab02 + 1,
                behavior: "smooth"
            });
        } else if (newTabValue === 2) {
            window.scrollTo({
                top: tab03 + 1,
                behavior: "smooth"
            });
        } else if (newTabValue === 3) {
            window.scrollTo({
                top: tab04 + 1,
                behavior: "smooth"
            });
        }
    };

    //탭컨트롤러 스크롤
    const tabRef = React.useRef(null);
    const handleScroll = () => {
        let scValue = window.scrollY;
        console.log("현재좌표" + scValue);
        if (scValue === 0) {
            document.getElementsByClassName('top-button')[0].classList.remove('show');
        } else {
            document.getElementsByClassName('top-button')[0].classList.add('show');
        }
        if (scValue > sFix) {
            tabRef.current.classList.add('fixed'); 
            if(scValue > tab01 && scValue < tab02){
                setTabValue(0);
            } else if(scValue > tab02 && scValue < tab03){
                setTabValue(1);
            } else if(scValue > tab03 && scValue < tab04){
                setTabValue(2);
            } else if(scValue > tab04){
                setTabValue(3);
            }
        } else if (scValue < sFix) {
            if (tabRef.current) {
                tabRef.current.classList.remove('fixed');
            }
        }
    };

    // 탭 컨트롤 하는 함수
    React.useEffect(()=> {
        const timer = setInterval(() => {
            window.addEventListener("scroll", handleScroll);
        }, 100);
        return () => {
            clearInterval(timer);
            window.removeEventListener("scroll", handleScroll);
        }
        // eslint-disable-next-line
    },[])

    //스크롤 top 컨트롤
    function handleScrollTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    return (
        <>
            <Box className='contentboxwrap'>
                <Toolbar />
                <Box>
                    <h1>레이아웃</h1>
                    <Tabs className='contentTab' ref={tabRef} value={TabValue} variant="scrollable" scrollButtons="auto" onChange={handleTabChange} sx={{backgroundColor: 'rgb(255 255 255 / 60%)'}}>
                        <Tab label="분할 샘플" />
                        <Tab label="2분할" />
                        <Tab label="3분할" />
                        <Tab label="4분할" />
                    </Tabs>
                    <Box className='tab-item'>
                        <h2>분할 샘플(반응형)</h2>
                        <p className='contText'>레아아웃 컴포넌트</p>
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={2}>
                                <LiveProvider code={code01} scope={scope}>
                                    <Grid item xs={12} md={6}>
                                        <Item sx={leftComponentBox}>
                                            <LivePreview />
                                            <LiveError />
                                        </Item>
                                    </Grid>
                                    <Grid item xs={12} md={6} sx={{position: 'relative'}}>
                                        <Item sx={rightCodeBox}>
                                            <LiveEditor />
                                        </Item>
                                        <CopyButton onClick={handleToast} code={code01} />
                                    </Grid>
                                </LiveProvider>
                            </Grid>
                        </Box>
                    </Box>
                    <Box className='tab-item'>
                        <h2>2분할</h2>
                        <p className='contText'>2분할 레이아웃</p>
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={2}>
                                <LiveProvider code={code02} scope={scope}>
                                    <Grid item xs={12} md={6}>
                                        <Item sx={leftComponentBox}>
                                            <LivePreview />
                                            <LiveError />
                                        </Item>
                                    </Grid>
                                    <Grid item xs={12} md={6} sx={{position: 'relative'}}>
                                        <Item sx={rightCodeBox}>
                                            <LiveEditor />
                                        </Item>
                                        <CopyButton onClick={handleToast} code={code02} />
                                    </Grid>
                                </LiveProvider>
                            </Grid>
                        </Box>
                    </Box>
                    <Box className='tab-item'>
                        <h2>3분할</h2>
                        <p className='contText'>3분할 레이아웃</p>
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={2}>
                                <LiveProvider code={code03} scope={scope}>
                                    <Grid item xs={12} md={6}>
                                        <Item sx={leftComponentBox}>
                                            <LivePreview />
                                            <LiveError />
                                        </Item>
                                    </Grid>
                                    <Grid item xs={12} md={6} sx={{position: 'relative'}}>
                                        <Item sx={rightCodeBox}>
                                            <LiveEditor />
                                        </Item>
                                        <CopyButton onClick={handleToast} code={code03} />
                                    </Grid>
                                </LiveProvider>
                            </Grid>
                        </Box>
                    </Box>
                    <Box className='tab-item'>
                        <h2>4분할</h2>
                        <p className='contText'>4분할 레이아웃</p>
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={2}>
                                <LiveProvider code={code04} scope={scope}>
                                    <Grid item xs={12} md={6}>
                                        <Item sx={leftComponentBox}>
                                            <LivePreview />
                                            <LiveError />
                                        </Item>
                                    </Grid>
                                    <Grid item xs={12} md={6} sx={{position: 'relative'}}>
                                        <Item sx={rightCodeBox}>
                                            <LiveEditor />
                                        </Item>
                                        <CopyButton onClick={handleToast} code={code04} />
                                    </Grid>
                                </LiveProvider>
                            </Grid>
                        </Box>
                    </Box>
                    <Box className='bottom-last'></Box>
                </Box>
                <Box className='top-button' onClick={handleScrollTop}>TOP</Box>
            </Box>
        </>
    );
};

export default MainLayoutPage;