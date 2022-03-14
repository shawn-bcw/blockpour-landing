import { 
    networkIDMap,
    stringToColour } from "../utils/utility";
import { useState } from "react";

export const ImageRound = ({ src, size, position = `absolute` }: { src: any, size: any, position?: any }) => {
    const [ hasError, setError ] = useState(false);

    return (
        <img
            src={src}
            alt=""
            height={size}
            width={size}
            style={{
                backgroundColor: `white`,
                borderRadius: 50,
                display: hasError ? `none` : `flex`,
                position,
                ...(position === `absolute` && { left: 0 })
            }}
            onError={event => setError(true)}
        />
    );
};

const FallbackAvatarRound = ({ string, size }: { string: string, size: any }) => (
    <div
        style={{
            width: size,
            height: size,
            background: `linear-gradient(to right, ${stringToColour(
                string
            )}4D, ${stringToColour(string)})`,
            borderRadius: 50
        }}
    />
);

export const TokenImageRound = ({ contract, network, symbol, size }: { contract: any, network: any, symbol: any, size: any }) => {
    const imageSrc = `https://cdn.blockpour.com/${contract}-${networkIDMap(
        network
    )}.png`;
    // const imageSrcFallback = `https://raw.githubusercontent.com/alexandrebouttier/coinmarketcap-icons-cryptos/main/icons/${symbol.toLowerCase()}.png`;
    return (
        <div style={{ position: `relative` }}>
            <ImageRound src={imageSrc} size={size} />
            <FallbackAvatarRound string={contract} size={size} />
        </div>
    );
};