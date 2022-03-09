/* eslint-disable no-bitwise */
/* eslint-disable no-plusplus */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
/* eslint-disable eqeqeq */
/**
 * Return ellipsis of a given string
 * @param {string} text
 * @param {number} size
 */
const ellipsis = (text, size) => {
  return `${text
    .split(" ")
    .slice(0, size)
    .join(" ")}...`;
};

const mapExchangeTradeURL = (exchange, token) => {
  switch (exchange) {
    case "SS":
      return `https://app.sushi.com/en/swap`;
    case "UNIV3":
      return `https://app.uniswap.org/#/swap?inputCurrency=${token}&outputCurrency=ETH`;
    case "UNIV2":
      return `https://app.uniswap.org/#/swap?inputCurrency=${token}&outputCurrency=ETH`;
    case "Spirit":
      return `https://swap.spiritswap.finance/#/exchange/swap/FTM/SPIRIT`;
    case "Spooky":
    case "spLP":
    case "SLP":
    case "SOUL-LP":
    case "ELP":
      return `https://spookyswap.finance/swap`;
    case "QS":
      return `https://quickswap.exchange/#/swap`;
    case "Pangolin":
    case "PGL":
      return `https://app.pangolin.exchange/#/swap`;
    case "Joe":
    case "JLP":
    case "TLP":
      return `https://traderjoexyz.com/#/trade`;
    default:
      return `https://app.uniswap.org/#/swap?inputCurrency=${token}&outputCurrency=ETH`;
  }
};

const mapExchangeImage = exchange => {
  switch (exchange) {
    case "SS":
      return "https://s2.coinmarketcap.com/static/img/coins/64x64/6758.png";
    case "UNIV3":
      return "https://assets.coingecko.com/markets/images/665/small/uniswap-v3.png?1620241698";
    case "0x4e66ad900d9857160e132fda1b1d78724a6de3e3":
    case "0x1faabc806c1f93f71917a29e4c4eb51c9cd26d12":
    case "0xc5bc174cb6382fbab17771d05e6a918441deceea":
      return "https://assets.coingecko.com/coins/images/12504/small/uniswap-uni.png?1600306604";
    case "Spirit":
      return "https://s2.coinmarketcap.com/static/img/coins/64x64/10239.png";
    case "Spooky":
    case "spLP":
    case "SLP":
    case "SOUL-LP":
    case "ELP":
      return "https://s2.coinmarketcap.com/static/img/coins/64x64/9608.png";
    // Quickswap
    case "0x5757371414417b8c6caad45baef941abc7d3ab32":
      return "https://assets.coingecko.com/coins/images/13970/small/1_pOU6pBMEmiL-ZJVb0CYRjQ.png?1613386659";
    // Plasma Swap
    case "0xd87ad19db2c4ccbf897106de034d52e3dd90ea60":
      return "https://s2.coinmarketcap.com/static/img/coins/64x64/7870.png";
    case "Pangolin":
    case "PGL":
      return "https://assets.coingecko.com/coins/images/14023/small/pangolin.jpg?1613743598";
    case "Joe":
    case "JLP":
    case "TLP":
      return "https://assets.coingecko.com/coins/images/17569/small/joe_200x200.png?1628497750";
    default:
      return "https://assets.coingecko.com/coins/images/12504/small/uniswap-uni.png?1600306604";
  }
};

const headerSearchImage = network => {
  switch (network) {
    case "Ethereum":
      return "https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/Ethereum-ETH-icon.png";
    case "Fantom":
      return "https://s2.coinmarketcap.com/static/img/coins/64x64/3513.png";
    case "Polygon":
      return "https://s2.coinmarketcap.com/static/img/coins/64x64/3890.png";
    case "Avalanche":
      return "https://s2.coinmarketcap.com/static/img/coins/64x64/5805.png";
    case "Spooky":
    case "spLP":
    case "SLP":
    case "Xdao-LP":
      return "https://s2.coinmarketcap.com/static/img/coins/64x64/9608.png";
    case "QS":
      return "https://assets.coingecko.com/coins/images/13970/small/1_pOU6pBMEmiL-ZJVb0CYRjQ.png?1613386659";
    case "Pangolin":
    case "PGL":
      return "https://assets.coingecko.com/coins/images/14023/small/pangolin.jpg?1613743598";
    case "Joe":
    case "JOE":
    case "JLP":
      return "https://assets.coingecko.com/coins/images/17569/small/joe_200x200.png?1628497750";
    default:
      return "https://assets.coingecko.com/coins/images/12504/small/uniswap-uni.png?1600306604";
  }
};

const networkNameMap = network => {
  let url;
  switch (network) {
    case "Ethereum":
      url = "Ethereum";
      break;
    case "AVAX":
    case "Avalanche":
      url = "Avalanche";
      break;
    case "Polygon":
      url = "Polygon";
      break;
    case "Fantom":
      url = "Fantom";
      break;
    case "BSC":
      url = "BSC";
      break;
    default:
  }
  return url;
};

const mapExchangeName = exchange => {
  switch (exchange) {
    case "SS":
      return "Sushiswap";
    case "UNIV3":
      return "Uniswap V3";
    case "UNIV2":
      return "Uniswap V2";
    case "Joe":
    case "JOE":
    case "JLP":
      return "Trader Joe";
    case "QS":
      return "Quickswap";
    case "Spooky":
    case "spLP":
    case "ELP":
    case "Xdao-LP":
      return "Spooky Swap";
    case "Spirit":
    case "SLP":
      return "Spirit Swap";
    case "Pangolin":
    case "PNG":
    case "PGL":
      return "Pangolin";
    default:
      return "";
  }
};

const abbreviateNumber = nn => {
  const n = Math.abs(nn);
  if (n < 1e6) {
    return formatNumber(nn);
  }
  // if (n >= 1e3 && n < 1e6) return `${+(n / 1e3).toFixed(1)}K`;
  if (n >= 1e6 && n < 1e9) return `${+(n / 1e6).toFixed(1)}M`;
  if (n >= 1e9 && n < 1e12) return `${+(n / 1e9).toFixed(1)}B`;
  if (n >= 1e12) return `${+(n / 1e12).toFixed(1)}T`;
};

const formatNumber = number => {
  const toNum = Math.abs(Number(number));
  let max = 0;

  if (toNum >= 1000) {
    max = 0;
  } else if (toNum < 1000 && toNum > 100) {
    max = 1;
  } else if (toNum < 100 && toNum > 0.01) {
    max = 3;
  } else if (toNum < 0.01 && toNum > 0.001) {
    max = 4;
  } else if (toNum < 0.001 && toNum > 0.0001) {
    max = 5;
  } else if (toNum < 0.0001) {
    max = 8;
  } else {
    max = 3;
  }

  return toNum.toLocaleString(undefined, {
    maximumFractionDigits: max
  });
};

const checkTraderChange = (prevData, nextData) => {
  // check if returning data update
  if (Object.keys(prevData).length === 0) return true;

  const prevSwaps = prevData.swaps ?? [];
  const prevPairDayDatas = prevData.pairDayDatas ?? [];
  const prevPairHourDatas = prevData.pairHourDatas ?? [];

  if (prevSwaps.length != nextData.swaps.length) return true;
  if (prevPairDayDatas.length != nextData.pairDayDatas.length) return true;
  if (prevPairHourDatas.length != nextData.pairHourDatas.length) return true;

  if (
    JSON.stringify(prevSwaps[0]) !== JSON.stringify(nextData.swaps[0]) ||
    JSON.stringify(prevSwaps[prevSwaps.length - 1]) !==
      JSON.stringify(nextData.swaps[nextData.swaps.length - 1])
  )
    return true;

  if (
    JSON.stringify(prevPairDayDatas[0]) !==
      JSON.stringify(nextData.pairDayDatas[0]) ||
    JSON.stringify(prevPairDayDatas[prevPairDayDatas.length - 1]) !==
      JSON.stringify(nextData.pairDayDatas[nextData.pairDayDatas.length - 1])
  )
    return true;

  if (
    JSON.stringify(prevPairHourDatas[0]) !==
      JSON.stringify(nextData.pairHourDatas[0]) ||
    JSON.stringify(prevPairHourDatas[prevPairHourDatas.length - 1]) !==
      JSON.stringify(nextData.pairHourDatas[nextData.pairHourDatas.length - 1])
  )
    return true;
  return false;
};

const groupBy = (
  objectArray,
  property,
  filterCallback = () => true,
  mutationCallback = obj => obj
) => {
  return objectArray.reduce((acc, obj) => {
    const key = obj[property];
    if (!acc[key]) {
      acc[key] = [];
    }
    if (filterCallback(obj)) {
      acc[key].push(mutationCallback(obj));
    }
    return acc;
  }, {});
};

const removeDuplicateTrades = (data, val) => {
  const uniques = [];
  data.filter(function(item) {
    const i = uniques.findIndex(x => x[val] === item[val]);
    if (i <= -1) {
      uniques.push(item);
    }
    return null;
  });
  return uniques;
};

const fillMissingValuesInDays = (
  groupedObjByExchange,
  datesArr,
  datesKeyName
) => {
  const result = {};
  Object.entries(groupedObjByExchange).forEach(([exchange, data]) => {
    const newDataArr = new Array(datesArr.length).fill(null);
    datesArr.forEach((date, i) => {
      newDataArr[i] = data.find(d => d[datesKeyName] === date) ?? null;
    });
    result[exchange] = newDataArr;
  });
  return result;
};

const mapExchangeColor = exchange => {
  switch (exchange) {
    case "SS":
      return "#a27dbf94";
    case "UNIV3":
      return "#ff087f96";
    case "UNIV2":
      return "#ff73bfa3";
    case "Joe":
    case "JOE":
      return "#f2716ACC";
    case "QS":
      return "#1556B3CC";
    case "Spooky":
      return "#6665dd99";
    case "Spirit":
      return "#42D184CC";
    case "Pangolin":
    case "PNG":
      return "#F97316CC";
    default:
      return "";
  }
};

const mapNetworkColor = network => {
  const networkNum = Number(network);
  switch (networkNum) {
    case 43114:
      return "#E94043";
    case 250:
      return "#1969FF";
    case 137:
      return "#8247E5";
    case 1:
      return "#ECF0F1";
    default:
      return "#101828";
  }
};

const stringToColour = str => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  let colour = "#";
  for (let i = 0; i < 3; i++) {
    const value = (hash >> (i * 8)) & 0xff;
    colour += `00${value.toString(16)}`.substr(-2);
  }
  return colour;
};

const mapExchangeBGColor = exchange => {
  switch (exchange) {
    case "SS":
      return "rgb(162 125 191 / 35%)";
    case "UNIV3":
      return "rgb(255 8 127 / 35%)";
    case "UNIV2":
      return "rgb(255 115 191 / 35%)";
    case "Joe":
    case "JOE":
      return "rgb(242 113 106 / 35%)";
    case "QS":
      return "rgb(21 86 179 / 35%)";
    case "Spooky":
      return "rgb(102 101 221 / 35%)";
    case "Spirit":
      return "rgb(66 209 132 / 35%)";
    case "Pangolin":
    case "PNG":
      return "rgb(249 115 22 / 35%)";
    default:
      return "";
  }
};

const removeDuplicates = (arr, property) => {
  return arr.filter(
    (v, i, a) => a.findIndex(t => t[`${property}`] === v[`${property}`]) === i
  );
};

const removeItemAtIndex = (arr, index) => {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
};

const networkIDMap = network => {
  const networkNum = Number(network);
  switch (networkNum) {
    case 43114:
      return "Avalanche";
    case 250:
      return "Fantom";
    case 137:
      return "Polygon";
    case 1:
      return "Ethereum";
    default:
      return "Ethereum";
  }
};

const getExplorerURL = (tx, network) => {
  let url;
  switch (network) {
    case 1:
      url = `https://etherscan.io/tx/${tx}`;
      break;
    case 43114:
      url = `https://snowtrace.io/tx/${tx}`;
      break;
    case 137:
      url = `https://polygonscan.com/tx/${tx}`;
      break;
    case 250:
      url = `https://ftmscan.com/tx/${tx}`;
      break;
    default:
  }
  return url;
};

export {
  headerSearchImage,
  ellipsis,
  formatNumber,
  checkTraderChange,
  mapExchangeName,
  mapExchangeImage,
  abbreviateNumber,
  groupBy,
  removeDuplicateTrades,
  networkNameMap,
  fillMissingValuesInDays,
  mapExchangeColor,
  mapNetworkColor,
  stringToColour,
  removeDuplicates,
  mapExchangeTradeURL,
  removeItemAtIndex,
  mapExchangeBGColor,
  networkIDMap,
  getExplorerURL
};