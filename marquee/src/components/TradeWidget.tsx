/* eslint-disable camelcase */
/* eslint-disable react/prop-types */

import {
    abbreviateNumber,
    mapExchangeImage } from "../utils/utility";
// import React, { useState } from "react";
import { TokenImageRound } from "./TokenImageRound";
import { Card, Collapse } from "antd";
// import FeatherIcon from "feather-icons-react";
import moment, { Moment } from "moment";
import { useEffect, useState } from "react";
import { Data } from "types/recentSwaps";

const BORDER_RADIUS = 16;
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

    const { Grid } = Card;
    const { Panel } = Collapse;
    const [ hover, setHover ] = useState(false);
    const [ timeSince, setTimeSince ] = useState(moment.utc(time).from(currentTime));

    const hasBalance = () => {
        if (parseFloat(balance0) > 0 || parseFloat(balance1) > 0) return true;
        return false;
    };

    useEffect(() => {
        setTimeSince(moment.utc(time).from(currentTime));
    }, [ currentTime ]);

    return (
        <div style={{ margin: `0 4px` }}>
            <Card
                className="trade-collapse-custom-panel"
                style={{
                    background: MEDIUM_GREY,
                    borderRadius: BORDER_RADIUS,
                    borderWidth: 0,
                    flex: 1,
                    height: `100%`,
                }}
                bodyStyle={{ padding: 0, display: `flex` }}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                <Grid
                    style={{
                        display: `flex`,
                        flexDirection: `column`,
                        placeContent: `center`,
                        textAlign: `center`,
                        backgroundColor: LIGHT_GREY,
                        borderRadius: `${BORDER_RADIUS}px 0 0 ${BORDER_RADIUS}px`,
                        padding: `8px`,
                        minWidth: `80px`,
                    }}
                >
                    <span style={{ color: `white`, fontSize: `14px` }}>
                        ${`${abbreviateNumber(amountusd)} `}
                    </span>
                    <span style={{ color: `rgba(255,255,255,0.8)`, fontSize: `11px` }}>
                        {timeSince}
                    </span>
                </Grid>

                <Grid
                    style={{
                        display: `flex`,
                        flexDirection: `row`,
                        placeContent: `center`,
                        padding: `8px`,
                        backgroundColor: MEDIUM_GREY,
                        width: `33%`,
                    }}
                >
                    <TokenImageRound
                        contract={token0}
                        network={network}
                        symbol={token0_symbol}
                        size={IMAGE_WIDTH}
                    />
                    <span className="token-widget-symbol" style={{ paddingLeft: 4, color: `rgba(255,255,255,0.8)` }}>
                        <span style={{ color: `white` }}>
                            {`${abbreviateNumber(amount0)} `}
                        </span>
                        {token0_symbol}
                    </span>
                </Grid>

                <Grid
                    style={{
                        backgroundColor: LIGHT_GREY,
                        padding: `12px`,
                    }}
                >
                    <img
                        src={mapExchangeImage(exchange)}
                        alt=""
                        width={IMAGE_WIDTH}
                        style={{ borderRadius: 50, marginBottom: `5px` }}
                    />
                </Grid>

                <Grid
                    style={{
                        borderRadius: `0 ${BORDER_RADIUS}px ${BORDER_RADIUS}px 0`,
                        display: `flex`,
                        flexDirection: `row`,
                        placeContent: `center`,
                        padding: `8px`,
                        backgroundColor: MEDIUM_GREY,
                        width: `33%`,
                    }}
                >
                    <TokenImageRound
                        contract={token1}
                        network={network}
                        symbol={token1_symbol}
                        size={IMAGE_WIDTH}
                    />
                    <span className="token-widget-symbol" style={{ paddingLeft: 4, color: `rgba(255,255,255,0.8)` }}>
                        <span style={{ color: `white` }}>
                            {`${abbreviateNumber(amount1)} `}
                        </span>
                        {token1_symbol}
                    </span>
                </Grid>
            </Card>
        </div>
    );
};