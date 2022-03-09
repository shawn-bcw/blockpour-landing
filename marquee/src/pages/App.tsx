import './App.css';
import logo from '@/assets/logo.svg';
import { useState, useEffect } from 'react';
import Marquee from 'react-fast-marquee';
import { TradeWidget } from '../components/TradeWidget';
import { Data, RecentSwapsResponse } from 'types/recentSwaps';
import moment from 'moment';

function App () {
    const [ arr, setArr ] = useState<Data[]>();
    const [ currentTime, setCurrentTime ] = useState(moment())
    
	useEffect(() => {
		const recentSwaps = async () => {
			try {
				const res = await fetch('https://api-v1.blockpour.com/api/swaps/recent-swaps?limit=10');
                const data: RecentSwapsResponse = await res.json();
				console.log(data.data);
				setArr(data.data);
			} catch (e) {
				console.error(e);
			}
		}

		recentSwaps();
	}, [])

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(moment());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="App">
            <Marquee gradientColor={[0,0,0]} speed={20}>
                {arr && arr.map((a, i) =>
                    <TradeWidget data={a} key={i} currentTime={currentTime} />
                )}
            </Marquee>
        </div>
    );
}

export default App;
