import { useState, useEffect } from 'react';
import Header from './components/header/Header';
import Loading from './components/loading/Loading';

import StarWarsLogo from './Starwars-logo.webp';
import './App.css';
import './components/pagination/pagination.css'


function App() {
  const [ loading, setLoading ] = useState(true);
  const [ data, setData ] = useState<any[]>([]);
  const [ character, setCharacter ] = useState('');
  const [ searchResults, setSearchResults ] = useState(false);

useEffect(() => {
  getData();
}, []);

  async function getData() {
    const response = await fetch(`https://swapi.dev/api/people/?page=1`);
    const json = await response.json();
    setData(json.results);
    setLoading(false);
  }

  async function searchData() {
    setLoading(true);
    const response = await fetch(`https://swapi.dev/api/people/?search=${character}`);
    const json = await response.json();
    setData(json.results);
    setLoading(false);
    setSearchResults(true);
  }

  return (
    <div>
      <Header />
      <img
          width="320"
          className="mx-auto"
          src={StarWarsLogo}
          alt="Star Wars Logo"
        />
      <div className="pagination container">
           <form className="form" onSubmit={(e) => {
            e.preventDefault();
            searchData();
           }}>
            <label htmlFor="character">
                <input id="character" value={character} placeholder="Search Star Wars Characters" 
                onChange={(e) => setCharacter(e.target.value)} />
            </label>
            <button type="submit">Search</button>
            </form>
            {searchResults ? <p className="block text-center search-results">{data.length}</p> : ''}
            </div>
      <div className="container cardGrid">
      {loading ? (
        <Loading />
      ) : (
        <>
          {data.map((character) => (
            <div
              className="card"
              title={character.name}
              key={character.name}
            >
            <div className="card-inner">
              <h3 className="card-title">{character.name}</h3>
              <ul>
                <li>Mass: {character.mass}</li>
                <li>Height: {character.height}</li>
                <li>Hair Color: {character.hair_color}</li>
                <li>Skin Color: {character.skin_color}</li>
                <li>Eye Color: {character.eye_color}</li>
                <li>Birth Year: {character.birth_year}</li>
                <li>Gender: {character.gender}</li>
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
