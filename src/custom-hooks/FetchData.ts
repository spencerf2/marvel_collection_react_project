import React, { useState, useEffect } from 'react';
import { server_calls } from '../api';

export const useGetData = () => {
  const [marvelData, setData] = useState<any>([]);

  async function handleDataFetch() {
    const result = await server_calls.get();
    setData(result)
  }

  // Introducing the useEffect Hook to add our data to react State, use effect is an extra thing that happens after another thing happens
  useEffect(() => {
    handleDataFetch();
  }, [])

  return { marvelData, getData: handleDataFetch }
}