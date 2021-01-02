import Head from 'next/head';

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Zoe</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <header className='bg-gray-100'>
          <div className='relative top-3 ml-4 p-4 w-min text-center'>
            <h2 className='text-4xl text-gray-500 tracking-widest'>ZOE</h2>
            <small className='relative bottom-3 font-sans text-gray-400 tracking-widest'>FINANCIAL</small>
          </div>
        </header>
      </main>
    </div>
  );
}
