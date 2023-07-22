import React, { createContext, useState } from 'react';

export const ArticleContext = createContext();

export const ArticleProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]); // Initialize data3 with an empty array
  const [data4, setData4] = useState([]); // Initialize data4 with an empty array
  const [data5, setData5] = useState([]); // Initialize data5 with an empty array

  return (
    <ArticleContext.Provider value={{ data, setData, data2, setData2, data3, setData3, data4, setData4, data5, setData5 }}>
      {children}
    </ArticleContext.Provider>
  );
};
