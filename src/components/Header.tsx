import Head from 'next/head';

export default function Header() {
  return (
    <div>
      <Head>
        <title>ZOE</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header className='bg-gray-100'>
        <img className='p-4' src='/zoe.png' alt='zoe logo' />
      </header>
    </div>
  );
}
