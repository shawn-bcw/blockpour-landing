import EthLogo from "./1.svg";
import EthLogoHover from "./1-hover.svg";
import PolygonLogo from "./137.svg";
import PolygonLogoHover from "./137-hover.svg";
import FantomLogo from "./250.svg";
import FantomLogoHover from "./250-hover.svg";
import AvalancheLogo from "./43114.svg";
import AvalancheLogoHover from "./43114-hover.svg";
import {
    styled,
} from '@mui/material/styles';
import { useEffect, useMemo, useState } from 'react';

const ImgLogo = styled(`img`)(() => ({
    // flexGrow: 1,
    fontFamily: `Styrene A Web, Arial, -apple-system, Segoe UI, Helvetica, sans-serif`,
    objectFit: `contain`,
}));

interface Props {
    height?: number | string;
    width?: number | string;
    network: number;
}

export default function NetworkLogo (props: Props) {
    const {
        height,
        width,
        network,
    } = props;

    const [ isHover, setIsHover ] = useState(false);
    const [ logo, setLogo ] = useState<string>(``);

    const logoSet = useMemo(() => {
        switch(network) {
            case 1:
                return [EthLogo, EthLogoHover]; 
            case 137:
                return [PolygonLogo, PolygonLogoHover];
            case 250: 
                return [FantomLogo, FantomLogoHover];
            case 43114: 
                return [AvalancheLogo, AvalancheLogoHover];
            default: 
                return [``,``];
        };
    }, [ network ]);

    useEffect(() => {
        isHover ? setLogo(logoSet[0]) : setLogo(logoSet[1]);
    }, [ isHover, logoSet ]);

    return (
        <ImgLogo
            src={logo}
            alt=""
            height={ height ?? `auto` }
            width={ width ?? 20 }
            onMouseOver={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        />
    );
}

