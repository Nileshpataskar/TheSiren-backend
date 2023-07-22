import React, { createContext, useState } from 'react';

export const ArticleContext = createContext();

export const ArticleProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);

  return (
    <ArticleContext.Provider value={{ data, setData, data2, setData2 }}>
      {children}
    </ArticleContext.Provider>
  );
};
