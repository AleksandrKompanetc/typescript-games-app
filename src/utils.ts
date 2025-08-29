import type { GAMES, Currency, GameFromServer, GamesFromServer } from './data';

export function getGamesFromServer(): Promise<GamesFromServer> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(GAMES);
    }, 1000);
  });
}

export function priceWithCurrency(
  price: NonNullable<GameFromServer['price']>, 
  currency: GameFromServer['currency']
): string {

  if (currency === Currency.EUR) {
    return `${price} €`;
  } else if (currency === Currency.HRN) {
    return `${price} грн`;
  }
    return `${price} $`;
}