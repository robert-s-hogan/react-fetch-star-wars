import { useState, useEffect } from 'react';
import Header from './components/header/Header';
import Loading from './components/loading/Loading';
import './App.css';
import './components/pagination/pagination.css'


function App() {
  const [ loading, setLoading ] = useState(true);
  const [ data, setData ] = useState([]);
  const [ character, setCharacter ] = useState('');


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
  }

  return (
    <div>
      <Header />
      <img
          width="320"
          className="mx-auto"
          src="http://vignette1.wikia.nocookie.net/disney/images/8/8b/Starwars-logo.png"
          alt="Star Wars Logo"
        />
      <div className="pagination">
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
        </div>
      <div className="card-grid">
      {loading ? (
        <Loading />
      ) : (
        <div>
        {data.map(character => (
          <div className="card" key={character.name}>
              <ul>
                <li>{character.name}</li>
              </ul>
          </div>
        ))}
        </div>
      )}

      </div>
    </div>
    );
}

export default App;
