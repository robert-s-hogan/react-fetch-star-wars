import axios from 'axios';
import { useState } from 'react';
import { FetchState, PostData } from '../types';

export function useGetPosts() {
  const [fetchState, setFetchState] = useState(FetchState.DEFAULT);
  const [data, setData] = useState<Array<PostData>>([]);
  const getPosts = async () => {
    try {
      setFetchState(FetchState.LOADING);
      const res = await axios.get('https://swapi.dev/api/people/?page=1');
      const resData = res.data as Array<PostData>;

      setData(resData.results);
      setFetchState(FetchState.SUCCESS);
    } catch (err) {
      setFetchState(FetchState.ERROR);
    }
  };

  return [data, fetchState, getPosts];
}
