import { useState } from 'react';

import '../styles/globals.css';
import 'tailwindcss/tailwind.css';

import { incomeContext } from '../store';

function MyApp({ Component, pageProps }) {
  const [income, setIncome] = useState(0);

  return (
    <incomeContext.Provider value={{ income, setIncome }}>
      <Component {...pageProps} />
    </incomeContext.Provider>
  );
}

export default MyApp;
