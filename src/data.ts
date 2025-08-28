export type GameFromServer = {
  id: number;
  name: string;
  description?: string;
  version?: string;
  price?: number;
  tags?: string[];
  forKids: boolean;
  currency: 'USD' | 'EUR' | 'HRN';
}

export type GamesFromServer = GameFromServer[];

export const GAMES: GamesFromServer = [
  {
    id: 1,
    name: 'Mortal Kombat',
    description: 'A fighting game franchise created by Midway Games.',
    version: 'X',
    price: 1000,
    tags: ['fighting', 'arcade', 'multiplayer'],
    forKids: false,
    currency: 'USD',
  },
  {
    id: 2,
    name: 'Racing',
    price: 700,
    tags: ['racing', 'arcade', 'multiplayer'],
    forKids: true,
    currency: 'HRN',
  },
  {
    id: 3,
    name: 'FIFA',
    description: 'A football simulation video game developed by EA Sports.',
    forKids: true,
    currency: 'EUR',
  }
]