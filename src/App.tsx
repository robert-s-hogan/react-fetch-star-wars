import { useState, useEffect } from 'react';
import { useInitialData } from './lib/hooks/api-initial-data';
import { useGetAllData } from './lib/hooks/api-all-data';
import { FetchState } from './types';
import axios from 'axios';

import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Loading from './components/loading/Loading';
// import SearchBar from './components/searchBar/SearchBar';

import Card from './components/card/Card';

import './index.css';

function App() {
  // const [data, totalEntries, fetchState, getData] = useGetPosts();

  const [character, setCharacter] = useState('');
  const [searchResults, setSearchResults] = useState(false);
  const [searchData, setSearchData] = useState([]);
  const [initialData, fetchState, getInitialData] = useInitialData();

  // const [allData, getAllData] = useGetAllData();

  useEffect(() => {
    // getData();
    getInitialData();
    // getAllData();
  }, []);

  async function getSearchData() {
    const res = await axios.get(
      `https://swapi.dev/api/people/?search=${character}`
    );
    const resData = res.data as Array<PostData>;
    setSearchData(resData.results);
    setSearchResults(true);
  }

  return (
    <div>
      <Hero />
      <div className="flex justify-center max-w-4xl xl:max-w-7xl container mx-auto mt-8">
        <form
          className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full mx-2"
          onSubmit={(e) => {
            e.preventDefault();
            getSearchData();
          }}
        >
          <label htmlFor="character" className="w-full md:col-span-3">
            <input
              id="character"
              className="w-full"
              value={character}
              placeholder="Search Star Wars Characters"
              onChange={(e) => setCharacter(e.target.value)}
            />
          </label>
          <button className="rotate-1" type="submit">
            Search
          </button>
        </form>
      </div>
      {searchResults && (
        <p className="text-center my-8 text-white">
          <span className="letter-box font-light text-center bg-red search-results mr-2 text-lg">
            {searchData.length} {''}results found
          </span>
        </p>
      )}
      <div className="container max-w-4xl lg:max-w-6xl xl:max-w-7xl mx-auto my-4">
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
          <div className="mx-3 my-4">
            {/* {allData.map((data) => (
              <code>
                <pre>{JSON.stringify(data, null, 2)}</pre>
              </code>
            ))} */}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
              {searchResults && searchData.length > 0 ? (
                <>
                  {searchData.map((char) => (
                    <Card
                      key={char.name}
                      name={char.name}
                      mass={char.mass}
                      height={char.height}
                      hair_color={char.hair_color}
                      skin_color={char.skin_color}
                      eye_color={char.eye_color}
                      birth_year={char.birth_year}
                      gender={char.gender}
                      homeworld={char.homeworld}
                    />
                  ))}
                </>
              ) : (
                <>
                  {initialData.map((char) => (
                    <Card
                      key={char.name}
                      name={char.name}
                      mass={char.mass}
                      height={char.height}
                      hair_color={char.hair_color}
                      skin_color={char.skin_color}
                      eye_color={char.eye_color}
                      birth_year={char.birth_year}
                      gender={char.gender}
                      homeworld={char.homeworld}
                    />
                  ))}
                </>
              )}
            </div>
          </div>
        )}
      </div>
      <Header />
    </div>
  );
}

export default App;
