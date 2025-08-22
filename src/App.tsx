import { useState } from 'react';

function App() {
  const [isAdult, setIsAdult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [games, setGames] = useState([]);

  useState(() => {
    getGamesFromServer().then((gamesFromServer) => {
      setLoading(false);
      setGames(gamesFromServer);
    });
  }, []);

  const renderTags = () => {
    return tags?.map((tag, index) => (
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
        <div key={game.id} style={{border: '1px solid blue'}}>
          Game:
          {game.forKids && !isAdult ? (
            <b style={{color: 'red'}}></b>
          ) : (
            <>
              <Game 
                name={game.name}
                description={game.description}
              />
            </>
          )}
        </div>
      ))}
    </div>
  )
}

export default App
