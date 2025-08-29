import type { GAMES, Currency, GameFromServer, GamesFromServer } from './data';

export function getGamesFromServer(): Promise<GamesFromServer> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(GAMES);
    }, 1000);
  });
}

const CurrencyObj = {
  'USD': 'USD',
  'EUR': 'EUR',
  'HRN': 'HRN',
}

export function priceWithCurrency(
  price: NonNullable<GameFromServer['price']>, 
  currency: Currency
): string {

  if (currency === Currency.EUR) {
    return `${price} €`;
  } else if (currency === Currency.HRN) {
    return `${price} грн`;
  }
    return `${price} $`;
}