import axios from 'axios';
import { useState } from 'react';
import { FetchState, PostData } from '../../types';

export function useGetAllData() {
  const [fetchState, setFetchState] = useState(FetchState.DEFAULT);

  const [allData, setAllData] = useState<Array<PostData>>([]);

  const getAllData = async () => {
    try {
      setFetchState(FetchState.LOADING);

      const promise = Promise.allSettled([
        await axios.get('https://swapi.dev/api/people/'),
        await axios.get('https://swapi.dev/api/planets/'),
      ]);

      const [starWarsPeople, starWarsPlanets] = await promise;

      const peopleData = starWarsPeople.value.data.results;
      const planetsData = starWarsPlanets.value.data.results;

      {
        peopleData.map((person) => {
          const planet = planetsData.find(
            (planet) => planet.url === person.homeworld
          );
          person.homeworld = Object.assign([], planet);
        });
      }

      setAllData(peopleData);
      setFetchState(FetchState.SUCCESS);

      console.log(allData);
    } catch (err) {
      setFetchState(FetchState.ERROR);
      console.log(err);
    }
  };

  return [allData, fetchState, getAllData];
}
