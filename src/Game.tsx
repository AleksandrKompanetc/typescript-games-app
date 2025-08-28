import type { FC } from 'react';
import type { GameFromServer } from './data';

type GameProps = {
  name: GameFromServer['name'];
  description?: GameFromServer['description'];
  version?: GameFromServer['version'];
}

// type GameProps = Pick<GameFromServer, 'name' | 'description' | 'version'>;
// type GameProps = Omit<GameFromServer, 'id' | 'forKids' | 'price' | 'tags'>;

const Game: FC<GameProps> = ({ name, description, version}) => {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Description: {description}</p>
      <p>Version: {version}</p>
    </div>
  )
}

export default Game;