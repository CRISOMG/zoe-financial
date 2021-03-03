import { useContext } from 'react';

import Header from '../components/Header';

import { incomeContext } from '../store';

export default function Matches() {
  const { income } = useContext(incomeContext);

  return (
    <div className='h-screen'>
      <Header />
      <main className='flex flex-col items-center'>
        <div className='text-center '>
          <p className='mt-4 text-2xl font-bold'>Your Matches</p>
          <p>
            Your income: <b>${income}</b>
          </p>
        </div>
        <div className='w-3/5'>
          <label className='flex flex-col w-2/5 '>
            Order agent by
            <input className='p-2 border-2 rounded' type='select' placeholder='Select...' />
          </label>
          <div>{/* matches profile carts */}</div>
        </div>
      </main>
    </div>
  );
}
