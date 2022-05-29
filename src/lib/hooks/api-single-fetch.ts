import axios from 'axios';
import { useState } from 'react';
import { PostData } from '../../types';

export function useSingleFetch() {
  const [singleFetchData, setSingleFetchData] = useState<Array<PostData>>([]);

  const getSingleFetchData = async (url) => {
    try {
      const promise = Promise.allSettled([await axios.get(url)]);

      const [starWarsPeople] = await promise;

      const peopleData = starWarsPeople.value.data.results;

      setSingleFetchData(peopleData);
    } catch (err) {
      console.log(err);
    }
  };

  return [singleFetchData, getSingleFetchData];
}
