import { GAMES } from './data';
import type { GameFromServer, GamesFromServer } from './data';

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

  if (currency === 'EUR') {
    return `${price} €`;
  } else if (currency === 'HRN') {
    return `${price} грн`;
  }
    return `${price} $`;
}