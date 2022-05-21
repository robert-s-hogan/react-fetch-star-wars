import { useState, useEffect } from 'react';
import Header from './components/header/Header';
import Loading from './components/loading/Loading';
import { useGetPosts } from './lib/api-hooks';
import { FetchState } from './types';

import StarWarsLogo from './Starwars-logo.webp';
import './App.css';
import './components/pagination/pagination.css';

function App() {
  const [data, fetchState, getData] = useGetPosts();
  // const [character, setCharacter] = useState('');
  // const [searchResults, setSearchResults] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  // async function searchData() {
  //   const response = await fetch(
  //     `https://swapi.dev/api/people/?search=${character}`
  //   );
  //   const json = await response.json();
  //   setData(json.results);
  //   setSearchResults(true);
  // }

  console.log(fetchState);
  return (
    <div>
      <Header />
      <img
        width="320"
        className="mx-auto"
        src={StarWarsLogo}
        alt="Star Wars Logo"
      />
      {/* <div className="pagination container">
        <form
          className="form"
          onSubmit={(e) => {
            e.preventDefault();
            searchData();
          }}
        >
          <label htmlFor="character">
            <input
              id="character"
              value={character}
              placeholder="Search Star Wars Characters"
              onChange={(e) => setCharacter(e.target.value)}
            />
          </label>
          <button type="submit">Search</button>
        </form>
        {searchResults ? (
          <p className="block text-center search-results">{data.length}</p>
        ) : (
          ''
        )}
      </div> */}
      <div className="container cardGrid">
        {fetchState === FetchState.ERROR && (
          <>
            <p>Oops! Something went wrong. Please click the button below</p>
            <button onClick={() => getData()}>Get Star Wars Characters</button>
          </>
        )}
        {fetchState === FetchState.LOADING && (
          <>
            <Loading />
          </>
        )}
        {fetchState === FetchState.SUCCESS && (
          <>
            {data.map((char) => (
              <div className="card" key={char.name}>
                <div className="card-inner">
                  <h3 className="card-title">{char.name}</h3>
                  <ul>
                    <li>Mass: {char.mass}</li>
                    <li>Height: {char.height}</li>
                    <li>Hair Color: {char.hair_color}</li>
                    <li>Skin Color: {char.skin_color}</li>
                    <li>Eye Color: {char.eye_color}</li>
                    <li>Birth Year: {char.birth_year}</li>
                    <li>Gender: {char.gender}</li>
                  </ul>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default App;
