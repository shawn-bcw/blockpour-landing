import { Data } from "../types/recentSwaps";
import { abbreviateNumber, mapExchangeImage, mapExchangeName } from "../utils/utility";
import { TokenImageRound } from "./TokenImageRound";
import { Card, Stack, styled, Typography } from "@mui/material";
import Grid, { GridProps } from "@mui/material/Grid";
import moment, { Moment } from "moment";
import { useEffect, useState } from "react";

const GridItem = styled(Grid)<GridProps>(() => ({
    display: `flex`,
    placeContent: `center`,
}));

const IMAGE_WIDTH = 20;
const DARK_GREY = `#101828`;
const MEDIUM_GREY = `#343c4c`;
const LIGHT_GREY = `#475467`;

export const TradeWidget = ({ data, currentTime }: { data: Data, currentTime: Moment }) => {
    moment.updateLocale(`en`, {
        relativeTime: {
            future: `in %s`,
            past: `%s`,
            s: number => `${number}s ago`,
            ss: `%ds ago`,
            m: `1m ago`,
            mm: `%dm ago`,
            h: `1h ago`,
            hh: `%dh ago`,
            d: `1d ago`,
            dd: `%dd ago`,
            M: `a month ago`,
            MM: `%d months ago`,
            y: `a year ago`,
            yy: `%d years ago`
        }
    });

    const {
        time,
        network,
        exchange,
        amountusd,
        price0,
        token0,
        token1,
        token0_symbol,
        token1_symbol,
        amount0,
        amount1,
        receiver,
        tx,
        slippage,
        balance0,
        balance1,
        indexer,
        price1
    } = data;

    // const { Grid } = Card;
    // const { Panel } = Collapse;
    const [ hover, setHover ] = useState(false);
    const [ timeSince, setTimeSince ] = useState(moment.utc(time).from(currentTime));

    const sellSide = parseFloat(amount0) > 0;

    const hasBalance = () => {
        if (parseFloat(balance0) > 0 || parseFloat(balance1) > 0) return true;
        return false;
    };

    useEffect(() => {
        setTimeSince(moment.utc(time).from(currentTime));
    }, [ currentTime ]);

    return (
        <Card sx={{ height: `100%`, margin: `0px 8px`, borderRadius: 3 }}>
            <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="stretch"
                sx={{ height: `100%` }}
            >
                <GridItem item sx={{ background: DARK_GREY, p: 1 }}>
                    { network && (
                        <img
                            src={require(`/src/assets/networks/${network}${hover ? `-hover` : ``}.svg`)}
                            alt=""
                            width={IMAGE_WIDTH}
                        />
                    )}
                </GridItem>
                <GridItem item sx={{ background: LIGHT_GREY, px: 2, py: 1 }}>
                    <Stack justifyContent="center" alignItems="center">
                        <Typography variant="body1">
                            ${`${abbreviateNumber(amountusd)}`}
                        </Typography>
                        <Typography 
                            align="center"
                            variant="subtitle1" 
                            sx={{ minWidth: 60 }} 
                        >
                            {timeSince}
                        </Typography>
                    </Stack>
                </GridItem>
                <GridItem item sx={{ background: MEDIUM_GREY, px: 2, py: 1 }}>
                    <Stack direction="row" alignItems="center">
                        <TokenImageRound
                            contract={sellSide ? token0 : token1}
                            network={network}
                            symbol={sellSide ? token0_symbol : token1_symbol}
                            size={IMAGE_WIDTH}
                        />
                        <Typography variant="body1" component="span" pl={1}>
                            {`${abbreviateNumber(sellSide ? amount0 : amount1)} `} {sellSide ? token0_symbol : token1_symbol}
                        </Typography>
                    </Stack>
                </GridItem>
                <GridItem item sx={{ background: LIGHT_GREY, p: 1 }}>
                    <Stack alignItems="center" justifyContent="center">
                        <Stack direction="row" alignItems="center" justifyContent="center">
                            {mapExchangeImage(exchange) &&
                                <img
                                    src={mapExchangeImage(exchange)}
                                    alt=""
                                    width={IMAGE_WIDTH}
                                    height={IMAGE_WIDTH}
                                    style={{ borderRadius: 50 }}
                                />
                            }
                        </Stack>
                        <Typography variant="caption">
                            {mapExchangeName(exchange)}
                        </Typography>
                    </Stack>
                </GridItem>
                <GridItem item sx={{ background: MEDIUM_GREY, px: 2, py: 1 }}>
                    <Stack direction="row" alignItems="center">
                        <TokenImageRound
                            contract={sellSide ? token1 : token0}
                            network={network}
                            symbol={sellSide ? token1_symbol : token0_symbol}
                            size={IMAGE_WIDTH}
                        />
                        <Typography variant="body1" component="span" pl={1}>
                            {`${abbreviateNumber(sellSide ? amount1 : amount0)} `} 
                            {sellSide ? token1_symbol : token0_symbol}
                        </Typography>
                    </Stack>
                </GridItem>
                <GridItem item sx={{ background: DARK_GREY, p: 1 }}>
                    <Stack justifyContent="center" alignItems="center">
                        <Typography variant="caption">
                            {tx.slice(0, 4)}...{tx.slice(tx.length - 4)}
                        </Typography>
                        <Typography variant="subtitle1">
                            Tx ID 
                        </Typography>
                    </Stack>
                </GridItem>
            </Grid>
        </Card>
    );
};