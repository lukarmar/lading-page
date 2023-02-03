/* eslint-disable no-console */
import axios from "axios";

export interface PropsData {
  atl: number;
  current_price: number;
  high_24h: number;
  id: string;
  image: string;
  low_24h: number;
  name: string;
  price_change_24h: number;
  price_change_percentage_24h: number;
  price_change_percentage_24h_in_currency: number;
  symbol: string;
  formatCurrentPrice?: string;
}

interface PropsParams {
  vs_currency: string;
  ids?: string;
}

const BASE_URL =
  "https://api.coingecko.com/api/v3/coins/markets?order=market_cap_desc&per_page=30&page=1&sparkline=false&price_change_percentage=24h";
// api.coingecko.com/api/v3/coins/markets?order=market_cap_desc&per_page=30&page=1&sparkline=false&price_change_percentage=24h

function getInformationCrypto({
  cryptoCurrency,
  fiatCurrency,
}: {
  cryptoCurrency?: string;
  fiatCurrency: string;
}): Promise<PropsData[]> {
  const params: PropsParams = {
    vs_currency: fiatCurrency,
    ids: cryptoCurrency,
  };

  return axios
    .get(BASE_URL, {
      params,
      headers: { "Content-Type": "application/json" },
    })
    .then((response) => response.data)
    .catch((error) => console.log(error));
}

export { getInformationCrypto };
