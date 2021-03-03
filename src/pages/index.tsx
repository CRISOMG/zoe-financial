import { useRouter } from 'next/router';
import { useContext } from 'react';

import { incomeContext } from '../store';
import { useIncomeInput } from '../hooks';
import Header from '../components/Header';

export default function Home() {
  const { setIncome } = useContext(incomeContext);
  const { incomeValue, incomeInput, handleIncomeInput } = useIncomeInput();
  const router = useRouter();

  const handleIncome = (ev) => {
    ev.preventDefault();
    setIncome(incomeValue);
    router.push('/matches');
  };

  return (
    <div className='h-screen'>
      <Header />
      <main className='flex flex-col items-center justify-center'>
        <div className='mt-16 mb-4'>
          <img className='w-24' src='/social-icon.png' alt='social icon' />
        </div>
        <h2 className='text-3xl text-gray-800 font-bold'>Find the best agent for you!</h2>
        <p className='mt-4 mb-8 text-sm text-gray-700'>Fill the information below to get your matches</p>
        <div className='flex flex-col'>
          <form onSubmit={handleIncome}>
            <label className='flex flex-col text-sm text-gray-600'>
              Current income
              <input className='relative border-2 border-gray-400 rounded p-2 pl-4' value={incomeValue} ref={incomeInput} onChange={handleIncomeInput} type='number' min='0' max='1000000000000' name='income' />
              <div className='absolute text-lg mt-6 ml-2'>
                <b>$</b>
              </div>
            </label>
            <div className='flex justify-end mt-4'>
              <button className='border-4 border-blue-600 px-2 py-1 rounded bg-blue-600 text-white font-bold' onClick={handleIncome}>
                Get matches {'>'}
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
