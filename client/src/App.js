import React, { createContext } from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Country from './components/Country';
import useCountries from './hooks/useCountries';

export const AppContext = createContext();

export default function App() {
  const {
    countries,
    setFilterName,
    filteredCountries,
    handleOnBack,
    loading
  } = useCountries();

  return (
    <AppContext.Provider dir="rtl" value={{
      countries,
      setFilterName,
      filteredCountries,
      handleOnBack,
      loading
    }}>
      <Router>
        <div dir="rtl">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/country/:countryName" element={<Country />} />
          </Routes>
        </div>
      </Router>
    </AppContext.Provider>
  );
}
