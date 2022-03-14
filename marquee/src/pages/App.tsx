import './App.css';
import { TradeWidget } from '../components/TradeWidget';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import moment from 'moment';
import { useEffect,useState } from 'react';
import Marquee from 'react-fast-marquee';
import { Data, RecentSwapsResponse } from 'types/recentSwaps';

const theme = createTheme({
    components: {
        MuiTypography: {
            styleOverrides: {
                root: {
                    color: `white`,
                }
            }
        }
    },
    typography: {
        fontFamily: [
            `Inter`,
            `-apple-system`,
            `BlinkMacSystemFont`,
            `"Segoe UI"`,
            `Roboto`,
            `"Helvetica Neue"`,
            `Arial`,
            `sans-serif`,
            `"Apple Color Emoji"`,
            `"Segoe UI Emoji"`,
            `"Segoe UI Symbol"`,
        ].join(`,`),
        body1: {
            fontSize: `1em`,
            color: `white`,
        },
        subtitle1: {
            fontSize: `0.85em`,
            color: `white`,
        },
        caption: {
            fontSize: `0.75em`,
            color: `rgb(255,255,255 / 0.8)`,
        },
    }
});

function App () {
    const [ arr, setArr ] = useState<Data[]>();
    const [ currentTime, setCurrentTime ] = useState(moment());
    
    useEffect(() => {
        const recentSwaps = async () => {
            try {
                const res = await fetch(`https://api-v1.blockpour.com/api/swaps/recent-swaps?limit=10`);
                const data: RecentSwapsResponse = await res.json();
                console.log(data.data);
                setArr(data.data);
            } catch (e) {
                console.error(e);
            }
        };

        recentSwaps();
    }, []);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(moment());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <CssBaseline>
            <ThemeProvider theme={theme}>
                <Marquee 
                    gradientColor={[30,41,57]} 
                    gradientWidth={120} 
                    speed={30}
                >
                    {arr && arr.map((a, i) =>
                        <TradeWidget key={i} data={a} currentTime={currentTime} />
                    )}
                </Marquee>
            </ThemeProvider>
        </CssBaseline>
    );
}

export default App;
