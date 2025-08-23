type Game = {
  id: number;
  name: string;
  description?: string;
  version?: string;
  price?: number;
  tags?: string[];
  forKids: boolean;
}

type Games = Game[];

export const GAMES: Games = [
  {
    id: 1,
    name: 'Mortal Kombat',
    description: 'A fighting game franchise created by Midway Games.',
    version: 'X',
    price: 1000,
    tags: ['fighting', 'arcade', 'multiplayer'],
    forKids: false,
  },
  {
    id: 2,
    name: 'Racing',
    price: 700,
    tags: ['racing', 'arcade', 'multiplayer'],
    forKids: true,
  },
  {
    id: 3,
    name: 'FIFA',
    description: 'A football simulation video game developed by EA Sports.',
    forKids: true,
  }
]