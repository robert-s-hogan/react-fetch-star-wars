import { useState, useEffect } from 'react';
import Header from './components/header/Header';
import Loading from './components/loading/Loading';
import { useGetPosts } from './lib/hooks/api-hooks';
import { FetchState } from './types';

import StarWarsLogo from './lib/img/Starwars-logo.webp';
import './index.css';

function App() {
  const [data, totalEntries, fetchState, getData] = useGetPosts();
  const [character, setCharacter] = useState('');
  const [searchResults, setSearchResults] = useState(false);

  useEffect(() => {
    getData();
    // cleanData();
    // addImages();
  }, []);

  // async function addImages() {
  //   const res = await fetch(
  //     'https://json-static-star-wars-images-api.netlify.app/images.json'
  //   );
  //   console.log(res);
  //   return res;
  // }

  // async function searchData() {
  //   const response = await fetch(
  //     `https://swapi.dev/api/people/?search=${character}`
  //   );
  //   const json = await response.json();
  //   setData(json.results);
  //   setSearchResults(true);
  // }

  // function cleanData() {
  //   data.forEach((item) => {
  //     item.homeworld =
  //   });
  // }

  return (
    <div>
      <Header />
      {/* <img
        width="320"
        className="object-contain h-48 w-96 mx-auto"
        src={StarWarsLogo}
        alt="Star Wars Logo"
      /> */}
      <div className="max-w-4xl container mx-auto my-4 md:flex md:justify-center">
        <div className="flex justify-center my-4 space-x-4">
          <div className="letter-box bg-skyBlue">S</div>
          <div className="letter-box bg-yellow">T</div>
          <div className="letter-box bg-orange">A</div>
          <div className="letter-box bg-red">R</div>
        </div>
        <div className="flex justify-center ml-0 md:ml-8 my-4 space-x-4">
          <div className="letter-box bg-pink">W</div>
          <div className="letter-box bg-green">A</div>
          <div className="letter-box bg-darkBlue">R</div>
          <div className="letter-box bg-purple">S</div>
        </div>
      </div>
      <div className="flex justify-center max-w-4xl container mx-auto my-8">
        <form
          className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full mx-2"
          onSubmit={(e) => {
            e.preventDefault();
            // searchData();
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
        {searchResults ? (
          <p className="text-white block text-center search-results">
            {data.length}
          </p>
        ) : (
          ''
        )}
      </div>
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
              {data.map((char) => (
                <div className="card rounded-lg relative" key={char.name}>
                  <h3
                    className={`background-${char.eye_color.replace(
                      /,/g,
                      ' '
                    )} card-title px-1 text-2xl lg:text-lg m-0 font-semibold border-b-3 whitespace-nowrap`}
                  >
                    {char.name}
                  </h3>
                  <img
                    src={StarWarsLogo}
                    alt={char.name}
                    className="w-full mx-auto object-contain h-48"
                  />

                  <div className="text-xs flex justify-center p-1 text-black bg-yellow">
                    <span className="mr-1 p-1 px-2 font-semibold">
                      Mass: {char.mass}
                    </span>
                    <span className="mr-1 p-1 px-2 font-semibold border-l border-gray-400">
                      Height: {char.height}
                    </span>
                    <span className="mr-1 p-1 px-2 font-semibold border-l border-gray-400">
                      Birth Year: {char.birth_year}
                    </span>
                  </div>

                  <div className="card-inner h-auto flex flex-col px-1 py-3">
                    <p>
                      <span className="text-sm badge bg-red text-white rounded py-1 px-2 mx-4 border-gray-400 mb-2">
                        {char.homeworld}
                      </span>
                    </p>
                    <ul className="px-4">
                      <li className="my-1 mx-0">
                        Hair Color: {char.hair_color}
                      </li>
                      <li className="my-1 mx-0">
                        Skin Color: {char.skin_color}
                      </li>
                      <li className="my-1 mx-0">Eye Color: {char.eye_color}</li>
                      <li className="my-1 mx-0">Gender: {char.gender}</li>
                      {/* <li className="my-1 mx-0">{char.vehicles}</li>
                      <li className="my-1 mx-0">{char.starships}</li>
                      <li className="my-1 mx-0">{char.films}</li> */}
                      <li className="my-1 mx-0">Species: {char.species}</li>
                      {/* <li className="my-1 mx-0">{char.created}</li>
                      <li className="my-1 mx-0">{char.edited}</li> */}
                      <li className="my-1 mx-0">{char.url}</li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
