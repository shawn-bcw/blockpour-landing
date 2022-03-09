export interface RecentSwapsResponse {
    statusCode: number;
    status: boolean;
    data: (Data)[];
}
export interface Data {
    time: string;
    pair: string;
    token0: string;
    token1: string;
    amount0: string;
    amount1: string;
    amountusd: string;
    slippage: string;
    receiver: string;
    tx: string;
    exchange: string;
    trade_id: string;
    indexer: boolean;
    price0: string;
    price1: string;
    network: number;
    meta: Meta;
    token0_name: string;
    token0_symbol: string;
    token0_decimals: string;
    token1_name: string;
    token1_symbol: string;
    token1_decimals: string;
    balance0: string;
    balance1: string;
}
export interface Meta {
    tx: string;
    estimated_price0: number;
    estimated_price1: number;
    amount0: number;
    amount1: number;
    totalSwap: number;
    derived_token: string;
    price1_alt: number;
    price0_alt: number;
    chosen1: number;
    chosen0: number;
    rawUSDValue: number;
    token0: string;
    token1: string;
    price: number;
}
