const fetchCoinApi = async () => {
  const url = 'https://api.coincap.io/v2/assets';
  const coinsList = await fetch(url)
    .then((response) => response.json())
    .then((data) => data.data)
    .catch((error) => error.toString());
  return coinsList;
};

const setCoins = async () => {
  const coins = await fetchCoinApi();
  const coinsList = document.getElementById('coins-list');
  coins
    .filter((_, index) => index < 10)
    .forEach((coin) => {
      const newLi = document.createElement('li');
      const usdPrice = Number(coin.priceUsd);
      newLi.innerText = `${coin.name} (${coin.symbol}): ${usdPrice.toFixed(2)}`;
      coinsList.appendChild(newLi);
    });
};

window.onload = () => setCoins();
