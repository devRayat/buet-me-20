import '../styles/globals.css'
import type { AppProps } from 'next/app'

import CustomLink from '../components/common/link'



function MyApp({ Component, pageProps }: AppProps) {
  return <main className='relative'>
    <nav className="navbar px-16 absolute inset-x-0 z-50">
      <div className='navbar-start'>
        <div className='prose-h3:leading-none prose-h3:m-0'>
          <h3>ME</h3>
          <h3>XX</h3>
        </div>
      </div>
      <div className='navbar-end'>
        <ul className="flex gap-6">
          <li>
            <CustomLink href="/">
              Home
            </CustomLink>
          </li>
          <li>
            <CustomLink href="/achievements">
              Achievements
            </CustomLink>
          </li>
          <li>
            <a
              href="https://buetme19.com/the-machine/"
              target="_blank"
              rel="noopener noreferrer"
            >
              The Machine
            </a>
          </li>
        </ul>
      </div>
    </nav>
    <Component {...pageProps} />
    <footer className='flex flex-col justify-center items-center fixed bottom-0 inset-x-0'>
      <h4>&copy; COPYRIGHT 2022 - BUET&apos;XX</h4>
      <h4>Developed by <span className='text-red-500'>Zul Ikram musaddik Rayat</span></h4>
    </footer>
  </main>
}

export default MyApp
