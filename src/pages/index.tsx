import Head from 'next/head';

export default function Home() {
  return (
    <div className='h-screen'>
      <Head>
        <title>ZOE</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header className='bg-gray-100'>
        <img className='p-4' src='/zoe.png' alt='zoe logo' />
      </header>
      <section className='flex flex-col items-center justify-center'>
        <div className='mt-16 mb-4'>
          <img className='w-24' src='/social-icon.png' alt='social icon' />
        </div>
        <h2 className='text-3xl text-gray-800 font-bold'>Find the best agent for you!</h2>
        <p className='mt-4 mb-8 text-sm text-gray-700'>Fill the information below to get your matches</p>
        <div className='flex flex-col'>
          <label htmlFor='income-input' className='text-sm text-gray-600'>
            Current income
          </label>
          <div className='border-2 border-gray-400 rounded p-2'>
            <span className='font-bold'>$</span>
            <input className='outline-none' type='number' name='income-input' id='income-input' />
          </div>
          <div className='flex justify-end mt-4'>
            <button className='border-4 border-blue-600 px-2 py-1 rounded bg-blue-600 text-white font-bold focus:outline-none focus:bg-blue-500'>Get matches {'>'}</button>
          </div>
        </div>
      </section>
    </div>
  );
}
