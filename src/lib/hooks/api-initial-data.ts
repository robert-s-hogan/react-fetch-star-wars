import axios from 'axios';
import { useState } from 'react';
import { FetchState, PostData } from '../../types';

export function useInitialData() {
  const [fetchState, setFetchState] = useState(FetchState.DEFAULT);

  const [initialData, setInitialData] = useState<Array<PostData>>([]);

  const getInitialData = async () => {
    try {
      setFetchState(FetchState.LOADING);

      const promise = Promise.allSettled([
        await axios.get('https://swapi.dev/api/people/'),
      ]);

      const [starWarsPeople] = await promise;

      const peopleData = starWarsPeople.value.data.results;

      {
        peopleData.map((person) => {
          const cleanedSkinColor = person.skin_color.replace(/, /g, '-');
          person.skin_color = cleanedSkinColor;
          const cleanedHairColor = person.hair_color.replace(/, /g, '-');
          person.hair_color = cleanedHairColor;
        });
      }
      // console.log(allData);
      setInitialData(peopleData);
      setFetchState(FetchState.SUCCESS);
    } catch (err) {
      setFetchState(FetchState.ERROR);
      console.log(err);
    }
  };

  return [initialData, fetchState, getInitialData];
}
