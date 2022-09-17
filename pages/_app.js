import '../styles/globals.css'
import Link from 'next/link'

function Marketplace({ Component, pageProps }) {
  return (
    <div className='navbar'>
      <nav className="border-b p-6">
        <img
              src="/anonymerch_logo.png"
              width="300"
              height="120"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
        <div className="flex mt-4">
          <Link href="/">
            <a className="mr-4 text-pink-500">
              Home
            </a>
          </Link>
          <Link href="/create-item">
            <a className="mr-6 text-pink-500">
              Sell Merch
            </a>
          </Link>
          <Link href="/my-merch">
            <a className="mr-6 text-pink-500">
              My Merch
            </a>
          </Link>
          <Link href="/creator-dashboard">
            <a className="mr-6 text-pink-500">
              Dashboard
            </a>
          </Link>
        </div>
      </nav>
      <Component {...pageProps} />
      <br></br>
      <footer className='footer1'>Circle Merch - ETHB3RLIN 2022 👚👔👕👖</footer>
    </div>
  )
}
export default Marketplace
