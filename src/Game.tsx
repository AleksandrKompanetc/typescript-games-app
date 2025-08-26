type GameProps = {
  name: string;
  description: string;
  version: string;
}

function Game({ name, description, version}: GameProps) {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Description: {description}</p>
      <p>Version: {version}</p>
    </div>
  )
}

export default Game;