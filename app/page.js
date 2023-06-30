import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css'

export const metadata = {
  title: 'Raymund | Home',
};

export default function Home() {
  return (
    <main className='flex items-center gap-100'>
      <section className='flex-1 flex-col gap-6'>
        <h1 className='text-slarge font-bold bg-gradient-to-b from-green-700 to-gray-300 text-transparent bg-clip-text-6xl bg-gradient-to-b from-green-700 to-gray-300 text-transparent bg-clip-text '>Powerful Coding for Web Development</h1>
        <p className='text-lg font-bold pb-5'>Transform Your Ideas into Reality. Join our global tech teams.</p>
        <Link href='https://github.com/explore' className='w-72 px-5 py-3 cursor-pointer bg-green-500 hover:bg-green-600 rounded-lg text-white font-bold'>Join Us!</Link>
      </section>
      <div>
        <Image src="/page.png"
          alt='home image'
          width={500}
          height={500}
          className={styles.img}
        />
      </div>
    </main>
  );
}
