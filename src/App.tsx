import { useState, useEffect } from 'react';
// import { useGetPosts } from './lib/hooks/api-hooks';
import { useGetAllData } from './lib/hooks/api-all';
import { FetchState } from './types';
import axios from 'axios';

import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Loading from './components/loading/Loading';
// import SearchBar from './components/searchBar/SearchBar';

import CardTitle from './components/cardTitle/CardTitle';
import CardHomeworld from './components/cardHomeworld/CardHomeworld';
import CardFace from './components/cardFace/CardFace';

import './index.css';

function App() {
  // const [data, totalEntries, fetchState, getData] = useGetPosts();

  const [character, setCharacter] = useState('');
  const [searchResults, setSearchResults] = useState(false);
  const [searchData, setSearchData] = useState([]);

  const [allData, fetchState, getAllData] = useGetAllData();

  const [homeworld, setHomeworld] = useState('');

  useEffect(() => {
    // getData();
    getAllData();
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
      <Header />
      <Hero />
      <div className="flex justify-center max-w-4xl container mx-auto mt-8">
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {searchResults && searchData.length > 0 ? (
                <>
                  {searchData.map((char) => (
                    <div className="card rounded-lg relative" key={char.name}>
                      <CardTitle name={char.name} eyeColor={char.eye_color} />
                      <CardFace
                        hairColor={char.hair_color}
                        eyeColor={char.eye_color}
                        gender={char.gender}
                      />
                      <div className="text-xs flex justify-center p-1 text-black bg-yellow">
                        <span className="mr-1 p-1 px-2 font-semibold">
                          Mass: {char.mass}
                        </span>
                        <span className="mr-1 p-1 px-2 font-semibold border-l border-gray-400">
                          Height: {char.height}
                        </span>
                        <span className="mr-1 p-1 px-2 font-semibold border-l border-gray-400">
                          DOB: {char.birth_year}
                        </span>
                      </div>
                      <div className="card-inner h-auto flex flex-col px-1 py-3">
                        <CardHomeworld homeworld={char.homeworld} />
                        <ul className="px-4">
                          <li className="my-1 mx-0">
                            Hair Color: {char.hair_color}
                          </li>
                          <li className="my-1 mx-0">
                            Skin Color: {char.skin_color}
                          </li>
                          <li className="my-1 mx-0">Gender: {char.gender}</li>
                          <li className="my-1 mx-0">
                            Eye Color: {char.eye_color}
                          </li>

                          {/* <li className="my-1 mx-0">{char.vehicles}</li>
                      <li className="my-1 mx-0">{char.starships}</li>
                      <li className="my-1 mx-0">{char.films}</li> */}
                          {/* <li className="my-1 mx-0">Species: {char.species}</li> */}
                          {/* <li className="my-1 mx-0">{char.created}</li>
                      <li className="my-1 mx-0">{char.edited}</li> */}
                          <li className="my-1 mx-0">{char.url}</li>
                        </ul>
                      </div>
                    </div>
                  ))}{' '}
                </>
              ) : (
                <>
                  {allData.map((char) => (
                    <div className="card rounded-lg relative" key={char.name}>
                      <CardTitle name={char.name} eyeColor={char.eye_color} />
                      <CardFace
                        hairColor={char.hair_color}
                        eyeColor={char.eye_color}
                        gender={char.gender}
                      />
                      <div className="text-xs flex justify-center p-1 text-black bg-yellow">
                        <span className="mr-1 p-1 px-2 font-semibold">
                          Mass: {char.mass}
                        </span>
                        <span className="mr-1 p-1 px-2 font-semibold border-l border-gray-400">
                          Height: {char.height}
                        </span>
                        <span className="mr-1 p-1 px-2 font-semibold border-l border-gray-400">
                          DOB: {char.birth_year}
                        </span>
                      </div>

                      <div className="card-inner h-auto flex flex-col px-1 py-3">
                        <CardHomeworld homeworld={char.homeworld['name']} />

                        <ul className="px-4">
                          <li className="my-1 mx-0">
                            Hair Color: {char.hair_color}
                          </li>
                          <li className="my-1 mx-0">
                            Skin Color: {char.skin_color}
                          </li>
                          <li className="my-1 mx-0">Gender: {char.gender}</li>
                          <li className="my-1 mx-0">
                            Eye Color: {char.eye_color}
                          </li>
                          {/* <li className="my-1 mx-0">{char.vehicles}</li>
                      <li className="my-1 mx-0">{char.starships}</li>
                      <li className="my-1 mx-0">{char.films}</li> */}
                          {/* <li className="my-1 mx-0">Species: {char.species}</li> */}
                          {/* <li className="my-1 mx-0">{char.created}</li>
                      <li className="my-1 mx-0">{char.edited}</li> */}
                          <li className="my-1 mx-0">{char.url}</li>
                        </ul>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
