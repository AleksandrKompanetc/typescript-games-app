import { FC } from 'react';

type GameProps = {
  name: string;
  description?: string;
  version?: string;
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