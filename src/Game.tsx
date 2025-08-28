import type { FC } from 'react';
import type { GameFromServer } from './data';

type GameProps = {
  name: GameFromServer['name'];
  description?: GameFromServer['description'];
  version?: GameFromServer['version'];
}

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