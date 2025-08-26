import { useState, type JSX } from 'react';
import AdultOrNot from './AdultOrNot';
import type { GamesFromServer, GameFromServer } from './data';
import { getGamesFromServer, priceWithCurrency } from './utils';

function App() {
  const [isAdult, setIsAdult] = useState<boolean | null>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [games, setGames] = useState<GamesFromServer[]>([]);

  useState(() => {
    getGamesFromServer().then((gamesFromServer) => {
      setLoading(false);
      setGames([gamesFromServer]);
    });
  }, []);

  const renderTags = (tags: GameFromServer['tags']): JSX.Element[] | null => {
    
    return tags.map((tag, index) => (
      <span key={tag + index}>{tag}</span>
    ))
  }

  if (loading) {
    return (
      <div>Loading...</div>
    )
  }

  if (isAdult === null) {
    return (
      <AdultOrNot setIsAdult={setIsAdult} />
    )
  }

  return (
    <div>
      {games.map((game) => (
        <div key={game.id} style={{ border: '1px solid blue' }}>
          Game:
          {game.forKids && !isAdult ? (
            <b style={{ color: 'red' }}>Вам не доступна эта игра!</b>
          ) : (
            <>
              <Game
                name={game.name}
                description={game.description}
                version={game.version}
              />

              {
                typeof game.price === 'number' && (
                  <>
                    Price: {priceWithCurrency(game.price)}
                  </>
                )
              }
              {game.tags && (
                <>
                  Tags: {renderTags(game.tags)}
              )}
            </>
          )}
        </div>
      ))}
    </div>
  )
}

export default App
