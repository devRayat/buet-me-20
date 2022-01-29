import '../styles/globals.css'
import type { AppProps } from 'next/app'

import CustomLink from '../components/common/link'



function MyApp({ Component, pageProps }: AppProps) {
  return <main>
    <nav className="flex justify-between px-12 py-6 bg-gray-100 fixed top-0 inset-x-0">
      <div>
        <h2>MEXX</h2>
      </div>
      <div>
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
    <footer className='flex flex-col justify-center items-center'>
      <h4>&copy; COPYRIGHT 2022 - BUET&apos;XX</h4>
      <h4>Developed by <span className='text-red-500'>Zul Ikram musaddik Rayat</span></h4>
    </footer>
  </main>
}

export default MyApp
